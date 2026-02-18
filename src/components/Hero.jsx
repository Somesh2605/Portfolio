import { Linkedin, Github, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-[85vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 gap-16"
    >

      {/* Left Section */}
      <div className="flex-1">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white mb-3 text-lg"
        >
          Hello there! I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight"
        >
          Somesh Bagal
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl font-semibold mt-4 text-white tracking-wide"
        >
          Data Analyst
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex gap-6 mt-8"
        >
          <a
            href="https://www.linkedin.com/in/someshbagal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-70 transition"
          >
            <Linkedin size={22} />
          </a>

          <a
            href="https://github.com/Somesh2605"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-70 transition"
          >
            <Github size={22} />
          </a>

          <a
            href="mailto:someshbagal2605@gmail.com"
            className="text-white hover:opacity-70 transition"
          >
            <Mail size={22} />
          </a>
        </motion.div>
      </div>

      {/* Right Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex-1 text-white text-lg leading-relaxed space-y-6"
      >
        <p>
          Data Analyst with 1.5+ years of experience delivering scalable dashboards and data-driven machine learning solutions that support strategic business decisions.
        </p>

        <p>
          Skilled in SQL, PostgreSQL, Power BI, Python, Machine Learning, Snowflake, and PySpark, with hands-on experience in ETL processes to streamline reporting workflows and optimize data pipeline operations. I actively use workflow tools like Monday.com to enhance process efficiency and operational visibility.
        </p>

        <p>
          Passionate about transforming complex datasets into clear, actionable insights and building systems that are reliable, scalable, and aligned with business growth.
        </p>
      </motion.div>

    </section>
  );
}
