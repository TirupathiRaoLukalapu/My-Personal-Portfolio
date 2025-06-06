
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
    { name: "Apache Spark", level: 85 },
    { name: "AWS/Azure", level: 80 },
    { name: "Docker", level: 85 },
    { name: "Airflow", level: 75 },
  ];

  const projects = [
    {
      title: "Real-time Data Pipeline",
      description: "Built a scalable ETL pipeline processing 1M+ records daily using Apache Kafka and Spark",
      tech: ["Python", "Kafka", "Spark", "AWS"],
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Data Warehouse Optimization",
      description: "Reduced query time by 60% through intelligent indexing and partitioning strategies",
      tech: ["SQL", "PostgreSQL", "dbt", "Snowflake"],
      image: "photo-1518770660439-4636190af475"
    },
    {
      title: "ML Feature Store",
      description: "Designed and implemented a feature store serving ML models with sub-100ms latency",
      tech: ["Python", "Redis", "FastAPI", "Docker"],
      image: "photo-1487058792275-0ad4aaf24ca7"
    }
  ];

  const experience = [
    {
      role: "Senior Data Engineer",
      company: "Tech Corp",
      period: "2022 - Present",
      description: "Lead data architecture and pipeline development for e-commerce platform"
    },
    {
      role: "Data Engineer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "Built data infrastructure from scratch, handling millions of events daily"
    },
    {
      role: "Junior Data Analyst",
      company: "Analytics Inc",
      period: "2019 - 2020",
      description: "Developed automated reporting solutions and data quality frameworks"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-sm z-50 border-b border-blue-800/30">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-cyan-400">Portfolio</div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Data Engineer
              </h1>
              <p className="text-xl mb-8 text-gray-300">
                Transforming raw data into actionable insights through scalable pipelines and robust architectures
              </p>
              <div className="flex space-x-4 mb-8">
                <Button className="bg-cyan-600 hover:bg-cyan-700">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
                <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10">
                  View Resume
                </Button>
              </div>
              <div className="flex space-x-4">
                <Github className="h-6 w-6 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
                <Linkedin className="h-6 w-6 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
                <Mail className="h-6 w-6 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors" />
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
          <div className="grid md:grid-cols-2 gap-8">
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
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/${project.image}?w=400&h=200&fit=crop`}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
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
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-cyan-400 font-medium">{exp.company}</span>
                    <span className="text-gray-400">{exp.period}</span>
                  </div>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-black/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8 text-cyan-400">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-8">
            Ready to discuss data engineering opportunities? Let's build something amazing together.
          </p>
          <div className="flex justify-center space-x-6">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
              <Mail className="mr-2 h-5 w-5" />
              Email Me
            </Button>
            <Button size="lg" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-700">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; 2024 Your Name. Built with passion for data engineering.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
