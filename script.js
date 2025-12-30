// Language translations
const translations = {
    en: {
        aboutMe: "ABOUT ME",
        education: "EDUCATION",
        projects: "PROJECTS",
        awards: "AWARDS",
        experiences: "EXPERIENCES",
        tools: "TOOLS",
        contact: "CONTACT",
        portfolio: "ROBOTICS PORTFOLIO",
        certificationsAwards: "CERTIFICATIONS & AWARDS",
        workExperiences: "WORK EXPERIENCES",
        getInTouch: "GET IN TOUCH",
        contactDescription: "Let's connect! Feel free to reach out through any of these platforms."
    },
    de: {
        aboutMe: "ÜBER MICH",
        education: "BILDUNG",
        projects: "PROJEKTE",
        awards: "AUSZEICHNUNGEN",
        experiences: "ERFAHRUNGEN",
        tools: "WERKZEUGE",
        contact: "KONTAKT",
        portfolio: "ROBOTIK-PORTFOLIO",
        certificationsAwards: "ZERTIFIKATE & AUSZEICHNUNGEN",
        workExperiences: "BERUFSERFAHRUNG",
        getInTouch: "KONTAKTIEREN SIE MICH",
        contactDescription: "Lassen Sie uns in Kontakt treten! Kontaktieren Sie mich gerne über eine dieser Plattformen."
    },
    ru: {
        aboutMe: "ОБО МНЕ",
        education: "ОБРАЗОВАНИЕ",
        projects: "ПРОЕКТЫ",
        awards: "НАГРАДЫ",
        experiences: "ОПЫТ",
        tools: "ИНСТРУМЕНТЫ",
        contact: "КОНТАКТЫ",
        portfolio: "РОБОТОТЕХНИКА ПОРТФОЛИО",
        certificationsAwards: "СЕРТИФИКАТЫ И НАГРАДЫ",
        workExperiences: "ОПЫТ РАБОТЫ",
        getInTouch: "СВЯЖИТЕСЬ СО МНОЙ",
        contactDescription: "Давайте свяжемся! Не стесняйтесь обращаться через любую из этих платформ."
    }
};

let currentLanguage = 'en';

function changeLanguage(lang) {
    currentLanguage = lang;
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

// Typing animation
const NAME = "LAZUARDI AZKA RANGKUTI";
let typedIndex = 0;

function typeWriter() {
    if (typedIndex <= NAME.length) {
        document.getElementById('typedName').textContent = NAME.slice(0, typedIndex);
        typedIndex++;
        setTimeout(typeWriter, 80);
    }
}

typeWriter();

// Theme toggle
function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const icon = document.getElementById('themeIcon');
    icon.textContent = document.body.classList.contains('light-theme') ? '🌙' : '☀️';
}

// Awards data
const awards = [
    { title: "4th Winner and Favorite Project of Hardathon 2025", org: "Youth Robotics Center of BMSTU" },
    { title: "4th Winner of Indonesian Robotic Olympiad", org: "IRO & Mikrobot" },
    { title: "1st Winner of Jakarta Junior Robotic Competition", org: "Robotics Education Centre" },
    { title: "Favorite Winner Robotics", org: "Santa Ursula Senior High School" },
    { title: "Certificate of Participation", org: "Robotics Education Centre" },
    { title: "Participation on Maze Solving Competition", org: "Robotics Education Centre" },
    { title: "Certified Internet of Things Professional – Excellence", org: "Edspert.id" },
    { title: "Certification in IoT and Digital Transformation", org: "Cisco Networking Academy" },
    { title: "Securely Connecting AWS IoT Devices to the Cloud", org: "Amazon Web Services" }
];

// Render awards
const awardsGrid = document.getElementById('awardsGrid');
awards.forEach((award, idx) => {
    const card = document.createElement('div');
    card.className = 'award-card';
    card.innerHTML = `
        <div class="award-badge">AWARD</div>
        <div class="award-icon">🏅</div>
        <div class="award-title">${award.title}</div>
        <div class="award-org">${award.org}</div>
    `;
    card.style.transitionDelay = `${idx * 120}ms`;
    awardsGrid.appendChild(card);
});

