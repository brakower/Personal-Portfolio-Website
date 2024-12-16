import {
    mobile,
    backend,
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
    carrent,
    jobit,
    tripguide,
    threejs,
    angular,
    github,
    teamworks,
    ignite,
    enhanced,
    malter,
    sql,
    springBoot,
    full,
    frontend,
    fourtwentysix,
    fourtwentythree,
    personalProject,
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
        title: "Javscript Developer",
        icon: javascript,
    },
    {
        title: "Typescript Developer",
        icon: typescript,
    },
    {
        title: "React  Developer",
        icon: reactjs,
    },
    {
        title: "React Native Developer",
        icon: reactjs,
    },
    {
        title: "Angular Developer",
        icon: angular,
    },
    {
        title: "Node.js Developer",
        icon: nodejs,
    },
    {
        title: "Three.js Developer",
        icon: threejs,
    },
    {
        title: "Full-Stack Developer",
        icon: full,
    },
    {
        title: "Frontend Developer",
        icon: frontend,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Github Connoisseur",
        icon: github,
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
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Angular",
        icon: angular,
    },
    {
        name: "Spring Boot",
        icon: springBoot,
    },
    {
        name: "SQL",
        icon: sql,
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
        name: "MongoDB",
        icon: mongodb,
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
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Software Engineer Intern",
        company_name: "Teamworks",
        icon: teamworks,
        iconBg: "#383E56",
        date: "May 2024 - June 2024",
        points: [
            "Optimized content loading latency of six full-stack web pages, achieving a 5x more responsive and modern web interface by transitioning from JavaServer Pages to Angular.", 
            "Spearheaded the architecture of six backend APIs using Spring Boot with Java to optimize complex data structures and ensure seamless interaction with the Angular frontend through RESTful APIs.",
            "Drove the improvement of code quality and efficiency, conducting 24 code reviews for peers by identifying areas of improvement in code optimization and adherence to company practices."
        ],
    },
    {
        title: "AI Powered VC Deal Sourcing Extern",
        company_name: "igniteXL Ventures",
        icon: ignite,
        iconBg: "#E6DEDD",
        date: "Nov 2023 - Dec 2023",
        points: [
            "Reached out to over 1,000 businesses in London to become a part of our fund for potential investment opportunities.",
            "Strategized with my team on how to make Crowd2Fund more appealing to both investors and clients.",
        ],
    },
    {
        title: "Private Equity Investment Research & Data Analyst",
        company_name: "Enhanced Healthcare Partners",
        icon: enhanced,
        iconBg: "#383E56",
        date: "June 2023 - Aug 2023",
        points: [
            "Constructed a final presentation to company CEOs on five potential company investments, showcasing innovative strategies validated by metrics on growth, customer retention, and market competition.",
            "Attained the highest possible grade, “Outstanding Completion,” on all three projects completed by consistently delivering high-quality work, demonstrating a strong commitment to excellence and dedication.", 
        ],
    },
    {
        title: "Software Engineer",
        company_name: "MalterTech",
        icon: malter,
        iconBg: "#E6DEDD",
        date: "Sep 2019 - June 2022",
        points: [
            "Architected and deployed a hybrid mobile app with over 1,000 daily users to the Apple App Store and Google Play Store, leveraging Cordova to embed a web-based interface incorporating HTML, CSS, and JavaScript.",
            "Integrated a PHP backend for automated updates, enabling real-time changes by syncing the web and app versions of the product, eliminating the need for separate app updates.",
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
        name: "COMP 426 Final Project",
        description:
            "Diary Journal App developed using React for the frontend and Python and SQL for the backend. It allows users to create, view, and delete their own diary entries.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "python",
                color: "green-text-gradient",
            },
            {
                name: "restapi",
                color: "orange-text-gradient",
            },
            {
                name: "SQL",
                color: "pink-text-gradient",
            },
        ],
        image: fourtwentysix,
        source_code_link: "https://github.com/rjacob02/comp426FinalProject",
    },
    {
        name: "COMP 423 Final Project",
        description:
            "Created a tool for UNC's CSXL website that allows for students to reserve a study room that is appropriate based on the size of their group and invite their friends to the reservation.",
        tags: [
            {
                name: "angular",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "orange-text-gradient",
            },
            {
                name: "nodejs",
                color: "pink-text-gradient",
            },
        ],
        image: fourtwentythree,
        source_code_link: "https://github.com/comp423-24f/csxl-team-a3",
    },
    {
        name: "Personal Website",
        description:
            "A comprehensive personal portfolio website incorporating stunning 3D models and geometries with various lights, as well as showcasing a complex understanding of the 3D world with a camera and positioning of an object in space.",
        tags: [
            {
                name: "threejs",
                color: "blue-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "orange-text-gradient",
            },
            {
                name: "framer-motion",
                color: "pink-text-gradient",
            },
        ],
        image: personalProject,
        source_code_link: "https://github.com/brakower/Personal-Portfolio-Website",
    },
];

export { services, technologies, experiences, testimonials, projects };