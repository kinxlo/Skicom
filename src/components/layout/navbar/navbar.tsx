"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import { FC, useEffect, useState } from "react";

import CustomButton from "~/components/common/common-button/common-button";
import Logo from "../../../../public/images/logo/skicom.png";

import "./navbar.css";

const menuVariant = {
  initial: {
    y: -300,
    opacity: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    y: -300,
    opacity: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const Navbar: FC = () => {
  const pathname = usePathname(); // Use usePathname to get the current route
  const [activePath, setActivePath] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);

  // Update active link based on the current route
  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => setIsBlurred(window.scrollY > 5);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavbarClose = () => setIsOpen(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/stores", label: "Stores" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav>
      <section
        className={`fixed left-0 right-0 z-20 flex h-[95px] items-center justify-between bg-white px-5 shadow-md xl:top-[1rem] ${isBlurred ? "xl:mt-0" : "duration-300"} mx-auto max-w-[1240px] xl:rounded-full`}
      >
        <Link href="/" onClick={handleNavbarClose}>
          <Image src={Logo} alt="Skicom Logo" height={50} />
        </Link>

        <section className="navbar hidden xl:block">
          <ul className="nav-list flex items-center gap-7 text-sm font-semibold">
            {links.map(({ path, label }) => (
              <li key={path}>
                <Link
                  href={path}
                  className={`nav-item ${activePath === path ? "active text-[#007CC3]" : ""}`}
                  onClick={handleNavbarClose}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="hidden items-center gap-5 xl:flex">
          <button
            className="rounded-full border border-black p-1.5"
            onClick={() => setIsOpen(true)}
          >
            <Search size={20} />
          </button>

          <Link href="/register" className="text-sm font-semibold">
            Sign Up
          </Link>

          <CustomButton
            href="/login"
            variant="primary"
            className="h-[46px] rounded-full"
            size="lg"
          >
            Login
          </CustomButton>
        </section>

        <section className="xl:hidden">
          <Hamburger toggled={isOpen} toggle={setIsOpen} size={24} />
        </section>
      </section>

      <AnimatePresence>
        {isOpen && (
          <motion.section
            className="navbar fixed z-20 mt-16 w-full shadow-md xl:hidden"
            variants={menuVariant}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <ul className="nav-list flex flex-col items-center gap-7 text-sm font-semibold">
              {links.map(({ path, label }) => (
                <li key={path} onClick={handleNavbarClose}>
                  <Link
                    href={path}
                    className={`nav-item ${activePath === path ? "active text-[#007CC3]" : ""}`}
                    onClick={() => setActivePath(path)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="mr-4">
                <Link
                  href="/register"
                  className="text-sm font-semibold"
                  onClick={handleNavbarClose}
                >
                  Sign Up
                </Link>
              </li>
              <li className="mr-4">
                <CustomButton variant="primary" className="rounded-full">
                  <Link href="/login" onClick={handleNavbarClose}>
                    Login
                  </Link>
                </CustomButton>
              </li>
            </ul>
          </motion.section>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
