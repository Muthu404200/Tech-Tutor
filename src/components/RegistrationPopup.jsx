import { motion, AnimatePresence } from "framer-motion";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const ContactPopup = ({ isOpen, closePopup }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 You can connect backend / email here
    alert("Form Submitted Successfully!");

    closePopup();
  };

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
            className="relative w-full max-w-md sm:max-w-lg rounded-2xl bg-white p-6 sm:p-8 shadow-2xl"
            initial={{ scale: 0.9, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 30, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-secondary transition"
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
            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                placeholder="Name*"
                required
                className="w-full border-b border-gray-300 bg-transparent px-1 py-2 text-sm focus:border-secondary outline-none"
              />

              <input
                type="tel"
                placeholder="Mobile No.*"
                required
                className="w-full border-b border-gray-300 bg-transparent px-1 py-2 text-sm focus:border-secondary outline-none"
              />

              <input
                type="email"
                placeholder="Email ID*"
                required
                className="w-full border-b border-gray-300 bg-transparent px-1 py-2 text-sm focus:border-secondary outline-none"
              />

              <textarea
                maxLength={500}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message*"
                required
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm h-28 resize-none focus:border-secondary outline-none"
              />

              <div className="flex justify-between text-xs text-gray-400">
                <span>* Required</span>
                <span>{message.length}/500</span>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-secondary py-3 text-sm font-semibold text-white hover:bg-primary transition"
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