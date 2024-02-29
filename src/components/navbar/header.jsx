import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.svg";
import { Link, Element, Events, animateScroll as scroll } from "react-scroll";
import Dropdown from "./dropdown/Dropdown";
import Hamburger from "./Hamburger";

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Change the condition to scroll halfway through the hero section
      const shouldHide = currentScrollPos > window.innerHeight / 8;

      setVisible(
        prevScrollPos > currentScrollPos || currentScrollPos < 10 || !shouldHide
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <header
      className={`sticky top-0 left-0 shadow-sm right-0 z-50 transition-transform duration-700 ${
        visible ? "" : " -translate-y-full"
      }`}
    >
      <nav class="bg-white border-gray-200 px-4 lg:px-6 py-3 dark:bg-black">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex ">
            <a href="/" class="flex items-center">
              <img
                src={logo}
                class="mr-3 h-12 sm:h-16 lg:h-20"
                alt="jgi logo"
              />
            </a>
            <div className=" lg:hidden absolute top-4 right-3 sm:top-7">
              <Hamburger />
            </div>
          </div>
          <div class=" hidden lg:flex items-center lg:order-2">
            <button>
              <a
                href="#"
                class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-base md:text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-500 dark:hover:bg-primary-600 focus:outline-none dark:focus:ring-primary-700"
              >
                Become a Dealer
              </a>
            </button>
          </div>
          <div
            class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 text-base md:text-lg">
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {<Dropdown />}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Element name="top" />
    </header>
  );
}

export default Header;
