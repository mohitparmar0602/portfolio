export const NAV_LINKS = [
    { id: "#about", label: "About" },
    { id: "#skills", label: "Skills" },
    { id: "#projects", label: "Projects" },
    { id: "#certificates", label: "Certifications" },
    { id: "#achievements", label: "Achievements" },
    { id: "#education", label: "Education" },
    { id: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
    greeting: "MOHIT",
    name: "PARMAR",
    title: "Full Stack Developer",
    resumeLink: "https://drive.google.com/file/d/1g-3Jp4cArmmwWyztsBA8_hscxp2lBEXG/view?usp=sharing",
    resumeDownloadLink: "https://drive.google.com/uc?export=download&id=1g-3Jp4cArmmwWyztsBA8_hscxp2lBEXG",
};

export const ABOUT_TEXT = {
    main: "I am a Computer Science student at Lovely Professional University with a deep-seated passion for building scalable, user-centric web applications. My journey into development began with a curiosity for how data moves across the web, leading me to master the MERN stack and backend systems.",
    sub: "Beyond writing clean, efficient code in C++ and Python, I focus on solving complex problems through Data Structures and Algorithms. I pride myself on my soft skills, including adaptability and being a strong team player, which allow me to bridge the gap between technical details and user experience."
};

export const PROJECTS = [
    {
        title: "Grow Green",
        role: "Full Stack",
        date: "Nov '25 - Dec '25",
        icon: "fas fa-leaf",
        image: "/grow-green.png",
        desc: "Developed a comprehensive marketplace connecting farmers with suppliers to facilitate direct buying and selling of essential agricultural products like seeds and fertilizers.",
        tags: ["React & Node", "Express.js", "MongoDB", "TailwindCSS"],
        link: "https://growgreen-gamma.vercel.app/"
    },
    {
        title: "Lost & Found Tracker",
        role: "Full Stack (MERN)",
        date: "Jun '25 - Jul '25",
        icon: "fas fa-search",
        image: "/cloud-mri.png", // Using placeholder or keeping existing
        desc: "Implemented a system for tracking lost and found items at airports. features secure user authentication and organized item listing pages for better usability.",
        tags: ["React.js", "Node.js", "MongoDB"],
        link: "https://github.com/mohitparmar0602/Cloud-Based-MRI-Storage"
    },
    {
        title: "Language Learning Site",
        role: "React, Node, Flask",
        date: "Apr '25 - May '25",
        icon: "fas fa-code",
        image: "/language-learning.png", // Using placeholder or keeping existing
        desc: "Interactive interface for learning programming languages with responsive UI.",
        tags: ["HTML", "CSS"],
        link: "https://language-learning-website-henna.vercel.app/"
    }
];

export const SKILLS = [
    {
        category: "Programming Languages",
        items: [
            { name: "C++", icon: "fas fa-code", color: "text-blue-500", level: 4 },
            { name: "Python", icon: "fab fa-python", color: "text-yellow-400", level: 4 },
        ]
    },
    {
        category: "Web Technologies",
        items: [
            { name: "HTML", icon: "fab fa-html5", color: "text-orange-500", level: 5 },
            { name: "CSS", icon: "fab fa-css3-alt", color: "text-blue-500", level: 5 },
            { name: "JavaScript", icon: "fab fa-js", color: "text-yellow-400", level: 5 },
        ]
    },
    {
        category: "Frameworks",
        items: [
            { name: "React.js", icon: "fab fa-react", color: "text-blue-400", level: 4 },
            { name: "Express.js", icon: "fas fa-server", color: "text-gray-400", level: 4 },
        ]
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", icon: "fab fa-node", color: "text-green-500", level: 4 },
            { name: "PHP", icon: "fab fa-php", color: "text-indigo-400", level: 4 },
        ]
    },
    {
        category: "Database Management",
        items: [
            { name: "MySQL", icon: "fas fa-database", color: "text-blue-400", level: 4 },
            { name: "MongoDB", icon: "fas fa-leaf", color: "text-green-500", level: 4 },
        ]
    },
    {
        category: "Soft Skills",
        items: [
            { name: "Collaboration", icon: "fas fa-users", level: 5 },
            { name: "Adaptability", icon: "fas fa-sync-alt", level: 5 },
            { name: "Team Player", icon: "fas fa-hands-helping", level: 5 },
        ]
    },
    {
        category: "Tools",
        items: [
            { name: "Git/GitHub", icon: "fab fa-github", color: "text-white", level: 5 },
        ]
    }
];

