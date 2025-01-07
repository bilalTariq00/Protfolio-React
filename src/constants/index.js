import { frame } from "framer-motion";
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
   
    threejs,
    wordpress,
    nextjs,
    materialUI,
    bootstrap,
    firebase,
    proj1,
    proj2,
    proj3,
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
      title: "MERN Developer",
      icon: backend,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "NEXT JS Developer",
      icon: web,
    },
    {
      title: "Vue Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
       name:"HTML",
       icon:html,
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "Material UI",
      icon: materialUI,
    },
    {
      name: "BootStrap",
      icon: bootstrap,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "WordPress",
      icon: wordpress,
    },
    {
      name: "FireBase",
      icon: firebase,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name:"Node JS",
      icon: nodejs,
    },
  ];
  
  const experiences = [
    {
      title: "JS Developer",
      company_name: "Self",
      icon: javascript,
      iconBg: "#383E56",
      date: "March 2021 - April 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React.js Developer",
      company_name: "Self",
      icon: reactjs,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Next JS Developer",
      company_name: "Self",
      icon: mobile,
      iconBg: "#383E56",
      date: "Jan 2023 - Oct 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React.js Developer",
      company_name: "Greens International",
      icon: reactjs,
      iconBg: "#E6DEDD",
      date: "Oct 2023 - Feb 2024",
      points: [
        "Developed UI components using HTML, CSS, JavaScript, React, NextJS",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Worked with version control systems like Git for project management and collaboration..",
      ],
    },
    
    {
      title: "Frontend Developer",
      company_name: "Codebreaker Technologies",
      icon: web,
      iconBg: "#E6DEDD",
      date: "May 2024 - Jul 2024 ",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full Stack (MERN) Developer",
      company_name: "Softwise Solutions",
      icon: backend,
      iconBg: "#E6DEDD",
      date: "Aug 2024 - Nov 2024 ",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Practiced MongoDB Express and Node.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
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
  
  const projects = [
    {
      name: "Resturant Menu",
      description:
        "I developed a Restaurant Menu web application using React.js, focusing on delivering a seamless and interactive user experience. The application allows users to browse and explore a variety of dishes, with features like dynamic filtering, detailed item descriptions, and an intuitive design. The project showcases my ability to create responsive and efficient web applications, utilizing React's component-based architecture to manage state and render content effectively.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: proj1,
      source_code_link: "https://github.com/bilalTariq00/resturant_JSX.git",
      
    },
    {
      name: "Eccomerce Website",
      description:
        "I developed an e-commerce web application for a hands-free speakers and headphone shop using Next.js. The application features a seamless shopping experience, integrating Stripe for secure payment processing and Sanity for managing dynamic product content. This project highlights my expertise in building robust, scalable e-commerce platforms that offer users a smooth and reliable purchasing journey.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "stripe",
          color: "green-text-gradient",
        },
        {
          name: "sanity",
          color: "pink-text-gradient",
        },
      ],
      image: proj2,
      source_code_link: "https://github.com/bilalTariq00/Ecommerce.git",
    },
    {
      name: "Figma Clone",
      description:
        "I created a Figma clone web application using Canvas and Next.js, allowing multiple users to collaborate on the same project in real-time. By integrating Liveblocks, the app ensures seamless synchronization, enabling users to work simultaneously and see changes instantly. This project demonstrates my ability to build interactive, collaborative tools with real-time functionality, enhancing productivity in design workflows.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "liveblock",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: proj3,
      source_code_link: "https://github.com/bilalTariq00/Figma-Clone.git",
      
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };