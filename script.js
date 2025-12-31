// ============================================
// LANGUAGE TRANSLATIONS
// ============================================
const translations = {
    en: {
        aboutMe: "ABOUT ME",
        education: "EDUCATION BACKGROUND",
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
    id: {
        aboutMe: "TENTANG SAYA",
        education: "PENDIDIKAN",
        projects: "PROYEK",
        awards: "PENGHARGAAN",
        experiences: "PENGALAMAN",
        tools: "ALAT",
        contact: "KONTAK",
        portfolio: "PORTOFOLIO ROBOTIKA",
        certificationsAwards: "SERTIFIKASI & PENGHARGAAN",
        workExperiences: "PENGALAMAN KERJA",
        getInTouch: "HUBUNGI SAYA",
        contactDescription: "Mari terhubung! Jangan ragu untuk menghubungi saya melalui salah satu platform berikut."
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

// Update language selector with flags
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Update active flag button
    document.querySelectorAll('.flag-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(`'${lang}'`)) {
            btn.classList.add('active');
        }
    });
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Load saved language preference
function loadLanguagePreference() {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    changeLanguage(savedLanguage);
}

// ============================================
// TYPING ANIMATION
// ============================================
const NAME = "LAZUARDI AZKA RANGKUTI";
let typedIndex = 0;
let isTyping = true;

function typeWriter() {
    if (typedIndex <= NAME.length) {
        document.getElementById('typedName').textContent = NAME.slice(0, typedIndex);
        typedIndex++;
        setTimeout(typeWriter, 80);
    } else {
        isTyping = false;
        // Optional: Add blinking cursor after typing completes
        setTimeout(() => {
            document.getElementById('typedName').style.borderRight = '2px solid #ffe066';
        }, 300);
    }
}

typeWriter();

// ============================================
// THEME TOGGLE
// ============================================
function toggleTheme() {
    const isLight = document.body.classList.toggle('light-theme');
    const icon = document.getElementById('themeIcon');
    icon.textContent = isLight ? '🌙' : '☀️';
    
    // Save theme preference
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

// Load saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        document.getElementById('themeIcon').textContent = '🌙';
    }
}

// ============================================
// AWARDS DATA & RENDER
// ============================================
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
function renderAwards() {
    const awardsGrid = document.getElementById('awardsGrid');
    awardsGrid.innerHTML = ''; // Clear existing
    
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
}

// ============================================
// WORK EXPERIENCES DATA & RENDER
// ============================================
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
        logo: "assets/oppo2.png",
        fallbackText: "OMI"
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
        logo: "assets/chickin.jpeg",
        fallbackText: "CH"
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
        logo: "assets/sekolahmu.png",
        fallbackText: "SM"
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
        logo: "assets/sekolahmu.png",
        fallbackText: "SM"
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
        logo: "assets/gaotek.jpg",
        fallbackText: "GT"
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
        logo: "assets/lister.png",
        fallbackText: "LT"
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
        logo: "assets/dinkes.png",
        fallbackText: "DJ"
    }
];

// Render work experiences with smooth animations
function renderExperiences() {
    const experiencesContainer = document.getElementById('experiencesContainer');
    experiencesContainer.innerHTML = ''; // Clear existing
    
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
                <img src="${exp.logo}" alt="${exp.company}" 
                     onerror="this.onerror=null; this.style.display='none'; 
                              this.parentElement.innerHTML='<span style=\"font-weight:700;color:#b721ff;font-size:16px\">${exp.fallbackText}</span>'">
            </div>
        `;
        
        experiencesContainer.appendChild(item);
    });
}

// ============================================
// EDUCATION DATA & RENDER
// ============================================
const education = [
    {
        school: "Bauman Moscow State Technical University",
        degree: "Robotics System and Mechatronics",
        year: "2020 • Moscow, Russia",
        description: "Studying robotics at one of Russia's most prestigious technical universities. My studies focus on developing intelligent robotic systems that combine mechanical engineering with artificial intelligence, preparing me to contribute to the next generation of robotic innovations.",
        logo: "assets/baumanlogo.jpeg",
        fallbackText: "BMSTU"
    },
    {
        school: "14 Senior High School Jakarta",
        degree: "Science Major",
        year: "2017 - 2020 • Jakarta, Indonesia",
        description: "My academic foundation was built here through a rigorous science curriculum focusing on mathematics, physics, and chemistry. This period was essential in developing my analytical thinking and problem-solving skills, which prepared me for the challenges of studying abroad.",
        logo: "assets/sma14logo.jpeg",
        fallbackText: "SMA 14"
    }
];

// Render education with logos
function renderEducation() {
    const educationContainer = document.getElementById('educationContainer');
    educationContainer.innerHTML = ''; // Clear existing
    
    education.forEach(edu => {
        const item = document.createElement('div');
        item.className = 'education-item';
        item.innerHTML = `
            <div class="education-logo-wrapper">
                <div class="education-logo">
                    <img src="${edu.logo}" alt="${edu.school}" 
                         onerror="this.onerror=null; this.style.display='none'; 
                                  this.parentElement.innerHTML='<span style=\"font-weight:700;color:#ffe066;font-size:20px\">${edu.fallbackText}</span>'">
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
}