// Work experiences data
const experiences = [
    {
        title: "Mechatronics Engineering Intern",
        company: "Oppo Manufacturing Indonesia",
        date: "Jun 2025 – Sep 2025",
        description: `<ul>
            <li>Created and deployed a Preventive Maintenance Robot equipped with IoT sensors to monitor dust, temperature, humidity and WiFi connectivity.</li>
            <li>Automated maintenance alerts through relay controlled alarms and visual indicators, reducing unexpected downtime.</li>
            <li>Created a Collaborative Robot (COBOT) in gantry model with belt driven rails, PLC, and 3D printed pneumatic system.</li>
            <li>Collaborated with engineers to test and troubleshoot projects directly on production lines.</li>
        </ul>`,
        logo: "assets/oppo2.png"
    },
    {
        title: "Generative AI Engineer Intern",
        company: "Chickin Indonesia",
        date: "Dec 2024 – Jun 2025",
        description: `<ul>
            <li>Developed "Chibot" (Chickin Chatbot) using n8n and LangChain for knowledge management and IoT device control.</li>
            <li>Researched and integrated Generative AI tools (Vertex AI, RAG, Flowise) to enhance chatbot efficiency.</li>
            <li>Built a real-time sales dashboard with Firebase Studio and Firestore.</li>
        </ul>`,
        logo: "assets/chickin.jpeg"
    },
    {
        title: "Site Reliability Engineer Intern",
        company: "Sekolah.mu, Indonesia",
        date: "Aug 2024 - Sep 2024",
        description: `<ul>
            <li>Automated deployments using GitLab CI/CD.</li>
            <li>Built and maintained Docker containers and Python applications.</li>
            <li>Implemented infrastructure solutions on AWS.</li>
        </ul>`,
        logo: "assets/sekolahmu.png"
    },
    {
        title: "IT Tech Support Intern",
        company: "Sekolah.mu, Indonesia",
        date: "Jul 2024 - Sep 2024",
        description: `<ul>
            <li>Performed remote and onsite installation of monitoring and surveillance software.</li>
            <li>Handled troubleshooting and system configuration tasks.</li>
            <li>Participated in weekly IT team meetings to report progress.</li>
        </ul>`,
        logo: "assets/sekolahmu.png"
    },
    {
        title: "Product Sourcing Intern",
        company: "GAOTek Inc., United States",
        date: "May 2024 – Aug 2024",
        description: `<ul>
            <li>Collaborated with the sourcing team to identify and evaluate electronic testing products.</li>
            <li>Prepared detailed task reports including product comparisons and cost analysis.</li>
            <li>Participated in weekly team meetings via Microsoft Teams.</li>
        </ul>`,
        logo: "assets/gaotek.jpg"
    },
    {
        title: "Russian Language Tutor",
        company: "Lister Education Pte. Ltd., Indonesia",
        date: "Feb 2023 – Feb 2025",
        description: `<ul>
            <li>Taught beginner to intermediate Indonesian students Russian language over 10 students through online sessions.</li>
            <li>Delivered engaging lessons tailored to student goals.</li>
            <li>Supported additional learning programs including Scholarship Mentoring and Speaking Class.</li>
        </ul>`,
        logo: "assets/lister.png"
    },
    {
        title: "Data Entry Specialist",
        company: "West Java Provincial Health Office",
        date: "Jun 2021 - Dec 2021",
        description: `<ul>
            <li>Recorded and organized COVID-19 vaccination data for hundreds of patients.</li>
            <li>Entered and submitted data through government health platforms in a timely manner.</li>
            <li>Coordinated with local health services to verify patient records.</li>
        </ul>`,
        logo: "assets/dinkes.png"
    }
];

// Render work experiences
const experiencesContainer = document.getElementById('experiencesContainer');
experiences.forEach((exp, idx) => {
    const item = document.createElement('div');
    item.className = `experience-item ${idx % 2 === 0 ? 'left' : 'right'}`;
    
    item.innerHTML = `
        <div class="experience-content">
            <div class="experience-box">
                <div class="experience-title">${exp.title}</div>
                <div class="experience-company">${exp.company}</div>
                <div class="experience-date">${exp.date}</div>
                <div class="experience-description">${exp.description}</div>
            </div>
        </div>
        <div class="experience-logo">
            <img src="${exp.logo}" alt="${exp.company}" onerror="this.parentElement.innerHTML='<span style=\\"font-weight:700;color:#b721ff;font-size:14px\\">${exp.company.split(' ').map(w => w[0]).join('')}</span>'">
        </div>
    `;
    
    experiencesContainer.appendChild(item);
});

// Education data
const education = [
    {
        school: "Bauman Moscow State Technical University",
        degree: "Robotics System and Mechatronics",
        year: "2020 • Moscow, Russia",
        description: "Studying robotics at one of Russia's most prestigious technical universities. My studies focus on developing intelligent robotic systems that combine mechanical engineering with artificial intelligence, preparing me to contribute to the next generation of robotic innovations.",
        logo: "assets/baumanlogo.jpeg"
    },
    {
        school: "14 Senior High School Jakarta",
        degree: "Science Major",
        year: "2017 - 2020 • Jakarta, Indonesia",
        description: "My academic foundation was built here through a rigorous science curriculum focusing on mathematics, physics, and chemistry. This period was essential in developing my analytical thinking and problem-solving skills, which prepared me for the challenges of studying abroad.",
        logo: "assets/sma14logo.jpeg"
    }
];

// Render education
const educationContainer = document.getElementById('educationContainer');
education.forEach(edu => {
    const item = document.createElement('div');
    item.className = 'education-item';
    item.innerHTML = `
        <div class="education-logo-wrapper">
            <div class="education-logo">
                <img src="${edu.logo}" alt="${edu.school}" onerror="this.src='https://via.placeholder.com/120'">
                <div class="education-glow"></div>
            </div>
        </div>
        <div class="education-content">
            <h3>${edu.school}</h3>
            <h4>${edu.degree}</h4>
            <p class="education-year">${edu.year}</p>
            <p>${edu.description}</p>
        </div>
    `;
    educationContainer.appendChild(item);
});