export const CERTIFICATES = {
    certifications: [
        { 
            date: "Apr '25", 
            title: "Cloud Computing", 
            issuer: "NPTEL",
            desc: "Specialized training in cloud infrastructure.", 
            link: "https://drive.google.com/file/d/1DcGilQJvAYL3XCMPdWzTs2gIBRnRyISq/view?usp=sharing" 
        },
        { 
            date: "Mar '25", 
            title: "Logic building, Programming and Data Structures", 
            issuer: "Summer Training, LPU",
            desc: "Core CS fundamentals — logic, programming and DSA.", 
            link: "https://drive.google.com/file/d/1ieSTrcq6Pngd6yD0KhPSSnDKTW1PAO-N/view?usp=sharing" 
        },
    ],
    certificates: [
        { 
            date: "Mar '24", 
            title: "The Bits and Bytes of Computer Networking", 
            issuer: "Coursera",
            desc: "Google IT Support Professional Certificate.", 
            link: "https://drive.google.com/file/d/1EVVE1nnxiOp59ScnRHLh3LdQCosFyrgV/view?usp=sharing" 
        },
        { 
            date: "Feb '24", 
            title: "C Programming", 
            issuer: "UDEMY",
            desc: "Mastering the C Language for Beginners.", 
            link: "https://drive.google.com/file/d/1KOPJPqxQZMkr8_7cNeFojPAFBkmNVjyQ/view?usp=sharing" 
        },
        { 
            date: "Oct '23", 
            title: "Responsive Web Design", 
            issuer: "freeCodeCamp",
            desc: "Legacy V8 Certification.", 
            link: "https://drive.google.com/file/d/176_LXxG8JZPPAp4G8SgxmsbGmaI4sW01/view?usp=sharing" 
        },
    ]
};

export const ACHIEVEMENTS = [
    {
        title: "3 Star Python Coder",
        desc: "Achieved a 3-star rating in Python on HackerRank, demonstrating advanced language proficiency.",
        icon: "fab fa-python",
        platform: "HackerRank",
        stars: 3,
    },
    {
        title: "2 Star C++ Expert",
        desc: "Consistent performer in C++ challenges, earning a 2-star badge for technical logic.",
        icon: "fas fa-code",
        platform: "HackerRank",
        stars: 2,
    },
    {
        title: "DSA Problem Solver",
        desc: "Solved complex algorithmic challenges on HackerRank, earning the Problem Solving badge.",
        icon: "fas fa-brain",
        platform: "HackerRank",
        stars: 1,
    },
];

export const CONTACT_INFO = {
    email: "mohitparmar22584@gmail.com",
    phone: "+91-8307822584",
    github: "https://github.com/mohitparmar0602",
    linkedin: "https://linkedin.com/in/mohitparmar0602",
    formspree: "https://formspree.io/f/xykbyeqw", // Updated Formspree ID
};

export const EDUCATION = [
    {
        duration: "Aug' 23 - Present",
        institution: "Lovely Professional University",
        degree: "Bachelor of Technology - Computer Science and Engineering",
        score: "CGPA: 6.55",
        courses: ["Data Structures", "Web Dev", "Operating Systems", "Computer Networks"],
        location: "Phagwara, Punjab"
    },
    {
        duration: "Apr' 21 – Mar' 22",
        institution: "Vaish Sr. Sec. School",
        degree: "Intermediate (PCM)",
        score: "Percentage: 78%",
        courses: ["Physics", "Chemistry", "Mathematics"],
        location: "Charkhi Dadri, Haryana"
    },
    {
        duration: "Apr' 19 – Mar' 20",
        institution: "Vaish Sr. Sec. School",
        degree: "Matriculation",
        score: "Percentage: 87.4%",
        courses: ["General Science", "Social Studies"],
        location: "Charkhi Dadri, Haryana"
    },
];

export const EXPERIENCE = [
    {
        date: "Jun '25 - Jul '25",
        role: "Logic Building, Programming and DS",
        company: "Lovely Professional University (Summer Training)",
        desc: "Completed an intensive 6-week training program. Strengthened core programming fundamentals by mastering algorithmic thinking and practical application of data structures.",
    },
    {
        date: "Recent",
        role: "Full Stack Developer",
        company: "Personal Projects",
        desc: "Actively building and deploying web applications using modern stacks like MERN and PHP/MySQL.",
    },
];