// ============================================
// TOOLS DATA & RENDER
// ============================================
const tools = [
    { 
        name: "Python", 
        icon: "🐍",
        color: "#3776AB",
    },
    { 
        name: "C++", 
        icon: "⚙️",
        color: "#00599C"
    },
    { 
        name: "JavaScript", 
        icon: "🟨",
        color: "#F7DF1E"
    },
    { 
        name: "ROS", 
        icon: "🤖",
        color: "#22314E"
    },
    { 
        name: "Arduino", 
        icon: "🔌",
        color: "#00979D"
    },
    { 
        name: "SolidWorks", 
        icon: "📐",
        color: "#D64228"
    },
    { 
        name: "Fusion 360", 
        icon: "🔧",
        color: "#0696D7"
    },
    { 
        name: "MATLAB", 
        icon: "📊",
        color: "#0076A8"
    },
    { 
        name: "TensorFlow", 
        icon: "🧠",
        color: "#FF6F00"
    },
    { 
        name: "Docker", 
        icon: "🐳",
        color: "#2496ED"
    },
    { 
        name: "Git", 
        icon: "📦",
        color: "#F05032"
    },
    { 
        name: "AWS", 
        icon: "☁️",
        color: "#FF9900"
    },
    { 
        name: "Firebase", 
        icon: "🔥",
        color: "#FFCA28"
    },
    { 
        name: "InfluxDB", 
        icon: "📈",
        color: "#22ADF6"
    },
    { 
        name: "Grafana", 
        icon: "📉",
        color: "#F46800"
    },
    { 
        name: "Node.js", 
        icon: "🟩",
        color: "#339933"
    }
];

// Render tools with circular layout
function renderTools() {
    const toolsGrid = document.getElementById('toolsGrid');
    toolsGrid.innerHTML = ''; // Clear existing
    
    tools.forEach((tool, idx) => {
        const circle = document.createElement('div');
        circle.className = 'tool-circle';
        circle.style.setProperty('--tool-color', tool.color || '#87CEEB');
        circle.style.transitionDelay = `${idx * 60}ms`;
        circle.innerHTML = `
            <div class="tool-icon">${tool.icon}</div>
            <div class="tool-name">${tool.name}</div>
        `;
        toolsGrid.appendChild(circle);
    });
}

// ============================================
// PROJECTS DATA & RENDER
// ============================================
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
function renderProjects() {
    const projectsContainer = document.getElementById('projectsContainer');
    projectsContainer.innerHTML = ''; // Clear existing
    
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
}

// ============================================
// SMOOTH SCROLL ANIMATIONS - IMPROVED
// ============================================
let experienceObservers = [];

