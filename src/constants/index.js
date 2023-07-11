import {
  mobile,
  backend,
  bootstrap,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  laravel,
  mysql,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Student",
    icon: mobile,
  },
  {
    title: "Photographer",
    icon: backend,
  },
  {
    title: "Swimming",
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
    name: "React JS",
    icon: reactjs,
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
    title: "HTML Basic",
    frName: "HTML basic",
    icon: html,
    iconBg: "#383E56",
    date: "October 2020 - December 2021",
  },
  {
    title: "CSS 3 Basic",
    frName: "CSS basic",
    icon: css,
    iconBg: "#383E56",
    date: "January 2021 - February 2021",
  },
  {
    title: "Bootstrap",
    frName: "Bootstrap",
    icon: bootstrap,
    iconBg: "#383E56",
    date: "March 2021 - April 2021",
  },
  {
    title: "Javascript",
    frName: "Javascript",
    icon: javascript,
    iconBg: "#383E56",
    date: "May 2021 - Oktober 2021",
  },
  {
    title: "NodeJS",
    frName: "NodeJS",
    icon: nodejs,
    iconBg: "#383E56",
    date: "December 2021 - January 2022",
  },
  {
    title: "Git",
    frName: "Git",
    icon: git,
    iconBg: "#383E56",
    date: "January 2022 - February 2022",
  },
  {
    title: "Mysql",
    frName: "Mysql",
    icon: mysql,
    iconBg: "#383E56",
    date: "March 2022 - April 2022",
  },
  {
    title: "Php",
    frName: "Php",
    icon: mysql,
    iconBg: "#383E56",
    date: "On Progress",
  },
  {
    title: "Laravel",
    frName: "Laravel",
    icon: laravel,
    iconBg: "#383E56",
    date: "On Progress",
  },
  {
    title: "Tailwindcss",
    frName: "tailwindcss",
    icon: tailwind,
    iconBg: "#383E56",
    date: "On Progress",
  },
  {
    title: "Reactjs",
    frName: "ReactJS",
    icon: reactjs,
    iconBg: "#383E56",
    date: "On Progress",
  },
  {
    title: "Threejs",
    frName: "Threejs",
    icon: threejs,
    iconBg: "#383E56",
    date: "On Progress",
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [];

export { services, technologies, experiences, testimonials, projects };
