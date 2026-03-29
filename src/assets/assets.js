import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot , FaHtml5} from 'react-icons/fa';

import profileImg from '../assets/profile.jpg';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';
import coffeeshop from '../assets/coffeeshop.jpg'
import { SiTailwindcss } from 'react-icons/si';
import { title } from 'framer-motion/client';


export const assets = {
    profileImg,
}


export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: 'Problem Solving Mindset',
    description: 'I approach every project with a problem-solving mindset, turning complex ideas into simple, elegant frontend solutions.',
    color: 'text-purple'
  },
  {
    icon: FaPaintBrush,
    title: 'Design',
    description: 'Creating clean and user-friendly interfaces.',
    color: 'text-pink'
  },
  {
    icon: FaCode,
    title: 'Clean & Modern Code',
    description: 'Writing maintainable, efficient, and scalable code using the latest frontend technologies.',
    color: 'text-blue'
  }
];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaHtml5,
    description: 'HTML, CSS, JavaScript, building interactive and user-friendly web pages.',
    tags: ['HTML5','CSS3','javaScript']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Basic Python knowledge for backend development, familiar with core concepts..',
    tags: ['Python']
  },
  {
    title: 'Responsive Websites',
    icon: FaMobileAlt,
    description: 'Designing mobile-friendly layouts, flexible grids, media queries, adaptive UI.',
    tags: ['React Native', 'Flutter', 'Ionic', 'Swift']
  },
  {
    title: 'Css Framwork',
    icon: SiTailwindcss,
    description: 'Bootstrap, Tailwind, pre-built styles and utilities for faster development.',
    tags: ['Tailwind','Bootstrap']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Git, VS Code, npm, Vite, essential development and collaboration utilities.',
    tags: ['Git' , 'GitHub']
  }
];



export const projects = [
  {
    title: "Coffee Shop Website",
    description: "I have built a responsive coffee shop website that works smoothly on all devices, including mobile, tablet, and desktop..",
    image: coffeeshop,
    tech: ["HTML", "CSS", "JavaScript", "Responsive"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "https://himanshunagar18.github.io/coffee-shop-project/",
  },
  {
    title: "My Portfolio Website",
    description: "A modern and responsive portfolio website built using React to showcase my projects, skills, experience, achievements, certifications, and technical expertise...",
    image: projectImg4,
    tech: ["HTML", "CSS", "Tailwind CSS", "REACT JS"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "#",
  },
  {
    title: "Fitness Tracker",
    description: "A mobile app for tracking workouts, nutrition, and health metrics.",
    image: projectImg3,
    tech: ["React Native", "GraphQL", "MySQL", "Chart.js"],
    icons: [FaReact, FaDatabase],
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg4,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    demo: "#",
  },
  {
    title: "Chat App",
    description: "A real-time chat application with group messaging, emojis, and file sharing.",
    image: projectImg5,
    tech: ["Socket.IO", "React", "Node.js", "MongoDB"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "#",
  },
  {
    title: "AI Image Generator",
    description: "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
    image: projectImg6,
    tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
  }
];


export const workData = [
  {
    role: "No Experience ( Fresher's )",
  },
];
