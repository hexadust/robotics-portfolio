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
        
        introSubtitle: "The future of robotics is in my hand to create a better world.",
        introQuote: "The best way to predict the future is to invent it.",
        introRole: "A robotics engineer with a scientist mindset and work with ethics.",
        
        aboutDescription: "Hi! I'm <span class='highlight-name'>Lazuardi Azka Rangkuti</span>, a robotics and AI enthusiast with a background in mechatronics and robotics system. I love building intelligent systems that solve real-world problems, from IoT devices to manipulator robots. Curious, creative, and driven by impact, I am going to make the best robots ever!",
        
        toolsSubtitle: "Here are the tools & technologies that I am most skilled at",
        
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
        
        introSubtitle: "Masa depan robotika ada di tangan saya untuk menciptakan dunia yang lebih baik.",
        introQuote: "Cara terbaik untuk memprediksi masa depan adalah dengan menciptakannya.",
        introRole: "Seorang insinyur robotika dengan pola pikir ilmuwan dan bekerja dengan etika.",
        
        aboutDescription: "Halo! Saya <span class='highlight-name'>Lazuardi Azka Rangkuti</span>, seorang penggemar robotika dan AI dengan latar belakang sistem mekatronika dan robotika. Saya senang membangun sistem cerdas yang memecahkan masalah dunia nyata, dari perangkat IoT hingga robot manipulator. Penasaran, kreatif, dan digerakkan oleh dampak, saya akan membuat robot terbaik yang pernah ada!",
        
        toolsSubtitle: "Berikut adalah alat & teknologi yang paling saya kuasai",
        
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
        
        awardBadge: "PENGHARGAAN"
    }
};

let currentLanguage = 'en';

