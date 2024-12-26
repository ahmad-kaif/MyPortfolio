import { dps_logo, du_logo, nit_logo } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
   
];

export const experiences = [
    {
        title: "NIT Jamshepdur",
        company_name: "MCA",
        icon: nit_logo,
        iconBg: "#accbe1",
        date: "Aug 2023 - 2026",
        percentage: "9.3",
        points: [
            "Data Structure & Algorithms",
            "Object Oriented Programming ",
            "Computer Networks",
            "Database Management & System",
            "Operating System",
            "AI/ML",
            "Computer Graphics"
        ],
    },
    {
        title: "Kirori Mal College, Delhi",
        company_name: "BSc(Hons) Chemistry",
        icon: du_logo,
        iconBg: "#fbc3bc",
        date: "2020 - 2023",
        percentage: "7.9",
        points: [
            "Developed Leadership Skills",
            "Honed Communicational skills",
            "Worked in Enactus a student run non profit international organisation for the upliftment of underprivileged people",
            "Gained Management skills along with Chemistry",
        ],
    },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#b7e4c7",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    {
        title: "DPS Maruti Kunj, Gurugram",
        company_name: "12th",
        icon: dps_logo,
        iconBg: "#a2d2ff",
        date: "2019 - 2020",
        percentage: "10",
        points: [
            "Percentage - 95.33%",
            "PCM with Computer Science"
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [

    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'ChatArena',
        description: 'A real-time chat application built with the MERN stack and powered by Socket.io, featuring seamless communication, dynamic user interactions, and robust performance.',
        link: 'https://github.com/ahmad-kaif/Real_Time_ChatArena',
        link: 'https://github.com/ahmad-kaif/Real_Time_ChatArena',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Clarity Hub',
        description: 'An AI-powered productivity app inspired by Notion, designed to streamline task management, note-taking, and  customizable templates, and a seamless user interface for enhanced productivity',
        link: 'https://github.com/ahmad-kaif/ClarityHub',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'NotePad',
        description: 'A sleek and interactive notepad application built using EJS and JavaScript, offering a seamless note-taking experience with dynamic features and a user-friendly interface.',
        link: 'https://github.com/ahmad-kaif/NotePad-Backend',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'EaseAway travel',
        description: 'A dynamic travel website built with React.js, offering interactive features and an intuitive interface for exploring global travel destinations and packages',
        link: 'https://github.com/ahmad-kaif/travelling_website',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Spotify Clone',
        description: 'A Spotify clone built with pure JavaScript, offering a seamless music streaming experience with an intuitive interface and real-time audio control features.',
        link: 'https://github.com/ahmad-kaif/Spotify_Clone',
    },
   
    
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'News Laundry',
        description: 'A real time News Application with subtle UI and resposive Design. Keep yoursel updated with latest News.',
        link: 'https://github.com/ahmad-kaif/news_laundry',
    }
];