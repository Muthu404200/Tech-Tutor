import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="text-primary  py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            About <span className="text-secondary">Tech Tutor</span> 
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-2xl max-w-3xl mx-auto opacity-90"
          >
            Where personalized learning meets expert mentorship to shape your academic success.
          </motion.p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        
        {/* Our Story */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold text-primary mb-6">
                Our <span className="text-secondary">Story</span> 
              </h2>

              <p className="text-gray-700 mb-4">
                Tech Tutor was founded with a simple mission: to make high-quality
                education accessible, personalized, and effective. We believe
                that one-on-one mentorship unlocks a student’s true potential.
              </p>

              <p className="text-gray-700 mb-4">
                Our platform connects learners with experienced tutors across
                academic and professional subjects, ensuring structured,
                secure, and result-driven sessions.
              </p>

              <p className="text-gray-700">
                We combine expertise, technology, and personalized support to
                create a learning experience tailored to every individual’s goals.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2"
            >
              <img
                src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?auto=format&fit=crop&w=1000&q=80"
                alt="Online Learning Platform"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </motion.div>

          </div>
        </section>

      </main>
    </>
  );
};

export default AboutSection;
