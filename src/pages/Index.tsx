
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Github, Linkedin, Mail, Database, Code, Terminal, ChartBar } from "lucide-react";

const Index = () => {
  const [typedText, setTypedText] = useState("");
  const codeSnippets = [
    "import pandas as pd",
    "from airflow import DAG",
    "spark.sql('SELECT * FROM data')",
    "pipeline.transform(df)",
  ];

  useEffect(() => {
    let currentSnippet = 0;
    let currentChar = 0;
    const typeText = () => {
      if (currentChar < codeSnippets[currentSnippet].length) {
        setTypedText(codeSnippets[currentSnippet].substring(0, currentChar + 1));
        currentChar++;
      } else {
        setTimeout(() => {
          currentSnippet = (currentSnippet + 1) % codeSnippets.length;
          currentChar = 0;
          setTypedText("");
        }, 2000);
      }
    };

    const interval = setInterval(typeText, 100);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    { name: "Python", level: 95 },
    { name: "SQL", level: 90 },
    { name: "Apache Spark", level: 90 },
    { name: "Azure (ADF, Databricks)", level: 85 },
    { name: "Apache Kafka", level: 85 },
    { name: "Snowflake", level: 80 },
    { name: "Tableau", level: 85 },
    { name: "Apache Airflow", level: 80 },
    { name: "AWS", level: 75 },
    { name: "Power BI", level: 80 },
  ];

  const projects = [
    {
      title: "Real-Time Data Streaming Pipeline",
      description: "Designed and implemented a real-time ETL pipeline using Apache Kafka and Apache Spark to process over 300,000 financial transactions daily. Reduced fraud response time by 25% and achieved 15% reduction in data latency.",
      tech: ["Apache Kafka", "AWS", "Snowflake", "Snowpipe", "Python", "Apache Spark"],
      date: "December 2024"
    },
    {
      title: "E-commerce Data Pipeline on Azure",
      description: "Built end-to-end data pipeline to ingest 100 GB of daily e-commerce sales data. Orchestrated 15+ workflows using Apache Airflow and achieved 30% improvement in data processing time.",
      tech: ["Azure Data Factory", "Azure Databricks", "Apache Spark", "Apache Airflow", "Delta Lake"],
      date: "May 2022"
    },
    {
      title: "Automated Risk-Based Fraud Detection System",
      description: "Implemented real-time system to analyze 300,000 daily financial transactions with risk-based rules. Reduced manual review by 35% and accelerated fraud identification by 25%.",
      tech: ["Apache Kafka", "Python", "Apache Spark", "Azure Databricks", "Azure Logic Apps"],
      date: "January 2021"
    }
  ];

  const experience = [
    {
      role: "Data Engineer",
      company: "TeamTech Solutions",
      period: "Aug 2023 – May 2025",
      location: "Columbia, Kentucky",
      description: [
        "Performed in-depth analysis of large financial transaction datasets to identify key performance indicators (KPIs) and trends affecting revenue and profitability, delivering actionable insights that informed strategic decision-making and improved forecasting accuracy by 5%",
        "Designed, developed, and maintained interactive dashboards using Tableau to visualize critical financial data, including loan performance and customer behavior, enabling stakeholders to effectively monitor performance and assess risk",
        "Streamlined data analysis and reporting processes by automating routine tasks with Python scripts, achieving a 20% reduction in manual effort and freeing up the team to pursue complex analytical projects",
        "Led comprehensive data quality audits to identify and resolve data discrepancies, enhancing data reliability by 15% and ensuring the accuracy of financial reporting and analysis",
        "Collaborated with cross-functional teams to define data requirements for new product launches, resulting in the development of targeted customer segmentation models that increased marketing campaign efficiency by 10%"
      ]
    }
  ];

  const education = [
    {
      degree: "Master's in Computer/Information Technology Administration and Management",
      institution: "Lindsey Wilson College",
      period: "Aug 2018 – June 2022",
      location: "Columbia, Kentucky"
    },
    {
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      institution: "MLR Institute Of Technology",
      period: "June 2020 – June 2023",
      location: "Hyderabad, Telangana"
    }
  ];

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python (NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, TensorFlow)", "SQL", "PySpark", "R", "Bash"]
    },
    {
      category: "Big Data & Frameworks",
      skills: ["Apache Spark", "Apache Kafka", "Apache Hive", "Hadoop", "HDFS", "Apache Airflow"]
    },
    {
      category: "Databases & Storage",
      skills: ["MongoDB", "Snowflake", "Azure Data Lake Storage Gen2", "AWS S3", "PostgreSQL"]
    },
    {
      category: "Cloud Platforms",
      skills: ["Azure (ADF, Databricks, ADLS Gen2)", "AWS (S3, EC2, EMR)", "Snowflake"]
    },
    {
      category: "Visualization & Tools",
      skills: ["Power BI", "Tableau", "GitHub", "Azure Data Factory"]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-black">Tirupathi Rao</div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-gray-600 transition-colors font-medium">About</a>
            <a href="#skills" className="hover:text-gray-600 transition-colors font-medium">Skills</a>
            <a href="#projects" className="hover:text-gray-600 transition-colors font-medium">Projects</a>
            <a href="#experience" className="hover:text-gray-600 transition-colors font-medium">Experience</a>
            <a href="#education" className="hover:text-gray-600 transition-colors font-medium">Education</a>
            <a href="#contact" className="hover:text-gray-600 transition-colors font-medium">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="/lovable-uploads/d206bf2a-1923-4603-b939-9d3ca5f66ee4.png" 
                  alt="Tirupathi Rao"
                  className="w-20 h-20 rounded-full object-cover border-2 border-black"
                />
                <div>
                  <p className="text-lg text-gray-700 mb-2">Hi! I am Tirupathi Rao</p>
                  <p className="text-sm text-gray-600">Recently a Masters graduate, ready to join immediately</p>
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">
                Data Engineer
              </h1>
              <div className="text-lg mb-8 text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Results-driven Data Engineer with <span className="text-black font-semibold">3 years of experience</span> in developing scalable data solutions in finance and E-commerce.
                </p>
                <p className="mb-4">
                  Proficient in <span className="text-black">Python, SQL, Data Modeling, Data warehousing concepts, Azure (ADF, Databricks), Apache Spark, Kafka, Tableau, and Snowflake</span>.
                </p>
                <p className="mb-4">
                  Automated data workflows and orchestrated real-time pipelines that improved processing efficiency by <span className="text-black font-semibold">10–30%</span>.
                </p>
                <p>
                  Adept at cross-functional collaboration and passionate about building end-to-end pipelines that transform raw data into actionable insights.
                </p>
              </div>
              <div className="flex space-x-4 mb-8">
                <Button className="bg-black hover:bg-gray-800 text-white" asChild>
                  <a href="mailto:tirupathiraolukalapu08@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </a>
                </Button>
                <Button variant="outline" className="border-black text-black hover:bg-gray-50">
                  View Resume
                </Button>
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/TirupathiRaoLukalapu" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6 text-gray-600 hover:text-black cursor-pointer transition-colors" />
                </a>
                <a href="https://www.linkedin.com/in/tirupathi-rao-lukalapu-a719912aa/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6 text-gray-600 hover:text-black cursor-pointer transition-colors" />
                </a>
                <a href="mailto:tirupathiraolukalapu08@gmail.com">
                  <Mail className="h-6 w-6 text-gray-600 hover:text-black cursor-pointer transition-colors" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-100 rounded-lg p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <Terminal className="h-4 w-4 text-black mr-2" />
                  <span className="text-black font-medium">terminal</span>
                </div>
                <div className="font-mono text-sm">
                  <span className="text-gray-600">$ </span>
                  <span className="text-black">{typedText}</span>
                  <span className="animate-pulse">|</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Technical Skills</h2>
          
          {/* Skill Progress Bars */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-black font-medium">{skill.name}</span>
                  <span className="text-gray-600">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-3 bg-gray-200" />
              </div>
            ))}
          </div>

          {/* Detailed Skills by Category */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-white border-gray-200">
                <CardHeader>
                  <CardTitle className="text-black text-lg">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-gray-100 text-gray-700 mr-2 mb-2">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Featured Projects</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:border-black transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                    <Database className="h-16 w-16 text-gray-400" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-black text-white">{project.date}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-black">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-gray-300 text-gray-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-black">
                <div className="absolute w-4 h-4 bg-black rounded-full -left-2 top-0"></div>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-black mb-2">{exp.role}</h3>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <span className="text-black font-medium">{exp.company}</span>
                    <div className="text-gray-600 text-sm">
                      <div>{exp.period}</div>
                      <div>{exp.location}</div>
                    </div>
                  </div>
                  <ul className="text-gray-700 space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-black mr-2 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-black">
                <div className="absolute w-4 h-4 bg-black rounded-full -left-2 top-0"></div>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-black mb-2">{edu.degree}</h3>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                    <span className="text-black font-medium">{edu.institution}</span>
                    <div className="text-gray-600 text-sm">
                      <div>{edu.period}</div>
                      <div>{edu.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8 text-black">Let's Connect</h2>
          <p className="text-xl text-gray-700 mb-8">
            Ready to discuss data engineering opportunities? Let's build something amazing together.
          </p>
          <div className="flex justify-center space-x-6">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white" asChild>
              <a href="mailto:tirupathiraolukalapu08@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-black text-black hover:bg-gray-50" asChild>
              <a href="https://www.linkedin.com/in/tirupathi-rao-lukalapu-a719912aa/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-200">
        <div className="container mx-auto text-center text-gray-600">
          <p>&copy; 2024 Tirupathi Rao. Built with passion for data engineering.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
