import React, { useState } from "react";
import { motion } from "framer-motion";
import tallyImg from "../assets/images/Tally.png";

const courses = [
  {
    id: 1,
    title: "Microsoft Office",
    description: "Learn MS Word, Excel, PowerPoint, and Outlook.",
    image: "https://images.unsplash.com/photo-1658203897339-0b8c64a42fba?q=80&w=1162&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Tally",
    description: "Master accounting with Tally ERP.",
    image: tallyImg,
  },
  {
    id: 3,
    title: "Web Design",
    description: "Learn HTML, CSS, and UI/UX fundamentals.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 4,
    title: "Web Development (MERN / Spring Boot)",
    description: "Full-stack development using modern frameworks.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    title: "Data Science",
    description: "Data processing, visualization, and ML techniques.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    title: "Programming Languages (C, C++, Java, Python)",
    description: "Learn popular programming languages.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80",
  },
];

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [filter, setFilter] = useState(""); // State for title-based filter

  const handlePopup = (course) => {
    setSelectedCourse(course);
  };

  const closePopup = () => {
    setSelectedCourse(null);
  };

  // Filter courses based on the title
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
  <section className=" min-h-screen p-6 text-primary">
    <h1 className="text-center text-4xl font-bold mb-10">
      Our <span className="text-secondary">Courses</span>
    </h1>

    {/* Filter Input */}
    <div className="flex justify-center mb-10">
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search by title..."
        className="px-5 py-3 rounded-md bg-white/10 border border-white/20 
                   focus:outline-none focus:ring-2 focus:ring-[#C9A24D]
                   backdrop-blur-md w-full max-w-md text-primary placeholder-gray-400"
      />
    </div>

    {/* Course Grid */}
    <motion.div
      layout
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {filteredCourses.map((course) => (
        <motion.div
          key={course.id}
          layout
          whileHover={{ y: -8 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white/5 backdrop-blur-lg rounded-xl shadow-xl 
                     border border-white/10 p-6 hover:border-[#C9A24D] transition-all"
        >
          <img
            src={course.image}
            alt={course.title}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = officeImg;
            }}
            className="rounded-lg w-full h-40 object-cover mb-5 bg-[#0B1F3B]/10"
          />

          <h2 className="text-xl font-semibold text-secondary">
            {course.title}
          </h2>

          <p className="text-gray-300 mt-3 text-sm">
            {course.description}
          </p>

          <button
            onClick={() => handlePopup(course)}
            aria-label={`Read more about ${course.title}`}
            className="mt-5 text-secondary font-medium hover:text-[#C9A24D] transition cursor-pointer"
          >
            Read More →
          </button>
        </motion.div>
      ))}
    </motion.div>

    {/* Popup */}
    {selectedCourse && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className="bg-[#0B1F3B] border border-[#C9A24D]/40 rounded-xl 
                     shadow-2xl w-full max-w-md p-8"
        >
          <h2 className="text-2xl font-bold text-[#C9A24D] mb-4">
            {selectedCourse.title}
          </h2>

          <p className="text-gray-300">
            {selectedCourse.description}
          </p>

          <button
            onClick={closePopup}
            className="mt-6 px-5 py-2 bg-[#C9A24D] text-[#0B1F3B] 
                       font-semibold rounded-md hover:opacity-90 transition"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    )}

    {/* Empty State */}
    {filteredCourses.length === 0 && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center text-gray-400 mt-10"
      >
        No courses found.
      </motion.div>
    )}
  </section>
);

   }

export default Courses;