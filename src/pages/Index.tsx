import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Github, Linkedin, Mail, Database, Code, Terminal, ChartBar, Server, Network, ArrowUp, ExternalLink, Award, Calendar, GraduationCap } from "lucide-react";
import DataFlowAnimation from "@/components/DataFlowAnimation";
import TechStackGrid from "@/components/TechStackGrid";
import DataMetrics from "@/components/DataMetrics";
import BackToTop from "@/components/BackToTop";
import ContactMessageBar from "@/components/ContactMessageBar";
import { ThemeToggle } from "@/components/ThemeToggle";

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
  const projects = [
    {
      title: "Real-Time Data Streaming Pipeline",
      description: "Developed a cloud-based real-time pipeline integrating Spotify APIs with AWS Lambda, Glue, and Snowflake. The project emphasized seamless data integration, schema design, and scalable transformation logic, aligning closely with enterprise-grade healthcare data ingestion patterns. Stored raw JSON data in Amazon S3 and transformed 100% of records using AWS Glue (PySpark), optimizing schema consistency and processing time by 30%.",
      tech: ["Apache Spark", "Amazon S3", "Snowflake", "Snowpipe", "AWS Lambda", "AWS Glue"],
      date: "August 2024",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400",
      githubUrl: "https://github.com/TirupathiRaoLukalapu/Real-Time-Data-Streaming-Pipeline",
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
      githubUrl: "https://github.com/TirupathiRaoLukalapu/E-commerce-Data-Pipeline-on-Azure/tree/main",
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
    }
  ];
  const experience = [
    {
      role: "Data Engineer",
      company: "Innovaccer",
      period: "Dec 2023 – Apr 2025",
      location: "California, United States",
      description: ["Built HIPAA-compliant data pipelines using AWS Glue, Python, and Spark, processing 10TB+ of EHR data monthly, improving data availability by 35%", "Automated data validation with Python reducing errors by 25% and accelerating data source onboarding by 40%", "Migrated on-premise data to AWS S3/Redshift, cutting storage costs by 25% while boosting query speed by 40%", "Implemented Medallion Architecture in Delta Lake, enabling self-service analytics for 50+ researchers and reducing ad-hoc requests by 20%", "Pioneered FHIR-compliant data integrations for EHR systems (Epic, Cerner), standardizing clinical data from 50+ hospitals into Innovaccer's unified data model, accelerating analytics readiness by 35%", "Optimized cloud infrastructure costs by 20% through auto-scaling AWS Glue jobs and partitioning Delta Lake tables, aligning with Innovaccer's focus on 'scalable, sustainable solutions'", "Co-led agile workshops with clinical stakeholders to define data requirements for population health analytics, directly supporting Innovaccer's mission to 'activate data flow for better health outcomes'"]
    }, {
      role: "Data Engineer",
      company: "Capgemini",
      period: "Oct 2021 – Jun 2023",
      location: "Hyderabad, India",
      description: ["Engineered real-time AML monitoring pipelines using Spark Streaming and Kafka, reducing fraud detection latency to less than 2 seconds and aligning with Capgemini's emphasis on 'risk exposure mitigation'", "Optimized Snowflake data warehouse through partitioning/materialized views, slashing report generation from 2 hours to 12 minutes", "Modernized legacy data warehouses to Snowflake using Azure Data Factory, achieving 99.9% pipeline reliability and supporting Capgemini's 'cloud-first' client transformation initiatives", "Built CI/CD pipelines with Azure DevOps, reducing deployment failures by 35% and accelerating releases to hourly cycles", "Implemented dbt models to standardize transformations, boosting team productivity by 15% while ensuring GDPR compliance", "Reduced Snowflake costs by $18K/year via auto-scaling and query tuning"]
    }, {
      role: "Data Analyst",
      company: "Teamtech Solutions",
      period: "Jun 2020 – Aug 2021",
      location: "Hyderabad, India",
      description: ["Built startup's first analytics infrastructure from zero using Python/SQL, unifying 7+ data sources (Salesforce, Stripe, Mixpanel) into a central Redshift warehouse, enabling data-driven decisions across product/sales teams", "Created 10+ executive dashboards in Power BI tracking MRR, CAC, and feature adoption, directly influencing a pivot that reduced churn by 15% and retained $120K in annual revenue", "Automated manual revenue reporting with Python scripts, reducing CFO's financial close time from 3 days → 4 hours and freeing capacity for Series A fundraising", "Identified upsell opportunities through cohort analysis of 2,500+ free-tier users, driving targeted campaigns that converted 18% to paid plans ($45K ARR increase)", "Trained non-technical teams on self-service analytics (Power BI/Excel), increasing data adoption by 50% and reducing ad-hoc requests by 30%"]
    }
  ];
  const education = [
    {
      degree: "Master's in Computer/Information Technology Administration and Management",
      institution: "Lindsey Wilson College",
      period: "Aug 2023 – May 2025",
      location: "Columbia, Kentucky"
    }
  ];
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
  const certifications = [
    {
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
    }
  ];
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-gray-900 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 dark:text-gray-100">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 border-b border-gray-200 dark:border-gray-700 transition-all duration-300 ${isNavSticky ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-sm'}`}>
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-xl font-bold text-slate-800 dark:text-slate-200">Tirupathi Rao</div>
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">About</a>
            <a href="#certifications" className="text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors font-medium">Certifications</a>
            <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium">Projects</a>
            <a href="#experience" className="text-slate-600 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors font-medium">Experience</a>
            <a href="#education" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium">Education</a>
            <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 transition-colors font-medium">Contact</a>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section with 3D Photo */}
      <section className="pt-16 pb-8 px-6 relative overflow-hidden">
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
          <div className="text-center mb-12">
            {/* 3D Photo Container */}
            <div className="relative inline-block mb-6">
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
              <p className="text-lg text-slate-700 mb-3">Hi! I am Tirupathi Rao</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-slate-800 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Data Engineer
              </h1>
              <div className="text-lg mb-6 text-slate-700 leading-relaxed space-y-3 max-w-3xl mx-auto">
                <p>
                  Results-driven Data Engineer with <span className="text-blue-600 font-semibold">4+ years of experience</span> designing, building, and optimizing scalable data pipelines across <span className="text-purple-600 font-medium">healthcare and fintech domains</span>.
                </p>
                <p>
                  Proven expertise in <span className="text-green-600 font-medium">ETL/ELT development, data modeling, and orchestration</span> using tools like PySpark, Snowflake, dbt, Apache Airflow, and Azure Data Factory.
                </p>
                <p>
                  Skilled in <span className="text-blue-600 font-medium">cloud platforms including AWS and Azure</span>, with a strong foundation in SQL, Python, and CI/CD practices. Adept at working in Agile teams to deliver high-quality data solutions, enforce data governance, and enable analytics through curated data products.
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg transform transition-all duration-200 hover:scale-105" asChild>
                  <a href="mailto:tirupathiraolukalapu08@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </a>
                </Button>
                <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50 shadow-lg transform transition-all duration-200 hover:scale-105" asChild>
                  <a href="https://github.com/TirupathiRaoLukalapu/Tiru_resume_data_engineer" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Resume
                  </a>
                </Button>
              </div>

              {/* Social links with improved LinkedIn hover */}
              <div className="flex justify-center space-x-6 mb-8">
                <a href="https://github.com/TirupathiRaoLukalapu" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 border border-gray-200 hover:border-gray-300">
                  <Github className="h-6 w-6 text-slate-600 hover:text-slate-800" />
                </a>
                
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <a href="https://www.linkedin.com/in/tirupathi-rao-lukalapu-a719912aa/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 border border-blue-200 hover:border-blue-400">
                      <Linkedin className="h-6 w-6 text-blue-600 hover:text-blue-700" />
                    </a>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between space-x-4">
                      <div className="space-y-1">
                        <h4 className="text-sm font-semibold dark:text-white">Tirupathi Rao Lukalapu</h4>
                        <p className="text-sm text-muted-foreground dark:text-gray-300">
                          Data Engineer at Innovaccer Inc.
                        </p>
                        <div className="flex items-center pt-2">
                          <Linkedin className="mr-2 h-4 w-4 opacity-70 text-blue-600" />
                          <span className="text-xs text-muted-foreground dark:text-gray-400">
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
            <div className="max-w-2xl mx-auto">
              <div className="bg-slate-900 dark:bg-slate-800 rounded-lg p-4 border border-slate-700 dark:border-slate-600 shadow-lg">
                <div className="flex items-center mb-3">
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

      {/* Tech Stack Grid */}
      <section className="py-8 px-6 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-6 text-slate-800 dark:text-slate-200">Technology Stack</h2>
          <TechStackGrid />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-8 px-6 bg-white dark:bg-slate-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-slate-800 dark:text-slate-200">Technical Skills</h2>
          
          {/* Detailed Skills by Category */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map((category, index) => <Card key={index} className="bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-800 dark:to-slate-700 border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="pb-3">
                  <CardTitle className="text-slate-800 dark:text-slate-200 text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => <Badge key={skillIndex} variant="secondary" className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 mr-2 mb-2 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                        {skill}
                      </Badge>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-12 px-6 relative overflow-hidden">
        {/* Elegant background with 3D depth */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.3),transparent)] animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.1),transparent)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(59,130,246,0.2),transparent)] animate-pulse" style={{
          animationDelay: '2s'
        }}></div>
          
          {/* Floating geometric shapes for depth */}
          <div className="absolute top-20 left-10 w-32 h-32 border border-white/10 rounded-full animate-spin" style={{
          animationDuration: '20s'
        }}></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-blue-300/20 rounded-lg rotate-45 animate-pulse"></div>
          <div className="absolute top-1/2 right-10 w-16 h-16 border border-purple-300/20 rotate-12 animate-bounce" style={{
          animationDelay: '1s'
        }}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            {/* 3D Header with elegant typography */}
            <div className="relative mb-6">
              <div className="absolute inset-0 blur-lg">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
                  Professional Certifications
                </h2>
              </div>
              <h2 className="relative text-4xl font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent mb-3">
                Professional Certifications
              </h2>
            </div>

            {/* Elegant subtitle */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-blue-200/20 blur-xl rounded-full"></div>
              <p className="relative text-white/90 max-w-2xl mx-auto text-lg leading-relaxed font-light">
                Distinguished achievements in technology excellence, validated through industry-recognized certifications
              </p>
            </div>

            {/* Decorative line with 3D effect */}
            <div className="mt-6 flex justify-center">
              <div className="relative">
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
                <div className="absolute inset-0 w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent blur-sm"></div>
              </div>
            </div>
          </div>

          {/* 3D Certificate Cards */}
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 perspective-1000">
            {certifications.map((cert, index) => <div key={index} className="group relative transform-gpu">
                {/* 3D Card Container with perspective */}
                <div className="relative preserve-3d group-hover:rotate-y-12 transition-all duration-700 ease-out">
                  
                  {/* Card Shadow Layers for 3D depth */}
                  <div className="absolute inset-0 bg-black/20 rounded-2xl transform translate-x-4 translate-y-4 blur-xl"></div>
                  <div className="absolute inset-0 bg-black/10 rounded-2xl transform translate-x-2 translate-y-2 blur-lg"></div>
                  
                  {/* Main Certificate Card */}
                  <div className="relative bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl border border-white/20 shadow-2xl backdrop-blur-sm overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-3xl">
                    
                    {/* Premium border effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400/20 via-transparent to-purple-400/20 p-[1px]">
                      <div className="h-full w-full rounded-2xl bg-gradient-to-br from-white via-gray-50 to-white"></div>
                    </div>

                    {/* Certificate Header with ribbon */}
                    <div className="relative p-6 pb-4">
                      {/* Premium ribbon */}
                      <div className="absolute -top-2 -right-2 z-20">
                        <div className="bg-gradient-to-r from-amber-500 to-yellow-400 text-white px-4 py-2 rounded-full shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                          <div className="flex items-center space-x-2">
                            <Award className="h-4 w-4" />
                            <span className="font-bold text-xs tracking-wide">CERTIFIED</span>
                          </div>
                        </div>
                      </div>

                      {/* Institution badge */}
                      <div className="mb-3">
                        <Badge className="bg-gradient-to-r from-slate-700 to-slate-600 text-white border-0 px-3 py-1 text-sm font-medium tracking-wide shadow-lg">
                          {cert.provider}
                        </Badge>
                      </div>

                      {/* Certificate title with 3D text effect */}
                      <div className="relative mb-3">
                        <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">
                          {cert.title}
                        </h3>
                        <div className="flex items-center space-x-3 text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span className="font-medium">{cert.date}</span>
                          </div>
                          <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                          <span className="text-sm">Professional Level</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed text-sm mb-4">
                        {cert.description}
                      </p>

                      {/* Skills with elegant badges */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-800 flex items-center text-sm">
                          <Code className="h-4 w-4 mr-2 text-blue-600" />
                          Core Competencies
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {cert.skills.map((skill, skillIndex) => <div key={skillIndex} className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-lg px-3 py-2 text-center">
                              <span className="text-blue-800 font-medium text-sm">{skill}</span>
                            </div>)}
                        </div>
                      </div>
                    </div>

                    {/* Certificate Action */}
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-200 pt-4">
                        <Button className="w-full bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-white shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl font-medium tracking-wide" asChild>
                          <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2">
                            <GraduationCap className="h-5 w-5" />
                            <span>View Certificate</span>
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>

                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/5 via-transparent to-purple-400/5 pointer-events-none"></div>
                  </div>

                  {/* Floating certification seal */}
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 z-10">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Ambient light effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-2xl blur-3xl group-hover:blur-2xl transition-all duration-500 -z-10"></div>
              </div>)}
          </div>

          {/* Elegant stats footer */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-8 bg-white/10 backdrop-blur-sm rounded-full px-8 py-3 border border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">{certifications.length}</div>
                <div className="text-white/80 text-sm font-medium">Certifications</div>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">2025</div>
                <div className="text-white/80 text-sm font-medium">Latest Year</div>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">100%</div>
                <div className="text-white/80 text-sm font-medium">Completion</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-8 px-6 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-slate-800 dark:text-slate-200">Featured Projects</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => <Card key={index} className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-blue-400 transition-all duration-300 group hover:shadow-xl transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-600 text-white shadow-lg">{project.date}</Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <Database className="h-8 w-8 text-white opacity-80" />
                        <Server className="h-8 w-8 text-white opacity-80" />
                        <Network className="h-8 w-8 text-white opacity-80" />
                      </div>
                      {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200 rounded-full p-2 group/github">
                          <Github className="h-5 w-5 text-white group-hover/github:scale-110 transition-transform duration-200" />
                        </a>}
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-slate-800 dark:text-slate-200 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">{project.title}</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => <Badge key={tech} variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors">
                          {tech}
                        </Badge>)}
                    </div>
                    
                    {/* Tech Icons Highlights */}
                    <div className="border-t border-slate-200 dark:border-slate-700 pt-3">
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Key Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.techIcons.map((tech, techIndex) => <div key={techIndex} className="flex items-center space-x-2 bg-slate-50 dark:bg-slate-900 rounded-lg px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                            <tech.icon className={`h-5 w-5 ${tech.color}`} />
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{tech.name}</span>
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
      <section id="experience" className="py-8 px-6 bg-white dark:bg-slate-900">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-slate-800 dark:text-slate-200">Experience</h2>
          <div className="space-y-6">
            {experience.map((exp, index) => <div key={index} className="relative pl-8 border-l-2 border-blue-300 dark:border-blue-600">
                <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-500 rounded-full -left-2 top-0 shadow-lg"></div>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 rounded-lg p-5 border border-blue-200 dark:border-blue-700 hover:border-blue-300 dark:hover:border-blue-500 transition-colors">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">{exp.role}</h3>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                    <span className="text-blue-700 dark:text-blue-400 font-medium">{exp.company}</span>
                    <div className="text-slate-600 dark:text-slate-400 text-sm">
                      <div className="font-medium">{exp.period}</div>
                      <div>{exp.location}</div>
                    </div>
                  </div>
                  <ul className="text-slate-700 dark:text-slate-300 space-y-1">
                    {exp.description.map((item, itemIndex) => <li key={itemIndex} className="flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                        <span>{item}</span>
                      </li>)}
                  </ul>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-8 px-6 bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-900 dark:to-purple-900">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-slate-800 dark:text-slate-200">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => <div key={index} className="relative pl-8 border-l-2 border-purple-300 dark:border-purple-600">
                <div className="absolute w-4 h-4 bg-purple-600 dark:bg-purple-500 rounded-full -left-2 top-0 shadow-lg"></div>
                <div className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-purple-200 dark:border-purple-700 hover:border-purple-300 dark:hover:border-purple-500 transition-colors shadow-md">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">{edu.degree}</h3>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                    <span className="text-purple-700 dark:text-purple-400 font-medium">{edu.institution}</span>
                    <div className="text-slate-600 dark:text-slate-400 text-sm">
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
      <section id="contact" className="py-8 px-6 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl mb-6 text-blue-100">
            Ready to discuss data engineering opportunities? Let's build something amazing together.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://github.com/TirupathiRaoLukalapu" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 border border-gray-200 hover:border-gray-300">
              <Github className="h-6 w-6 text-slate-600 hover:text-slate-800" />
            </a>
            
            <HoverCard>
              <HoverCardTrigger asChild>
                <a href="https://www.linkedin.com/in/tirupathi-rao-lukalapu-a719912aa/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 border border-blue-200 hover:border-blue-400">
                  <Linkedin className="h-6 w-6 text-blue-600 hover:text-blue-700" />
                </a>
              </HoverCardTrigger>
              <HoverCardContent className="w-80 bg-white dark:bg-slate-800 border-gray-200 dark:border-gray-700">
                <div className="flex justify-between space-x-4">
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold dark:text-white">Tirupathi Rao Lukalapu</h4>
                    <p className="text-sm text-muted-foreground dark:text-gray-300">
                      Data Engineer at Innovaccer Inc.
                    </p>
                    <div className="flex items-center pt-2">
                      <Linkedin className="mr-2 h-4 w-4 opacity-70 text-blue-600" />
                      <span className="text-xs text-muted-foreground dark:text-gray-400">
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
      <footer className="py-4 px-6 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto text-center text-slate-600 dark:text-slate-400">
          <p>&copy; 2024 Tirupathi Rao. Built with passion for data engineering.</p>
        </div>
      </footer>

      {/* Back to Top Button */}
      <BackToTop />
    </div>;
};

export default Index;
