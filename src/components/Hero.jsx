import { Linkedin, Github, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section id="about" className="min-h-[85vh] flex flex-col md:flex-row items-center justify-between px-8 md:px-16 gap-16">
      
      {/* Left Section */}
      <div className="flex-1">
        <p className="text-white mb-3 text-lg">Hello there! I'm</p>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Somesh Bagal
        </h1>

        <p className="text-2xl font-semibold mt-4 text-white tracking-wide">
  Data Analyst
</p>


<div className="flex gap-6 mt-8">
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
</div>

      </div>
{/* Right Section */}
<div className="flex-1 text-white text-lg leading-relaxed space-y-6">

  <p>
    Data Analyst with 1.5+ years of experience delivering scalable dashboards and data-driven machine learning solutions that support strategic business decisions.
  </p>

  <p>
    Skilled in SQL, PostgreSQL, Power BI, Python, Machine Learning, Snowflake, and PySpark, with hands-on experience in ETL processes to streamline reporting workflows and optimize data pipeline operations. I actively use workflow tools like Monday.com to enhance process efficiency and operational visibility.
  </p>

  <p>
    Passionate about transforming complex datasets into clear, actionable insights and building systems that are reliable, scalable, and aligned with business growth.
  </p>

</div>


    </section>
  )
}
