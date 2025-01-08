import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/newsLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faLinkedin, faLinkedinIn, faTwitterSquare, faWhatsappSquare, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import Header from "./Header";




const navItems = [
  {
    route: "Home",
    path: "/",
  },
  // {
  //   route: "Pages",
  //   path: "/pages",
  // },
  {
    route: "Categories",
    path: "/categories/news?category=all-news",
  },
  {
    route: "About",
    path: "/about",
  },
  {
    route: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  return (
    <div>
      <Header></Header>
      <div className="navbar bg-black text-white px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link className="uppercase" href={item.path}>{item.route}</Link>
                </li>
                
              ))}
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl p-0">
            <Image src={logo} className="w-20 h-8 md:w-24 md:h-12 my-auto bg-white rounded-md" alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link className="uppercase" href={item.path}>{item.route}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
        <FontAwesomeIcon className="w-5 h-5 ml-5" icon={faFacebookSquare} />
        <FontAwesomeIcon className="w-5 h-5 ml-5" icon={faLinkedin} />
        <FontAwesomeIcon className="w-5 h-5 ml-5" icon={faYoutubeSquare} />
        <FontAwesomeIcon className="w-5 h-5 ml-5" icon={faTwitterSquare} />
        <FontAwesomeIcon className="w-5 h-5 ml-5" icon={faWhatsappSquare} />

        </div>
      </div>
    </div>
  );
};

export default Navbar;