// Tools data
const tools = [
    { name: "Python", icon: "🐍" },
    { name: "C++", icon: "⚙️" },
    { name: "JavaScript", icon: "🟨" },
    { name: "ROS", icon: "🤖" },
    { name: "Arduino", icon: "🔌" },
    { name: "SolidWorks", icon: "📐" },
    { name: "Fusion 360", icon: "🔧" },
    { name: "MATLAB", icon: "📊" },
    { name: "TensorFlow", icon: "🧠" },
    { name: "Docker", icon: "🐳" },
    { name: "Git", icon: "📦" },
    { name: "AWS", icon: "☁️" },
    { name: "Firebase", icon: "🔥" },
    { name: "InfluxDB", icon: "📈" },
    { name: "Grafana", icon: "📉" },
    { name: "Node.js", icon: "🟩" }
];

// Render tools
const toolsGrid = document.getElementById('toolsGrid');
tools.forEach((tool, idx) => {
    const card = document.createElement('div');
    card.className = 'tool-card';
    card.innerHTML = `
        <div class="tool-icon">${tool.icon}</div>
        <div class="tool-name">${tool.name}</div>
    `;
    card.style.transitionDelay = `${idx * 80}ms`;
    toolsGrid.appendChild(card);
});

// Projects data
const projects = [
    {
        title: "Stackster: Intelligent Factory Mobile Robot with IoT",
        description: "An advanced factory automation robot integrated with IoT sensors for intelligent inventory management, stacking optimization, and real-time production monitoring.",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Collaborative Robot (COBOT)",
        description: "A collaborative robotic system designed for safe human-robot interaction in manufacturing environments, featuring advanced safety protocols and intuitive programming.",
        image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Preventive Maintenance Robot",
        description: "An IoT-based environmental monitoring system developed at Oppo Indonesia Manufacturing, designed to monitor critical parameters in screen guard production machines and prevent equipment failures through real-time data analysis.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Automated Coat Handling Robot",
        description: "An innovative robotic solution designed to automate jacket storage for students at Bauman Moscow State Technical University, created during Hardathon 2025 competition to improve campus life.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Construction and Mechanical Analysis of Turntable in a 5-DOF Robotic Manipulator",
        description: "A comprehensive study and mechanical analysis of the turntable component in a five-degree-of-freedom robotic manipulator, focusing on structural design, load distribution, and optimization for precision automation tasks.",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "C.L.A.R.A: Climate Learning and Response Assistant",
        description: "An intelligent climate monitoring and educational system that combines IoT sensors, machine learning, and automated responses to help users understand and adapt to environmental changes while promoting sustainable practices.",
        image: "https://images.unsplash.com/photo-1569163139394-de4798aa62b6?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "WashEye: Laundry Queue Notifier",
        description: "An intelligent IoT system that monitors laundry machine availability and notifies users in real-time, eliminating waiting times and optimizing laundry room usage.",
        image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "РТК для производства смартфонов",
        subtitle: "Robotic Technological Complex for Smartphone Manufacturing",
        description: "A robotic technological complex designed specifically for smartphone manufacturing, featuring precision automation, quality control systems, and seamless integration into production lines.",
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Adaptive Gripper for Smartphone Manufacture",
        description: "An advanced robotic gripper system integrated with computer vision technology, designed to handle various smartphone components with adaptive force control and visual recognition for precise assembly and quality inspection.",
        image: "https://images.unsplash.com/photo-1578663248512-2ee6f49c45a8?auto=format&fit=crop&w=800&q=80"
    }
];

// Render projects
const projectsContainer = document.getElementById('projectsContainer');
projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.style.backgroundImage = `url(${project.image})`;
    card.innerHTML = `
        <div class="project-accent"></div>
        <div class="project-overlay"></div>
        <div class="project-content">
            <div class="project-title">${project.title}</div>
            ${project.subtitle ? `<div class="project-subtitle">${project.subtitle}</div>` : ''}
            <div class="project-description">${project.description}</div>
            <button class="project-btn">READ MORE</button>
        </div>
    `;
    projectsContainer.appendChild(card);
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Special handling for experience items
            if (entry.target.classList.contains('experience-item')) {
                const logo = entry.target.querySelector('.experience-logo');
                const box = entry.target.querySelector('.experience-box');
                
                if (logo) {
                    setTimeout(() => logo.classList.add('visible'), 100);
                }
                if (box) {
                    setTimeout(() => box.classList.add('visible'), 220);
                }
            }
        }
    });
}, observerOptions);

// Observe sections
document.querySelectorAll('.about-section, .awards-section, .award-card, .project-card, .experience-item, .tool-card').forEach(el => {
    observer.observe(el);
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
