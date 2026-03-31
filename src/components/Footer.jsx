import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import FooterColumn from "./FooterColumn"
import logo from "../assets/logo.svg"
const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-14">
        {/* Main Grid */}
        <div className="grid gap-10 md:grid-cols-4">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold">
              <img src={logo} alt="logo" className="w-20 h-20" />
              <span className="text-xl text-red-600">Tech</span>
              <span className="text-xl text-secondary">Tutor</span>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              Tech Tutor IT Computer Education is committed to delivering
              industry-ready IT skills through expert-led training and
              practical learning.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 pt-3">
              <a className="social-icon" href="#" aria-label="Location Maps">
                <HiLocationMarker />
              </a>
              <a className="social-icon" href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a className="social-icon" href="#" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a className="social-icon" href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Links */}
          <FooterColumn
            title="Important Links"
            links={["Home", "About", "Courses", "Contact"]}
          />
          <FooterColumn
            title="Resources"
            links={["Gallery", "Blog", "FAQs", "Support"]}
          />
          <FooterColumn
            title="Company"
            links={["Careers", "Privacy Policy", "Terms", "Login"]}
          />
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-200" />

        {/* Copyright */}
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Global Tech Computer Education.  
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
