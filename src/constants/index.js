import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "3D Designer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Gamer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Angular Spring Developer",
    company_name: "TimeLess",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Juin 2022 - Aout 2023",
    points: [
      "Developed a full-stack scan application using Spring Boot and Angular",
      "Designed the backend architecture using Java and Spring Boot, providing RESTful APIs for the frontend to consume.",
      "Created the user interface for the application using Angular, allowing users to interact with the application and scan documents.",
      "Implemented a MySQL database to store user data and scan results, enabling users to access their scan history and results at any time.",
    ],
  },
  /* {
    title: "Frontend Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  }, */
];

const testimonials = [
  {
    testimonial:
      "Your 3D work is exceptional! The attention to detail and mastery of software are impressive, resulting in a stunning and immersive experience. Keep up the great work!",
    name: "Yosra",
    designation: "Teacher",
    company: "ESPRIT",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Your gaming artwork is amazing! Your creativity and attention to detail are impressive, and your ability to capture the essence of each game is unmatched.",
    name: "Mohamed",
    designation: "COO",
    company: "TimeLess",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Your commercial video is amazing! The presentation and visuals are stunning and engaging, and it's clear a lot of effort went into creating it.",
    name: "Ons",
    designation: "Teacher",
    company: "ESPRIT",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Aurora",
    description:
      "A Full Stack web application for discovering unique camping experiences and Renting camping gears",
    tags: [
      {
        name: "Spring Boot",
        color: "blue-text-gradient",
      },
      {
        name: "MySql",
        color: "green-text-gradient",
      },
      {
        name: "Angular",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Dhaou-Jawhar/Pidev-Aurora",
  },
  {
    name: "ArtyCamp",
    description:
      "A social media Full Stack web application for visual arts and creative inspiration",
    tags: [
      {
        name: "Java FX",
        color: "blue-text-gradient",
      },
      {
        name: "PHP Symfony",
        color: "green-text-gradient",
      },
      {
        name: "MySqL",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Dhaou-Jawhar/ArtyCamp",
  },
  {
    name: "Smart Esprit",
    description:
      "A restaurant management desktop application and student housing",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "Glade GTK",
        color: "green-text-gradient",
      },
      {
        name: "Ubunto",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Dhaou-Jawhar/APP-SMART-ESPRIT",
  },
];

export { services, technologies, experiences, testimonials, projects };