function changeLanguage(lang) {
    currentLanguage = lang;
    
    document.querySelectorAll('.flag-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(`'${lang}'`)) {
            btn.classList.add('active');
        }
    });
    
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            if (key === 'aboutDescription' || key === 'closingQuote') {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
    
    document.querySelectorAll('.award-badge').forEach(badge => {
        badge.textContent = translations[lang].awardBadge || "AWARD";
    });
    
    localStorage.setItem('preferredLanguage', lang);
}

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
        setTimeout(() => {
            const typedElement = document.getElementById('typedName');
            typedElement.style.borderRight = '2px solid #ffe066';
            typedElement.style.paddingRight = '5px';
            typedElement.style.animation = 'blink-caret 0.75s step-end infinite';
            
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

setTimeout(typeWriter, 500);

// ============================================
// THEME TOGGLE
// ============================================
function toggleTheme() {
    const isLight = document.body.classList.toggle('light-theme');
    const icon = document.getElementById('themeIcon');
    icon.textContent = isLight ? '🌙' : '☀️';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

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
// TOOLS DATA & RENDER
// ============================================
const tools = [
    { name: "Python",      logo: "assets/python.png",      fallbackText: "PY"    },
    { name: "C++",         logo: "assets/c++.png",          fallbackText: "C++"   },
    { name: "Arduino",     logo: "assets/arduino.png",      fallbackText: "AR"    },
    { name: "Fusion 360",  logo: "assets/fusion360.png",    fallbackText: "F360"  },
    { name: "ESP32",       logo: "assets/esp32.png",        fallbackText: "ESP"   },
    { name: "Kompas 3D",   logo: "assets/kompas3d.png",     fallbackText: "K3D"   },
    { name: "InfluxDB",    logo: "assets/influxdb.png",     fallbackText: "INFLUX"},
    { name: "Grafana",     logo: "assets/grafana.png",      fallbackText: "GRAF"  },
    { name: "CoppeliaSim", logo: "assets/coppeliasim.png",  fallbackText: "COP"   },
    { name: "EasyEDA",     logo: "assets/easyeda.png",      fallbackText: "EDA"   }
];

function renderTools() {
    const toolsGrid = document.getElementById('toolsGrid');
    toolsGrid.innerHTML = '';
    
    tools.forEach((tool, idx) => {
        const toolItem = document.createElement('div');
        toolItem.className = 'tool-item';
        
        const circle = document.createElement('div');
        circle.className = 'tool-circle';
        circle.style.transitionDelay = `${idx * 80}ms`;
        circle.innerHTML = `
            <img src="${tool.logo}" alt="${tool.name}" 
                 onerror="handleToolLogoError(this, '${tool.fallbackText}')">
        `;
        
        const toolName = document.createElement('div');
        toolName.className = 'tool-name';
        toolName.textContent = tool.name;
        
        toolItem.appendChild(circle);
        toolItem.appendChild(toolName);
        toolsGrid.appendChild(toolItem);
    });
}

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
// PROJECTS DATA & RENDER  ← REVISED
// ============================================
const projects = [
    {
        title: "Preventive Maintenance Robot",
        context: "Internship @ Oppo Indonesia Manufacturing",
        description: "During my internship at Oppo Indonesia Manufacturing, I noticed a pattern: unexpected failures in the screen guard machine were driving up NG (Not Good) rates on the smartphone assembly line, and the root cause traced back to unmonitored fluctuations in temperature, humidity, and dust levels inside the machine. To solve this, I designed and deployed a custom IoT environmental monitoring device that continuously reads these three parameters and streams them to a real-time Grafana web dashboard via InfluxDB — updating every five seconds. The device also displays live readings on an LCD screen directly on the machine. By correlating environmental data with NG spikes, the team was able to identify predictive patterns and act before failures occurred, reducing downtime and enabling early fault detection.",
        highlights: [
            "Reduced NG rate on screen guard machine through data-driven preventive action",
            "Real-time Grafana dashboard updated every 5 seconds via InfluxDB pipeline",
            "Full custom PCB and hardcase design, deployed directly on the production line"
        ],
        tech: ["ESP32", "InfluxDB", "Grafana", "MQTT", "PCB Design", "IoT"],
        // Replace with your actual project photo paths after uploading to assets/projects/
        image: "assets/projects/preventive/cover.jpg",
        imageFallback: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Collaborative Robot (COBOT)",
        context: "Internship @ Oppo Indonesia Manufacturing",
        description: "Manual pick-and-place operations on the smartphone assembly line were creating bottlenecks — operators averaged around 10 seconds per unit and were constrained by working hours. I was tasked with designing an automated alternative. The result was a 3-axis gantry-style collaborative robot built entirely in-house: belt-driven rails fabricated from heavy structural material, a 3D-printed pneumatic gripper, and a PLC-based control system for precise motion sequencing. What made this project especially rewarding was building it end-to-end — from mechanical design and fabrication to programming and deployment on a live production line. The COBOT achieved cycle times under 8.57 seconds per unit, can run 24/5 without interruption, and reduced overall operational cost by 35%.",
        highlights: [
            "Cycle time cut from ±10s to under 8.57s per unit",
            "Enabled continuous 24/5 unattended operation on the assembly line",
            "35% reduction in operational and production cost vs. manual labor"
        ],
        tech: ["PLC", "Pneumatic Gripper", "3D Printing", "Gantry Robot", "Belt Drive", "FDM"],
        image: "assets/projects/cobot/cover.jpg",
        imageFallback: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "РТК для производства смартфонов",
        subtitle: "Robotic Technological Complex for Smartphone Manufacturing",
        context: "Bachelor Thesis • BMSTU, 2025",
        description: "My bachelor thesis takes the COBOT concept from my internship and evolves it into a fully integrated smart manufacturing system. The Robotic Technological Complex (РТК) consists of a three-axis gantry transporter driven by Yaskawa Sigma-7 servo drives, synchronized via EtherCAT through an Omron CJ2M PLC. Two adaptive grippers — each housing an ESP32-S3, ESP32-CAM, and MG996R servo — work in parallel to perform pick-and-place and real-time quality inspection simultaneously. Defect classification uses a two-stage computer vision pipeline (Classical CV preprocessing + FOMO model on Edge Impulse), and all results are transmitted via MQTT to InfluxDB for visualization on a Grafana dashboard. The entire system — mechanical design in KOMPAS-3D and Fusion 360, electronics, PCB, and software — was designed from scratch.",
        highlights: [
            "Dual-gripper CV pipeline classifies defects across 4 classes in real time",
            "Full telemetry stack: MQTT → InfluxDB → Grafana live dashboard",
            "EtherCAT-synchronized servo motion with Yaskawa Sigma-7 and Omron CJ2M PLC"
        ],
        tech: ["Omron CJ2M PLC", "Yaskawa Sigma-7", "ESP32-S3", "EtherCAT", "MQTT", "FOMO / Edge Impulse", "KOMPAS-3D", "Fusion 360"],
        image: "assets/projects/rtk/cover.jpg",
        imageFallback: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Adaptive Gripper with Computer Vision",
        context: "Bachelor Thesis Component • BMSTU, 2025",
        description: "Designed as the end-effector of the РТК system, this 2-finger adaptive gripper is a self-contained engineering system. The ABS-printed body houses an MG996R servo driving a worm-gear mechanism — a deliberate design choice, as the worm gear is inherently self-locking, meaning the grip holds securely even if power is cut mid-operation. At the heart of the electronics is an ESP32-S3 running a two-stage computer vision pipeline: Classical CV for preprocessing and FOMO (Faster Objects, More Objects) for real-time defect detection on smartphone units, captured by an onboard ESP32-CAM with a 2MP lens. All of this communicates with the main PLC via RS485/Modbus RTU. Power architecture uses an XL4015 step-down module to safely step 24V industrial voltage down to 5V for the microcontroller stack. The PCB was fully designed in EasyEDA.",
        highlights: [
            "Worm-gear self-locking mechanism maintains grip integrity even during power failure",
            "Two-stage vision pipeline: Classical CV + FOMO for 4-class defect classification",
            "Custom PCB designed in EasyEDA with full power regulation architecture"
        ],
        tech: ["ESP32-S3", "ESP32-CAM", "MG996R Servo", "RS485 / Modbus RTU", "FOMO", "EasyEDA", "3D Printing", "XL4015"],
        image: "assets/projects/gripper/cover.jpg",
        imageFallback: "https://images.unsplash.com/photo-1578663248512-2ee6f49c45a8?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Self-Balancing Robot",
        context: "Course Project — Control Systems • BMSTU, 2024",
        description: "This курсовой проект for the Control Systems discipline required me to go through the complete engineering lifecycle of a two-wheeled self-balancing robot: mathematical modeling, controller design, simulation, and physical implementation. I started by deriving the equations of motion from scratch using Lagrangian mechanics, linearized the nonlinear system around the upright equilibrium, and constructed the full state-space representation with real physical parameters (M=2 kg, l=0.25 m, r=0.065 m, I_b=0.0121 kg·m²). Two controllers were designed and compared — a classical PID and a modern LQR — both implemented in MATLAB Simulink with stability verified via Hurwitz analysis. The physical prototype was built on a B-Robot ESP32 base with a custom Kompas-3D chassis, MPU-6050 IMU, A4988 stepper drivers, and NEMA 17 motors, with a custom PCB designed in EasyEDA.",
        highlights: [
            "Full Lagrangian mathematical model with Hurwitz stability analysis",
            "PID vs. LQR comparison: both designed, simulated in Simulink, and implemented",
            "Custom 3D-printed chassis (Kompas-3D) and custom PCB (EasyEDA) fabricated"
        ],
        tech: ["ESP32", "MPU-6050", "NEMA 17", "A4988", "MATLAB Simulink", "LQR", "PID", "Kompas-3D", "EasyEDA"],
        image: "assets/projects/selfbalancing/cover.jpg",
        imageFallback: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "5-DOF Manipulator Robot",
        context: "Course Project — Machine Elements • BMSTU, 2023",
        description: "Developed for the Machine Elements (Детали машин) discipline, this project focused on the structural engineering and calculation of a 5-DOF robotic manipulator arm. The core of the work was the design and analysis of the rotary turntable mechanism: a spur gear pair with a 110:27 tooth ratio (4.07:1 reduction), fully analyzed for load capacity, gear efficiency, and dynamic performance. I performed complete engineering calculations covering moment of inertia (4.37×10⁻³ kg·m²), required torque (0.23 Nm), gear efficiency (85%), theoretical payload capacity (1.31 kg), and maximum angular acceleration (42 rad/s²). A safety factor of 1.8 and bearing life of 6.25×10⁷ revolutions were validated against design requirements. The physical prototype was fabricated from PLA using FDM 3D printing, with full technical drawings produced in KOMPAS-3D.",
        highlights: [
            "Spur gear 110:27 designed for 85% efficiency with 1.8 validated safety factor",
            "Full engineering calculations: torque, inertia, bearing life, payload, and angular acceleration",
            "3D-printed PLA prototype with complete technical drawings in KOMPAS-3D"
        ],
        tech: ["KOMPAS-3D", "Spur Gear Design", "FDM 3D Printing", "Mechanical Calculation", "Technical Drawing"],
        image: "assets/projects/manipulator/cover.jpg",
        imageFallback: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Stackster — Smart Mobile Robot with IoT",
        context: "Course Project — Theory of Mechanisms & Machines • BMSTU, 2022",
        description: "My first major курсовой проект at BMSTU, developed for the Theory of Mechanisms and Machines discipline. Stackster is a factory floor mobile robot built around a scissor-jack (zigzag) lifting mechanism for transporting materials across a production area. The academic core of the project was a full kinematic analysis — deriving the velocity and acceleration profiles of each link in the zigzag mechanism — followed by a dynamic analysis to quantify reaction forces and structural loads under operational conditions. All simulations were carried out in MATLAB. On the practical side, the robot was built with dual operating modes: autonomous line-following using floor sensors, and remote control via the Blynk IoT app, complete with a custom GUI. Full electrical wiring schematics and structural diagrams were produced as part of the deliverables.",
        highlights: [
            "Full kinematic and dynamic analysis of zigzag lift mechanism in MATLAB",
            "Dual-mode operation: autonomous line-follower and remote IoT control via Blynk",
            "Complete electrical schematic, structural diagram, and custom Blynk GUI produced"
        ],
        tech: ["Arduino", "Blynk IoT", "MATLAB", "Line Follower Sensor", "Zigzag Mechanism"],
        image: "assets/projects/stackster/cover.jpg",
        imageFallback: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Automated Wardrobe",
        context: "Hardathon 2025 — 4th Winner & Favourite Project • BMSTU",
        description: "Created during Хардатон 2025 at Bauman Moscow State Technical University, this project tackled a simple but genuinely annoying problem: managing coats and jackets in a busy university environment. Our team designed and built a functional MVP of an automated wardrobe — a motorized storage unit that retrieves and returns garments on demand. Working under competition time pressure, the project covered the full product development pipeline from problem definition and system architecture to 3D modeling and physical prototyping. Beyond the technical execution, the project challenged us to think like product designers — balancing user experience, mechanical reliability, and buildability within tight constraints. The jury recognised both the practical value and the quality of execution by awarding us 4th place and the title of Favourite Project.",
        highlights: [
            "Full MVP built within competition timeframe — from concept to working prototype",
            "Awarded 4th Place and Favourite Project by the Hardathon 2025 jury",
            "Full pipeline: system design, 3D modeling, and physical prototyping as a team"
        ],
        tech: ["3D Modeling", "Rapid Prototyping", "Mechanical Design", "System Architecture"],
        image: "assets/projects/wardrobe/cover.jpg",
        imageFallback: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "C.L.A.R.A.",
        subtitle: "Climate Learning and Response Assistant",
        context: "Personal IoT / ML Project, 2024",
        description: "C.L.A.R.A. is a personal project I built to explore how far you can push an ESP32 when you combine real-time sensing, machine learning, and workflow automation. An ESP32 DevkitC V4 reads temperature and humidity from an SHT31-D sensor and rain probability from an RH56 rain sensor. The data flows through Node-RED into a Python environment where a Scikit-learn model is continuously trained to predict weather conditions one hour ahead. An N8N automation workflow acts as the orchestration layer — routing trained prediction results to three destinations simultaneously: a TFT LCD ILI9341 for on-device real-time display, and a Telegram bot that delivers current status alerts and hourly forecasts automatically. The project is fully self-contained: once deployed, it monitors, predicts, and notifies without any manual intervention.",
        highlights: [
            "End-to-end ML pipeline: sensor acquisition → Scikit-learn training → live 1-hour forecast",
            "N8N automation orchestrates ESP32, VS Code, TFT LCD, and Telegram bot in one workflow",
            "Fully autonomous operation — monitors, predicts, and notifies with zero manual input"
        ],
        tech: ["ESP32", "SHT31-D", "Node-RED", "N8N", "Scikit-learn", "Python", "Telegram Bot", "TFT ILI9341"],
        image: "assets/projects/clara/cover.jpg",
        imageFallback: "https://images.unsplash.com/photo-1569163139394-de4798aa62b6?auto=format&fit=crop&w=800&q=80"
    }
];

// Render projects — new horizontal card layout
function renderProjects() {
    const projectsContainer = document.getElementById('projectsContainer');
    projectsContainer.innerHTML = '';

    projects.forEach((project) => {
        const card = document.createElement('div');
        card.className = 'project-card-v2';

        const highlightsHTML = project.highlights.map(h =>
            `<div class="project-highlight-item"><span class="highlight-arrow">▹</span>${h}</div>`
        ).join('');

        const tagsHTML = project.tech.map(t =>
            `<span class="project-tech-tag">${t}</span>`
        ).join('');

        card.innerHTML = `
            <div class="pv2-image-panel">
                <img
                    src="${project.image}"
                    onerror="this.src='${project.imageFallback}'"
                    alt="${project.title}"
                    loading="lazy"
                >
                <div class="pv2-context-badge">${project.context}</div>
            </div>
            <div class="pv2-content-panel">
                <h3 class="pv2-title">${project.title}</h3>
                ${project.subtitle ? `<p class="pv2-subtitle">${project.subtitle}</p>` : ''}
                <p class="pv2-description">${project.description}</p>
                <div class="pv2-highlights">${highlightsHTML}</div>
                <div class="pv2-tags">${tagsHTML}</div>
            </div>
        `;

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
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.3, rootMargin: '0px 0px -50px 0px' });
    aboutObserver.observe(document.querySelector('.about-section'));

    // 2. Awards Observer
    const awardsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.2 });
    document.querySelectorAll('.award-card').forEach(card => awardsObserver.observe(card));

    // 3. Tools Observer
    const toolsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.2 });
    document.querySelectorAll('.tool-circle').forEach(circle => toolsObserver.observe(circle));

    // 4. Projects Observer — targets new card class
    const projectsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('fade-in');
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    });
    document.querySelectorAll('.project-card-v2').forEach(card => projectsObserver.observe(card));

    // 5. Experiences Observer
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceObservers.forEach(obs => obs.disconnect());
    experienceObservers = [];

    experienceItems.forEach((item, index) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.remove('fade-out');
                        entry.target.classList.add('fade-in');
                    }, index * 150);
                } else {
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
                const navbarHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = targetPosition - navbarHeight - 20;

                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                history.pushState(null, null, targetId);
                updateActiveNavLink(targetId);
            }
        });
    });
}

