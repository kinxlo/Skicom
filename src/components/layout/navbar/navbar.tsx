"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import Image from "next/image";
import Link from "next/link";
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
  const [active, setActive] = useState<string>("/");
  const [isOpen, setOpen] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);

  const handleClick = (item: string) => {
    setActive(item);
  };

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
    <main className="">
      <section
        className={`navbar-container fixed left-0 right-0 z-20 mx-auto flex h-[65px] items-center justify-between bg-white px-5 shadow-md 2xl:container xl:mx-auto ${isBlurred ? "xl:mt-0" : "duration-300 xl:mt-5"} xl:w-11/12 xl:rounded-full`}
      >
        <section>
          <Link href={"/"} onClick={handleNavbarClose}>
            <Image src={Logo} alt={"Skicom-logo"} height={50} />
          </Link>
        </section>

        <section className="navbar hidden xl:block">
          <ul
            className={`nav-list flex items-center gap-7 text-sm font-semibold`}
          >
            <li>
              <Link
                href={"/"}
                className={`nav-item ${active === "/" ? "active" : ""} ${active === "/" ? "text-[#007CC3]" : ""}`}
                onClick={() => handleClick("/")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/about"}
                className={`nav-item ${active === "/about" ? "active" : ""} ${active === "/about" ? "text-[#007CC3]" : ""}`}
                onClick={() => handleClick("/about")}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href={"/services"}
                className={`nav-item ${active === "services" ? "active" : ""} ${active === "services" ? "text-[#007CC3]" : ""}`}
                onClick={() => handleClick("services")}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className={`nav-item ${active === "stores" ? "active" : ""} ${active === "stores" ? "text-[#007CC3]" : ""}`}
                onClick={() => handleClick("stores")}
              >
                Stores
              </Link>
            </li>
            <li>
              <Link
                href={"/contact"}
                className={`nav-item ${active === "contact" ? "active" : ""} ${active === "contact" ? "text-[#007CC3]" : ""}`}
                onClick={() => handleClick("contact")}
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

          <Link href={"/register"} className="text-sm font-semibold">
            Sign Up
          </Link>

          <CustomButton variant="primary" className="rounded-full" size="lg">
            <Link href={"/login"}>Login</Link>
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
            <ul
              className={`nav-list flex flex-col items-center gap-7 text-sm font-semibold`}
            >
              <li onClick={handleNavbarClose}>
                <Link
                  href={"/"}
                  className={`nav-item ${active === "/" ? "active" : ""} ${active === "/" ? "text-[#007CC3]" : ""}`}
                  onClick={() => handleClick("/")}
                >
                  Home
                </Link>
              </li>
              <li onClick={handleNavbarClose}>
                <Link
                  href={"/about"}
                  className={`nav-item ${active === "/about" ? "active" : ""} ${active === "/about" ? "text-[#007CC3]" : ""}`}
                  onClick={() => handleClick("/about")}
                >
                  About Us
                </Link>
              </li>
              <li onClick={handleNavbarClose}>
                <Link
                  href={"/services"}
                  className={`nav-item ${active === "services" ? "active" : ""} ${active === "services" ? "text-[#007CC3]" : ""}`}
                  onClick={() => handleClick("services")}
                >
                  Services
                </Link>
              </li>
              <li onClick={handleNavbarClose}>
                <Link
                  href={"/"}
                  className={`nav-item ${active === "stores" ? "active" : ""} ${active === "stores" ? "text-[#007CC3]" : ""}`}
                  onClick={() => handleClick("stores")}
                >
                  Stores
                </Link>
              </li>
              <li onClick={handleNavbarClose}>
                <Link
                  href={"/contact"}
                  className={`nav-item ${active === "contact" ? "active" : ""} ${active === "contact" ? "text-[#007CC3]" : ""}`}
                  onClick={() => handleClick("contact")}
                >
                  Contact Us
                </Link>
              </li>

              <li className="mr-4">
                <div onClick={handleNavbarClose}>Search</div>
              </li>

              <li className="mr-4">
                <Link
                  href={"/register"}
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
                  <Link href={"/login"} onClick={handleNavbarClose}>
                    Login
                  </Link>
                </CustomButton>
              </li>
            </ul>
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Navbar;
