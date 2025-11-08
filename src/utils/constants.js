import alAin from "../assets/images/alAin.png";
import cars from "../assets/images/cars.png";
import eduQuest from "../assets/images/eduQuest.png";
import crm from "../assets/images/crm.png";
import portfolio from "../assets/images/portfolio.png";
import socialMedia from "../assets/images/socialMedia.png";
import httpTool from "../assets/images/httpTool.png";
import alEkhwan from "../assets/images/al-ekhwan.png";
import toxiQr from "../assets/images/toxi-qr.png";

// src/utils/constants.js
export const SKILLS_DATA = [
  { name: "HTML/CSS", percentage: 95 },
  { name: "JavaScript", percentage: 90 },
  { name: "React.js", percentage: 85 },
  { name: "Next.js", percentage: 70 },
  { name: "Node.js", percentage: 60 },
];

// export const PROJECTS_DATA = [
//   {
//     id: 1,
//     title: "E-commerce Dashboard",
//     description:
//       "A comprehensive dashboard for managing e-commerce operations with real-time analytics.",
//     image: "project1",
//     category: "react",
//     tags: ["React", "Redux", "Material UI"],
//     githubUrl: "#",
//     liveUrl: "#",
//   },
//   {
//     id: 2,
//     title: "Portfolio Website",
//     description:
//       "A responsive portfolio website built with HTML, CSS, and vanilla JavaScript.",
//     image: "project2",
//     category: "html-css-js",
//     tags: ["HTML5", "CSS3", "JavaScript"],
//     githubUrl: "#",
//     liveUrl: "#",
//   },
//   {
//     id: 3,
//     title: "Task Management App",
//     description:
//       "A Kanban-style task management application with drag-and-drop functionality.",
//     image: "project3",
//     category: "react",
//     tags: ["React", "Firebase", "Tailwind CSS"],
//     githubUrl: "#",
//     liveUrl: "#",
//   },
//   {
//     id: 4,
//     title: "Weather App",
//     description:
//       "A weather application that displays current weather and forecasts for any location.",
//     image: "project4",
//     category: "html-css-js",
//     tags: ["HTML5", "CSS3", "JavaScript", "API"],
//     githubUrl: "#",
//     liveUrl: "#",
//   },
//   {
//     id: 5,
//     title: "Social Media Dashboard",
//     description:
//       "A dashboard for managing multiple social media accounts from one place.",
//     image: "project5",
//     category: "react",
//     tags: ["React", "Node.js", "MongoDB"],
//     githubUrl: "#",
//     liveUrl: "#",
//   },
//   {
//     id: 6,
//     title: "Recipe Finder",
//     description:
//       "An application to find recipes based on available ingredients with nutritional information.",
//     image: "project6",
//     category: "html-css-js",
//     tags: ["HTML5", "CSS3", "JavaScript", "API"],
//     githubUrl: "#",
//     liveUrl: "#",
//   },
// ];

export const PROJECTS_DATA = [
  {
    id: 0,
    title: "Personal Porfolio",
    description:
      "This is the personal portfolio website showcasing my web development projects and skills.",
    image: portfolio,
    category: "react",
    tags: ["React", "Portfolio", "Vite"],
    githubUrl: "https://github.com/MohammadBohlak/myPortfolio.git",
    liveUrl: "https://my-portfolio-seven-woad-42.vercel.app/",
  },
  {
    id: 8,
    title: "Toxi-QR",
    description:
      "A multi-page web app that uses AI to detect whether a snake in an uploaded image is venomous or not, followed by expert verification and user guidance.",
    image: toxiQr,
    category: "react",
    tags: ["React", "AI", "Image Detection"],
    githubUrl: "https://github.com/MohammadBohlak/toxi-qr.git",
    liveUrl: "https://toxi-qr.vercel.app/",
  },
  {
    id: 7,
    title: "Al-Ekhwan Construction",
    description:
      "Corporate website for Al-Ekhwan Construction showcasing services, projects, and contact information with a modern UI.",
    image: alEkhwan,
    category: "react",
    tags: ["React", "Corporate", "UI"],
    githubUrl: "https://al-ekhwan.vercel.app/",
    liveUrl: "https://al-ekhwan.vercel.app/",
  },
  {
    id: 1,
    title: "CRM System",
    description: "CRM interface design for a simple customer management system",
    image: crm,
    category: "react",
    tags: ["React", "CRM", "Dashboard"],
    githubUrl: "https://github.com/MohammadBohlak/crm-react.git",
    liveUrl: "https://crm-react-three.vercel.app/",
  },
  {
    id: 2,
    title: "Education platform",
    description: "Website design for an interactive educational platform",
    image: eduQuest,
    category: "react",
    tags: ["React", "Education", "UI"],
    githubUrl: "https://github.com/MohammadBohlak/EDU-Quest.git",
    liveUrl: "https://edu-quest-lemon.vercel.app/",
  },
  {
    id: 3,
    title: "Al Ain",
    description: "Al Ain Modern Contracting Establishment",
    image: alAin,
    category: "react",
    tags: ["React", "Construction", "Landing Page"],
    githubUrl: "https://github.com/MohammadBohlak/al-ain-react.js.git",
    liveUrl: "https://al-ain-project.vercel.app/",
  },
  {
    id: 4,
    title: "Cars",
    description: "Car sales website design using HTML, CSS, and JavaScript",
    image: cars,
    category: "html-css-js",
    tags: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/MohammadBohlak/projectCars1.git",
    liveUrl: "https://project-cars1.vercel.app/index.html",
  },
  {
    id: 5,
    title: "Social Media",
    description: "Social media website using HTML, CSS, and JavaScript",
    image: socialMedia,
    category: "html-css-js",
    tags: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/MohammadBohlak/social-media-project-1.git",
    liveUrl: "https://social-media-project-theta.vercel.app/",
  },
  {
    id: 6,
    title: "HTTP Tool",
    description: "The HTTPTool allows you to send HTTP requests.",
    image: httpTool,
    category: "html-css-js",
    tags: ["HTML5", "CSS3", "JavaScript", "API"],
    githubUrl: "https://github.com/MohammadBohlak/API-tool.git",
    liveUrl: "https://api-tool-lake.vercel.app/",
  },
];
export const SOCIAL_LINKS = [
  {
    icon: "fab fa-linkedin-in",
    url: "https://www.linkedin.com/in/mohammad-bohlak-494aa6371/",
  },
  { icon: "fab fa-github", url: "https://github.com/MohammadBohlak" },
  { icon: "fa-brands fa-whatsapp", url: "https://wa.me/963998026793" },
];
// export const CONTACT_INFO = [
//   { icon: "fas fa-envelope", text: "mohammad.bohlak5@gmail.com" },
//   { icon: "fas fa-phone", text: "+963 998 026 793" },
//   { icon: "fas fa-map-marker-alt", text: "Syria, Homs" },
// ];
export const CONTACT_INFO = [
  {
    icon: "fas fa-envelope",
    text: "mohammad.bohlak5@gmail.com",
    link: "mailto:mohammad.bohlak5@gmail.com",
  },
  {
    icon: "fas fa-phone",
    text: "+963 998 026 793",
    link: "tel:+963998026793",
  },
  {
    icon: "fas fa-map-marker-alt",
    text: "Syria, Homs",
    link: "#",
  },
];
