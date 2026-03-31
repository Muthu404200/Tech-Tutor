import { motion, AnimatePresence } from "framer-motion";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const ContactPopup = ({ isOpen, closePopup }) => {
  const [message, setMessage] = useState("");

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="
              relative w-full max-w-md sm:max-w-lg
              rounded-2xl bg-white
              p-6 sm:p-8
              shadow-2xl
            "
            initial={{ scale: 0.9, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 30, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="
                absolute top-4 right-4
                text-2xl text-gray-500
                hover:text-secondary
                transition
              "
              aria-label="Close enquiry form"
            >
              <MdClose />
            </button>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-1">
              Send Enquiry By Email
            </h2>

            <p className="text-sm text-gray-500 mb-6">
              To – TECH TUTOR IT EDUCATION INSTITUTE
            </p>

            {/* Form */}
            <form className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Name*
                </label>
                <input
                  type="text"
                  className="
                    w-full border-b border-gray-300
                    bg-transparent
                    px-1 py-2 text-sm
                    focus:border-secondary
                    outline-none transition
                  "
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Mobile No.*
                </label>
                <input
                  type="tel"
                  className="
                    w-full border-b border-gray-300
                    bg-transparent
                    px-1 py-2 text-sm
                    focus:border-secondary
                    outline-none transition
                  "
                />
                <p className="text-xs text-gray-400 mt-1">
                  Only India Numbers SMS to mobile is FREE
                </p>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Email ID*
                </label>
                <input
                  type="email"
                  className="
                    w-full border-b border-gray-300
                    bg-transparent
                    px-1 py-2 text-sm
                    focus:border-secondary
                    outline-none transition
                  "
                />
              </div>

              {/* Body */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Body*
                </label>
                <textarea
                  maxLength={500}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="
                    w-full rounded-lg border border-gray-300
                    px-3 py-2 text-sm
                    h-28 sm:h-32 resize-none
                    focus:border-secondary
                    outline-none transition
                  "
                />
                <div className="flex justify-between items-center mt-2 text-xs text-gray-400">
                  <span>* Indicates mandatory fields</span>
                  <span>{message.length} / 500</span>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="
                  w-full rounded-lg
                  bg-secondary py-3 text-sm font-semibold text-white
                  hover:bg-primary transition
                "
              >
                Send
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup;
