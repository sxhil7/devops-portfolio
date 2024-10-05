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
    title: "DevOps Engineer",
    icon: web,
  },
  {
    title: "Cloud Engineer",
    icon: mobile,
  },
  {
    title: "Site Reliability Engineer",
    icon: backend,
  },
  {
    title: "DevOps Consultant",
    icon: creator,
  },
];

const technologies = [
  {
    name: "aws",
    icon: css,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "jenkins",
    icon: javascript,
  },
  {
    name: "terraform",
    icon: typescript,
  },
  {
    name: "kubernetes",
    icon: reactjs,
  },
  {
    name: "ansible",
    icon: redux,
  },
  {
    name: "gitlab",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "linux",
    icon: mongodb,
  },
  {
    name: "python",
    icon: threejs,
  },
  {
    name: "Grafana",
    icon: nodejs,
  },
  {
    name: "SonarQube",
    icon: figma,
  },
  {
    name: "redis",
    icon: html,
  },
];

const experiences = [
  {
    title: "Jr DevOps Engineer",
    company_name: "Indiconnect Paytech Pvt Ltd",
    icon: starbucks, // replace starbucks logo with IC
    iconBg: "#E6DEDD",
    date: "Nov 2023 - Present",
    points: [
      "Setting up and maintaining CI/CD pipelines to automate build, test, and deployment.",
      "Deploying and monitoring applications for ensuring smooth operation and minimal downtime.",
      "Assist in implementing and maintaining network security measures to protect systems and data across projects.",
      "Investigating and resolving incidents, identifying root causes and implementing fixes to prevent future issues.",
    ],
  },
  {
    title: "DevOps Intern",
    company_name: "CGS Pvt Ltd",
    icon: tesla, // replace with CGS
    iconBg: "#E6DEDD",
    date: "Dec 2022 - May 2023",
    points: [
      "Assist in provisioning, configuring, and maintaining development and production infrastructure using AWS.",
      "Learned about networking concepts, load balancing, and security configurations.",
      "Working with CI/CD tools like Jenkins, Git to automate build, test, and deployment processes.",
      "setting up virtual machines, containers (Docker), and Kubernetes environments.",
    ],
  }
];

const testimonials = [
  
];

const projects = [
  {
    name: "Venko",
    description:
      "A all in one school erp platform that allows schools to manage there operations, fees management and LMS using web and mobile application.",
    tags: [
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "Android",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://venko.in/",
  },
  {
    name: "Finjoy",
    description:
      "Finjoy is a affiliate marketing mobile application which allow users to earn extra income by selling multiple product e.g credit cards, savings account, personal loan etc.",
    tags: [
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
      {
        name: ".NET",
        color: "green-text-gradient",
      },
      {
        name: "Flutter",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://finjoyapp.com/",
  },
  {
    name: "Web app on 3-tier",
    description:
      "in This project i deployed highly available and secured Java application on 3-tier architecture and providing application access to the end users from public internet.",
    tags: [
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "green-text-gradient",
      },
      {
        name: "Bitbucket ",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
