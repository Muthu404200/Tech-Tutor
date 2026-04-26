import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Arun Kumar",
    role: "Full Stack Student",
    image: "https://i.pravatar.cc/100?img=1",
    content:
      "The teaching quality is excellent. I learned Web Development from scratch and now I can build real projects confidently.",
  },
  {
    id: 2,
    name: "Priya",
    role: "Accounting Student",
    image: "https://i.pravatar.cc/100?img=5",
    content:
      "Best institute for Tally and Accounting. Trainers explain concepts clearly with practical examples.",
  },
  {
    id: 3,
    name: "Karthik",
    role: "UI/UX Designer",
    image: "https://i.pravatar.cc/100?img=3",
    content:
      "UI/UX course helped me improve my design skills. Now I can design modern apps and websites professionally.",
  },
];

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
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Testimonials = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.p variants={fadeUp} className="text-gray-500">
            Trusted by 2,000+ Students
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mt-3 text-3xl md:text-5xl font-bold"
          >
            What Our <span className="text-secondary">Students Say</span>
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="bg-white border border-gray-200 
                         rounded-xl p-6 shadow-md 
                         hover:shadow-xl hover:border-secondary 
                         transition duration-300"
            >
              {/* Stars */}
              <div className="text-secondary text-sm">
                ★★★★★
              </div>

              {/* Content */}
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                {item.content}
              </p>

              {/* User */}
              <div className="flex items-center mt-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border border-gray-200"
                />

                <div className="ml-3">
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-14"
        >
          <button
            className="px-7 py-3 rounded-md bg-secondary
                       text-white font-semibold 
                       hover:scale-105 hover:shadow-lg 
                       transition duration-300"
          >
            View More Reviews
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;