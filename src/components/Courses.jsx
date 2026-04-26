import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FALLBACK_IMAGE =
  "https://via.placeholder.com/500x300?text=Course+Image";

const courses = [
  {
    id: 1,
    title: "Microsoft Office",
    description: "Learn MS Word, Excel, PowerPoint, and Outlook.",
    image: "https://images.unsplash.com/photo-1658203897339-0b8c64a42fba?q=80&w=1162&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Tally",
    description: "Master accounting with Tally ERP.",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=500&q=80",
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
    title: "Programming Languages",
    description: "Learn C, C++, Java, and Python.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 7,
    title: "Graphic Designing & DTP",
    description:
      "Adobe Photoshop, Illustrator, InDesign, CorelDRAW, and Desktop Publishing.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 8,
    title: "UI/UX Design",
    description:
      "Design modern user interfaces and improve user experience with industry tools.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 9,
    title: "Video Editing & Motion Graphics",
    description:
      "After Effects, Premiere Pro, CapCut, Filmora, and DaVinci Resolve.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 10,
    title: "IT Career Launch Pad",
    description:
      "R Programming, DSA, Data Analytics, Business Intelligence, and Machine Learning.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 11,
    title: "Data Analytics & Visualization",
    description:
      "NumPy, Pandas, Matplotlib, Seaborn, SciPy, and data-driven insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 12,
    title: "Full Stack Development",
    description:
      "Python / Java Full Stack, SQL, Power BI, and Advanced Database Technology.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 13,
    title: "IT Foundation",
    description:
      "Basic Computer, MS Office, Advanced Excel, and digital fundamentals.",
      image: "https://images.unsplash.com/photo-1581090700227-1e8b6c3cfa6d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 14,
    title: "Accounting & Finance (Tally + GST)",
    description:
      "General Accounts, Taxation (TDS/TCS), Tally Prime, and QuickBooks.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 15,
    title: "SAP Training (S/4 HANA)",
    description:
      "SAP FI, MM, and SD modules for enterprise-level ERP skills.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 16,
    title: "Zoho Books & Accounting Tools",
    description:
      "Learn Zoho Books and modern cloud-based accounting systems.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=500&q=80",
  },
];

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [filter, setFilter] = useState("");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) =>
      course.title.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter]);

  return (
    <section className="min-h-screen p-6 text-primary">
      
      <h1 className="text-center text-4xl font-bold mb-10 tracking-wide">
        Our <span className="text-secondary">Courses</span>
      </h1>

      {/* Search */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search courses..."
          className="px-5 py-3 rounded-md bg-white/10 border border-secondary 
                     focus:outline-none focus:ring-2 focus:ring-[#C9A24D]
                     backdrop-blur-md w-full max-w-md text-primary 
                     placeholder-gray-400 transition "
        />
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredCourses.map((course) => (
          <motion.div
            key={course.id}
            layout
            whileHover={{ y: -10, scale: 1.02 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white/5 backdrop-blur-lg rounded-xl shadow-xl 
                       border border-white/10 p-6 hover:border-[#C9A24D] 
                       transition-all duration-300"
          >
            <img
              src={course.image}
              alt={course.title}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = FALLBACK_IMAGE;
              }}
              className="rounded-lg w-full h-40 object-cover mb-5"
            />

            <h2 className="text-xl font-semibold text-secondary">
              {course.title}
            </h2>

            <p className="text-gray-300 mt-3 text-sm leading-relaxed">
              {course.description}
            </p>

            <button
              onClick={() => setSelectedCourse(course)}
              className="mt-5 text-secondary font-medium hover:text-[#C9A24D] transition"
            >
              Read More →
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Popup */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0B1F3B] border border-[#C9A24D]/40 rounded-xl 
                         shadow-2xl w-full max-w-md p-8"
            >
              <h2 className="text-2xl font-bold text-[#C9A24D] mb-4">
                {selectedCourse.title}
              </h2>

              <p className="text-gray-300 leading-relaxed">
                {selectedCourse.description}
              </p>

              <button
                onClick={() => setSelectedCourse(null)}
                className="mt-6 px-5 py-2 bg-[#C9A24D] text-[#0B1F3B] 
                           font-semibold rounded-md hover:opacity-90 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Empty */}
      {filteredCourses.length === 0 && (
        <div className="text-center text-gray-400 mt-10">
          No courses found.
        </div>
      )}
    </section>
  );
}

export default Courses;