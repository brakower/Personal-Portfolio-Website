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
    medtronic,
    MLB,
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
    lunchorderapp,
    aiagenticpic,
    superbowlboxespic
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
        id: "projects",
        title: "Projects",
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
        company_name: "Major League Baseball",
        icon: MLB,
        iconBg: "#383E56",
        date: "Jan 2025 - May 2025",
        points: [
            "***Project #1: MLB Mini Draft Tracker***",
            "Built and shipped the MLB Mini Draft Tracker (screenshots included), seen by 3.5M+ users across desktop and web." ,
            "Contributed updates to the component design and config system that supported a 49% increase in unique users (~2.5M) and a 61% boost in traffic during the 2025 MLB Draft." ,
            "By the numbers: 8M+ pick impressions and ~6M picks viewed on desktop.",
            "***Project #2: RFC & Config Architecture***",
            "Co-authored a cross-functional RFC for a new configs.json system—a single source of truth powering all MLB/MiLB club sites, league pages, and marketing sites.", 
            "Led discussions with stakeholders on project structures, URL routing strategies, and scalable config formats to support future growth.", 
            "Supported digital initiatives aimed at optimizing business processes and enhancing operational efficiency within the Diabetes division."
        ],
    },
    {
        title: "Data Engineer",
        company_name: "Medtronic",
        icon: medtronic,
        iconBg: "#383E56",
        date: "Jan 2025 - May 2025",
        points: [
            "Improved a Visual Basic script to automate a hospital data capture process of 10,000+ patients reducing manual workload by 500%.", 
            "Supported digital initiatives aimed at optimizing business processes and enhancing operational efficiency within the Diabetes division."
        ],
    },
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
            "Researched and evaluated early stage start-ups in longevity tech to assess alignment with IgniteXL’s investment thesis",
            "Utilized due diligence processes to evaluate 10 other deal submissions for alignment",
            "Designed an investment summary document presenting key information to potential investors",
            "Received a certificate of Outstanding Completion for achieving strong evaluations",
        ],
    },
    {
        title: "Private Equity Investment Research & Data Analyst",
        company_name: "Enhanced Healthcare Partners",
        icon: enhanced,
        iconBg: "#E6DEDD",
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
    // {
    //     name: "Super Bowl Poll Application",
    //     description:
    //         "A full-stack Ruby on Rails application for running a real-time 2026 Super Bowl poll (Seahawks or Patriots). Features secure vote casting with duplicate prevention, live result updates using Hotwire, and a production-ready architecture.",
    //     tags: [
    //         {
    //             name: "ruby-on-rails",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "hotwire",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "postgresql",
    //             color: "orange-text-gradient",
    //         },
    //     ],
    //     image: superbowlboxespic,
    //     source_code_link: "https://github.com/brakower/Super-Bowl-2026-Poll",
    // },
    {
        name: "Super Bowl Boxes Application",
        description:
            "A real-time, mobile-friendly web application for running a classic 10×10 Super Bowl squares pool. Built with React, TypeScript, Redux Toolkit, and Supabase, featuring live square claiming and synchronized state across devices.",
        tags: [
            {
            name: "react",
            color: "blue-text-gradient",
            },
            {
            name: "typescript",
            color: "green-text-gradient",
            },
            {
            name: "redux-toolkit",
            color: "orange-text-gradient",
            }
        ],
        image: superbowlboxespic,
        source_code_link: "https://github.com/brakower/Super-Bowl-Boxes",
    },
    {
        name: "Mentored Research: Agentic AI Code Grader",
        description:
            "A mobile/web lunch ordering application built with Next.js and Supabase, featuring real-time order tracking, role-based kitchen controls, customer + kitchen dashboards, and PWA support.",
        tags: [
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "postgreSQL",
                color: "orange-text-gradient",
            },
        ],
        image: aiagenticpic,
        source_code_link: "https://github.com/brakower/Team-H",
    },
    {
        name: "Lunch Order Application",
        description:
            "A modern, user-friendly web application for managing lunch orders built with Next.js, React, and TypeScript. Streamline your team's lunch ordering process with this efficient and scalable solution.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "Next.js",
                color: "green-text-gradient",
            },
            {
                name: "typescript",
                color: "orange-text-gradient",
            },
        ],
        image: lunchorderapp,
        source_code_link: "https://github.com/brakower/Lunch-Order-App",
    },
    {
        name: "Jounral/Diary App",
        description:
            "Full-stack application developed using React for the frontend and Python and SQL for the backend. It allows users to create, view, and delete their own diary entries.",
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
        name: "Room Reservation Service",
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
                name: "vite",
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