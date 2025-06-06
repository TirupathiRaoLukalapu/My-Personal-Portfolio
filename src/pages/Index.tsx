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
      image: "photo-1461749280684-dccba630e2f6",
      date: "December 2024"
    },
    {
      title: "E-commerce Data Pipeline on Azure",
      description: "Built end-to-end data pipeline to ingest 100 GB of daily e-commerce sales data. Orchestrated 15+ workflows using Apache Airflow and achieved 30% improvement in data processing time.",
      tech: ["Azure Data Factory", "Azure Databricks", "Apache Spark", "Apache Airflow", "Delta Lake"],
      image: "photo-1518770660439-4636190af475",
      date: "May 2022"
    },
    {
      title: "Automated Risk-Based Fraud Detection System",
      description: "Implemented real-time system to analyze 300,000 daily financial transactions with risk-based rules. Reduced manual review by 35% and accelerated fraud identification by 25%.",
      tech: ["Apache Kafka", "Python", "Apache Spark", "Azure Databricks", "Azure Logic Apps"],
      image: "photo-1487058792275-0ad4aaf24ca7",
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
        "Performed in-depth analysis of large financial transaction datasets to identify KPIs and trends, improving forecasting accuracy by 5%",
        "Designed and maintained interactive Tableau dashboards for financial data visualization and risk assessment",
        "Streamlined data processes by automating routine tasks with Python scripts, achieving 20% reduction in manual effort",
        "Led comprehensive data quality audits, enhancing data reliability by 15%",
        "Collaborated with cross-functional teams on customer segmentation models, increasing marketing campaign efficiency by 10%"
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-sm z-50 border-b border-blue-800/30">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-cyan-400">Tirupathi Rao</div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
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
                  className="w-20 h-20 rounded-full object-cover border-2 border-cyan-400"
                />
                <div>
                  <p className="text-lg text-cyan-300 mb-2">Hi! I am Tirupathi Rao</p>
                  <p className="text-sm text-gray-300">Recently a Masters graduate, ready to join immediately</p>
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Data Engineer
              </h1>
              <div className="text-lg mb-8 text-gray-300 leading-relaxed">
                <p className="mb-4">
                  Results-driven Data Engineer with <span className="text-cyan-400 font-semibold">3 years of experience</span> in developing scalable data solutions in finance and E-commerce.
                </p>
                <p className="mb-4">
                  Proficient in <span className="text-cyan-400">Python, SQL, Data Modeling, Data warehousing concepts, Azure (ADF, Databricks), Apache Spark, Kafka, Tableau, and Snowflake</span>.
                </p>
                <p className="mb-4">
                  Automated data workflows and orchestrated real-time pipelines that improved processing efficiency by <span className="text-green-400 font-semibold">10–30%</span>.
                </p>
                <p>
                  Adept at cross-functional collaboration and passionate about building end-to-end pipelines that transform raw data into actionable insights.
                </p>
              </div>
              <div className="flex space-x-4 mb-8">
                <Button className="bg-cyan-600 hover:bg-cyan-700" asChild>
                  <a href="mailto:tirupathiraolukalapu08@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </a>
                </Button>
                <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10">
                  View Resume
                </Button>
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/TirupathiRaoLukalapu" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
                </a>
                <a href="https://www.linkedin.com/in/tirupathi-rao-lukalapu-a719912aa/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
                </a>
                <a href="mailto:tirupathiraolukalapu08@gmail.com">
                  <Mail className="h-6 w-6 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
                <div className="flex items-center mb-4">
                  <Terminal className="h-4 w-4 text-cyan-400 mr-2" />
                  <span className="text-cyan-400">terminal</span>
                </div>
                <div className="font-mono text-sm">
                  <span className="text-green-400">$ </span>
                  <span className="text-white">{typedText}</span>
                  <span className="animate-pulse">|</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">Technical Skills</h2>
          
          {/* Skill Progress Bars */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-cyan-400">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-3 bg-gray-700" />
              </div>
            ))}
          </div>

          {/* Detailed Skills by Category */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-cyan-400 text-lg">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-gray-700/50 text-gray-300 mr-2 mb-2">
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
      <section id="projects" className="py-16 px-6 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">Featured Projects</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/${project.image}?w=400&h=200&fit=crop`}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-cyan-600/80 text-white">{project.date}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-cyan-600/20 text-cyan-300">
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
      <section id="experience" className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-cyan-400/30">
                <div className="absolute w-4 h-4 bg-cyan-400 rounded-full -left-2 top-0"></div>
                <div className="bg-gray-800/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{exp.role}</h3>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <span className="text-cyan-400 font-medium">{exp.company}</span>
                    <div className="text-gray-400 text-sm">
                      <div>{exp.period}</div>
                      <div>{exp.location}</div>
                    </div>
                  </div>
                  <ul className="text-gray-300 space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-cyan-400 mr-2 mt-1">•</span>
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
      <section id="education" className="py-16 px-6 bg-black/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-cyan-400/30">
                <div className="absolute w-4 h-4 bg-cyan-400 rounded-full -left-2 top-0"></div>
                <div className="bg-gray-800/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                    <span className="text-cyan-400 font-medium">{edu.institution}</span>
                    <div className="text-gray-400 text-sm">
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
      <section id="contact" className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8 text-cyan-400">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to discuss data engineering opportunities? Let's build something amazing together.
          </p>
          <div className="flex justify-center space-x-6">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700" asChild>
              <a href="mailto:tirupathiraolukalapu08@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10" asChild>
              <a href="https://www.linkedin.com/in/tirupathi-rao-lukalapu-a719912aa/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-700">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; 2024 Tirupathi Rao. Built with passion for data engineering.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
