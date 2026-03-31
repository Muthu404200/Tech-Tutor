import HeroImg from "../assets/images/Coding workshop-pana.svg";
import { FaFacebookF, FaInstagram,  FaWhatsapp , FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideRight } from "../utility/animation";
import NumberCounter from "./NumberCounter";
import Instructors from "./Instructors";

const Hero = () => {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="
          container mx-auto px-4 md:px-20
          grid grid-cols-1 md:grid-cols-2
          min-h-[85vh] md:min-h-[650px]
          items-center
        ">
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
                className="
                  text-4xl sm:text-5xl lg:text-6xl
                  font-bold leading-tight text-primary
                "
              >
                Find the Right Tutor for Your {" "}
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

              {/* BUTTONS */}
              <motion.div
                variants={SlideRight(0.8)}
                initial="hidden"
                animate="visible"
                className="
                  mt-8 flex flex-col sm:flex-row
                  gap-6 sm:gap-8
                  items-center justify-center md:justify-start
                "
              >

                
            {/* Social Links */}
<div className="flex space-x-3">
  <a
    href="#"
    aria-label="Facebook"
    className="
      w-10 h-10
      flex items-center justify-center
      rounded-full
      bg-secondary/10 text-secondary
      border border-secondary/20
      transition-all duration-300
      hover:bg-primary hover:text-white
      hover:-translate-y-1
    "
  >
    <FaFacebookF size={16} />
  </a>

  <a
    href="#"
    aria-label="Instagram"
    className="
      w-10 h-10
      flex items-center justify-center
      rounded-full
      bg-secondary/10 text-secondary
      border border-secondary/20
      transition-all duration-300
      hover:bg-primary hover:text-white
      hover:-translate-y-1
    "
  >
    <FaInstagram size={16} />
  </a>

  <a
    href="#"
    aria-label="WhatsApp"
    className="
      w-10 h-10
      flex items-center justify-center
      rounded-full
      bg-secondary/10 text-secondary
      border border-secondary/20
      transition-all duration-300
      hover:bg-primary hover:text-white
      hover:-translate-y-1
    "
  >
    <FaWhatsapp size={16} />
  </a>

  <a
    href="#"
    aria-label="YouTube"
    className="
      w-10 h-10
      flex items-center justify-center
      rounded-full
      bg-secondary/10 text-secondary
      border border-secondary/20
      transition-all duration-300
      hover:bg-primary hover:text-white
      hover:-translate-y-1
    "
  >
    <FaYoutube size={16} />
  </a>
</div>

{/* 
              <button className="cursor-pointer rounded-full bg-secondary px-8 py-3
                  text-sm font-semibold text-white
                  hover:bg-primary transition
                  group/button relative inline-flex items-center justify-center overflow-hidden backdrop-blur-lg duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20 ">
                <span className="text-lg">Contact</span>
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                  <div className="relative h-full w-10 bg-white/20" />
                </div>
              </button> */}

              </motion.div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex items-center justify-center mt-10 md:mt-0">
            <motion.img
              initial={{ opacity: 0, x: 120 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              src={HeroImg}
              alt="Tech Hero"
              className="
                w-[220px] sm:w-[300px]
                md:w-[420px]
                lg:w-[520px]
                xl:w-[640px]
                object-contain
              "
            />
          </div>
        </div>
      </section>
      <NumberCounter />
      <Instructors />
      
    </main>
  );
};

export default Hero;
