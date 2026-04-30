import { motion, AnimatePresence } from "framer-motion";
import { MdClose } from "react-icons/md";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactPopup = ({ isOpen, closePopup }) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_b209vvi",     // 🔁 your service ID
        "template_jo0uoru",    // 🔁 your template ID
        form.current,
        "MHvrTZ-bIKuAgOkyg" // 🔁 your public key
      )
      .then(
        (result) => {
          console.log("SUCCESS:", result.text);
          setLoading(false);
          setSuccess(true);

          // reset form
          form.current.reset();
          setMessage("");

          // auto close after 2 sec
          setTimeout(() => {
            setSuccess(false);
            closePopup();
          }, 2000);
        },
        (error) => {
          console.error("ERROR:", error);
          setLoading(false);
          alert("❌ Failed: " + error.text);
        }
      );
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
            className="relative w-full max-w-md sm:max-w-lg rounded-3xl bg-white/90 backdrop-blur-lg p-8 shadow-[0_10px_40px_rgba(0,0,0,0.2)]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-red-500 transition"
            >
              <MdClose />
            </button>

            {/* Success Message */}
            {success ? (
              <div className="text-center py-10">
                <h2 className="text-2xl font-bold text-green-600">
                  ✅ Message Sent!
                </h2>
                <p className="text-gray-500 mt-2">
                  We’ll contact you soon.
                </p>
              </div>
            ) : (
              <>
                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-800">
                  Contact Us
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                  Send your enquiry to our team
                </p>

                {/* Form */}
                <form
                  ref={form}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Full Name"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  />

                  <input
                    type="tel"
                    name="user_phone"
                    placeholder="Mobile Number"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  />

                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email Address"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  />

                  <textarea
                    name="message"
                    maxLength={500}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message..."
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm h-28 resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                  />

                  <div className="flex justify-between text-xs text-gray-400">
                    <span>* Required</span>
                    <span>{message.length}/500</span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-gradient-to-r from-secondary to-secondary py-3 text-sm font-semibold text-white shadow-md hover:scale-105 active:scale-95 transition disabled:opacity-60"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup;