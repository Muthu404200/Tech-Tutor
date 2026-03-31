import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // start fade-out a bit earlier
    const fadeTimer = setTimeout(() => setVisible(false), 4200);
    const redirectTimer = setTimeout(() => {
      window.location.href = "/home";
    }, 5000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(redirectTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Spinner */}
          <motion.div
            className="
              flex items-center justify-center rounded-full
              w-28 h-28
              sm:w-32 sm:h-32
              md:w-40 md:h-40
              border-[10px] sm:border-[12px] md:border-[14px]
              border-gray-200 border-t-primary
              shadow-lg
            "
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
          >
            {/* Logo */}
            <motion.img
              src={logo}
              alt="Tech Tutor"
              className="
                object-contain
                w-18 h-18
                sm:w-20 sm:h-20
                md:w-36 md:h-36
              "
              animate={{
                rotate: -360,
                scale: [1, 1.06, 1],
              }}
              transition={{
                rotate: { repeat: Infinity, duration: 1.8, ease: "linear" },
                scale: { repeat: Infinity, duration: 2.4, ease: "easeInOut" },
              }}
            />
          </motion.div>

          {/* Brand Text */}
          <motion.p
            className="mt-8 text-sm sm:text-base text-gray-600 tracking-wide"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Preparing your learning space…
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