function setupIntersectionObservers() {
    // 1. About Section Observer
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                // Optional: Remove class when out of view
                // entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.3, rootMargin: '0px 0px -100px 0px' });
    
    aboutObserver.observe(document.querySelector('.about-section'));
    
    // 2. Awards Observer
    const awardsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });
    
    document.querySelectorAll('.award-card').forEach(card => {
        awardsObserver.observe(card);
    });
    
    // 3. Projects Observer
    const projectsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.3 });
    
    document.querySelectorAll('.project-card').forEach(card => {
        projectsObserver.observe(card);
    });
    
    // 4. Tools Observer
    const toolsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });
    
    document.querySelectorAll('.tool-circle').forEach(circle => {
        toolsObserver.observe(circle);
    });
    
    // 5. EXPERIENCES OBSERVER - IMPROVED SMOOTH FADE IN/OUT
    const experiencesSection = document.getElementById('experiences');
    const experienceItems = document.querySelectorAll('.experience-item');
    
    // Clear existing observers
    experienceObservers.forEach(obs => obs.disconnect());
    experienceObservers = [];
    
    // Create observer for each experience item
    experienceItems.forEach((item, index) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Fade in with delay based on position
                    setTimeout(() => {
                        entry.target.classList.remove('fade-out');
                        entry.target.classList.add('fade-in');
                    }, index * 100); // Staggered delay
                } else {
                    // Fade out when leaving viewport
                    entry.target.classList.remove('fade-in');
                    entry.target.classList.add('fade-out');
                }
            });
        }, { 
            threshold: 0.3, // Trigger when 30% visible
            rootMargin: '-50px 0px -100px 0px' // Adjust trigger zone
        });
        
        observer.observe(item);
        experienceObservers.push(observer);
    });
    
    // Also observe the entire experiences section
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Optional: Add any section-wide effects
                entry.target.style.opacity = '1';
            }
        });
    }, { threshold: 0.1 });
    
    sectionObserver.observe(experiencesSection);
}

// ============================================
// SMOOTH SCROLLING FOR NAV LINKS
// ============================================
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Calculate offset for fixed navbar
                const navbarHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = targetPosition - navbarHeight - 20;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Update active nav link (optional)
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
}

// ============================================
// CONTACT CARDS ANIMATIONS
// ============================================
function setupContactAnimations() {
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                width: ${size}px;
                height: ${size}px;
                top: ${y}px;
                left: ${x}px;
            `;
            
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// ============================================
// INITIALIZE EVERYTHING ON PAGE LOAD
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Render all dynamic content
    renderAwards();
    renderExperiences();
    renderEducation();
    renderTools();
    renderProjects();
    
    // Set up interactions and observers
    setupIntersectionObservers();
    setupSmoothScrolling();
    setupContactAnimations();
    
    // Load saved preferences
    loadTheme();
    loadLanguagePreference();
    
    // Set active flag on page load
    const activeFlag = document.querySelector(`.flag-btn[onclick*="'${currentLanguage}'"]`);
    if (activeFlag) {
        activeFlag.classList.add('active');
    }
    
    // Add ripple animation CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        /* Optional: Add scroll animation for whole page */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .section-enter {
            animation: fadeInUp 0.8s ease-out forwards;
        }
    `;
    document.head.appendChild(style);
    
    // Optional: Add scroll indicator
    setTimeout(() => {
        const scrollIndicator = document.createElement('div');
        scrollIndicator.className = 'scroll-indicator';
        scrollIndicator.innerHTML = '↓';
        scrollIndicator.style.cssText = `
            position: fixed;
            bottom: 100px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 2rem;
            color: #ffe066;
            animation: bounce 2s infinite;
            opacity: 0.7;
            cursor: pointer;
            z-index: 100;
        `;
        
        const bounceStyle = document.createElement('style');
        bounceStyle.textContent = `
            @keyframes bounce {
                0%, 20%, 50%, 80%, 100% {transform: translateY(0) translateX(-50%);}
                40% {transform: translateY(-20px) translateX(-50%);}
                60% {transform: translateY(-10px) translateX(-50%);}
            }
        `;
        document.head.appendChild(bounceStyle);
        
        scrollIndicator.addEventListener('click', () => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
        
        // Remove indicator after first scroll
        let hasScrolled = false;
        window.addEventListener('scroll', () => {
            if (!hasScrolled && window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
                setTimeout(() => scrollIndicator.remove(), 500);
                hasScrolled = true;
            }
        });
        
        document.body.appendChild(scrollIndicator);
    }, 2000);
});

// ============================================
// WINDOW RESIZE HANDLER
// ============================================
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Re-setup observers on resize
        setupIntersectionObservers();
    }, 250);
});

// ============================================
// KEYBOARD NAVIGATION SUPPORT
// ============================================
document.addEventListener('keydown', function(e) {
    // Theme toggle with 'T' key
    if (e.key === 't' || e.key === 'T') {
        toggleTheme();
    }
    
    // Language shortcuts
    if (e.altKey) {
        if (e.key === '1') changeLanguage('id');
        if (e.key === '2') changeLanguage('en');
        if (e.key === '3') changeLanguage('ru');
    }
});
