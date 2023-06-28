import React from "react";
import { useState, useEffect } from "react";
import Logo from "../../public/logo.png";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { navigation } from "../Data";
import NavMobile from "./NavMobile";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [bg, setbg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setbg(true) : setbg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? "bg-primary py-4 lg:py-6 " : "bg-none"
      } top-0 left-0 w-full py-8 z-10 transition-all duration-200`}
    >
      <div className="container mx-auto md:flex justify-between items-center">
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={Logo} alt="" className="w-14 h-8 lg:h-10 " />
          </a>

          <div
            onClick={() => setMobileNav(!mobileNav)}
            className="text-2xl text-white md:hidden lg:text-3xl cursor-pointer"
          >
            {mobileNav ? <CgClose /> : <CgMenuRight />}
          </div>
        </div>

        <nav className="hidden md:flex">
          <ul className="md:flex md:gap-x-12 ">
            {navigation.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                  to={item.link}
                    className="capitalize text-primary hover:border-b transition-all"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-6 hidden md:flex">
          <Link className="hover:text-black transition text-primary" to="">
            Log in
          </Link>
          <Link
            className="bg-primary text-white px-4 py-3 rounded-lg transition"
            to=""
          >
            Sign up
          </Link>
        </div>

        <div
          className={`${
            mobileNav ? "left-0" : "left-full"
          } md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all `}
        >
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
