import { motion } from "framer-motion";
import Testimonials from "./Testimonials";
import MissionSection from "./MissionSection";
import Instructors from "./Instructors";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutSection = () => {
  return (
    <section className="bg-white text-gray-800">

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div variants={container} initial="hidden" animate="show">

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            About <span className="text-secondary">Tech Tutor</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Where personalized learning meets expert mentorship to shape your academic and career success.
          </motion.p>

        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >

          {/* Text */}
          <motion.div
            variants={fadeUp}
            className="bg-white border border-gray-200 
                       p-8 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-3xl font-bold mb-6">
              Our <span className="text-secondary">Story</span>
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Tech Tutor was founded with a mission to make high-quality education
              accessible, practical, and result-oriented.
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed">
              We focus on real-world skills, expert mentorship, and structured
              learning paths that help students achieve career success faster.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our approach blends technology with personalized teaching to ensure
              every student reaches their full potential.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div variants={fadeUp} className="relative group">
            <img
              src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?auto=format&fit=crop&w=1000&q=80"
              alt="Learning"
              className="rounded-2xl shadow-md w-full object-cover"
            />

            {/* Light Hover Effect */}
            <div className="absolute inset-0 rounded-2xl 
                            bg-[#C9A24D]/10 opacity-0 
                            group-hover:opacity-100 transition duration-300" />
          </motion.div>

        </motion.div>
      </div>

      <Instructors />
      <Testimonials />
    </section>

  );
};

export default AboutSection;