function updateActiveNavLink(targetId) {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === targetId) link.classList.add('active');
    });
}

// ============================================
// CONTACT CARDS ANIMATIONS
// ============================================
function setupContactAnimations() {
    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(card => {
        card.addEventListener('click', function(e) {
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
            setTimeout(() => { if (ripple.parentElement === this) this.removeChild(ripple); }, 600);
        });
    });
}

// ============================================
// SCROLL PARALLAX
// ============================================
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    const introSection = document.querySelector('.intro-section');
    if (introSection && st < window.innerHeight) {
        const scrolled = st / window.innerHeight;
        introSection.style.transform = `translateY(${scrolled * 30}px)`;
        introSection.style.opacity = `${1 - scrolled * 0.5}`;
    }
    lastScrollTop = st <= 0 ? 0 : st;
}, false);

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Robotics Portfolio Initializing...');

    translations.en.readMore = "READ MORE";
    translations.id.readMore = "BACA SELENGKAPNYA";

    renderAwards();
    renderExperiences();
    renderEducation();
    renderTools();
    renderProjects();

    setupIntersectionObservers();
    setupSmoothScrolling();
    setupContactAnimations();

    loadTheme();
    loadLanguagePreference();

    const activeFlag = document.querySelector(`.flag-btn[onclick*="'${currentLanguage}'"]`);
    if (activeFlag) activeFlag.classList.add('active');

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY + 100;
        let currentSection = '';
        document.querySelectorAll('section[id]').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        if (currentSection) updateActiveNavLink(`#${currentSection}`);
    });

    // ---- Inject CSS for new project cards ----
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to { transform: scale(4); opacity: 0; }
        }

        .nav-links a.active {
            color: #ffe066 !important;
            border-bottom: 2px solid #ffe066;
        }
        body.light-theme .nav-links a.active {
            color: #21d4fd !important;
            border-bottom: 2px solid #21d4fd;
        }

        img:not([src=""]) { opacity: 0; transition: opacity 0.5s ease; }
        img.loaded { opacity: 1; }

        body.light-theme .photo-border-animation {
            background: linear-gradient(45deg, #21d4fd, #b721ff, #ff0080, #21d4fd);
            background-size: 400% 400%;
        }

        .highlight-name {
            font-weight: 700;
            color: #21d4fd;
            background: linear-gradient(90deg, #21d4fd, #b721ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        /* ============ PROJECT CARDS V2 ============ */
        #projectsContainer {
            display: flex;
            flex-direction: column;
            gap: 2.5rem;
            padding: 0 0 2rem;
        }

        .project-card-v2 {
            display: flex;
            flex-direction: row;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.07);
            border-radius: 20px;
            overflow: hidden;
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 0.7s ease, transform 0.7s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .project-card-v2.fade-in {
            opacity: 1;
            transform: translateY(0);
        }

        .project-card-v2:hover {
            box-shadow: 0 24px 64px rgba(183, 33, 255, 0.18);
            border-color: rgba(183, 33, 255, 0.25);
        }

        /* Alternate image side for even cards */
        .project-card-v2:nth-child(even) {
            flex-direction: row-reverse;
        }

        /* Image panel */
        .pv2-image-panel {
            position: relative;
            width: 360px;
            min-width: 360px;
            overflow: hidden;
            background: #111;
        }

        .pv2-image-panel img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform 0.5s ease;
            opacity: 1 !important;
        }

        .project-card-v2:hover .pv2-image-panel img {
            transform: scale(1.06);
        }

        /* Context badge on image */
        .pv2-context-badge {
            position: absolute;
            top: 14px;
            left: 14px;
            background: rgba(183, 33, 255, 0.88);
            color: #fff;
            font-size: 0.65rem;
            font-weight: 700;
            padding: 4px 12px;
            border-radius: 20px;
            letter-spacing: 0.06em;
            text-transform: uppercase;
            backdrop-filter: blur(6px);
            max-width: calc(100% - 28px);
            line-height: 1.4;
        }

        .project-card-v2:nth-child(even) .pv2-context-badge {
            left: auto;
            right: 14px;
        }

        /* Content panel */
        .pv2-content-panel {
            flex: 1;
            padding: 2.2rem 2.8rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 0;
        }

        .pv2-title {
            font-size: 1.35rem;
            font-weight: 800;
            color: #ffffff;
            margin: 0 0 0.25rem;
            line-height: 1.3;
            letter-spacing: -0.01em;
        }

        .pv2-subtitle {
            font-size: 0.78rem;
            color: #b721ff;
            font-weight: 700;
            margin: 0 0 1rem;
            text-transform: uppercase;
            letter-spacing: 0.07em;
        }

        .pv2-description {
            font-size: 0.9rem;
            line-height: 1.8;
            color: rgba(255, 255, 255, 0.68);
            margin: 0 0 1.2rem;
        }

        .pv2-highlights {
            display: flex;
            flex-direction: column;
            gap: 0.45rem;
            margin-bottom: 1.3rem;
        }

        .project-highlight-item {
            display: flex;
            align-items: flex-start;
            gap: 0.5rem;
            font-size: 0.83rem;
            color: rgba(255, 255, 255, 0.6);
            line-height: 1.55;
        }

        .highlight-arrow {
            color: #ffe066;
            font-size: 0.9rem;
            line-height: 1.55;
            flex-shrink: 0;
        }

        .pv2-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.4rem;
        }

        .project-tech-tag {
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: rgba(255, 255, 255, 0.55);
            font-size: 0.68rem;
            font-weight: 600;
            padding: 3px 10px;
            border-radius: 20px;
            letter-spacing: 0.04em;
            text-transform: uppercase;
        }

        /* Light theme overrides */
        body.light-theme .project-card-v2 {
            background: rgba(0, 0, 0, 0.025);
            border-color: rgba(0, 0, 0, 0.08);
        }
        body.light-theme .project-card-v2:hover {
            box-shadow: 0 24px 64px rgba(33, 212, 253, 0.12);
            border-color: rgba(33, 212, 253, 0.25);
        }
        body.light-theme .pv2-title { color: #1a1a2e; }
        body.light-theme .pv2-subtitle { color: #21d4fd; }
        body.light-theme .pv2-description { color: rgba(0, 0, 0, 0.62); }
        body.light-theme .project-highlight-item { color: rgba(0, 0, 0, 0.52); }
        body.light-theme .project-tech-tag {
            background: rgba(0, 0, 0, 0.04);
            border-color: rgba(0, 0, 0, 0.1);
            color: rgba(0, 0, 0, 0.5);
        }
        body.light-theme .pv2-context-badge {
            background: rgba(33, 212, 253, 0.88);
        }

        /* Responsive */
        @media (max-width: 900px) {
            .project-card-v2,
            .project-card-v2:nth-child(even) {
                flex-direction: column;
            }
            .pv2-image-panel {
                width: 100%;
                min-width: 100%;
                height: 240px;
            }
            .pv2-content-panel {
                padding: 1.6rem 1.8rem;
            }
            .project-card-v2:nth-child(even) .pv2-context-badge {
                left: 14px;
                right: auto;
            }
        }

        @media (max-width: 480px) {
            .pv2-title { font-size: 1.15rem; }
            .pv2-content-panel { padding: 1.4rem; }
            .pv2-image-panel { height: 200px; }
        }
    `;
    document.head.appendChild(style);

    document.querySelector('.nav-links a').classList.add('active');

    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function() { this.classList.add('loaded'); });
            img.addEventListener('error', function() { this.classList.add('loaded'); });
        }
    });
});

// ============================================
// WINDOW RESIZE HANDLER
// ============================================
let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => { setupIntersectionObservers(); }, 250);
});

// ============================================
// KEYBOARD NAVIGATION SUPPORT
// ============================================
document.addEventListener('keydown', function(e) {
    if ((e.key === 't' || e.key === 'T') && !e.ctrlKey && !e.altKey) toggleTheme();

    if (e.altKey && !e.ctrlKey) {
        if (e.key === '1') changeLanguage('id');
        if (e.key === '2') changeLanguage('en');
    }

    if (e.ctrlKey && !e.altKey && e.key >= '1' && e.key <= '7') {
        e.preventDefault();
        const sections = ['about-me', 'education', 'awards', 'experiences', 'projects', 'tools', 'contact'];
        const index = parseInt(e.key) - 1;
        if (index >= 0 && index < sections.length) {
            const target = document.getElementById(sections[index]);
            if (target) {
                const navbarHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({ top: targetPosition - navbarHeight - 20, behavior: 'smooth' });
                updateActiveNavLink(`#${sections[index]}`);
            }
        }
    }
});

// ============================================
// CLEANUP ON PAGE UNLOAD
// ============================================
window.addEventListener('beforeunload', function() {
    experienceObservers.forEach(observer => observer.disconnect());
});
