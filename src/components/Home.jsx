import HeroImg from "../assets/images/Coding workshop-pana.svg";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideRight } from "../utility/animation";
import NumberCounter from "./NumberCounter";
import ContactPopup from "./RegistrationPopup";
import { useState, useEffect } from "react";
import MissionSection from "./MissionSection";
import Testimonials from "./Testimonials";

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);

  // ✅ Auto open popup after 5 sec (only once per session)
  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("popupShown");

    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem("popupShown", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <main>
      <section className="relative overflow-hidden">
        <div
          className="
          container mx-auto px-4 md:px-20
          grid grid-cols-1 md:grid-cols-2
          min-h-[85vh] md:min-h-[650px]
          items-center
        "
        >
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center py-12 md:py-0 md:pr-12 xl:pr-32">
            <div className="text-center md:text-left space-y-6">

              <motion.p
                variants={SlideRight(0.2)}
                initial="hidden"
                animate="visible"
                className="text-sm tracking-wide uppercase font-semibold text-secondary"
              >
                100% Satisfaction Guarantee
              </motion.p>

              <motion.h1
                variants={SlideRight(0.4)}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-primary"
              >
                Find the Right Tutor for Your{" "}
                <span className="text-secondary">Learning Goals</span>
              </motion.h1>

              <motion.p
                variants={SlideRight(0.6)}
                initial="hidden"
                animate="visible"
                className="text-gray-600 max-w-xl mx-auto md:mx-0"
              >
                We connect students with qualified tutors for effective 1-on-1 learning.
                Our platform is secure, reliable, and completely free to use.
                Every session is tailored to individual goals, skills, and academic needs.
              </motion.p>

              {/* Social Links */}
              <motion.div
                variants={SlideRight(0.8)}
                initial="hidden"
                animate="visible"
                className="mt-8 flex gap-4 justify-center md:justify-start"
              >
                {[FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full 
                               bg-secondary/10 text-secondary border border-secondary/20
                               transition-all duration-300 hover:bg-primary hover:text-white hover:-translate-y-1"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </motion.div>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex items-center justify-center mt-10 md:mt-0">
            <motion.img
              initial={{ opacity: 0, x: 120 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              src={HeroImg}
              alt="Tech Tutor Learning Platform"
              className="w-[220px] sm:w-[300px] md:w-[420px] lg:w-[520px] xl:w-[640px] object-contain"
            />
          </div>
        </div>
      </section>

      <NumberCounter />
      <MissionSection />
      <Testimonials />

      {/* ✅ Popup */}
      <ContactPopup
        isOpen={showPopup}
        closePopup={() => setShowPopup(false)}
      />
    </main>
  );
};

export default Hero;