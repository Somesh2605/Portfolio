import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ProjectCard from "./components/ProjectCard"

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <section id="experience" className="min-h-screen px-8 md:px-16 py-24">
  <h2 className="text-4xl md:text-5xl font-bold mb-12">Experience</h2>

  <div className="max-w-4xl">

    {/* Position */}
    <h3 className="text-2xl font-semibold">
      Data Analyst
    </h3>

    {/* Timeline */}
    <p className="text-gray-400 mt-1">
      JAN 2025 – Present
    </p>

    {/* Company + Type */}
    <p className="mt-3 text-lg">
  <a
    href="https://www.galaxygroup.co/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center text-gray-300 hover:text-gray-300 transition"
  >
    BKS Galaxy Group LLP
    <span className="text-gray-300"> {" | Full time"}↗</span>
  </a>
  
</p>


    {/* Bullet Points */}
    <ul className="list-disc list-outside pl-5 mt-6 text-white space-y-4 leading-relaxed">


      <li>
        Designed and maintained financial analytics systems to monitor project revenue, costs, collections, receivables, liquidity, and channel partner payouts, enabling data-driven operational and strategic decisions.
      </li>

      <li>
        Utilized SQL for data extraction, validation, and transformation, supporting structured ETL workflows by integrating data from Excel, CRM (SFDC), and external portals into centralized reporting systems while ensuring data governance and accuracy.
      </li>

      <li>
        Built scalable dashboards using Power BI, Excel, and Monday.com, delivering real-time visibility into financial KPIs, project performance, and risk exposure for cross-functional stakeholders.
      </li>

      <li>
        Implemented Monday.com as a centralized workflow and data architecture, consolidating inputs from Sales & Marketing, Finance, Audit, and Channel Partner teams into unified tracking systems.
      </li>

      <li>
        Developed automated compliance and financial tracking solutions, including GST monitoring, payable/receivable tracking, and P&L dashboards, improving reporting reliability and financial transparency.
      </li>

      <li>
        Engineered real-time payment tracking boards embedded within the company’s website under the Channel Partner login section, enabling brokers to monitor payment stages and enhancing transparency; also built financial visibility dashboards for lending partners such as Aditya Birla Finance and Piramal Finance to provide project-level P&L insights.
      </li>

      <li>
        Led process optimization initiatives that reduced manual effort, improved reconciliation timelines, and strengthened financial control across the organization.
      </li>

    </ul>

  </div>
  <div className="max-w-4xl mt-16">

  {/* Position */}
  <h3 className="text-2xl font-semibold">
    Data Science and ML Intern
  </h3>

  {/* Timeline */}
  <p className="text-gray-400 text-sm mt-1">
    Dec 2022 – Jan 2023
  </p>

  {/* Company + Type */}
  <p className="mt-3 text-lg">
  <a
    href="https://www.ybifoundation.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center text-gray-300 hover:text-gray-300 transition"
  >
    Ybi Foundation
    <span className="text-gray-300 !text-gray-300">{" | Intern | Remote"}↗</span>
  </a>

  
</p>

  {/* Bullet Points */}
  <ul className="list-disc list-outside pl-5 mt-6 text-white space-y-4 leading-relaxed">

    <li>
      Developed a classification model to identify multiple diseases, achieving an accuracy of 95% using machine learning algorithms.
    </li>

    <li>
      Collaborated with a cross-functional team to analyze and interpret data, resulting in actionable insights for improving diagnostic accuracy.
    </li>

    <li>
      Presented findings and project outcomes to senior management, effectively communicating the impact of the model on disease identification and treatment.
    </li>

  </ul>

</div>

</section>



<section id="projects" className="min-h-screen px-16 py-20">
  <h2 className="text-4xl font-bold mb-6">Projects</h2>
  <div className="grid md:grid-cols-2 gap-10">
<ProjectCard
  title="Delinquency Risk Analysis & Collections Dashboard"
  subtitle="Developed a Logistic Regression–based delinquency prediction model integrated with SQL and Power BI to identify and segment high-risk customer accounts."
  githubLink="https://github.com/Somesh2605/Delinquency-Risk-Analysis"
  bullets={[
    "Developed a delinquency risk analysis model using Machine Learning (Logistic Regression) to predict high-risk customer accounts.",
    "Cleaned and standardized the dataset, stored it in SQL, and validated business-driven queries to identify high-risk and delinquent customers.",
    "Identified misleading high accuracy due to class imbalance and corrected it using class weighting, improving delinquency detection in alignment with business objectives.",
    "Generated risk probabilities and segmentation, and delivered actionable insights through an interactive Power BI dashboard with KPIs and visualizations to support proactive collections and stakeholder reporting."
  ]}
  tags={[
    "Python",
    "SQL",
    "Machine Learning",
    "Power BI",
    "Microsoft Excel",
    
    
  ]}
/>

