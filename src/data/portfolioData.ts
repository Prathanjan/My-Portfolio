import { Project, SkillItem, Certification, EducationItem, RecruiterInfo } from '../types';
import profilePic from '../assets/images/p3.jpeg';
import certPythonPic from '../assets/images/Python certificate.jpeg';
import certDataAnalyticsPic from '../assets/images/Internship certificate.jpeg';

export const recruiterInfo: RecruiterInfo = {
  name: "PRATHANJAN.P",
  headline: "Aspiring Data Analyst | B.Tech Information Technology Student | Python Developer",
  shortIntro: "A motivated B.Tech Information Technology student with practical experience in Python programming and Data Analytics fundamentals.\n\nDemonstrates strong analytical thinking through academic and personal projects.\n\nCurrently building expertise in Power BI, NumPy, Pandas, Seaborn, Business Intelligence and Data Visualization.\n\nStrong willingness to learn, adapt and solve business problems using data.\n\nLooking for opportunities as a Data Analyst to apply technical knowledge while continuously growing professionally.",
  email: "prathanjan2005@gmail.com",
  github: "https://github.com/Prathanjan",
  linkedin: "https://www.linkedin.com/in/prathanjan-p-45ba10372",
  location: "Karur, Tamil Nadu, India",
  availability: "Available for Data Analyst Roles & Internships",
  profileImage: profilePic,
  stats: {
    projectsCount: "3",
    skillsCount: "13",
    cgpa: "8.0",
    certificationsCount: "3"
  }
};

export const typingKeywords = [
  "Aspiring Data Analyst",
  "B.Tech Information Technology Student",
  "Python Developer",
  "Business Intelligence Enthusiast"
];

export const aboutData = {
  title: "ABOUT ME",
  bioParagraphs: [
    "I am a B.Tech Information Technology student with a strong interest in Data Analytics and Business Intelligence.",
    "I enjoy solving real-world problems through data-driven decision making and continuously improve my analytical skills by working on practical projects.",
    "Currently I am focusing on Python, SQL, Excel, Power BI, Data Cleaning, Data Visualization and Business Intelligence while expanding my knowledge of modern analytics tools.",
    "My goal is to begin my career as a Data Analyst where I can transform raw data into meaningful insights that support better business decisions."
  ],
  pillars: [
    {
      title: "Data Analytics & BI",
      description: "Transforming complex datasets into actionable business insights and visual dashboards.",
      icon: "BarChart3"
    },
    {
      title: "Python Programming",
      description: "Developing clean, structured scripts and tools for data processing and analysis.",
      icon: "FileCode"
    },
    {
      title: "Database Querying",
      description: "Writing relational SQL queries for data extraction, filtering, and aggregation.",
      icon: "Database"
    },
    {
      title: "Analytical Problem Solving",
      description: "Applying structured logical thinking to solve real-world operational challenges.",
      icon: "Lightbulb"
    }
  ]
};

export const skillsData: SkillItem[] = [
  // Programming
  { name: "Python", category: "Programming", iconName: "FileCode", level: 90, description: "Data manipulation, scripts, automation & analytics" },

  // Database
  { name: "SQL", category: "Database", iconName: "Database", level: 85, description: "Queries, joins, aggregations & data extraction" },

  // Spreadsheet
  { name: "Excel", category: "Spreadsheet", iconName: "Table", level: 85, description: "Formulas, lookup functions, pivot tables & charts" },

  // Coding
  { name: "Vibe Coding", category: "Coding", iconName: "Sparkles", level: 90, description: "AI-assisted rapid prototyping & developer workflow" },

  // Python Libraries
  { name: "Python Libraries (NumPy, Pandas, Seaborn)", category: "Python Libraries", iconName: "Table2", level: 85, description: "Data manipulation, dataframes, vectorized math & statistical plots" },

  // Tools
  { name: "Git", category: "Tools", iconName: "GitBranch", level: 70, description: "Version control & repository branching" },
  { name: "GitHub", category: "Tools", iconName: "Github", level: 80, description: "Project hosting, collaboration & code repositories" },
  { name: "VS Code", category: "Tools", iconName: "Code", level: 90, description: "IDE, extensions, debugging & development environment" },

  // Currently Learning
  { name: "Power BI Dashboards", category: "Currently Learning", iconName: "PieChart", level: 75, description: "Interactive report design & DAX metrics", isCurrentlyLearning: true },
  { name: "Business Intelligence", category: "Currently Learning", iconName: "TrendingUp", level: 75, description: "Key performance indicators & business insights", isCurrentlyLearning: true },
  { name: "Data Cleaning & Preprocessing", category: "Currently Learning", iconName: "Filter", level: 80, description: "Handling missing values & normalizing datasets", isCurrentlyLearning: true },
  { name: "Data Visualization & Storytelling", category: "Currently Learning", iconName: "Eye", level: 80, description: "Effective visual communication & dashboard design", isCurrentlyLearning: true },
  { name: "Statistics for Data Analytics", category: "Currently Learning", iconName: "Calculator", level: 75, description: "Descriptive statistics, trends & distributions", isCurrentlyLearning: true }
];

