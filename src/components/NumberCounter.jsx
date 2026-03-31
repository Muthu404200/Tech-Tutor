import React, { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";

const NumberCounter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (isInView) setStartCount(true);
  }, [isInView]);

  const counterData = [
    { end: 898, label: "Expert Tutors" },
    { end: 20000, label: "Hours of Content", suffix: "+" },
    { end: 298, label: "Subjects & Courses" },
    { end: 72878, label: "Active Students", suffix: "+" },
  ];

  return (
    <section ref={ref} className="bg-secondary py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-xl text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            Trusted by Thousands of Learners
          </h2>
          <p className="mt-2 text-sm sm:text-base text-white/80">
            Proven results through quality education
          </p>
        </div>

        {/* Counters */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
          {counterData.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="
                rounded-xl bg-white/10 backdrop-blur
                px-4 py-5 sm:px-5 sm:py-6
                text-center
                shadow hover:shadow-lg
                transition
              "
            >
              {/* Number */}
              <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                {startCount && (
                  <CountUp
                    start={0}
                    end={item.end}
                    duration={2.5}
                    separator=","
                    suffix={item.suffix || ""}
                  />
                )}
              </p>

              {/* Accent */}
              <div className="mx-auto my-2 h-0.5 w-8 bg-accent rounded" />

              {/* Label */}
              <p className="text-[11px] sm:text-xs font-medium uppercase tracking-wide text-white/90">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumberCounter;
