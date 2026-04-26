import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import RegistrationPopup from "./RegistrationPopup";

const menuItems = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Courses", link: "/courses" },
  { title: "Gallery", link: "/gallery" },
  { title: "Contact", link: "/contact" },
];

const ResponsiveMenu = ({ isOpen, closeMenu }) => {
  const [popupOpen, setPopupOpen] = useState(false);
  // ✅ Close on ESC key
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") closeMenu();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, closeMenu]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-white text-black"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={closeMenu} // ✅ click outside to close
        >
          {/* STOP click propagation inside menu */}
          <div
            className="flex flex-col items-center justify-center h-full gap-8 text-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {menuItems.map((item, i) => (
              <NavLink
                key={i}
                to={item.link}
                onClick={closeMenu}
                className="hover:text-secondary transition"
              >
                {item.title}
              </NavLink>
            ))}


            <button
              onClick={() => setPopupOpen(true)}
              className="rounded-full bg-secondary px-6 py-2 text-sm font-semibold text-white hover:bg-primary transition"
            >
              Register
            </button>
          </div>
        </motion.div>
      )}

      <RegistrationPopup
        isOpen={popupOpen}
        closePopup={() => setPopupOpen(false)}
      />
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
