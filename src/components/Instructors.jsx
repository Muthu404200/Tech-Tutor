import { motion } from "framer-motion";

const instructors = [
  {
    name: "Rajesh Kumar",
    role: "Classical Music Director",
    img: "https://images.unsplash.com/photo-1531123414780-f74242c2b052?auto=format&fit=crop&w=500&q=80",
    bio: "With over 20 years of experience in classical music, Rajesh has performed internationally and trained hundreds of students.",
  },
  {
    name: "Priya Singh",
    role: "Dance Instructor",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
    bio: "Award-winning dancer specializing in classical and contemporary styles with years of teaching expertise.",
  },
  {
    name: "Vikram Mehta",
    role: "Acting Coach",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
    bio: "Veteran of stage and screen with 15+ years of experience mentoring aspiring actors.",
  },
  {
    name: "Aisha Kapoor",
    role: "Photography Mentor",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",
    bio: "Award-winning photographer specializing in portrait and fashion photography.",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
};

const Instructors = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Meet Our Expert Instructors
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn from industry professionals with real-world experience and proven expertise
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((item, i) => (
            <motion.div
              key={item.name}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-primary">
                  {item.name}
                </h3>
                <p className="text-sm text-secondary mt-1">{item.role}</p>
              </div>

              {/* Bio */}
              <div className="absolute bottom-0 left-0 right-0 bg-white p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm text-gray-600">{item.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Instructors;
