import React, { useEffect, useRef, useState } from "react";
import oppoLogo from "./assets/oppo2.png";
import chickinLogo from "./assets/chickin.jpeg";
import sekolahmuLogo from "./assets/sekolah.mu.png";
import listerLogo from "./assets/lister.png";
import gaotekLogo from "./assets/gaotek.jpg";
import dinkesLogo from "./assets/dinkes.png";
import photo from "./assets/photo.jpg";
import reactImg from "./assets/react.svg";
import baumanLogo from "./assets/baumanlogo.jpeg";
import sma14Logo from "./assets/sma14logo.jpeg";
import pmrPCBDesign1 from "./assets/PCB Design.png";
import pmrPCBDesign2 from "./assets/PCB Design 2.png";
import pmrHardcaseDesign from "./assets/Hardcase Design.png";
import pmrTrialPhoto from "./assets/Trial Photo.png";
import pmrDeployedPhoto from "./assets/Deployed Photo.png";
import pmrTVMonitor from "./assets/Standing under TV Monitor.jpg";
import pmrGrafanaDashboard from "./assets/Grafana Dashboard.png";
import pmrDeployment1 from "./assets/Deployment 1 .jpeg";

const NAME = "LAZUARDI AZKA RANGKUTI";

function useScrollZoom(ref) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [ref]);
  return visible;
}

// Helper to slugify project titles
const slugify = str => str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

// ProjectDetail static page scaffold (for /projects/5-dof-manipulator-robot.html)
// Copy this into a new HTML/JSX file for your static project page
// Example:
// <div style={{ minHeight: '100vh', background: '#0b0d13', color: '#fff', fontFamily: 'Montserrat, Arial, sans-serif' }}>
//   <button onClick={() => window.location.href = '/'} style={{ margin: 32, padding: '0.7rem 2rem', fontWeight: 700, fontSize: '1.05rem', border: '2px solid #21d4fd', borderRadius: 0, background: '#181b23', color: '#21d4fd', cursor: 'pointer', boxShadow: '0 2px 12px #b721ff22', transition: 'background 0.2s, color 0.2s, border 0.2s, box-shadow 0.2s' }}>← BACK</button>
//   <div style={{ maxWidth: 900, margin: '0 auto', padding: '2.5rem 1.5rem' }}>
//     <h1 style={{ fontSize: '2.2rem', fontWeight: 900, letterSpacing: 2, color: '#b721ff', marginBottom: 24, textTransform: 'uppercase' }}>5-DOF MANIPULATOR ROBOT</h1>
//     <img src="/assets/robot-photo-1.jpg" alt="Robot Photo 1" style={{ width: '100%', maxHeight: 340, objectFit: 'cover', borderRadius: 12, marginBottom: 28 }} />
//     <div style={{ fontSize: '1.18rem', color: '#fff', marginBottom: 32 }}>A robotic arm with five degrees of freedom, capable of precise and flexible manipulation for automation tasks.</div>
//     {/* Add more content here: photos, 3D design, technical drawing, report, etc. */}
//   </div>
// </div>

