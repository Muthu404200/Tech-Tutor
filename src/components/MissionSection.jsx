import { motion } from "framer-motion";
import { FaLightbulb, FaShieldAlt, FaUserGraduate } from "react-icons/fa";

const features = [
  {
    icon: FaLightbulb,
    title: "Personalized Learning",
    desc: "Each session is designed to match the student's goals, skill level, and learning pace for maximum effectiveness.",
  },
  {
    icon: FaShieldAlt,
    title: "Safe & Reliable Platform",
    desc: "We ensure a secure and trustworthy environment where students can confidently learn with verified tutors.",
  },
  {
    icon: FaUserGraduate,
    title: "1-on-1 Expert Guidance",
    desc: "Connect with experienced tutors for focused mentoring and improved academic performance.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const MissionSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Our <span className="text-secondary">Mission</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-gray-600 leading-relaxed"
          >
            We connect students with qualified tutors for effective one-on-one learning.
            Our platform is secure, reliable, and completely free to use. Every session
            is tailored to individual goals, skills, and academic needs.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="bg-white p-7 rounded-2xl border border-gray-200 
                           shadow-sm hover:shadow-lg 
                           transition duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center 
                                rounded-lg bg-[#C9A24D]/10 text-secondary 
                                mb-5">
                  <Icon size={26} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default MissionSection;