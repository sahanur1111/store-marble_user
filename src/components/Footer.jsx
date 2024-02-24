import React from "react";
import { FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <footer
        className="footer xl:px-24 py10
         px-4 text-base-content"
      >
        <aside>
          <img src="/logo_hazif1.png" />
          <p className="my-5 md:w-40">
            <p className="font-bold">
            Hazi Marbel House ❤️.
            </p>
            <hr />
            Providing reliable tech since<scan className="font-bold text-orange-500"> 2019 </scan>.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>

      <hr />

      <footer className="footer items-center xl:px-24 py-4 px-4 ">
        <aside className="items-center grid-flow-col">
          <p>Copyright © 2024 - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a
            href="https://www.facebook.com/hazimarble"
            className="cursor-pointer"
          >
            <FaInstagram className="w-5 h-5 text-pink-700" />
          </a>
          <a
            href="https://www.facebook.com/hazimarble"
            className="cursor-pointer"
          >
            <LuFacebook className="w-5 h-5 text-blue-500" />
          </a>
          <a
            href="https://www.facebook.com/hazimarble"
            className="cursor-pointer"
          >
            <AiOutlineYoutube className="w-5 h-5 text-red" />
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
