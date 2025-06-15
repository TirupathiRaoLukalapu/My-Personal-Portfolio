import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Github, Linkedin, Mail, Database, Code, Terminal, ChartBar, Server, Network, ArrowUp, ExternalLink, Award, Calendar, GraduationCap } from "lucide-react";
import DataFlowAnimation from "@/components/DataFlowAnimation";
import TechStackGrid from "@/components/TechStackGrid";
import DataMetrics from "@/components/DataMetrics";
import BackToTop from "@/components/BackToTop";
import ContactMessageBar from "@/components/ContactMessageBar";

const Index = () => {
  const [typedText, setTypedText] = useState("");
  const [isNavSticky, setIsNavSticky] = useState(false);
  const codeSnippets = ["import pyspark as spark", "from airflow import DAG", "dbt run --models+", "pipeline.transform(df)"];
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

  // Handle sticky navigation
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsNavSticky(offset > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const skills = [{
    name: "Python (PySpark)",
    level: 95
  }, {
    name: "SQL",
    level: 95
  }, {
    name: "Java",
    level: 80
  }, {
    name: "Apache Spark",
    level: 90
  }, {
    name: "Snowflake",
    level: 90
  }, {
    name: "dbt",
    level: 85
  }, {
    name: "Apache Airflow",
    level: 90
  }, {
    name: "Azure (ADF, Databricks)",
    level: 85
  }, {
    name: "AWS (Glue, S3, EMR)",
    level: 85
  }, {
    name: "Apache Kafka",
    level: 80
  }, {
    name: "Data Modeling",
    level: 90
  }];
  const projects = [{
    title: "Real-Time Data Streaming Pipeline",
    description: "Developed a cloud-based real-time pipeline integrating Spotify APIs with AWS Lambda, Glue, and Snowflake. The project emphasized seamless data integration, schema design, and scalable transformation logic, aligning closely with enterprise-grade healthcare data ingestion patterns. Stored raw JSON data in Amazon S3 and transformed 100% of records using AWS Glue (PySpark), optimizing schema consistency and processing time by 30%.",
    tech: ["Apache Spark", "Amazon S3", "Snowflake", "Snowpipe", "AWS Lambda", "AWS Glue"],
    date: "August 2024",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400",
    techIcons: [{
      name: "Apache Spark",
      icon: Database,
      color: "text-orange-600"
    }, {
      name: "AWS S3",
      icon: Server,
      color: "text-blue-600"
    }, {
      name: "Snowflake",
      icon: Database,
      color: "text-cyan-600"
    }, {
      name: "Lambda",
      icon: Code,
      color: "text-yellow-600"
    }]
  }, {
    title: "E-commerce Data Pipeline on Azure",
    description: "Designed and implemented an end-to-end data pipeline to ingest approximately 100 GB of daily e-commerce sales data, perform critical data transformations and enrichments, and load the processed data into a data lake for efficient analytical consumption. Enabled efficient processing resulting in a 30% improvement in data processing time and providing timely insights for business intelligence reporting and analysis.",
    tech: ["Azure Data Factory", "Azure Databricks", "Apache Spark", "Delta Lake", "Azure Data Lake Gen2"],
    date: "February 2025",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800&h=400",
    techIcons: [{
      name: "Azure",
      icon: Network,
      color: "text-blue-600"
    }, {
      name: "Databricks",
      icon: ChartBar,
      color: "text-red-600"
    }, {
      name: "Apache Spark",
      icon: Database,
      color: "text-orange-600"
    }, {
      name: "Delta Lake",
      icon: Server,
      color: "text-green-600"
    }]
  }];
  const experience = [{
    role: "Data Engineer",
    company: "Innovaccer Inc.",
    period: "Sep 2023 – Mar 2025",
    location: "California, United States",
    description: ["Built and maintained scalable ETL pipelines using PySpark and AWS Glue to ingest and transform large-scale healthcare data across multiple vendor sources", "Designed reusable data pipeline components and implemented workflow orchestration with Apache Airflow, improving operational efficiency and data freshness", "Developed ELT workflows with dbt and optimized Snowflake schemas, resulting in 40% faster query execution and improved reporting accuracy", "Applied data quality validation using Great Expectations and implemented automated monitoring and alerting for data anomalies", "Worked in Agile teams to support product features and data requirements across analytics and technology teams, following CI/CD practices using Git and Jenkins", "Collaborated with stakeholders to ensure HIPAA-compliant data governance, version control, and secure cloud architecture on AWS and Databricks"]
  }, {
    role: "Data Engineer",
    company: "Teamtech Solutions",
    period: "Mar 2021 – Jun 2023",
    location: "Hyderabad, Telangana",
    description: ["Designed and developed data pipelines using Azure Data Factory to extract, transform, and load structured and unstructured financial datasets into Snowflake and SQL Server", "Integrated internal databases and third-party APIs to support loan analytics and fraud detection workflows, reducing eligibility processing time by 50%", "Created reusable data models, stored procedures, UDFs, and views; improved data lineage tracking and metadata documentation across data assets", "Implemented CI/CD pipelines and version control with Azure DevOps and Git; actively supported data testing and production deployment processes", "Conducted data profiling and validation using Python and SQL to ensure data quality, consistency, and accuracy in compliance with partner bank standards", "Supported Power BI dashboard development by enabling curated datasets and ensuring data availability through monitored pipelines"]
  }];
  const education = [{
    degree: "Master's in Computer/Information Technology Administration and Management",
    institution: "Lindsey Wilson College",
    period: "Aug 2023 – May 2025",
    location: "Columbia, Kentucky"
  }];
  const skillCategories = [{
    category: "Programming Languages",
    skills: ["Python (NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, TensorFlow)", "SQL", "PySpark", "Java", "R", "Bash"]
  }, {
    category: "Frontend Technologies",
    skills: ["HTML", "CSS"]
  }, {
    category: "Big Data & Frameworks",
    skills: ["Apache Spark", "Apache Kafka", "Apache Hive", "Hadoop", "HDFS", "Apache Airflow"]
  }, {
    category: "Databases & Storage",
    skills: ["MongoDB", "Redis", "ChromaDB", "Snowflake", "Azure Data Lake Storage Gen2", "AWS S3", "PostgreSQL"]
  }, {
    category: "Cloud Platforms",
    skills: ["Azure (ADF, Databricks, ADLS Gen2)", "AWS (S3, EC2, EMR, Glue)", "Snowflake"]
  }, {
    category: "Orchestration & Tools",
    skills: ["Apache Airflow", "Azure Data Factory", "dbt", "Great Expectations", "Power BI", "Tableau", "GitHub", "Jenkins"]
  }, {
    category: "Other Skills",
    skills: ["Data Cleaning", "Data Modeling", "Patient Data Analytics", "KPI Reporting", "Agile Environment", "CI/CD"]
  }];
  const certifications = [{
    title: "Python Programming Certification",
    provider: "Udemy",
    date: "2025",
    description: "Comprehensive Python programming course covering advanced concepts, data structures, and real-world applications",
    certificateUrl: "https://www.udemy.com/certificate/UC-ce768d0b-5492-4a11-9c0d-0bc61c572dcf/",
    skills: ["Python", "Data Structures", "Object-Oriented Programming", "Libraries & Frameworks"],
    color: "from-blue-500 to-cyan-500"
  }, {
    title: "SQL Database Management Certification",
    provider: "Udemy",
    date: "2025",
    description: "Advanced SQL certification covering database design, query optimization, and data analysis techniques",
    certificateUrl: "https://www.udemy.com/certificate/UC-ce768d0b-5492-4a11-9c0d-0bc61c572dcf/",
    skills: ["SQL Queries", "Database Design", "Data Analysis", "Query Optimization"],
    color: "from-purple-500 to-pink-500"
  }];
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-gray-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 border-b border-gray-200 transition-all duration-300 ${isNavSticky ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-sm'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-slate-800">Tirupathi Rao</div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">About</a>
            <a href="#skills" className="text-slate-600 hover:text-green-600 transition-colors font-medium">Skills</a>
            <a href="#certifications" className="text-slate-600 hover:text-amber-600 transition-colors font-medium">Certifications</a>
            <a href="#projects" className="text-slate-600 hover:text-purple-600 transition-colors font-medium">Projects</a>
            <a href="#experience" className="text-slate-600 hover:text-orange-600 transition-colors font-medium">Experience</a>
            <a href="#education" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">Education</a>
            <a href="#contact" className="text-slate-600 hover:text-red-600 transition-colors font-medium">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section with 3D Photo */}
      <section className="pt-20 pb-16 px-6 relative overflow-hidden">
        {/* Background geometric elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-yellow-100 to-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{
          animationDelay: '2s'
        }}></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-green-100 to-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{
          animationDelay: '4s'
        }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            {/* 3D Photo Container */}
            <div className="relative inline-block mb-8">
              {/* 3D Background layers */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 rounded-3xl transform rotate-3 scale-105 opacity-30"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-blue-300 rounded-3xl transform -rotate-2 scale-102 opacity-40"></div>
              
              {/* Main photo container */}
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
                <div className="relative overflow-hidden rounded-2xl">
                  <img src="./lovable-uploads/5396458f-722b-457a-9bd2-9d51a3561425.png" alt="Tirupathi Rao - Data Engineer" className="w-80 h-80 object-cover transition-transform duration-300 hover:scale-110" />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Floating tech icons around photo */}
              <div className="absolute -top-4 -right-4 bg-blue-100 text-blue-600 p-3 rounded-full shadow-lg animate-bounce">
                <Database className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-100 text-green-600 p-3 rounded-full shadow-lg animate-bounce" style={{
              animationDelay: '1s'
            }}>
                <Server className="h-6 w-6" />
              </div>
              <div className="absolute top-10 -left-8 bg-purple-100 text-purple-600 p-3 rounded-full shadow-lg animate-bounce" style={{
              animationDelay: '2s'
            }}>
                <Code className="h-6 w-6" />
              </div>
              <div className="absolute top-10 -right-8 bg-yellow-100 text-yellow-600 p-3 rounded-full shadow-lg animate-bounce" style={{
              animationDelay: '0.5s'
            }}>
                <ChartBar className="h-6 w-6" />
              </div>
            </div>

            {/* Text content */}
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-slate-700 mb-4">Hi! I am Tirupathi Rao</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-800 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Data Engineer
              </h1>
              <div className="text-lg mb-8 text-slate-700 leading-relaxed space-y-4 max-w-3xl mx-auto">
                <p>
                  Results-driven Data Engineer with <span className="text-blue-600 font-semibold">3+ years of experience</span> designing, building, and optimizing scalable data pipelines across <span className="text-purple-600 font-medium">healthcare and fintech domains</span>.
                </p>
                <p>
                  Proven expertise in <span className="text-green-600 font-medium">ETL/ELT development, data modeling, and orchestration</span> using tools like PySpark, Snowflake, dbt, Apache Airflow, and Azure Data Factory.
                </p>
                <p>
                  Skilled in <span className="text-blue-600 font-medium">cloud platforms including AWS and Azure</span>, with a strong foundation in SQL, Python, and CI/CD practices. Adept at working in Agile teams to deliver high-quality data solutions, enforce data governance, and enable analytics through curated data products.
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg transform transition-all duration-200 hover:scale-105" asChild>
                  <a href="mailto:tirupathiraolukalapu08@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </a>
                </Button>
                <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50 shadow-lg transform transition-all duration-200 hover:scale-105" asChild>
                  <a href="https://github.com/TirupathiRaoLukalapu/Tiru_resume_data_engineer/blob/main/Tirupathi_resume_data_engineer.pdf" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Resume
                  </a>
                </Button>
              </div>

              {/* Social links with improved LinkedIn hover */}
              <div className="flex justify-center space-x-6">
                <a href="https://github.com/TirupathiRaoLukalapu" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 border border-gray-200 hover:border-gray-300">
                  <Github className="h-6 w-6 text-slate-600 hover:text-slate-800" />
                </a>
                
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <a href="https://www.linkedin.com/in/tirupathi-rao-lukalapu-a719912aa/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 border border-blue-200 hover:border-blue-400">
                      <Linkedin className="h-6 w-6 text-blue-600 hover:text-blue-700" />
                    </a>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="flex justify-between space-x-4">
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold">Tirupathi Rao Lukalapu</h4>
                        <p className="text-sm text-muted-foreground">
                          Data Engineer at Innovaccer Inc.
                        </p>
                        <div className="flex items-center pt-2">
                          <Linkedin className="mr-2 h-4 w-4 opacity-70" />
                          <span className="text-xs text-muted-foreground">
                            Connect on LinkedIn to see my professional updates and network
                          </span>
                        </div>
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>

                <a href="mailto:tirupathiraolukalapu08@gmail.com" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 border border-red-200 hover:border-red-400">
                  <Mail className="h-6 w-6 text-red-600 hover:text-red-700" />
                </a>
              </div>
            </div>

            {/* Terminal section */}
            <div className="mt-16 max-w-2xl mx-auto">
              <div className="bg-slate-900 rounded-lg p-6 border border-slate-700 shadow-lg">
                <div className="flex items-center mb-4">
                  <Terminal className="h-4 w-4 text-green-400 mr-2" />
                  <span className="text-green-400 font-medium">terminal</span>
                </div>
                <div className="font-mono text-sm">
                  <span className="text-gray-400">$ </span>
                  <span className="text-green-400">{typedText}</span>
                  <span className="animate-pulse text-green-400">|</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Engineering Metrics Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Data Engineering Impact</h2>
          <DataMetrics />
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Technology Stack</h2>
          <TechStackGrid />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Technical Skills</h2>
          
          {/* Skill Progress Bars */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skills.map((skill, index) => <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-700 font-medium">{skill.name}</span>
                  <span className="text-blue-600 font-semibold">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-3 bg-slate-200" />
              </div>)}
          </div>

          {/* Detailed Skills by Category */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => <Card key={index} className="bg-gradient-to-br from-slate-50 to-gray-50 border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-slate-800 text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => <Badge key={skillIndex} variant="secondary" className="bg-blue-100 text-blue-700 mr-2 mb-2 hover:bg-blue-200 transition-colors">
                        {skill}
                      </Badge>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 px-6 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-4 shadow-lg animate-pulse">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Professional Certifications</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Continuously expanding my expertise through industry-recognized certifications
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {certifications.map((cert, index) => <div key={index} className="group relative">
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} rounded-2xl opacity-75 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105 blur-sm group-hover:blur-none`}></div>
                
                {/* Main certificate card */}
                <Card className="relative bg-white/95 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group-hover:scale-105">
                  {/* Certificate ribbon */}
                  <div className="absolute -top-3 -right-3 z-10">
                    <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white px-4 py-2 rounded-full shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
                      <div className="flex items-center space-x-1">
                        <GraduationCap className="h-4 w-4" />
                        <span className="font-bold text-sm">CERTIFIED</span>
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-orange-600 group-hover:bg-clip-text transition-all duration-300">
                          {cert.title}
                        </CardTitle>
                        <div className="flex items-center space-x-2 text-slate-600">
                          <Badge variant="outline" className="border-amber-300 text-amber-700 bg-amber-50">
                            {cert.provider}
                          </Badge>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm font-medium">{cert.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-slate-600 leading-relaxed">
                      {cert.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Skills covered */}
                    <div>
                      <h4 className="font-semibold text-slate-700 mb-2 flex items-center">
                        <Code className="h-4 w-4 mr-2 text-amber-600" />
                        Skills Covered
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => <Badge key={skillIndex} className="bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 border-amber-200 hover:from-amber-200 hover:to-orange-200 transition-all duration-200 transform hover:scale-105">
                            {skill}
                          </Badge>)}
                      </div>
                    </div>

                    {/* View certificate button */}
                    <div className="pt-4 border-t border-slate-200">
                      <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg transform transition-all duration-200 hover:scale-105 group-hover:shadow-2xl" asChild>
                        <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                          <Award className="mr-2 h-4 w-4" />
                          View Certificate
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Floating animation dots */}
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" style={{
              animationDelay: '0.5s'
            }}></div>
              </div>)}
          </div>

          {/* Achievement stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              
            </div>
            <div className="text-center group">
              
            </div>
            <div className="text-center group">
              
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Featured Projects</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => <Card key={index} className="bg-white border-slate-200 hover:border-blue-400 transition-all duration-300 group hover:shadow-xl transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-600 text-white shadow-lg">{project.date}</Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex space-x-2">
                      <Database className="h-8 w-8 text-white opacity-80" />
                      <Server className="h-8 w-8 text-white opacity-80" />
                      <Network className="h-8 w-8 text-white opacity-80" />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-slate-800 group-hover:text-blue-700 transition-colors">{project.title}</CardTitle>
                  <CardDescription className="text-slate-600">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => <Badge key={tech} variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50 transition-colors">
                          {tech}
                        </Badge>)}
                    </div>
                    
                    {/* Tech Icons Highlights */}
                    <div className="border-t border-slate-200 pt-4">
                      <p className="text-sm font-medium text-slate-700 mb-3">Key Technologies:</p>
                      <div className="flex flex-wrap gap-3">
                        {project.techIcons.map((tech, techIndex) => <div key={techIndex} className="flex items-center space-x-2 bg-slate-50 rounded-lg px-3 py-2 hover:bg-slate-100 transition-colors">
                            <tech.icon className={`h-5 w-5 ${tech.color}`} />
                            <span className="text-sm font-medium text-slate-700">{tech.name}</span>
                          </div>)}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => <div key={index} className="relative pl-8 border-l-2 border-blue-300">
                <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-0 shadow-lg"></div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200 hover:border-blue-300 transition-colors">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{exp.role}</h3>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <span className="text-blue-700 font-medium">{exp.company}</span>
                    <div className="text-slate-600 text-sm">
                      <div className="font-medium">{exp.period}</div>
                      <div>{exp.location}</div>
                    </div>
                  </div>
                  <ul className="text-slate-700 space-y-2">
                    {exp.description.map((item, itemIndex) => <li key={itemIndex} className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">•</span>
                        <span>{item}</span>
                      </li>)}
                  </ul>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-6 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => <div key={index} className="relative pl-8 border-l-2 border-purple-300">
                <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-2 top-0 shadow-lg"></div>
                <div className="bg-white rounded-lg p-6 border border-purple-200 hover:border-purple-300 transition-colors shadow-md">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{edu.degree}</h3>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                    <span className="text-purple-700 font-medium">{edu.institution}</span>
                    <div className="text-slate-600 text-sm">
                      <div className="font-medium">{edu.period}</div>
                      <div>{edu.location}</div>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl mb-8 text-blue-100">
            Ready to discuss data engineering opportunities? Let's build something amazing together.
          </p>
          <div className="flex justify-center space-x-6">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 border-0 shadow-lg" asChild>
              <a href="mailto:tirupathiraolukalapu08@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 shadow-lg" asChild>
              <a href="https://www.linkedin.com/in/tirupathi-rao-lukalapu-a719912aa/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Message Bar */}
      <ContactMessageBar />

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-200 bg-slate-50">
        <div className="container mx-auto text-center text-slate-600">
          <p>&copy; 2024 Tirupathi Rao. Built with passion for data engineering.</p>
        </div>
      </footer>

      {/* Back to Top Button */}
      <BackToTop />
    </div>;
};

export default Index;
