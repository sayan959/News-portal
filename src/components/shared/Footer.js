import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
  faLinkedinIn,
  faTwitterSquare,
  faWhatsappSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";

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

const Footer = () => {
  return (
    <div className="bg-black text-white px-2 py-6 md:p-12 ">
      <div className="flex justify-center pt-10">
        <FontAwesomeIcon className="w-5 h-5 ml-5" icon={faFacebookSquare} />
        <FontAwesomeIcon className="w-5 h-5 ml-5" icon={faLinkedin} />
        <FontAwesomeIcon className="w-5 h-5 ml-5" icon={faYoutubeSquare} />
        <FontAwesomeIcon className="w-5 h-5 ml-5" icon={faTwitterSquare} />
        <FontAwesomeIcon className="w-5 h-5 ml-5" icon={faWhatsappSquare} />
      </div>

      <div className="flex justify-center m-2">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link className="uppercase" href={item.path}>
                {item.route}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center text-sm md:text-xl text-neutral-400">
        <p>@2024 The News Portal. Design by Developer Sayan Biswas</p>
      </div>
    </div>
  );
};

export default Footer;
