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
        contactDescription: "Let's connect! Feel free to reach out through any of these platforms.",
        
        // New translations from HTML
        introSubtitle: "The future of robotics is in my hand to create a better world.",
        introQuote: "The best way to predict the future is to invent it.",
        introRole: "A robotics engineer with a scientist mindset and work with ethics.",
        
        aboutDescription: "Hi! I'm <span class='highlight-name'>Lazuardi Azka Rangkuti</span>, a robotics and AI enthusiast with a background in mechatronics and robotics system. I love building intelligent systems that solve real-world problems, from IoT devices to manipulator robots. Curious, creative, and driven by impact, I am going to make the best robots ever!",
        
        toolsSubtitle: "Here are the tools & technologies that I am most skilled at",
        
        // Contact section translations
        emailTitle: "Email",
        emailDescription: "Send me a message directly",
        contactHintEmail: "Click to compose email",
        
        linkedinTitle: "LinkedIn",
        linkedinDescription: "Connect professionally",
        contactHintLinkedIn: "View my experience",
        
        whatsappTitle: "WhatsApp",
        whatsappDescription: "Quick chat",
        contactHintWhatsApp: "Instant messaging",
        
        closingQuote: "To build the future of robotics, we must connect minds as passionately as we connect circuits. Every collaboration sparks innovation for a better world.",
        
        // Award badge
        awardBadge: "AWARD"
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
        contactDescription: "Mari terhubung! Jangan ragu untuk menghubungi saya melalui salah satu platform berikut.",
        
        // New translations from HTML
        introSubtitle: "Masa depan robotika ada di tangan saya untuk menciptakan dunia yang lebih baik.",
        introQuote: "Cara terbaik untuk memprediksi masa depan adalah dengan menciptakannya.",
        introRole: "Seorang insinyur robotika dengan pola pikir ilmuwan dan bekerja dengan etika.",
        
        aboutDescription: "Halo! Saya <span class='highlight-name'>Lazuardi Azka Rangkuti</span>, seorang penggemar robotika dan AI dengan latar belakang sistem mekatronika dan robotika. Saya senang membangun sistem cerdas yang memecahkan masalah dunia nyata, dari perangkat IoT hingga robot manipulator. Penasaran, kreatif, dan digerakkan oleh dampak, saya akan membuat robot terbaik yang pernah ada!",
        
        toolsSubtitle: "Berikut adalah alat & teknologi yang paling saya kuasai",
        
        // Contact section translations
        emailTitle: "Email",
        emailDescription: "Kirim pesan langsung kepada saya",
        contactHintEmail: "Klik untuk menulis email",
        
        linkedinTitle: "LinkedIn",
        linkedinDescription: "Terhubung secara profesional",
        contactHintLinkedIn: "Lihat pengalaman saya",
        
        whatsappTitle: "WhatsApp",
        whatsappDescription: "Obrolan cepat",
        contactHintWhatsApp: "Pesan instan",
        
        closingQuote: "Untuk membangun masa depan robotika, kita harus menghubungkan pikiran dengan semangat yang sama seperti kita menghubungkan sirkuit. Setiap kolaborasi memicu inovasi untuk dunia yang lebih baik.",
        
        // Award badge
        awardBadge: "PENGHARGAAN"
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
            // Check if element contains HTML tags (like span in aboutDescription)
            if (key === 'aboutDescription' || key === 'closingQuote') {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
    
    // Update award badges
    document.querySelectorAll('.award-badge').forEach(badge => {
        badge.textContent = translations[lang].awardBadge || "AWARD";
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
        // Add blinking cursor after typing completes
        setTimeout(() => {
            const typedElement = document.getElementById('typedName');
            typedElement.style.borderRight = '2px solid #ffe066';
            typedElement.style.paddingRight = '5px';
            typedElement.style.animation = 'blink-caret 0.75s step-end infinite';
            
            // Add blink animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes blink-caret {
                    from, to { border-color: transparent; }
                    50% { border-color: #ffe066; }
                }
            `;
            document.head.appendChild(style);
        }, 300);
    }
}

// Start typing animation
setTimeout(typeWriter, 500);

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
    { title: "Certificate of AI Engineering Bootcamp - Excellence", org: "REA x Skill Academy" },  
    { title: "Participation on Maze Solving Competition", org: "Robotics Education Centre" },
    { title: "Certified Internet of Things Professional – Excellence", org: "Edspert.id" },
    { title: "Certification in IoT and Digital Transformation", org: "Cisco Networking Academy" },
    { title: "Securely Connecting AWS IoT Devices to the Cloud", org: "Amazon Web Services" }
];

// Render awards
function renderAwards() {
    const awardsGrid = document.getElementById('awardsGrid');
    awardsGrid.innerHTML = '';
    
    awards.forEach((award, idx) => {
        const card = document.createElement('div');
        card.className = 'award-card';
        card.innerHTML = `
            <div class="award-badge">${translations[currentLanguage].awardBadge || "AWARD"}</div>
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
        logo: "assets/sekolah.mu.png",
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
        logo: "assets/sekolah.mu.png",
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

// Render work experiences with logos
function renderExperiences() {
    const experiencesContainer = document.getElementById('experiencesContainer');
    experiencesContainer.innerHTML = '';
    
    experiences.forEach((exp, idx) => {
        const item = document.createElement('div');
        item.className = `experience-item ${idx % 2 === 0 ? 'left' : 'right'}`;
        item.id = `exp-${idx}`;
        
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
                     onerror="handleLogoError(this, '${exp.fallbackText}')">
            </div>
        `;
        
        experiencesContainer.appendChild(item);
    });
}

// Helper function for logo error handling
function handleLogoError(imgElement, fallbackText) {
    imgElement.style.display = 'none';
    imgElement.parentElement.innerHTML = `
        <span style="
            font-weight: 700;
            color: #b721ff;
            font-size: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            text-transform: uppercase;
        ">${fallbackText}</span>
    `;
}

// ============================================
// EDUCATION DATA & RENDER
// ============================================
const education = [
    {
        school: "Bauman Moscow State Technical University",
        degree: "Robotics System and Mechatronics",
        year: "2020 • Moscow, Russia",
        description: "Majoring at robotics systems and mechatronics at Russia's most prestigious technical universities. My studies focus on developing intelligent robotic systems that combine mechatronics, preparing me to contribute to the next generation of robotic innovations.",
        logo: "assets/baumanlogo.jpeg",
        fallbackText: "BMSTU"
    },
    {
        school: "14 Senior High School Jakarta",
        degree: "Science Major",
        year: "2017 • Jakarta, Indonesia",  
        description: "My academic foundation was built here through a rigorous science curriculum focusing on mathematics, physics, and chemistry. This period was essential in developing my analytical thinking and problem-solving skills, which prepared me for the challenges of studying abroad.",
        logo: "assets/sma14logo.jpeg",
        fallbackText: "SMA 14"
    }
];

// Render education with logos
function renderEducation() {
    const educationContainer = document.getElementById('educationContainer');
    educationContainer.innerHTML = '';
    
    education.forEach(edu => {
        const item = document.createElement('div');
        item.className = 'education-item';
        item.innerHTML = `
            <div class="education-logo-wrapper">
                <div class="education-logo">
                    <img src="${edu.logo}" alt="${edu.school}" 
                         onerror="handleEducationLogoError(this, '${edu.fallbackText}')">
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

// Helper function for education logo error handling
function handleEducationLogoError(imgElement, fallbackText) {
    imgElement.style.display = 'none';
    imgElement.parentElement.innerHTML = `
        <span style="
            font-weight: 700;
            color: #ffe066;
            font-size: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            text-transform: uppercase;
        ">${fallbackText}</span>
    `;
}

// ============================================
// TOOLS DATA & RENDER - REVISI: Gambar langsung jadi lingkaran
// ============================================
const tools = [
    { 
        name: "Python", 
        logo: "assets/python.png",
        fallbackText: "PY"
    },
    { 
        name: "C++", 
        logo: "assets/c++.png",
        fallbackText: "C++"
    },
    { 
        name: "Arduino", 
        logo: "assets/arduino.png",
        fallbackText: "AR"
    },
    { 
        name: "Fusion 360", 
        logo: "assets/fusion360.png",
        fallbackText: "F360"
    },
    { 
        name: "ESP32", 
        logo: "assets/esp32.png",
        fallbackText: "ESP"
    },
    { 
        name: "Kompas 3D", 
        logo: "assets/kompas3d.png",
        fallbackText: "K3D"
    },
    { 
        name: "InfluxDB", 
        logo: "assets/influxdb.png",
        fallbackText: "INFLUX"
    },
    { 
        name: "Grafana", 
        logo: "assets/grafana.png",
        fallbackText: "GRAF"
    },
    { 
        name: "CoppeliaSim", 
        logo: "assets/coppeliasim.png",
        fallbackText: "COP"
    },
    { 
        name: "EasyEDA", 
        logo: "assets/easyeda.png",
        fallbackText: "EDA"
    }
];

// Render tools dengan gambar langsung jadi lingkaran - REVISI LENGKAP
function renderTools() {
    const toolsGrid = document.getElementById('toolsGrid');
    toolsGrid.innerHTML = '';
    
    tools.forEach((tool, idx) => {
        // Create tool-item container
        const toolItem = document.createElement('div');
        toolItem.className = 'tool-item';
        
        // Create tool-circle dengan gambar langsung
        const circle = document.createElement('div');
        circle.className = 'tool-circle';
        circle.style.transitionDelay = `${idx * 80}ms`;
        
        // REVISI: Gambar langsung di dalam circle, tanpa container tambahan
        circle.innerHTML = `
            <img src="${tool.logo}" alt="${tool.name}" 
                 onerror="handleToolLogoError(this, '${tool.fallbackText}')">
        `;
        
        // Create tool-name element (di luar lingkaran)
        const toolName = document.createElement('div');
        toolName.className = 'tool-name';
        toolName.textContent = tool.name;
        
        // Append circle dan name ke tool-item
        toolItem.appendChild(circle);
        toolItem.appendChild(toolName);
        
        toolsGrid.appendChild(toolItem);
    });
}

// Helper function for tool logo error handling
function handleToolLogoError(imgElement, fallbackText) {
    imgElement.style.display = 'none';
    imgElement.parentElement.innerHTML = `
        <span style="
            font-weight: 700;
            color: #ffe066;
            font-size: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
        ">${fallbackText}</span>
    `;
}

// ============================================
// PROJECTS DATA & RENDER
// ============================================
const projects = [
    {
        title: "Stackster: Intelligent Factory Mobile Robot with IoT",
        description: "An advanced factory mobile robot with a zigzag lifting mechanism for automated material handling. Features dual mode operation, autonomous line following and remote control via IoT Blynk App for versatile industrial applications.",  // DIUBAH: Deskripsi baru sesuai permintaan
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Collaborative Robot (COBOT)",
        description: "A gantry style collaborative robot developed at Oppo Indonesia Manufacturing, designed for precision pick and place operations of smartphone units between production machines and conveyor systems for better efficiency",  // DIUBAH: Deskripsi baru sesuai permintaan
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
        description: "A comprehensive study of mechanical and kinematical analysis of the turntable component in a five DOF robotic manipulator, focusing on structural design, load distribution, and optimization for precision automation tasks.",  // DIUBAH: Deskripsi baru sesuai permintaan
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
    projectsContainer.innerHTML = '';
    
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
                <button class="project-btn" data-translate="readMore">READ MORE</button>
            </div>
        `;
        
        // Add click handler for project button
        card.querySelector('.project-btn').addEventListener('click', function(e) {
            e.stopPropagation();
            alert(`More details about "${project.title}" coming soon!\n\n${project.description}`);
        });
        
        // Add click handler for entire card
        card.addEventListener('click', function(e) {
            if (e.target.classList.contains('project-btn')) return;
            alert(`Project: ${project.title}\n\n${project.description}`);
        });
        
        projectsContainer.appendChild(card);
    });
}

// ============================================
// INTERSECTION OBSERVERS
// ============================================
let experienceObservers = [];

function setupIntersectionObservers() {
    // 1. About Section Observer
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3, rootMargin: '0px 0px -50px 0px' });
    
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
    
    // 3. Tools Observer
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
    
    // 4. Projects Observer
    const projectsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { 
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    });
    
    document.querySelectorAll('.project-card').forEach(card => {
        projectsObserver.observe(card);
    });
    
    // 5. Experiences Observer
    const experienceItems = document.querySelectorAll('.experience-item');
    
    // Clear existing observers
    experienceObservers.forEach(obs => obs.disconnect());
    experienceObservers = [];
    
    // Create observer for each experience item
    experienceItems.forEach((item, index) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Fade in when entering viewport
                    setTimeout(() => {
                        entry.target.classList.remove('fade-out');
                        entry.target.classList.add('fade-in');
                    }, index * 150);
                } else {
                    // Fade out when leaving viewport
                    entry.target.classList.remove('fade-in');
                    entry.target.classList.add('fade-out');
                }
            });
        }, { 
            threshold: 0.2,
            rootMargin: '-100px 0px -150px 0px'
        });
        
        observer.observe(item);
        experienceObservers.push(observer);
    });
}

// ============================================
// SMOOTH SCROLLING FOR NAV LINKS
// ============================================
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                // Calculate offset for fixed navbar
                const navbarHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = targetPosition - navbarHeight - 20;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL hash without scrolling
                history.pushState(null, null, targetId);
                
                // Update active nav link
                updateActiveNavLink(targetId);
            }
        });
    });
}

// Update active nav link
function updateActiveNavLink(targetId) {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === targetId) {
            link.classList.add('active');
        }
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
                z-index: 1;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                if (ripple.parentElement === this) {
                    this.removeChild(ripple);
                }
            }, 600);
        });
    });
}

// ============================================
// ENHANCE SCROLL EXPERIENCE
// ============================================
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add subtle parallax effect to intro section
    const introSection = document.querySelector('.intro-section');
    if (introSection && st < window.innerHeight) {
        const scrolled = st / window.innerHeight;
        introSection.style.transform = `translateY(${scrolled * 30}px)`;
        introSection.style.opacity = `${1 - scrolled * 0.5}`;
    }
    
    // Update last scroll position
    lastScrollTop = st <= 0 ? 0 : st;
}, false);

// ============================================
// INITIALIZE EVERYTHING ON PAGE LOAD
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Robotics Portfolio Initializing...');
    
    // Add translation for "READ MORE" button
    translations.en.readMore = "READ MORE";
    translations.id.readMore = "BACA SELENGKAPNYA";
    
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
    
    // Add active class to nav links on scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY + 100;
        let currentSection = '';
        
        document.querySelectorAll('section[id]').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = sectionId;
            }
        });
        
        if (currentSection) {
            updateActiveNavLink(`#${currentSection}`);
        }
    });
    
    // Add CSS styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .nav-links a.active {
            color: #ffe066 !important;
            border-bottom: 2px solid #ffe066;
        }
        
        body.light-theme .nav-links a.active {
            color: #21d4fd !important;
            border-bottom: 2px solid #21d4fd;
        }
        
        /* Smooth image loading */
        img:not([src=""]) {
            opacity: 0;
            transition: opacity 0.5s ease;
        }
        
        img.loaded {
            opacity: 1;
        }
        
        /* Photo border animation for light theme */
        body.light-theme .photo-border-animation {
            background: linear-gradient(45deg, #21d4fd, #b721ff, #ff0080, #21d4fd);
            background-size: 400% 400%;
        }
        
        /* Highlight name styling */
        .highlight-name {
            font-weight: 700;
            color: #21d4fd;
            background: linear-gradient(90deg, #21d4fd, #b721ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
    `;
    document.head.appendChild(style);
    
    // Initialize first nav link as active
    document.querySelector('.nav-links a').classList.add('active');
    
    // Add image loading handler
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
            img.addEventListener('error', function() {
                console.warn('Failed to load image:', this.src);
                this.classList.add('loaded');
            });
        }
    });
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
    if ((e.key === 't' || e.key === 'T') && !e.ctrlKey && !e.altKey) {
        toggleTheme();
    }
    
    // Language shortcuts (Alt + Number)
    if (e.altKey && !e.ctrlKey) {
        if (e.key === '1') changeLanguage('id');
        if (e.key === '2') changeLanguage('en');
    }
    
    // Scroll to sections with number keys (Ctrl + Number)
    if (e.ctrlKey && !e.altKey && e.key >= '1' && e.key <= '7') {
        e.preventDefault();
        const sections = ['about-me', 'education', 'awards', 'experiences', 'projects', 'tools', 'contact'];
        const index = parseInt(e.key) - 1;
        if (index >= 0 && index < sections.length) {
            const target = document.getElementById(sections[index]);
            if (target) {
                const navbarHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = targetPosition - navbarHeight - 20;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                updateActiveNavLink(`#${sections[index]}`);
            }
        }
    }
});

// ============================================
// CLEANUP ON PAGE UNLOAD
// ============================================
window.addEventListener('beforeunload', function() {
    // Clear experience observers
    experienceObservers.forEach(observer => {
        observer.disconnect();
    });
});