<ProjectCard
  title="VitalVet – AI-Enhanced IoT Cattle Health Monitoring System"
  subtitle="End-to-end IoT health monitoring system with AI-based risk scoring"
  githubLink="https://github.com/Somesh2605/Vitalvet-iot-health-monitoring"
  bullets={[
    "Designed and implemented an end-to-end IoT cattle health monitoring system integrating ESP32 with temperature, pulse, and motion sensors.",
    "Built RESTful backend APIs using Node.js and Express for real-time sensor data ingestion and retrieval.",
    "Integrated MongoDB for structured storage and time-series health data tracking.",
    "Developed a machine learning-inspired risk scoring engine to predict cattle health risk levels based on physiological parameters.",
    "Designed a real-time dashboard with health classification (Low / Moderate / High Risk) and AI risk score visualization.",
    "Implemented domain-specific threshold logic aligned with cattle vital ranges for accurate monitoring."
  ]}
  tags={[
    "ESP32",
    "Arduino IDE",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST APIs",
    "HTML/CSS"
  ]}
/>


<ProjectCard
  title="Multiple Disease Classification Model"
  subtitle="Machine Learning based classification model achieving 95% accuracy"
  githubLink="https://github.com/Somesh2605/Multiple-Disease-Classification-Model"
  bullets={[
    "Developed a classification model to identify multiple diseases, achieving an accuracy of 95% using machine learning algorithms.",
    "Collaborated with a cross-functional team to analyze and interpret data, resulting in actionable insights for improving diagnostic accuracy.",
    "Presented findings and project outcomes to senior management, effectively communicating the impact of the model on disease identification and treatment."
  ]}
  tags={[
    "Machine Learning",
    "Data Preprocessing",
    "Microsoft Excel",
    "Python",
    "Pandas",
    "Scikit-learn"
  ]}
/>

<ProjectCard
  title="Desktop Voice Assistant (Snow)"
  subtitle="Python-based voice automation assistant for system and web task execution"
  githubLink="https://github.com/Somesh2605/Desktop-voice-assistant"
  bullets={[
    "Developed a Python-based desktop voice assistant to automate system-level and web-based tasks through voice commands.",
    "Implemented speech-to-text and text-to-speech functionality using SpeechRecognition and pyttsx3 for real-time interaction.",
    "Designed command-processing workflows to handle Wikipedia search, web navigation, media playback, and application control.",
    "Integrated automation utilities such as pywhatkit and smtplib for messaging and email-based task execution.",
    "Structured continuous listening logic to enable dynamic user interaction and responsive task execution."
  ]}
  tags={[
    "Python",
    "Speech Recognition",
    "Text-to-Speech",
    "Automation",
    "API Integration"
  ]}
/>


</div>

</section>

<section id="tech" className="min-h-screen px-8 md:px-16 py-24">
  <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white">
    Tech Stack
  </h2>

  <div className="grid md:grid-cols-3 gap-10">

    {/* Languages */}
    <div className="bg-[#111111] border border-gray-800 rounded-xl p-8">
      <h3 className="text-xl mb-6 text-white">Languages</h3>
      <div className="flex flex-wrap gap-3">
        {["Python", "SQL", "JavaScript", "HTML", "CSS"].map((skill) => (
          <span
            key={skill}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Frameworks & Libraries */}
    <div className="bg-[#111111] border border-gray-800 rounded-xl p-8">
      <h3 className="text-xl mb-6 text-white">Frameworks & Libraries</h3>
      <div className="flex flex-wrap gap-3">
        {["Node.js", "Express.js", "React.js", "Flask", "Scikit-learn", "Pandas"].map((skill) => (
          <span
            key={skill}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Databases */}
    <div className="bg-[#111111] border border-gray-800 rounded-xl p-8">
      <h3 className="text-xl mb-6 text-white">Databases</h3>
      <div className="flex flex-wrap gap-3">
        {["MongoDB", "PostgreSQL", "Snowflake"].map((skill) => (
          <span
            key={skill}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Visualization & BI */}
    <div className="bg-[#111111] border border-gray-800 rounded-xl p-8">
      <h3 className="text-xl mb-6 text-white">Visualization & BI</h3>
      <div className="flex flex-wrap gap-3">
        {["Power BI", "Tableau", "Microsoft Excel"].map((skill) => (
          <span
            key={skill}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Core Competencies */}
    <div className="bg-[#111111] border border-gray-800 rounded-xl p-8">
      <h3 className="text-xl mb-6 text-white">Core Competencies</h3>
      <div className="flex flex-wrap gap-3">
        {[
          "Machine Learning",
          "Data Modeling & Preprocessing",
          "Data Visualization",
          "ETL Workflows"
        ].map((skill) => (
          <span
            key={skill}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

  </div>
</section>


<section id="education" className="min-h-screen px-8 md:px-16 py-24">
  <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white">
    Education
  </h2>

  <div className="max-w-4xl">
    <div className="bg-[#111111] border border-gray-800 rounded-xl p-8">

      {/* Degree */}
      <h3 className="text-2xl text-white">
        B.E. in Electronics and Telecommunication Engineering
      </h3>

      {/* Timeline */}
      <p className="text-gray-400 mt-2 text-sm">
        2020 – 2024
      </p>

      {/* University */}
      <p className="mt-4 text-white text-lg">
        University of Mumbai
      </p>

      {/* CGPA */}
      <p className="mt-2 text-gray-300">
        CGPA: 8.63
      </p>

    </div>
  </div>
</section>


    </div>
  )
}

export default App