export const projectsData: Project[] = [
  {
    id: "medassist-ai",
    title: "MedAssist AI",
    subtitle: "AI-Powered Healthcare Guidance Assistant",
    status: "Completed",
    description: "An AI-powered healthcare assistant that helps users understand symptoms, receive intelligent health guidance, and access healthcare information through an interactive interface.",
    longDescription: "MedAssist AI is a Python-powered intelligent healthcare assistant that enables users to input symptoms, query health information, and receive structured preliminary health guidance. Built with an intuitive conversational interface, it bridges information gaps for users seeking quick medical awareness.",
    technologies: ["Python", "AI", "Healthcare"],
    category: "Healthcare AI",
    githubUrl: "https://github.com/Prathanjan/MedAssist-AI.git",
    highlights: [
      "AI-driven symptom evaluation and health guidance assistant",
      "Interactive conversational user interface built for ease of use",
      "Python-based backend processing health information queries"
    ],
    metrics: [
      { label: "Project Status", value: "Completed" },
      { label: "Core Tech", value: "Python + AI" }
    ]
  },
  {
    id: "smart-healthcare-management",
    title: "Smart Healthcare Management & Analytics Platform",
    subtitle: "Collaborative Academic Healthcare Analytics System",
    status: "Current Project",
    isCollaborativeAcademic: true,
    description: "A healthcare analytics platform that provides operational insights through dashboards, patient analytics, hospital management metrics, and data visualization.",
    longDescription: "A collaborative academic project focused on developing an end-to-end healthcare analytics management platform. Designed to provide hospital administrators and medical staff with clear visual dashboards, patient flow analytics, and operational metrics to streamline healthcare delivery.",
    technologies: ["Python", "Healthcare Analytics", "SQL", "Dashboards"],
    category: "Healthcare Analytics",
    githubUrl: "https://github.com/santhosh123san/smart-healthcare-management-analytics-platform.git",
    highlights: [
      "Collaborative academic project for healthcare data analytics",
      "Interactive dashboards analyzing hospital management metrics",
      "Patient flow tracking and operational data visualization"
    ],
    metrics: [
      { label: "Nature", value: "Collaborative Academic" },
      { label: "Status", value: "Current Project" }
    ]
  },
  {
    id: "offline-payment-system",
    title: "Offline to Offline Payment System",
    subtitle: "Internet-Independent Secure Payment Solution",
    status: "Coming Soon",
    description: "An innovative payment solution focused on enabling secure offline transactions without continuous internet connectivity.",
    longDescription: "An innovative financial technology concept designed to facilitate offline peer-to-peer and merchant payment transactions without requiring an active internet connection. Focuses on secure token verification and reliable offline reconciliation.",
    technologies: ["Python", "FinTech", "Security"],
    category: "FinTech / Payments",
    githubUrl: "https://github.com/Prathanjan",
    highlights: [
      "Enables transactions in areas with limited or zero internet connectivity",
      "Secure offline token verification logic",
      "Innovative transaction security architecture"
    ],
    metrics: [
      { label: "Status", value: "Coming Soon" },
      { label: "Domain", value: "Offline FinTech" }
    ]
  }
];

export const certificationsData: Certification[] = [
  {
    id: "cert-python",
    title: "Python Certification",
    issuer: "S.S.S. Computers Academy",
    date: "September 2025",
    credentialId: "REG-396/07",
    status: "Completed",
    imageUrl: certPythonPic,
    skillsVerified: ["Python Language", "Programming Logic", "Data Handling", "Grade 'O' (Outstanding)"],
    description: "Awarded Certificate of Merit for successfully completing two months Certificate Course in Python Language with Grade 'O' (Outstanding)."
  },
  {
    id: "cert-analytics",
    title: "Data Analytics Internship Certificate",
    issuer: "TechnoHacks Solutions Pvt. Ltd.",
    date: "December 2025",
    credentialId: "TH11720",
    status: "Completed",
    imageUrl: certDataAnalyticsPic,
    skillsVerified: ["Data Analytics", "Data Cleaning", "Data Visualization", "Python Data Analysis"],
    description: "Successfully completed 1-month Data Analytics internship at TechnoHacks Solutions Pvt. Ltd. (ISO 9001:2015 Certified)."
  },
  {
    id: "cert-sql",
    title: "SQL Certification (Currently Pursuing)",
    issuer: "Currently Pursuing",
    date: "In Progress",
    credentialId: "SQL-IN-PROGRESS",
    status: "In Progress",
    skillsVerified: ["SQL Queries", "Relational Databases", "Data Aggregation", "Database Fundamentals"],
    description: "SQL Certification (Currently Pursuing) — actively mastering relational database querying, joins, and data extraction."
  }
];

export const educationData: EducationItem = {
  degree: "Bachelor of Technology (B.Tech)",
  specialization: "Information Technology",
  institution: "Mahendra Engineering College",
  timeline: "Graduating 2026",
  cgpa: "CGPA: 8.0",
  highlights: [
    "Consistent academic performance with CGPA: 8.0",
    "Specialized coursework in Python, SQL, DBMS, and Data Analytics",
    "Completed Higher Secondary Education at Govt High Secondary School, Karur"
  ],
  coursework: [
    "Database Management Systems (DBMS)",
    "Python Programming",
    "Data Analytics Fundamentals",
    "Data Structures & Algorithms",
    "Probability & Applied Statistics",
    "Web Technologies"
  ]
};
