"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";

import CustomButton from "~/components/common/common-button/common-button";
import Logo from "../../../../public/images/logo/skicom.png";

import "./navbar.css";

import { Search } from "lucide-react";

const menuVariant = {
  initial: {
    y: -300,
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    y: -300,
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Navbar: FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  const router = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavbarClose = () => {
    setOpen(false);
  };

  return (
    <nav>
      <section
        className={`fixed left-0 right-0 z-20 mx-auto flex h-[95px] items-center justify-between bg-white px-5 shadow-md xl:mx-auto ${isBlurred ? "xl:mt-0" : "duration-300 xl:mt-5"} md:max-w-[1240px] xl:rounded-full`}
      >
        <section>
          <Link href={"/"} onClick={handleNavbarClose}>
            <Image src={Logo} alt={"Skicom-logo"} height={50} />
          </Link>
        </section>

        <section className="navbar hidden xl:block">
          <ul className="nav-list flex items-center gap-7 text-sm font-semibold">
            <li>
              <Link
                href="/"
                className={`nav-item ${router === "/" ? "active text-[#007CC3]" : ""}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`nav-item ${router === "/about" ? "active text-[#007CC3]" : ""}`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={`nav-item ${router === "/services" ? "active text-[#007CC3]" : ""}`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/stores"
                className={`nav-item ${router === "/stores" ? "active text-[#007CC3]" : ""}`}
              >
                Stores
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`nav-item ${router === "/contact" ? "active text-[#007CC3]" : ""}`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </section>

        <section className="hidden items-center gap-5 xl:flex">
          <button className="rounded-full border border-black p-1.5">
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
          <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
        </section>
      </section>

      <AnimatePresence>
        {isOpen && (
          // mobile navbar
          <motion.section
            className="navbar fixed z-20 mt-16 w-full shadow-md xl:hidden"
            variants={menuVariant}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <ul className="nav-list flex flex-col items-center gap-7 text-sm font-semibold">
              <li onClick={handleNavbarClose}>
                <Link
                  href="/"
                  className={`nav-item ${router === "/" ? "active text-[#007CC3]" : ""}`}
                >
                  Home
                </Link>
              </li>
              <li onClick={handleNavbarClose}>
                <Link
                  href="/about"
                  className={`nav-item ${router === "/about" ? "active text-[#007CC3]" : ""}`}
                >
                  About Us
                </Link>
              </li>
              <li onClick={handleNavbarClose}>
                <Link
                  href="/services"
                  className={`nav-item ${router === "/services" ? "active text-[#007CC3]" : ""}`}
                >
                  Services
                </Link>
              </li>
              <li onClick={handleNavbarClose}>
                <Link
                  href="/stores"
                  className={`nav-item ${router === "/stores" ? "active text-[#007CC3]" : ""}`}
                >
                  Stores
                </Link>
              </li>
              <li onClick={handleNavbarClose}>
                <Link
                  href="/contact"
                  className={`nav-item ${router === "/contact" ? "active text-[#007CC3]" : ""}`}
                >
                  Contact Us
                </Link>
              </li>

              <li className="mr-4">
                <div onClick={handleNavbarClose}>Search</div>
              </li>

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
                <CustomButton
                  variant="primary"
                  className="rounded-full"
                  size="lg"
                >
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