// Home component (main portfolio)
function App() {
  const [typedName, setTypedName] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const nameRef = useRef(null);
  const [flipped, setFlipped] = useState(false);
  // Refs for scroll animation
  const aboutMeRef = useRef(null);
  const awardsRef = useRef(null);

  // Typing animation effect (restore old style)
  useEffect(() => {
    let idx = 0;
    setTypedName("");
    setIsTyping(true);
    const type = () => {
      if (idx <= NAME.length) {
        setTypedName(NAME.slice(0, idx));
        idx++;
        setTimeout(type, 80);
      } else {
        setIsTyping(false);
      }
    };
    type();
  }, []);

  // Only re-trigger typing when scrolling to the very top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0 && !isTyping && typedName === NAME) {
        setTypedName("");
        setIsTyping(true);
        let idx = 0;
        const type = () => {
          if (idx <= NAME.length) {
            setTypedName(NAME.slice(0, idx));
            idx++;
            setTimeout(type, 80);
          } else {
            setIsTyping(false);
          }
        };
        type();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isTyping, typedName]);

  // Scroll-triggered zoom for About Me and Awards
  const aboutMeVisible = useScrollZoom(aboutMeRef);
  const awardsVisible = useScrollZoom(awardsRef);

  // Responsive: stack on mobile
  const isMobile = window.innerWidth < 700;
  const aboutMeContainer = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    justifyContent: "center",
    gap: isMobile ? "1.5rem" : "2.5rem",
    maxWidth: 900,
    width: "100%",
    margin: "0 auto"
  };
  const aboutMeText = {
    textAlign: isMobile ? "center" : "left",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: 520,
    marginLeft: isMobile ? 0 : "2.5rem"
  };
  const aboutMePhoto = {
    width: 140,
    height: 140,
    borderRadius: "50%",
    background: "#23263a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: 600,
    fontSize: "1rem",
    overflow: "hidden",
    flexShrink: 0
  };

  // Awards data
  const awards = [
    {
      title: "4th Winner and Favorite Project of Hardathon 2025",
      org: "Youth Robotics Center of BMSTU"
    },
    {
      title: "4th Winner of Indonesian Robotic Olympiad",
      org: "IRO & Mikrobot"
    },
    {
      title: "1st Winner of Jakarta Junior Robotic Competition",
      org: "Robotics Education Centre"
    },
    {
      title: "Favorite Winner Robotics",
      org: "Santa Ursula Senior High School"
    },
    {
      title: "Certificate of Participation",
      org: "Robotics Education Centre"
    },
    {
      title: "Participation on Maze Solving Competition",
      org: "Robotics Education Centre"
    },
    {
      title: "Certified Internet of Things Professional – Excellence",
      org: "Edspert.id"
    },
    {
      title: "Certification in IoT and Digital Transformation ",
      org: "Cisco Networking Academy"
    },
    {
      title: "Securely Connecting AWS IoT Devices to the Cloud",
      org: "Amazon Web Services"
    }
  ];

  // For each card, track if it's visible for animation
  const cardRefs = useRef([]);
  const [cardVisible, setCardVisible] = useState(Array(awards.length).fill(false));
  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, awards.length);
    const observers = cardRefs.current.map((ref, i) => {
      if (!ref) return null;
      return new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCardVisible(v => {
              const copy = [...v];
              copy[i] = true;
              return copy;
            });
          }
        },
        { threshold: 0.2 }
      );
    });
    observers.forEach((observer, i) => {
      if (observer && cardRefs.current[i]) observer.observe(cardRefs.current[i]);
    });
    return () => observers.forEach((observer, i) => {
      if (observer && cardRefs.current[i]) observer.disconnect();
    });
  }, [awards.length]);

  // Add hover state for each award card
  const [hoveredIdx, setHoveredIdx] = useState(null);

  // Work experiences data (with logo)
  const experiences = [
    {
      title: "Mechatronics Engineering Intern",
      company: "Oppo Manufacturing Indonesia",
      date: "Jun 2025 – Sep 2025",
      description: (
        <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.7 }}>
          <li style={{ marginBottom: 10 }}>Created and deployed a Preventive Maintenance Robot equipped with IoT sensors to monitor dust, temperature, humidity and WiFi connectivity that integrated with MQTT, InfluxDB, and Grafana to enable real time environment monitoring of production equipment.</li>
          <li style={{ marginBottom: 10 }}>Automated maintenance alerts through relay controlled alarms and visual indicators, helping reduce unexpected downtime in smartphone screen printing machines.</li>
          <li style={{ marginBottom: 10 }}>Created a Collaborative Robot (COBOT) in gantry model (T-shaped 3-axis linear motion) with belt driven rails, PLC, and 3D printed with pneumatic for industrial pick and place tasks.</li>
          <li>Collaborated with engineers to test and troubleshoot every projects, directly on production lines, ensuring safe and efficient deployment.</li>
        </ul>
      ),
      logo: oppoLogo
    },
    {
      title: "Generative AI Engineer Intern",
      company: "Chickin Indonesia",
      date: "Dec 2024 – Jun 2025",
      description: (
        <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.7 }}>
          <li style={{ marginBottom: 10 }}>Developed "Chibot" (Chickin Chatbot) using n8n and LangChain for knowledge management and IoT device control.</li>
          <li style={{ marginBottom: 10 }}>Researched and integrated Generative AI tools (Vertex AI, RAG, Flowise) to enhance chatbot efficiency.</li>
          <li>Built a real-time sales dashboard ("Ayam & Tepung Sales Tracker") with Firebase Studio and Firestore.</li>
        </ul>
      ),
      logo: chickinLogo
    },
    {
      title: "Site Reliability Engineer Intern",
      company: "Sekolah.mu, Indonesia",
      date: "Aug 2024 - Sep 2024",
      description: (
        <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.7 }}>
          <li style={{ marginBottom: 10 }}>Automated deployments using GitLab CI/CD.</li>
          <li style={{ marginBottom: 10 }}>Built and maintained Docker containers and Python applications, optimizing development workflows and improving deployment efficiency.</li>
          <li>Implemented and managed to learn infrastructure solutions on AWS, enhancing scalability and performance of cloud-based applications.</li>
        </ul>
      ),
      logo: sekolahmuLogo
    },
    {
      title: "IT Tech Support Intern",
      company: "Sekolah.mu, Indonesia",
      date: "Jul 2024 - Sep 2024",
      description: (
        <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.7 }}>
          <li style={{ marginBottom: 10 }}>Performed remote and onsite installation of monitoring and surveillance software on office laptops, ensuring full compliance with internal IT policies.</li>
          <li style={{ marginBottom: 10 }}>Handled troubleshooting and system configuration tasks to support smooth laptop deployment and minimize employee downtime.</li>
          <li>Participated in weekly IT team meetings to report progress and suggest improvements to the company's IT infrastructure.</li>
        </ul>
      ),
      logo: sekolahmuLogo
    },
    {
      title: "Product Sourcing Intern",
      company: "GAOTek Inc., United States of America",
      date: "May 2024 – Aug 2024",
      description: (
        <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.7 }}>
          <li style={{ marginBottom: 10 }}>Collaborated with the sourcing team to identify and evaluate electronic and testing products based on global supplier databases and technical specifications.</li>
          <li style={{ marginBottom: 10 }}>Prepared detailed task reports, including product comparisons, supplier information, and cost analysis, which were submitted regularly to the project manager.</li>
          <li>Participated in weekly team meetings via Microsoft Teams, discussing progress, addressing challenges, and aligning deliverables with team objectives.</li>
        </ul>
      ),
      logo: gaotekLogo
    },
    {
      title: "Russian Language Tutor",
      company: "Lister Education Pte. Ltd., Indonesia",
      date: "Feb 2023 – Feb 2025",
      description: (
        <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.7 }}>
          <li style={{ marginBottom: 10 }}>Teach beginner to intermediate Indonesian student to study Russian language over 10 students through online sessions, focusing on vocabulary, grammar, pronunciation, and conversational skills.</li>
          <li style={{ marginBottom: 10 }}>Delivered engaging lessons tailored to student goals, such as academic preparation and daily communication.</li>
          <li>Supported additional learning programs, including Scholarship Mentoring for study abroad applicants and Speaking Class to enhance verbal fluency and confidence.</li>
        </ul>
      ),
      logo: listerLogo
    },
    {
      title: "Data Entry Specialist",
      company: "West Java Provincial Health Office, Indonesia",
      date: "Jun 2021 - Dec 2021",
      description: (
        <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.7 }}>
          <li style={{ marginBottom: 10 }}>Recorded and organized COVID-19 vaccination data for hundreds of patients across multiple health service units, ensuring accuracy and consistency.</li>
          <li style={{ marginBottom: 10 }}>Entered and submitted data through designated government health platforms in a timely manner, contributing to national vaccination reporting.</li>
          <li>Coordinated with local health services to verify patient records and support the timely issuance of official vaccination certificates.</li>
        </ul>
      ),
      logo: dinkesLogo
    }
  ];

  // For each experience card, track if its logo and box are visible for animation
  const expCardRefs = useRef([]);
  const [expLogoVisible, setExpLogoVisible] = useState(Array(experiences.length).fill(false));
  const [expBoxVisible, setExpBoxVisible] = useState(Array(experiences.length).fill(false));
  useEffect(() => {
    expCardRefs.current = expCardRefs.current.slice(0, experiences.length);
    const observers = expCardRefs.current.map((ref, i) => {
      if (!ref) return null;
      return new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setExpLogoVisible(v => {
              const copy = [...v];
              copy[i] = true;
              return copy;
            });
            setTimeout(() => {
              setExpBoxVisible(v => {
                const copy = [...v];
                copy[i] = true;
                return copy;
              });
            }, 220); // Delay for box after logo
          } else {
            setExpLogoVisible(v => {
              const copy = [...v];
              copy[i] = false;
              return copy;
            });
            setExpBoxVisible(v => {
              const copy = [...v];
              copy[i] = false;
              return copy;
            });
          }
        },
        { threshold: 0.2 }
      );
    });
    observers.forEach((observer, i) => {
      if (observer && expCardRefs.current[i]) observer.observe(expCardRefs.current[i]);
    });
    return () => observers.forEach((observer, i) => {
      if (observer && expCardRefs.current[i]) observer.disconnect();
    });
  }, [experiences.length]);

  // Language state and translations
  const [language, setLanguage] = useState("en");
  const translations = {
    en: {
      aboutMe: "ABOUT ME",
      projects: "PROJECTS",
      awards: "AWARDS",
      contact: "CONTACT",
      portfolio: "ROBOTICS PORTFOLIO",
      workExperiences: "Work Experiences",
      certificationsAwards: "Certifications & Awards"
    },
    de: {
      aboutMe: "ÜBER MICH",
      projects: "PROJEKTE",
      awards: "AUSZEICHNUNGEN",
      contact: "KONTAKT",
      portfolio: "ROBOTIK-PORTFOLIO",
      workExperiences: "Berufserfahrung",
      certificationsAwards: "Zertifikate & Auszeichnungen"
    },
    ru: {
      aboutMe: "ОБО МНЕ",
      projects: "ПРОЕКТЫ",
      awards: "НАГРАДЫ",
      contact: "КОНТАКТЫ",
      portfolio: "РОБОТИКА ПОРТФОЛИО",
      workExperiences: "Опыт работы",
      certificationsAwards: "Сертификаты и награды"
    }
  };

  // Theme state and color palettes
  const [theme, setTheme] = useState("dark");
  const themes = {
    dark: {
      background: "#0b0d13",
      text: "#fff",
      accent: "#ffe066",
      accent2: "#b721ff",
      box: "#181b23",
      boxBorder: "#ffe066",
      boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
      navBg: "rgba(0,0,0,0.95)",
      sectionTitle: "#fff"
    },
    light: {
      background: "#f7f7fa",
      text: "#181b23",
      accent: "#21d4fd",
      accent2: "#b721ff",
      box: "#fff",
      boxBorder: "#21d4fd",
      boxShadow: "0 4px 24px rgba(33,212,253,0.18)",
      navBg: "rgba(255,255,255,0.95)",
      sectionTitle: "#181b23"
    }
  };
  const currentTheme = themes[theme];

  // Projects for SpaceX-style section
  const projects = [
    {
      title: "Washeye: Laundry Queue Notifier",
      description: "An intelligent IoT system that monitors laundry machine availability and notifies users in real-time, eliminating waiting times and optimizing laundry room usage.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=800&q=80",
      detailedDescription: "WashEye is an innovative IoT solution designed to revolutionize the laundry experience in shared facilities. Built around the powerful ESP32 microcontroller, this intelligent system employs advanced vibration sensing technology to monitor washing machine and dryer activity in real-time. The system integrates multiple sophisticated components including SW420 vibration sensors for precise machine state detection, TM1637 digital clock displays for time management, and an intuitive TFT LCD Touch Screen (ILI9341) for user interaction. Through seamless integration with a Telegram bot, users receive instant notifications about machine availability, cycle completion, and optimal usage times. This comprehensive approach eliminates the frustration of waiting for available machines while optimizing facility usage patterns and reducing energy waste through intelligent scheduling recommendations."
    },
    {
      title: "Collaborative Robot (COBOT)",
      description: "A collaborative robotic system designed for safe human-robot interaction in manufacturing environments, featuring advanced safety protocols and intuitive programming.",
      image: "https://www.kuka.com/-/media/kuka-corporate/images/products/robots/kr-quantec/kr_quantec_extra_applikation.jpg?rev=643e332a2bc24627b96584243c9e58e0&w=1900&hash=BBDC437AD6255574F97DE488830926C6"
    },
    {
      title: "Preventive Maintenance Robot",
      description: "An IoT-based environmental monitoring system developed during my internship at Oppo Indonesia Manufacturing, designed to monitor critical parameters in screen guard production machines and prevent equipment failures through real-time data analysis.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      detailedDescription: "During my internship at Oppo Indonesia Manufacturing, I developed a comprehensive IoT-based Preventive Maintenance Robot from scratch, designed to monitor environmental conditions inside screen guard machines in the production line. This project involved complete end-to-end development, including electrical wiring design, 3D modeling for the hardcase enclosure, PCB design and assembly, sensor integration, and system integration with cloud-based monitoring platforms. The system monitors three critical environmental parameters: dust levels using the PMS5003 particulate matter sensor, temperature and humidity using the SHT31-D sensor. When any of these parameters exceed predefined thresholds, the system automatically activates production warning lamps (NPT5-I5) to alert operators. The collected data is seamlessly integrated with InfluxDB for time-series data storage and visualized through Grafana dashboards, which are displayed on TV monitors throughout the production floor, enabling real-time monitoring and proactive maintenance decisions."
    },
    {
      title: "Construction and Mechanical Analysis of Turntable in a 5-DOF Robotic Manipulator",
      description: "A comprehensive study and mechanical analysis of the turntable component in a five-degree-of-freedom robotic manipulator, focusing on structural design, load distribution, and optimization for precision automation tasks.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "C.L.A.R.A. : Climate Learning & Automated Responsive Assistant",
      description: "An intelligent climate monitoring and educational system that combines IoT sensors, machine learning, and automated responses to help users understand and adapt to environmental changes while promoting sustainable practices.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "РТК для производства смартфонов",
      subtitle: "Robotic Technological Complex for Smartphone Manufacturing",
      description: "A robotic technological complex designed specifically for smartphone manufacturing, featuring precision automation, quality control systems, and seamless integration into production lines to optimize efficiency and ensure consistent product quality.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Adaptive Gripper with Computer Vision",
      subtitle: "for smartphone manufacture",
      description: "An advanced robotic gripper system integrated with computer vision technology, designed to handle various smartphone components with adaptive force control and visual recognition for precise assembly and quality inspection in manufacturing processes.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Automated Coat Handling Robot",
      subtitle: "for Хардатон (Hardathon) 2025",
      description: "An innovative robotic solution designed to automate jacket storage for students at Bauman Moscow State Technical University, created during the university's Hardathon competition to improve campus life.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      detailedDescription: "During the Hardathon 2025 competition at Bauman Moscow State Technical University, we were challenged to develop a project that would enhance and improve daily life for students on campus. This local hackathon-style event encouraged innovation that could be implemented in various university spaces, including academic buildings, dormitories, and common areas. Our team conceived and developed the Automated Coat Handling Robot—an intelligent robotic system designed to help students automatically store and retrieve their jackets and coats in university facilities. This solution addresses the common problem of coat management in shared spaces, reducing clutter and improving organization while providing a seamless, automated experience. Our innovative approach and technical execution earned us the prestigious title of 'Favourite Winner' from two Russian manufacturing companies, recognizing our project's practical value and engineering excellence."
    },
    {
      title: "Stackster: Smart Mobile Robot with IoT Implementation",
      description: "An advanced factory automation robot integrated with IoT sensors for intelligent inventory management, stacking optimization, and real-time production monitoring.",
      image: "https://www.dell.com/sites/csimages/Video_Imagery/all/Video-bring-on-the-robots-helping-retailers-deliver-service-excellence.jpg"
    },
    {
      title: "Health+",
      description: "A comprehensive digital health platform integrating IoT devices and AI algorithms for real-time patient monitoring, predictive health analytics, and smart healthcare solutions.",
      image: "https://www.tuv.com/content-media-files/master-content/global-landingpages/images/wireless/tuv_rheinland_de20_p00_wireless_-iot_medical_health_core_8_3.jpg"
    }
  ];

  // For each project, track if it's visible for animation
  const projectRefs = useRef([]);
  const [projectVisible, setProjectVisible] = useState(Array(projects.length).fill(false));
  useEffect(() => {
    projectRefs.current = projectRefs.current.slice(0, projects.length);
    const observers = projectRefs.current.map((ref, i) => {
      if (!ref) return null;
      return new window.IntersectionObserver(
        ([entry]) => {
          setProjectVisible(v => {
            const copy = [...v];
            copy[i] = entry.isIntersecting;
            return copy;
          });
        },
        { threshold: 0.2 }
      );
    });
    observers.forEach((observer, i) => {
      if (observer && projectRefs.current[i]) observer.observe(projectRefs.current[i]);
    });
    return () => observers.forEach((observer, i) => {
      if (observer && projectRefs.current[i]) observer.disconnect();
    });
  }, [projects.length]);

  // Restore modal state for project details
  const [openProjectIdx, setOpenProjectIdx] = useState(null);
  const [modalOpening, setModalOpening] = useState(false);
  const [modalClosing, setModalClosing] = useState(false);
  const openModal = idx => {
    setOpenProjectIdx(idx);
    setModalOpening(true);
    setTimeout(() => setModalOpening(false), 480);
  };
  const closeModal = () => {
    setModalClosing(true);
    setTimeout(() => {
      setOpenProjectIdx(null);
      setModalClosing(false);
    }, 480);
  };


  React.useEffect(() => {
    if (document.getElementById('rainbow-anim-style')) return;
    const style = document.createElement('style');
    style.id = 'rainbow-anim-style';
    style.innerHTML = `
      @keyframes rainbow-border-move {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
      }
      @keyframes rainbow-bar-move {
        0% { background-position: 0% 100%; }
        100% { background-position: 0% 0%; }
      }
      .rainbow-border-anim {
        position: relative !important;
        z-index: 1;
      }
      .rainbow-border-anim::before {
        content: '';
        position: absolute;
        top: -2px; left: -2px; right: -2px; bottom: -2px;
        border-radius: 20px;
        pointer-events: none;
        z-index: 2;
        background: conic-gradient(from 135deg, red, orange, yellow, green, cyan, blue, violet, red);
        background-size: 200% 200%;
        background-position: 0% 50%;
        padding: 0;
        mask-image: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-image: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask-composite: exclude;
        -webkit-mask-composite: xor;
        animation: rainbow-border-move 2.5s linear infinite;
        border: 2px solid transparent;
        box-sizing: border-box;
        -webkit-mask:
          linear-gradient(#fff 0 0) content-box, /* inner mask */
          linear-gradient(#fff 0 0) padding-box, /* outer mask */
          linear-gradient(#fff 0 0) border-box;
        -webkit-mask-composite: xor, destination-out;
        mask-composite: exclude, exclude;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: currentTheme.background, color: currentTheme.text, fontFamily: "Montserrat, Arial, sans-serif" }}>
      {/* Navbar */}
      <nav style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.2rem 3vw 1.2rem 2vw",
        borderBottom: `1px solid ${currentTheme.boxBorder}`,
        background: currentTheme.navBg,
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 100
      }}>
        <div style={{ fontWeight: 700, fontSize: "1.2rem", letterSpacing: 2, textTransform: "uppercase", color: currentTheme.sectionTitle }}>
          {translations[language].portfolio}
        </div>
        <div style={{ display: "flex", gap: "1.2vw", alignItems: "center" }}>
          <a href="#about-me" style={{ color: currentTheme.text, textDecoration: "none", fontWeight: 700, fontSize: "1rem", fontFamily: "Montserrat, Arial, sans-serif", letterSpacing: 2, textTransform: "uppercase" }}>{translations[language].aboutMe}</a>
          <a href="#projects" style={{ color: currentTheme.text, textDecoration: "none", fontWeight: 700, fontSize: "1rem", fontFamily: "Montserrat, Arial, sans-serif", letterSpacing: 2, textTransform: "uppercase" }}>{translations[language].projects}</a>
          <a href="#awards" style={{ color: currentTheme.text, textDecoration: "none", fontWeight: 700, fontSize: "1rem", fontFamily: "Montserrat, Arial, sans-serif", letterSpacing: 2, textTransform: "uppercase" }}>{translations[language].awards}</a>
          <a href="#contact" style={{ color: currentTheme.text, textDecoration: "none", fontWeight: 700, fontSize: "1rem", fontFamily: "Montserrat, Arial, sans-serif", letterSpacing: 2, textTransform: "uppercase" }}>{translations[language].contact}</a>
          <span style={{ marginLeft: 24, display: "flex", gap: 8, alignItems: "center", fontWeight: 700, fontFamily: "Montserrat, Arial, sans-serif", letterSpacing: 2, textTransform: "uppercase", color: currentTheme.accent, fontSize: "1rem", cursor: "pointer" }}>
            <span onClick={() => setLanguage("en")}>EN</span>
            <span style={{ color: currentTheme.text }}>|</span>
            <span onClick={() => setLanguage("de")}>DE</span>
            <span style={{ color: currentTheme.text }}>|</span>
            <span onClick={() => setLanguage("ru")}>RU</span>
          </span>
        </div>
      </nav>

      {/* Intro Section */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "8rem"
      }}>
        <div style={{ textAlign: "center", maxWidth: 900 }}>
          <div style={{
            fontWeight: 700,
            fontSize: "1.5rem",
            letterSpacing: 1.5,
            marginBottom: "1.2rem",
            color: currentTheme.text
          }}>
            <span style={{ color: currentTheme.text }}>INNOVATE.</span> <span style={{ color: currentTheme.text }}>AUTOMATE.</span> <span style={{ color: currentTheme.text }}>INSPIRE.</span>
          </div>
          <div style={{ color: "#b0b3c6", fontSize: "1.1rem", marginBottom: "0.7rem", color: currentTheme.text }}>
            The future of robotics is in my hand to create a better world.
          </div>
          <div style={{ color: "#b0b3c6", fontStyle: "italic", fontSize: "1rem", marginBottom: "2.5rem", color: currentTheme.text }}>
            "The best way to predict the future is to invent it."
          </div>
          <div ref={nameRef} style={{
            fontWeight: 900,
            fontSize: "3rem",
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: "1.5rem",
            background: "linear-gradient(90deg, #21d4fd, #b721ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            transition: "background 0.5s"
          }}>
            {typedName}
          </div>
          <div style={{ color: "#b0b3c6", fontSize: "1.2rem", marginBottom: "2.5rem", color: currentTheme.text }}>
            A hybrid of scientist, engineer, and technician in one person
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section
        ref={aboutMeRef}
        id="about-me"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60vh",
          marginTop: "2rem",
          transition: "transform 0.7s cubic-bezier(.4,2,.6,1), opacity 0.7s cubic-bezier(.4,2,.6,1)",
          transform: aboutMeVisible ? "scale(1)" : "scale(0.95)",
          opacity: aboutMeVisible ? 1 : 0.5,
          background: theme === "light" ? "#f7f7fa" : undefined
        }}
      >
        <div style={aboutMeContainer}>
          {/* Profile Image Placeholder */}
          <div
            style={{
              ...aboutMePhoto,
              opacity: aboutMeVisible ? 1 : 0,
              transform: aboutMeVisible ? "scale(1) translateY(0)" : "scale(0.8) translateY(40px)",
              transition: "opacity 0.7s cubic-bezier(.4,2,.6,1), transform 0.7s cubic-bezier(.4,2,.6,1)"
            }}
          >
            <img src={photo} alt="Your Photo" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
          </div>
          <div style={aboutMeText}>
            <div
              style={{
                fontWeight: 700,
                fontSize: "2rem",
                letterSpacing: 1,
                marginBottom: 8,
                textTransform: "uppercase",
                opacity: aboutMeVisible ? 1 : 0,
                transform: aboutMeVisible ? "scale(1) translateY(0)" : "scale(0.95) translateY(30px)",
                transition: "opacity 0.7s 0.18s cubic-bezier(.4,2,.6,1), transform 0.7s 0.18s cubic-bezier(.4,2,.6,1)"
              }}
            >
              About Me
            </div>
            <div
              style={{
                color: currentTheme.text,
                fontSize: "1.1rem",
                textAlign: isMobile ? "center" : "justify"
              }}
            >
              Hi! I'm <span style={{ fontWeight: 700, color: "#21d4fd" }}>Lazuardi Azka Rangkuti</span>, a robotics and AI enthusiast with a background in mechatronics and robotics system. I love building intelligent systems that solve real-world problems, from IoT devices to manipulator robots. Curious, creative, and driven by impact, I am going to make the best robots ever!
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards Section */}
      <section
        ref={awardsRef}
        id="awards"
        style={{
          width: "100%",
          maxWidth: 860,
          margin: "0 auto",
          marginTop: 80,
          marginBottom: 80,
          padding: 0,
          fontFamily: "Montserrat, Arial, sans-serif",
          transition: "transform 0.7s cubic-bezier(.4,2,.6,1), opacity 0.7s cubic-bezier(.4,2,.6,1)",
          transform: awardsVisible ? "scale(1)" : "scale(0.95)",
          opacity: awardsVisible ? 1 : 0.5,
          background: theme === "light" ? "#f7f7fa" : undefined
        }}
      >
        <h2 style={{
          textAlign: "center",
          fontSize: "2.2rem",
          fontWeight: 800,
          letterSpacing: 2,
          marginBottom: 48,
          textTransform: "uppercase",
          fontFamily: "Montserrat, Arial, sans-serif",
          color: currentTheme.sectionTitle
        }}>
          {translations[language].certificationsAwards}
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2rem",
          justifyItems: "center",
          alignItems: "center"
        }}>
          {awards.map((award, idx) => {
            // Animation for each card
            const isVisible = cardVisible[idx];
            const delay = `${idx * 120}ms`;
            let baseTransform = isVisible ? "scale(1) translateY(0)" : "scale(0.85) translateY(40px)";
            let baseOpacity = isVisible ? 1 : 0;
            let boxShadow = isVisible ? `${currentTheme.boxShadow}` : `${currentTheme.boxShadow}`;
            // Hover effect
            if (hoveredIdx === idx) {
              baseTransform = "scale(1.07) translateY(-4px)";
              boxShadow = `0 0 32px 0 ${currentTheme.accent}cc, 0 8px 32px rgba(0,0,0,0.22)`;
            }
            return (
              <div
                key={idx}
                ref={el => (cardRefs.current[idx] = el)}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  background: currentTheme.box,
                  border: `2px solid ${currentTheme.boxBorder}`,
                  borderRadius: 16,
                  width: 260,
                  height: 180,
                  boxShadow,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "Montserrat, Arial, sans-serif",
                  padding: "1.2rem 1rem 1rem 1rem",
                  transition: `transform 0.35s cubic-bezier(.4,2,.6,1), opacity 0.7s cubic-bezier(.4,2,.6,1) ${delay}, box-shadow 0.35s`,
                  transform: baseTransform,
                  opacity: baseOpacity,
                  position: "relative",
                  cursor: "pointer"
                }}
              >
                <div style={{ fontWeight: 700, fontSize: "0.95rem", color: currentTheme.accent, marginBottom: 6, letterSpacing: 1, fontFamily: "Montserrat, Arial, sans-serif" }}>AWARD</div>
                <div style={{ fontSize: 32, marginBottom: 6, fontFamily: "Montserrat, Arial, sans-serif" }}>🏅</div>
                <div style={{ fontWeight: 700, fontSize: "1rem", textAlign: "center", marginBottom: 4, fontFamily: "Montserrat, Arial, sans-serif" }}>
                  {award.title}
                </div>
                <div style={{ color: "#b0b3c6", fontSize: "0.95rem", textAlign: "center", fontFamily: "Montserrat, Arial, sans-serif" }}>
                  {award.org}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Education Section */}
      <section
        style={{
          width: "100%",
          maxWidth: 1000,
          margin: "0 auto",
          marginTop: 80,
          marginBottom: 80,
          padding: "0 2rem",
          fontFamily: "Montserrat, Arial, sans-serif"
        }}
        id="education"
      >
        <h2 style={{
          textAlign: "center",
          fontSize: "2.2rem",
          fontWeight: 800,
          letterSpacing: 2,
          marginBottom: 60,
          textTransform: "uppercase",
          fontFamily: "Montserrat, Arial, sans-serif",
          color: currentTheme.sectionTitle
        }}>
          EDUCATION
        </h2>
        
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 60,
          alignItems: "center"
        }}>
          {/* University Education - Vertical Layout */}
          <div style={{
            width: "100%",
            maxWidth: 800,
            display: "flex",
            alignItems: "center",
            gap: "2.5rem"
          }}>
            {/* Left Side - Logo */}
            <div style={{
              flexShrink: 0,
              position: "relative"
            }}>
              <div style={{
                width: 120,
                height: 120,
                borderRadius: "50%",
                background: "#fff",
                border: `3px solid ${currentTheme.accent}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 12px 40px ${currentTheme.accent}25`,
                overflow: "hidden",
                position: "relative"
              }}>
                <img 
                  src={baumanLogo} 
                  alt="Bauman Moscow State Technical University" 
                  style={{ 
                    width: "85%", 
                    height: "85%", 
                    objectFit: "contain" 
                  }} 
                />
                {/* Glow effect */}
                <div style={{
                  position: "absolute",
                  top: -10,
                  left: -10,
                  right: -10,
                  bottom: -10,
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${currentTheme.accent}20, transparent 70%)`,
                  zIndex: -1
                }} />
              </div>
            </div>
            
            {/* Right Side - Content */}
            <div style={{ flex: 1 }}>
              <h3 style={{
                fontSize: "1.5rem",
                fontWeight: 800,
                color: currentTheme.text,
                margin: "0 0 0.5rem 0",
                letterSpacing: 1
              }}>
                Bauman Moscow State Technical University
              </h3>
              
              <h4 style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                color: currentTheme.accent,
                margin: "0 0 0.5rem 0",
                fontStyle: "italic"
              }}>
                Robotics System and Mechatronics
              </h4>
              
              <p style={{
                color: "#b0b3c6",
                fontSize: "1rem",
                fontWeight: 500,
                margin: "0 0 1.2rem 0"
              }}>
                2020 • Moscow, Russia
              </p>
              
              <p style={{
                color: currentTheme.text,
                fontSize: "1rem",
                lineHeight: 1.6,
                margin: 0,
                textAlign: "justify"
              }}>
                Studying robotics at one of Russia's most prestigious technical universities. 
                My studies focus on developing intelligent robotic systems that combine mechanical engineering with 
                artificial intelligence, preparing me to contribute to the next generation of robotic innovations.
              </p>
            </div>
          </div>

          {/* High School Education - Vertical Layout */}
          <div style={{
            width: "100%",
            maxWidth: 800,
            display: "flex",
            alignItems: "center",
            gap: "2.5rem"
          }}>
            {/* Left Side - Logo */}
            <div style={{
              flexShrink: 0,
              position: "relative"
            }}>
              <div style={{
                width: 120,
                height: 120,
                borderRadius: "50%",
                background: "#fff",
                border: `3px solid ${currentTheme.accent}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 12px 40px ${currentTheme.accent}25`,
                overflow: "hidden",
                position: "relative"
              }}>
                <img 
                  src={sma14Logo} 
                  alt="14 Senior High School Jakarta" 
                  style={{ 
                    width: "85%", 
                    height: "85%", 
                    objectFit: "contain" 
                  }} 
                />
                {/* Glow effect */}
                <div style={{
                  position: "absolute",
                  top: -10,
                  left: -10,
                  right: -10,
                  bottom: -10,
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${currentTheme.accent}20, transparent 70%)`,
                  zIndex: -1
                }} />
              </div>
            </div>
            
            {/* Right Side - Content */}
            <div style={{ flex: 1 }}>
              <h3 style={{
                fontSize: "1.5rem",
                fontWeight: 800,
                color: currentTheme.text,
                margin: "0 0 0.5rem 0",
                letterSpacing: 1
              }}>
                14 Senior High School Jakarta
              </h3>
              
              <h4 style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                color: currentTheme.accent,
                margin: "0 0 0.5rem 0",
                fontStyle: "italic"
              }}>
                Science Major
              </h4>
              
              <p style={{
                color: "#b0b3c6",
                fontSize: "1rem",
                fontWeight: 500,
                margin: "0 0 1.2rem 0"
              }}>
                2017 - 2020 • Jakarta, Indonesia
              </p>
              
              <p style={{
                color: currentTheme.text,
                fontSize: "1rem",
                lineHeight: 1.6,
                margin: 0,
                textAlign: "justify"
              }}>
                My academic foundation was built here through a rigorous science curriculum focusing on mathematics, 
                physics, and chemistry. This period was essential in developing my analytical thinking and 
                problem-solving skills, which prepared me for the challenges of studying abroad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experiences Timeline Section */}
      <section
        style={{
          width: "100%",
          maxWidth: 900,
          margin: "0 auto",
          marginTop: 80,
          marginBottom: 80,
          position: "relative",
          minHeight: 400
        }}
        id="work-experiences"
      >
        <h2 style={{
          textAlign: "center",
          fontSize: "2.2rem",
          fontWeight: 800,
          letterSpacing: 2,
          marginBottom: 48,
          textTransform: "uppercase",
          fontFamily: "Montserrat, Arial, sans-serif",
          color: currentTheme.sectionTitle
        }}>
          {translations[language].workExperiences}
        </h2>
        {/* Timeline line */}
        <div style={{
          position: "absolute",
          top: 80,
          left: "50%",
          transform: "translateX(-50%)",
          width: 4,
          height: `calc(100% - 80px)`,
          background: "linear-gradient(to bottom, #ffe066 0%, #b721ff 100%)",
          borderRadius: 2,
          zIndex: 0
        }} />
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: 48,
          position: "relative",
          zIndex: 1
        }}>
          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            const logoVisible = expLogoVisible[idx];
            const boxVisible = expBoxVisible[idx];
            return (
              <div
                key={idx}
                ref={el => (expCardRefs.current[idx] = el)}
                style={{
                  display: "flex",
                  flexDirection: isLeft ? "row" : "row-reverse",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  position: "relative",
                  minHeight: 120
                }}
              >
                <div style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: isLeft ? "flex-end" : "flex-start"
                }}>
                  <div style={{
                    background: currentTheme.box,
                    border: `2px solid ${currentTheme.boxBorder}`,
                    borderRadius: 16,
                    minWidth: 260,
                    maxWidth: 340,
                    boxShadow: currentTheme.boxShadow,
                    padding: "1.5rem 1.2rem 1.2rem 1.2rem",
                    position: "relative",
                    textAlign: "left",
                    opacity: boxVisible ? 1 : 0,
                    transform: boxVisible
                      ? "translateX(0) scale(1)"
                      : isLeft
                        ? "translateX(-60px) scale(0.95)"
                        : "translateX(60px) scale(0.95)",
                    transition: `opacity 0.7s ${0.22 + idx * 0.12}s cubic-bezier(.22,1,.36,1), transform 0.7s ${0.22 + idx * 0.12}s cubic-bezier(.22,1,.36,1)`
                  }}>
                    <div style={{ fontWeight: 700, fontSize: "1.1rem", color: currentTheme.accent, marginBottom: 6 }}>{exp.title}</div>
                    <div style={{ fontWeight: 600, fontSize: "1rem", color: currentTheme.accent2, marginBottom: 4 }}>{exp.company}</div>
                    <div style={{ color: "#b0b3c6", fontSize: "0.95rem", marginBottom: 8 }}>{exp.date}</div>
                    <div style={{ color: currentTheme.text, fontSize: "1rem", textAlign: "justify", textJustify: "inter-word", lineHeight: 1.7 }}>{exp.description}</div>
                  </div>
                </div>
                {/* Dot connector with logo or initials */}
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: typeof exp.logo === 'string' && exp.logo ? "#fff" : currentTheme.accent,
                  border: "4px solid #0b0d13",
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 2,
                  boxShadow: "0 0 0 4px #ffe06644",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  opacity: logoVisible ? 1 : 0,
                  transformOrigin: "center",
                  transition: `opacity 0.5s ${idx * 0.12}s cubic-bezier(.4,2,.6,1), transform 0.5s ${idx * 0.12}s cubic-bezier(.4,2,.6,1), rotate 0.7s ${idx * 0.12}s cubic-bezier(.22,1,.36,1)`,
                  scale: logoVisible ? 1 : 0.7,
                  rotate: "0deg"
                }}>
                  {typeof exp.logo === 'string' && exp.logo ? (
                    <img
                      src={exp.logo}
                      alt={exp.company + " logo"}
                      style={{
                        width: 24,
                        height: 24,
                        objectFit: "contain",
                        transition: 'transform 0.7s cubic-bezier(.22,1,.36,1)',
                        transform: 'rotate(0deg)'
                      }}
                    />
                  ) : (
                    <span style={{ fontWeight: 700, color: currentTheme.accent2, fontSize: 14, letterSpacing: 1 }}>
                      {exp.company.split(" ").map(w => w[0]).join("")}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SpaceX-Style Projects Section */}
      <section
        id="projects"
        style={{
          width: "100%",
          maxWidth: 1100,
          margin: "0 auto",
          marginTop: 80,
          marginBottom: 80,
          padding: 0,
          fontFamily: "Montserrat, Arial, sans-serif"
        }}
      >
        <h2 style={{
          textAlign: "center",
          fontSize: "2.2rem",
          fontWeight: 800,
          letterSpacing: 2,
          marginBottom: 48,
          textTransform: "uppercase",
          fontFamily: "Montserrat, Arial, sans-serif",
          color: currentTheme.sectionTitle
        }}>
          {translations[language].projects}
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {projects.map((project, idx) => {
            const isVisible = projectVisible[idx];
            return (
              <div
                key={idx}
                ref={el => (projectRefs.current[idx] = el)}
                style={{
                  position: "relative",
                  width: "100vw",
                  left: "50%",
                  right: "50%",
                  marginLeft: "-50vw",
                  marginRight: "-50vw",
                  minHeight: 420,
                  borderRadius: 0,
                  overflow: "hidden",
                  boxShadow: currentTheme.boxShadow,
                  background: `url(${project.image}) center/cover no-repeat`,
                  display: "flex",
                  alignItems: "center",
                  transition: "transform 1.3s cubic-bezier(.22,1,.36,1), opacity 1.3s cubic-bezier(.22,1,.36,1)",
                  transform: isVisible ? "translateY(0) scale(1)" : "translateY(60px) scale(0.97)",
                  opacity: isVisible ? 1 : 0,
                  cursor: "pointer"
                }}
              >
                {/* Purple accent line on the left */}
                <div style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  height: "100%",
                  width: 10,
                  background: "#b721ff",
                  borderRadius: "0 8px 8px 0",
                  zIndex: 3,
                  boxShadow: theme === "light" ? "0 0 16px #b721ff44" : undefined
                }} />
                {/* Overlay for readability */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: theme === "dark"
                    ? "linear-gradient(90deg, #0b0d13cc 0%, #23263acc 100%)"
                    : "linear-gradient(90deg, rgba(255,255,255,0.72) 0%, rgba(227,232,240,0.72) 100%)",
                  mixBlendMode: theme === "light" ? "normal" : undefined,
                  zIndex: 1
                }} />
                <div style={{
                  position: "relative",
                  zIndex: 2,
                  padding: theme === "light" ? "3.5rem 2.5rem 3.5rem 4.5rem" : "3.5rem 2.5rem 3.5rem 4.5rem",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  minHeight: 420
                }}>
                  <div style={{
                    fontWeight: 900,
                    fontSize: "2.5rem",
                    letterSpacing: 2,
                    color: theme === "light" ? "#181b23" : currentTheme.accent,
                    marginBottom: 8,
                    textShadow: theme === "light" ? "0 2px 12px #fff, 0 2px 24px #fff" : "0 2px 12px #000a",
                    textTransform: "uppercase"
                  }}>{project.title}</div>
                  {project.subtitle && (
                    <div style={{
                      fontWeight: 600,
                      fontSize: "1.2rem",
                      letterSpacing: 1,
                      color: theme === "light" ? "#181b23" : currentTheme.text,
                      marginBottom: 18,
                      textShadow: theme === "light" ? "0 2px 8px #fff, 0 2px 16px #fff" : "0 2px 8px #0008",
                      fontStyle: "italic",
                      opacity: 0.9
                    }}>{project.subtitle}</div>
                  )}
                  <div style={{
                    fontSize: "1.25rem",
                    color: theme === "light" ? "#181b23" : currentTheme.text,
                    fontWeight: 500,
                    maxWidth: 700,
                    textShadow: theme === "light" ? "0 2px 8px #fff, 0 2px 16px #fff" : "0 2px 8px #0008"
                  }}>{project.description}</div>
                  <button
                    onClick={() => openModal(idx)}
                    style={{
                      marginTop: 32,
                      padding: "0.9rem 2.2rem",
                      fontWeight: 700,
                      fontSize: "1.08rem",
                      letterSpacing: 1,
                      border: `2px solid ${currentTheme.accent}`,
                      borderRadius: 0,
                      background: currentTheme.box,
                      color: currentTheme.accent,
                      cursor: "pointer",
                      boxShadow: currentTheme.boxShadow,
                      transition: "background 0.35s cubic-bezier(.4,2,.6,1), color 0.35s cubic-bezier(.4,2,.6,1), border 0.35s cubic-bezier(.4,2,.6,1), box-shadow 0.35s cubic-bezier(.4,2,.6,1)",
                    }}
                    onMouseOver={e => {
                      e.currentTarget.style.background = currentTheme.accent;
                      e.currentTarget.style.color = currentTheme.box;
                      e.currentTarget.style.border = `2px solid ${currentTheme.accent2}`;
                    }}
                    onMouseOut={e => {
                      e.currentTarget.style.background = currentTheme.box;
                      e.currentTarget.style.color = currentTheme.accent;
                      e.currentTarget.style.border = `2px solid ${currentTheme.accent}`;
                    }}
                  >
                    READ MORE
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* Project Detail Modal Overlay */}
      {openProjectIdx !== null && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: theme === "dark"
              ? "rgba(11,13,19,0.98)"
              : "rgba(247,247,250,0.98)",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            overflowY: "auto",
            animation: modalClosing
              ? "fadeOutModal 0.48s cubic-bezier(.4,2,.6,1) forwards"
              : modalOpening
                ? "fadeInModal 0.48s cubic-bezier(.4,2,.6,1)"
                : "none"
          }}
        >
          <button
            onClick={closeModal}
            style={{
              position: "absolute",
              top: 32,
              right: 48,
              fontSize: 32,
              background: "none",
              border: "none",
              color: theme === "dark" ? "#fff" : "#181b23",
              cursor: "pointer",
              zIndex: 10001
            }}
            title="Close"
          >
            ×
          </button>
          <div style={{
            maxWidth: 900,
            width: "100%",
            margin: "4.5rem auto 2.5rem auto",
            padding: "2.5rem 1.5rem 2.5rem 1.5rem",
            background: theme === "dark" ? "#181b23" : "#fff",
            borderRadius: 18,
            boxShadow: theme === "dark" ? "0 8px 48px #000a" : "0 8px 48px #b721ff22",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transform: modalClosing
              ? "scale(0.96) translateY(40px)"
              : modalOpening
                ? "scale(1.04) translateY(-40px)"
                : "scale(1) translateY(0)",
            opacity: modalClosing ? 0 : 1,
            transition: "transform 0.48s cubic-bezier(.4,2,.6,1), opacity 0.48s cubic-bezier(.4,2,.6,1)"
          }}>
            {/* Centered Title */}
            <h1 style={{
              fontSize: "2.2rem",
              fontWeight: 900,
              letterSpacing: 2,
              color: theme === "light" ? "#b721ff" : currentTheme.accent,
              marginBottom: 40,
              textTransform: "uppercase",
              textAlign: "center"
            }}>{projects[openProjectIdx].title}</h1>
            
            {/* WashEye Specific Content */}
            {projects[openProjectIdx].title === "Washeye: Laundry Queue Notifier" ? (
              <div style={{ width: "100%", textAlign: "left" }}>
                {/* Introduction Text */}
                <div style={{ 
                  fontSize: "1.1rem", 
                  color: theme === "light" ? "#181b23" : currentTheme.text, 
                  marginBottom: 40, 
                  lineHeight: 1.7,
                  textAlign: "justify"
                }}>
                  WashEye represents a revolutionary approach to solving one of the most common frustrations in shared living spaces: the uncertainty of laundry machine availability. This innovative IoT solution transforms the traditional laundry experience by providing real-time monitoring and intelligent notifications, eliminating the need for constant checking and waiting.
                </div>

                {/* Main Project Image */}
                <img
                  src={projects[openProjectIdx].image}
                  alt={projects[openProjectIdx].title}
                  style={{ width: "100%", maxHeight: 400, objectFit: "cover", borderRadius: 12, marginBottom: 40 }}
                />

                {/* Technical Overview */}
                <div style={{ 
                  fontSize: "1.1rem", 
                  color: theme === "light" ? "#181b23" : currentTheme.text, 
                  marginBottom: 40, 
                  lineHeight: 1.7,
                  textAlign: "justify"
                }}>
                  At the heart of WashEye lies a sophisticated sensor network built around the ESP32 microcontroller, chosen for its robust WiFi connectivity and processing capabilities. The system employs SW420 vibration sensors strategically positioned to detect machine activity through precise vibration analysis. These sensors can distinguish between different types of machine operations, from the gentle hum of idle machines to the distinct patterns of active washing and drying cycles.
                </div>

                {/* Technical Specifications */}
                <div style={{ width: "100%", marginBottom: 40 }}>
                  <h3 style={{ 
                    fontWeight: 400, 
                    fontSize: "1rem", 
                    marginBottom: 24,
                    color: theme === "light" ? "#181b23" : currentTheme.text,
                    textTransform: "uppercase",
                    letterSpacing: 2,
                    textAlign: "center"
                  }}>
                    Technical Specifications
                  </h3>
                  
                  <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 20
                  }}>
                    <div style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      paddingBottom: 16,
                      borderBottom: `1px solid ${theme === "dark" ? "#333" : "#eee"}`
                    }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ 
                          fontWeight: 400, 
                          fontSize: "0.9rem", 
                          color: theme === "light" ? "#181b23" : currentTheme.text,
                          marginBottom: 4
                        }}>
                          MICROCONTROLLER
                        </div>
                        <div style={{ 
                          fontWeight: 300, 
                          fontSize: "1rem", 
                          color: theme === "light" ? "#666" : "#b0b3c6"
                        }}>
                          ESP32 Development Board
                        </div>
                      </div>
                      <div style={{ flex: 1, textAlign: "right" }}>
                        <div style={{ 
                          fontWeight: 400, 
                          fontSize: "0.9rem", 
                          color: theme === "light" ? "#181b23" : currentTheme.text,
                          marginBottom: 4
                        }}>
                          SENSOR TECHNOLOGY
                        </div>
                        <div style={{ 
                          fontWeight: 300, 
                          fontSize: "1rem", 
                          color: theme === "light" ? "#666" : "#b0b3c6"
                        }}>
                          SW420 Vibration Sensor
                        </div>
                      </div>
                    </div>
                    
                    <div style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      paddingBottom: 16,
                      borderBottom: `1px solid ${theme === "dark" ? "#333" : "#eee"}`
                    }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ 
                          fontWeight: 400, 
                          fontSize: "0.9rem", 
                          color: theme === "light" ? "#181b23" : currentTheme.text,
                          marginBottom: 4
                        }}>
                          DISPLAY SYSTEM
                        </div>
                        <div style={{ 
                          fontWeight: 300, 
                          fontSize: "1rem", 
                          color: theme === "light" ? "#666" : "#b0b3c6"
                        }}>
                          TM1637 Digital Clock + ILI9341 TFT LCD
                        </div>
                      </div>
                      <div style={{ flex: 1, textAlign: "right" }}>
                        <div style={{ 
                          fontWeight: 400, 
                          fontSize: "0.9rem", 
                          color: theme === "light" ? "#181b23" : currentTheme.text,
                          marginBottom: 4
                        }}>
                          COMMUNICATION
                        </div>
                        <div style={{ 
                          fontWeight: 300, 
                          fontSize: "1rem", 
                          color: theme === "light" ? "#666" : "#b0b3c6"
                        }}>
                          Telegram Bot API
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* User Interface Description */}
                <div style={{ 
                  fontSize: "1.1rem", 
                  color: theme === "light" ? "#181b23" : currentTheme.text, 
                  marginBottom: 40, 
                  lineHeight: 1.7,
                  textAlign: "justify"
                }}>
                  The user interface combines both physical and digital elements to provide comprehensive system control. The TM1637 digital clock displays real-time information and cycle durations, while the ILI9341 TFT LCD touch screen offers an intuitive interface for system configuration and real-time status monitoring. Users can easily set up notification preferences, view machine availability, and access historical usage data through the responsive touch interface.
                </div>

                {/* Telegram Integration */}
                <div style={{ 
                  fontSize: "1.1rem", 
                  color: theme === "light" ? "#181b23" : currentTheme.text, 
                  marginBottom: 40, 
                  lineHeight: 1.7,
                  textAlign: "justify"
                }}>
                  The integration with Telegram Bot API represents a key innovation in user communication. The system sends intelligent notifications that include machine availability status, estimated completion times, and usage recommendations. Users receive alerts when machines become available, when cycles are completed, and even suggestions for optimal usage times based on historical data analysis.
                </div>

                {/* Impact and Benefits */}
                <div style={{ 
                  fontSize: "1.1rem", 
                  color: theme === "light" ? "#181b23" : currentTheme.text, 
                  marginBottom: 40, 
                  lineHeight: 1.7,
                  textAlign: "justify"
                }}>
                  WashEye's impact extends beyond convenience to include significant energy savings and facility optimization. By providing real-time usage data, the system helps users make informed decisions about when to use machines, reducing peak-hour congestion and distributing usage more evenly throughout the day. This intelligent scheduling approach not only improves user experience but also contributes to more efficient energy consumption and reduced facility maintenance costs.
                </div>
              </div>
            ) : projects[openProjectIdx].title === "Preventive Maintenance Robot" ? (
              <div style={{ width: "100%", textAlign: "left" }}>
                {/* Introduction Text */}
                <div style={{ 
                  fontSize: "1.1rem", 
                  color: theme === "light" ? "#181b23" : currentTheme.text, 
                  marginBottom: 40, 
                  lineHeight: 1.7,
                  textAlign: "justify"
                }}>
                  During my internship at Oppo Indonesia Manufacturing, I developed a comprehensive IoT-based Preventive Maintenance Robot from scratch, designed to monitor environmental conditions inside screen guard machines in the production line. This project represented a complete end-to-end development experience, encompassing electrical wiring design, 3D modeling for the hardcase enclosure, PCB design and assembly, sensor integration, and system integration with cloud-based monitoring platforms.
                </div>

                {/* PCB Design Section */}
                <div style={{ marginBottom: 50 }}>
                  <h3 style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: currentTheme.accent,
                    marginBottom: 20,
                    textTransform: "uppercase",
                    letterSpacing: 1
                  }}>
                    PCB Design & Electrical Integration
                  </h3>
                  <div style={{ 
                    fontSize: "1.1rem", 
                    color: theme === "light" ? "#181b23" : currentTheme.text, 
                    marginBottom: 24, 
                    lineHeight: 1.7,
                    textAlign: "justify"
                  }}>
                    The development process involved multiple engineering disciplines working in harmony. I designed the electrical wiring system to ensure reliable power distribution and signal integrity, and developed PCB layouts optimized for sensor integration and data processing. Each component was carefully selected and integrated to create a robust, industrial-grade monitoring solution.
                  </div>
                  <div style={{
                    background: theme === "dark" ? "rgba(255, 224, 102, 0.1)" : "rgba(183, 33, 255, 0.1)",
                    border: `2px solid ${currentTheme.accent}60`,
                    borderRadius: 16,
                    padding: "2rem",
                    marginBottom: 24
                  }}>
                    <div style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: currentTheme.accent,
                      marginBottom: 20,
                      textTransform: "uppercase",
                      letterSpacing: 1.5,
                      textAlign: "center"
                    }}>
                      Components Used
                    </div>
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                      gap: 16,
                      fontSize: "1rem",
                      color: theme === "light" ? "#181b23" : currentTheme.text,
                      lineHeight: 2
                    }}>
                      <div style={{
                        padding: "8px 12px",
                        background: theme === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
                        borderRadius: 8,
                        border: `1px solid ${theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`
                      }}>TFT LCD ILI9341</div>
                      <div style={{
                        padding: "8px 12px",
                        background: theme === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
                        borderRadius: 8,
                        border: `1px solid ${theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`
                      }}>PMS5003 (Dust Sensor)</div>
                      <div style={{
                        padding: "8px 12px",
                        background: theme === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
                        borderRadius: 8,
                        border: `1px solid ${theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`
                      }}>SHT31-D (Temp & Humidity)</div>
                      <div style={{
                        padding: "8px 12px",
                        background: theme === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
                        borderRadius: 8,
                        border: `1px solid ${theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`
                      }}>ESP32 DevkitC V4</div>
                      <div style={{
                        padding: "8px 12px",
                        background: theme === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
                        borderRadius: 8,
                        border: `1px solid ${theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`
                      }}>LED 5mm</div>
                      <div style={{
                        padding: "8px 12px",
                        background: theme === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
                        borderRadius: 8,
                        border: `1px solid ${theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`
                      }}>Buzzer Alarm Module</div>
                      <div style={{
                        padding: "8px 12px",
                        background: theme === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
                        borderRadius: 8,
                        border: `1px solid ${theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`
                      }}>LM2596 Step Down Converter</div>
                      <div style={{
                        padding: "8px 12px",
                        background: theme === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
                        borderRadius: 8,
                        border: `1px solid ${theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`
                      }}>Relay Module 1 Channel</div>
                      <div style={{
                        padding: "8px 12px",
                        background: theme === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
                        borderRadius: 8,
                        border: `1px solid ${theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`
                      }}>NPT5-I5 Lamp</div>
                    </div>
                  </div>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: 28,
                    marginBottom: 0
                  }}>
                    <div style={{
                      borderRadius: 16,
                      overflow: "hidden",
                      boxShadow: theme === "dark" ? "0 8px 32px rgba(0,0,0,0.3)" : "0 8px 32px rgba(0,0,0,0.1)",
                      background: theme === "dark" ? "#181b23" : "#fff",
                      border: `1px solid ${theme === "dark" ? "#333" : "#e0e0e0"}`
                    }}>
                      <img
                        src={pmrPCBDesign1}
                        alt="Preventive Maintenance Robot - PCB Design 1"
                        style={{ width: "100%", height: 380, objectFit: "contain", display: "block", background: theme === "dark" ? "#0a0a0a" : "#f5f5f5", padding: "12px" }}
                      />
                    </div>
                    <div style={{
                      borderRadius: 16,
                      overflow: "hidden",
                      boxShadow: theme === "dark" ? "0 8px 32px rgba(0,0,0,0.3)" : "0 8px 32px rgba(0,0,0,0.1)",
                      background: theme === "dark" ? "#181b23" : "#fff",
                      border: `1px solid ${theme === "dark" ? "#333" : "#e0e0e0"}`
                    }}>
                      <img
                        src={pmrPCBDesign2}
                        alt="Preventive Maintenance Robot - PCB Design 2"
                        style={{ width: "100%", height: 380, objectFit: "contain", display: "block", background: theme === "dark" ? "#0a0a0a" : "#f5f5f5", padding: "12px" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Hardcase Design Section */}
                <div style={{ marginBottom: 50 }}>
                  <h3 style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: currentTheme.accent,
                    marginBottom: 20,
                    textTransform: "uppercase",
                    letterSpacing: 1
                  }}>
                    3D Hardcase Design
                  </h3>
                  <div style={{ 
                    fontSize: "1.1rem", 
                    color: theme === "light" ? "#181b23" : currentTheme.text, 
                    marginBottom: 24, 
                    lineHeight: 1.7,
                    textAlign: "justify"
                  }}>
                    I created custom 3D models for the hardcase enclosure using Russian CAD software called "Компас3D" (Compass3D), a professional engineering design tool. The design process involved careful consideration of component placement, sensor accessibility, and environmental protection requirements for the industrial production environment. After completing the 3D modeling, the hardcase was manufactured using a 3D printer, resulting in a vibrant lime green enclosure that protects sensitive components while maintaining accessibility for maintenance. The final deployed unit features an integrated LCD display showing real-time environmental monitoring data.
                  </div>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: 28,
                    marginBottom: 0
                  }}>
                    <div style={{
                      borderRadius: 16,
                      overflow: "hidden",
                      boxShadow: theme === "dark" ? "0 8px 32px rgba(0,0,0,0.3)" : "0 8px 32px rgba(0,0,0,0.1)",
                      background: theme === "dark" ? "#181b23" : "#fff",
                      border: `1px solid ${theme === "dark" ? "#333" : "#e0e0e0"}`
                    }}>
                      <img
                        src={pmrHardcaseDesign}
                        alt="Preventive Maintenance Robot - Hardcase Design"
                        style={{ width: "100%", height: 400, objectFit: "contain", display: "block", background: theme === "dark" ? "#0a0a0a" : "#f5f5f5", padding: "20px" }}
                      />
                    </div>
                    <div style={{
                      borderRadius: 16,
                      overflow: "hidden",
                      boxShadow: theme === "dark" ? "0 8px 32px rgba(0,0,0,0.3)" : "0 8px 32px rgba(0,0,0,0.1)",
                      background: theme === "dark" ? "#181b23" : "#fff",
                      border: `1px solid ${theme === "dark" ? "#333" : "#e0e0e0"}`
                    }}>
                      <img
                        src={pmrTrialPhoto}
                        alt="Preventive Maintenance Robot - Trial Photo"
                        style={{ width: "100%", height: 400, objectFit: "cover", display: "block" }}
                      />
                    </div>
                  </div>
                </div>

                {/* System Overview */}
                <div style={{ 
                  fontSize: "1.1rem", 
                  color: theme === "light" ? "#181b23" : currentTheme.text, 
                  marginBottom: 50, 
                  lineHeight: 1.7,
                  textAlign: "justify"
                }}>
                  The system monitors three critical environmental parameters that directly impact production quality and equipment longevity: dust levels using the PMS5003 particulate matter sensor, and temperature and humidity using the SHT31-D sensor. These sensors continuously collect data from the production environment, providing real-time insights into conditions that could affect screen guard manufacturing quality or cause equipment malfunctions.
                </div>

                {/* Alert System */}
                <div style={{ 
                  fontSize: "1.1rem", 
                  color: theme === "light" ? "#181b23" : currentTheme.text, 
                  marginBottom: 50, 
                  lineHeight: 1.7,
                  textAlign: "justify"
                }}>
                  When any of the three monitored parameters exceed predefined thresholds, the system automatically activates production warning lamps (NPT5-I5) to alert operators immediately. This real-time alerting mechanism enables proactive intervention before environmental conditions can cause production defects or equipment damage, significantly reducing downtime and improving overall production efficiency.
                </div>

                {/* Data Integration and Visualization Section */}
                <div style={{ marginBottom: 50 }}>
                  <h3 style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: currentTheme.accent,
                    marginBottom: 20,
                    textTransform: "uppercase",
                    letterSpacing: 1
                  }}>
                    Data Integration & Visualization
                  </h3>
                  <div style={{ 
                    fontSize: "1.1rem", 
                    color: theme === "light" ? "#181b23" : currentTheme.text, 
                    marginBottom: 24, 
                    lineHeight: 1.7,
                    textAlign: "justify"
                  }}>
                    The system connects wirelessly through WiFi and sends sensor data via MQTT protocol, enabling fully automated data transmission without manual intervention. The collected sensor data is seamlessly integrated with InfluxDB, a high-performance time-series database optimized for IoT applications. This integration enables efficient storage and retrieval of historical environmental data, supporting trend analysis and predictive maintenance strategies. The data is then visualized through Grafana dashboards, which are displayed on TV monitors throughout the production floor, providing real-time visibility to production managers and operators.
                  </div>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: 28,
                    marginBottom: 0
                  }}>
                    <div style={{
                      borderRadius: 16,
                      overflow: "hidden",
                      boxShadow: theme === "dark" ? "0 8px 32px rgba(0,0,0,0.3)" : "0 8px 32px rgba(0,0,0,0.1)",
                      background: theme === "dark" ? "#181b23" : "#fff",
                      border: `1px solid ${theme === "dark" ? "#333" : "#e0e0e0"}`
                    }}>
                      <img
                        src={pmrTVMonitor}
                        alt="Preventive Maintenance Robot - Standing under TV Monitor"
                        style={{ width: "100%", height: 380, objectFit: "cover", display: "block" }}
                      />
                    </div>
                    <div style={{
                      borderRadius: 16,
                      overflow: "hidden",
                      boxShadow: theme === "dark" ? "0 8px 32px rgba(0,0,0,0.3)" : "0 8px 32px rgba(0,0,0,0.1)",
                      background: theme === "dark" ? "#181b23" : "#fff",
                      border: `1px solid ${theme === "dark" ? "#333" : "#e0e0e0"}`
                    }}>
                      <img
                        src={pmrGrafanaDashboard}
                        alt="Preventive Maintenance Robot - Grafana Dashboard"
                        style={{ width: "100%", height: 380, objectFit: "cover", display: "block" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Testing & Deployment Section */}
                <div style={{ marginBottom: 50 }}>
                  <h3 style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: currentTheme.accent,
                    marginBottom: 20,
                    textTransform: "uppercase",
                    letterSpacing: 1
                  }}>
                    Testing & Deployment
                  </h3>
                  <div style={{ 
                    fontSize: "1.1rem", 
                    color: theme === "light" ? "#181b23" : currentTheme.text, 
                    marginBottom: 24, 
                    lineHeight: 1.7,
                    textAlign: "justify"
                  }}>
                    The system underwent rigorous testing to ensure reliability in the production environment before deployment. Once validated, it was integrated into the production line to provide continuous monitoring and real-time alerts.
                  </div>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: 28,
                    marginBottom: 0
                  }}>
                    <div style={{
                      borderRadius: 16,
                      overflow: "hidden",
                      boxShadow: theme === "dark" ? "0 8px 32px rgba(0,0,0,0.3)" : "0 8px 32px rgba(0,0,0,0.1)",
                      background: theme === "dark" ? "#181b23" : "#fff",
                      border: `1px solid ${theme === "dark" ? "#333" : "#e0e0e0"}`
                    }}>
                      <img
                        src={pmrDeployment1}
                        alt="Preventive Maintenance Robot - Deployment in Production Line"
                        style={{ width: "100%", height: 380, objectFit: "cover", display: "block" }}
                      />
                    </div>
                    <div style={{
                      borderRadius: 16,
                      overflow: "hidden",
                      boxShadow: theme === "dark" ? "0 8px 32px rgba(0,0,0,0.3)" : "0 8px 32px rgba(0,0,0,0.1)",
                      background: theme === "dark" ? "#181b23" : "#fff",
                      border: `1px solid ${theme === "dark" ? "#333" : "#e0e0e0"}`
                    }}>
                      <img
                        src={pmrTVMonitor}
                        alt="Preventive Maintenance Robot - Standing under TV Monitor"
                        style={{ width: "100%", height: 380, objectFit: "cover", display: "block" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Impact and Benefits */}
                <div style={{ 
                  fontSize: "1.1rem", 
                  color: theme === "light" ? "#181b23" : currentTheme.text, 
                  marginBottom: 40, 
                  lineHeight: 1.7,
                  textAlign: "justify"
                }}>
                  This Preventive Maintenance Robot has transformed how Oppo Indonesia Manufacturing monitors and maintains its screen guard production equipment. By providing continuous environmental monitoring with automated alerts and comprehensive data visualization, the system enables data-driven decision-making, reduces unexpected equipment failures, and maintains optimal production conditions. The project demonstrates the practical application of IoT technologies in industrial manufacturing, combining hardware design, software development, and system integration to create a solution that directly impacts production quality and operational efficiency.
                </div>
              </div>
            ) : projects[openProjectIdx].title === "Automated Coat Handling Robot" ? (
              <div style={{ width: "100%", textAlign: "left" }}>
                {/* Introduction Text */}
                <div style={{ 
                  fontSize: "1.1rem", 
                  color: theme === "light" ? "#181b23" : currentTheme.text, 
                  marginBottom: 40, 
                  lineHeight: 1.7,
                  textAlign: "justify"
                }}>
                  During the Hardathon 2025 competition at Bauman Moscow State Technical University, we were challenged to develop a project that would enhance and improve daily life for students on campus. This local hackathon-style event encouraged innovation that could be implemented in various university spaces, including academic buildings, dormitories, and common areas. Our team, consisting of myself (Azka), Liza, Rita, and Mikhail, came together to tackle this challenge. Working collaboratively, we combined our diverse skills and perspectives in robotics, mechanical engineering, software development, and system integration.
                </div>

                {/* Project Photos Grid */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: 24,
                  marginBottom: 40
                }}>
                  <img
                    src="/assets/coat-robot-1.jpg"
                    alt="Automated Coat Handling Robot - Photo 1"
                    style={{ width: "100%", height: 280, objectFit: "cover", borderRadius: 12, background: theme === "dark" ? "#23263a" : "#f0f0f0" }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <img
                    src="/assets/coat-robot-2.jpg"
                    alt="Automated Coat Handling Robot - Photo 2"
                    style={{ width: "100%", height: 280, objectFit: "cover", objectPosition: "center 40%", borderRadius: 12, background: theme === "dark" ? "#23263a" : "#f0f0f0" }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <img
                    src="/assets/coat-robot-3.jpg"
                    alt="Automated Coat Handling Robot - Photo 3"
                    style={{ width: "100%", height: 280, objectFit: "cover", borderRadius: 12, background: theme === "dark" ? "#23263a" : "#f0f0f0" }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>

                {/* Project Development Story */}
                <div style={{ 
                  fontSize: "1.1rem", 
                  color: theme === "light" ? "#181b23" : currentTheme.text, 
                  marginBottom: 40, 
                  lineHeight: 1.7,
                  textAlign: "justify"
                }}>
                  Our team conceived and developed the Automated Coat Handling Robot—an intelligent robotic system designed to help students automatically store and retrieve their jackets and coats in university facilities. The challenge was clear: during winter months in Moscow, students arrive at university buildings with heavy coats and jackets, and finding space to store them can be difficult and time-consuming. Traditional coat racks become overcrowded, and personal items can get mixed up or misplaced.
                </div>

                {/* Main Project Image */}
                <img
                  src={projects[openProjectIdx].image}
                  alt={projects[openProjectIdx].title}
                  style={{ width: "100%", maxHeight: 400, objectFit: "cover", borderRadius: 12, marginBottom: 40 }}
                />

                {/* Solution Description */}
                <div style={{ 
                  fontSize: "1.1rem", 
                  color: theme === "light" ? "#181b23" : currentTheme.text, 
                  marginBottom: 40, 
                  lineHeight: 1.7,
                  textAlign: "justify"
                }}>
                  Our solution addresses this common problem of coat management in shared spaces by automating the entire process. The Automated Coat Handling Robot uses advanced robotics and sensor technology to identify, receive, store, and retrieve jackets with precision and care. Students can simply approach the robot, place their coat on the designated input area, and the system takes over from there. The robot automatically identifies available storage spaces, carefully handles the garment to prevent damage, and stores it in an organized manner. When students need their coats back, they can request retrieval through an intuitive interface, and the robot will locate and return their specific garment.
                </div>

                {/* Technical Implementation */}
                <div style={{ 
                  fontSize: "1.1rem", 
                  color: theme === "light" ? "#181b23" : currentTheme.text, 
                  marginBottom: 40, 
                  lineHeight: 1.7,
                  textAlign: "justify"
                }}>
                  The system integrates multiple advanced technologies including computer vision for garment recognition, precise robotic manipulation for handling delicate fabrics, and intelligent storage algorithms that maximize space efficiency. The robot's design ensures that coats are stored in a way that prevents wrinkling and maintains their condition, while the automated retrieval system eliminates the time students spend searching through crowded coat racks.
                </div>

                {/* Achievement Section */}
                <div style={{
                  background: theme === "dark" ? "rgba(255, 224, 102, 0.1)" : "rgba(183, 33, 255, 0.1)",
                  border: `2px solid ${currentTheme.accent}`,
                  borderRadius: 12,
                  padding: "2rem",
                  marginBottom: 40,
                  textAlign: "center"
                }}>
                  <div style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: currentTheme.accent,
                    marginBottom: 16,
                    textTransform: "uppercase",
                    letterSpacing: 1
                  }}>
                    🏆 Achievement
                  </div>
                  <div style={{
                    fontSize: "1.2rem",
                    color: theme === "light" ? "#181b23" : currentTheme.text,
                    fontWeight: 600,
                    marginBottom: 12
                  }}>
                    Favourite Winner
                  </div>
                  <div style={{
                    fontSize: "1rem",
                    color: theme === "light" ? "#666" : "#b0b3c6",
                    lineHeight: 1.6
                  }}>
                    Recognized by 2 Russian Manufacturing Companies
                  </div>
                  {/* Certificate Image */}
                  <img
                    src="/assets/coat-robot-certificate.jpg"
                    alt="Hardathon 2025 Certificate"
                    style={{ width: "100%", maxWidth: 600, marginTop: 24, borderRadius: 8, background: theme === "dark" ? "#23263a" : "#f0f0f0" }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>

                {/* Impact and Benefits */}
                <div style={{ 
                  fontSize: "1.1rem", 
                  color: theme === "light" ? "#181b23" : currentTheme.text, 
                  marginBottom: 40, 
                  lineHeight: 1.7,
                  textAlign: "justify"
                }}>
                  Our innovative approach and technical execution earned us the prestigious title of "Favourite Winner" from two Russian manufacturing companies, recognizing our project's practical value and engineering excellence. This solution not only reduces clutter and improves organization in university spaces but also provides a seamless, automated experience that saves students time and ensures their personal belongings are handled with care. The Automated Coat Handling Robot represents a perfect blend of robotics engineering, user-centered design, and practical problem-solving, demonstrating how technology can enhance everyday campus life.
                </div>

                {/* Documentation Link */}
                <div style={{
                  marginTop: 40,
                  padding: "1.5rem",
                  background: theme === "dark" ? "#181b23" : "#f7f7fa",
                  borderRadius: 12,
                  border: `1px solid ${theme === "dark" ? "#333" : "#ddd"}`
                }}>
                  <div style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: theme === "light" ? "#181b23" : currentTheme.text,
                    marginBottom: 12
                  }}>
                    Project Documentation
                  </div>
                  <div style={{
                    fontSize: "0.95rem",
                    color: theme === "light" ? "#666" : "#b0b3c6",
                    lineHeight: 1.6
                  }}>
                    Detailed technical documentation and project passport are available in the project repository. The documentation includes mechanical design specifications, control system architecture, sensor integration details, and user interface guidelines.
                  </div>
                </div>
              </div>
            ) : (
              /* Other Projects Content */
              <div style={{ width: "100%", textAlign: "left" }}>
                <img
                  src={projects[openProjectIdx].image}
                  alt={projects[openProjectIdx].title}
                  style={{ width: "100%", maxHeight: 400, objectFit: "cover", borderRadius: 12, marginBottom: 40 }}
                />
                <div style={{ 
                  fontSize: "1.1rem", 
                  color: theme === "light" ? "#181b23" : currentTheme.text, 
                  marginBottom: 40, 
                  lineHeight: 1.7,
                  textAlign: "justify"
                }}>
                  {projects[openProjectIdx].detailedDescription || projects[openProjectIdx].description}
                </div>
                <div style={{ 
                  fontSize: "1rem", 
                  color: theme === "light" ? "#666" : "#b0b3c6",
                  textAlign: "center",
                  fontStyle: "italic"
                }}>
                  More detailed information and technical documentation coming soon...
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {/* Floating Theme Switcher Button */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        style={{
          position: "fixed",
          right: 28,
          bottom: 28,
          zIndex: 200,
          background: "#181b23",
          color: "#ffe066",
          border: "3px solid #ffe066",
          borderRadius: "50%",
          width: 54,
          height: 54,
          boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
          fontSize: 26,
          fontWeight: 900,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 0.3s, color 0.3s, box-shadow 0.3s"
        }}
        title={theme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme"}
      >
        {theme === "dark" ? "☀️" : "��"}
      </button>
    </div>
  );
}

// Export the main portfolio as default
export default App; 