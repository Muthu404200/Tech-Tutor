import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu";
import RegistrationPopup from "./RegistrationPopup";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="sticky top-0 z-50 bg-white shadow-sm"
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-4">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            <img src={logo} alt="Tech" className="w-10 h-10" />
            <div>
              <p className="text-lg font-bold text-primary">Tech Tutor</p>
              <p className="text-xs text-gray-500">IT Computer Education</p>
            </div>
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex gap-8">
            {["Home","About","Courses",'Gallery'].map((item) => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-secondary font-medium"
                    : "text-gray-600 hover:text-secondary"
                }
              >
                {item}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <button onClick={() => setPopupOpen(true)} className="cursor-pointer rounded-full bg-secondary px-5 py-1
                  text-sm font-semibold text-white
                  hover:bg-primary transition
                  group/button relative inline-flex items-center justify-center overflow-hidden backdrop-blur-lg duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20 ">
                <span className="text-lg">Enroll</span>
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                  <div className="relative h-full w-10 bg-white/20" />
                </div>
              </button>
          </div>

          {/* MOBILE ICON TOGGLE */}
          <button
            className="lg:hidden text-3xl text-primary"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </motion.header>

      <ResponsiveMenu
        isOpen={menuOpen}
        closeMenu={() => setMenuOpen(false)}
      />

      <RegistrationPopup
        isOpen={popupOpen}
        closePopup={() => setPopupOpen(false)}
      />
    </>
  );
};

export default Navbar;
