export const NAV_LINKS = [
    { id: "#about", label: "About" },
    { id: "#skills", label: "Skills" },
    { id: "#projects", label: "Projects" },
    { id: "#certificates", label: "Certificates" },
    { id: "#achievements", label: "Achievements" },
    { id: "#education", label: "Education" },
    { id: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
    greeting: "MOHIT",
    name: "PARMAR",
    title: "Full Stack Developer",
    description: "I build scalable, secure, and production-ready web applications. Focused on creating efficient solutions for complex digital challenges.",
    resumeLink: "https://drive.google.com/uc?export=download&id=1g-3Jp4cArmmwWyztsBA8_hscxp2lBEXG",
};

export const PROJECTS = [
    {
        title: "Grow Green",
        role: "Full Stack",
        date: "Nov '25 - Dec '25",
        icon: "fas fa-leaf",
        image: "/grow-green.png",
        desc: "Developed a comprehensive marketplace connecting farmers with suppliers to facilitate direct buying and selling of essential agricultural products like seeds and fertilizers.",
        tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
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
        link: "https://github.com/mohitparmar0602"
    },
    {
        title: "Language Learning Site",
        role: "React, Node, Flask",
        date: "Apr '25 - May '25",
        icon: "fas fa-code",
        image: "/language-learning.png", // Using placeholder or keeping existing
        desc: "Interactive interface for learning programming languages with responsive UI.",
        tags: ["HTML", "CSS"],
        link: "https://github.com/mohitparmar0602"
    }
];

export const SKILLS = [
    {
        category: "Programming Languages",
        items: [
            { name: "C++", icon: "fas fa-code", color: "text-blue-500" },
            { name: "Python", icon: "fab fa-python", color: "text-yellow-400" },
        ]
    },
    {
        category: "Web Technologies",
        items: [
            { name: "HTML", icon: "fab fa-html5", color: "text-orange-500" },
            { name: "CSS", icon: "fab fa-css3-alt", color: "text-blue-500" },
            { name: "JavaScript", icon: "fab fa-js", color: "text-yellow-400" },
        ]
    },
    {
        category: "Frameworks",
        items: [
            { name: "React.js", icon: "fab fa-react", color: "text-blue-400" },
            { name: "Express.js", icon: "fas fa-server", color: "text-gray-400" },
        ]
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", icon: "fab fa-node", color: "text-green-500" },
            { name: "PHP", icon: "fab fa-php", color: "text-indigo-400" },
        ]
    },
    {
        category: "Database Management",
        items: [
            { name: "MySQL", icon: "fas fa-database", color: "text-blue-400" },
            { name: "MongoDB", icon: "fas fa-leaf", color: "text-green-500" },
        ]
    },
    {
        category: "Soft Skills",
        items: [
            { name: "Collaboration", icon: "fas fa-users" },
            { name: "Adaptability", icon: "fas fa-sync-alt" },
            { name: "Team Player", icon: "fas fa-hands-helping" },
        ]
    }
];

export const CERTIFICATES = [
    { 
        date: "Apr '25", 
        title: "Cloud Computing", 
        desc: "Specialized training in cloud infrastructure.", 
        link: "https://drive.google.com/file/d/1DcGilQJvAYL3XCMPdWzTs2gIBRnRyISq/view?usp=sharing" 
    },
    { 
        date: "Mar '25", 
        title: "Introduction to Hardware and Operating Systems", 
        desc: "Fundamentals of computer hardware and OS concepts.", 
        link: "https://github.com/mohitparmar0602" 
    },
    { 
        date: "Mar '25", 
        title: "Logic building, Programming and Data Structures", 
        desc: "Core CS fundamentals — logic, programming and DSA.", 
        link: "https://github.com/mohitparmar0602" 
    },
    { 
        date: "Feb '24", 
        title: "C Programming", 
        desc: "Mastering the C Language for Beginners.", 
        link: "https://drive.google.com/file/d/1KOPJPqxQZMkr8_7cNeFojPAFBkmNVjyQ/view?usp=sharing" 
    },
    { 
        date: "Oct '23", 
        title: "Responsive Web Design", 
        desc: "Legacy V8 Certification.", 
        link: "https://drive.google.com/file/d/176_LXxG8JZPPAp4G8SgxmsbGmaI4sW01/view?usp=sharing" 
    },
];

export const ACHIEVEMENTS = [
    {
        badge: "3 Star Silver Badge(Silver)",
        language: "Python",
        icon: "fab fa-python",
        color: "text-brand-accent",
        platform: "HackerRank",
        stars: 3,
    },
    {
        badge: "2 Star Bronze Badge(Bronze)",
        language: "C++",
        icon: "fas fa-code",
        color: "text-brand-accent",
        platform: "HackerRank",
        stars: 2,
    },
    {
        badge: "1 Star Badge",
        language: "Problem Solving (DSA)",
        icon: "fas fa-brain",
        color: "text-brand-accent",
        platform: "HackerRank",
        stars: 1,
    },
    {
        badge: "1 Star Badge",
        language: "SQL",
        icon: "fas fa-database",
        color: "text-brand-accent",
        platform: "HackerRank",
        stars: 1,
    },
    {
        badge: "1 Star Badge",
        language: "Java & 10 Days of JS",
        icon: "fab fa-java",
        color: "text-brand-accent",
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
        date: "Aug '23 - Present",
        institution: "Lovely Professional University",
        degree: "Bachelor of Technology in Computer Science and Engineering",
        subtitle: "CGPA: 6.55",
        location: "Phagwara, Punjab"
    },
    {
        date: "Apr '21 - Mar '22",
        institution: "Vaish Sr. Sec. School",
        degree: "Intermediate (PCM)",
        subtitle: "Percentage: 78%",
        location: "Charkhi Dadri, Haryana"
    },
    {
        date: "Apr '19 - Mar '20",
        institution: "Vaish Sr. Sec. School",
        degree: "Matriculation",
        subtitle: "Percentage: 87.4%",
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
