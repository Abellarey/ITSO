
const teamMembers = {
    1: {
        name: "Jonathan Allen Mina",
        role: "President",
        details: "Allen's goal is to transform ITSO into the most influential tech community on campus. He focuses on driving organizational excellence, expanding membership diversity, fostering innovation projects, and establishing ITSO as a bridge between academic learning and industry opportunities.",
        tech: ["Leadership", "Project Management", "Web Development"],
        photo: "./img/mina.png"
    },
    2: {
        name: "Olivera John Rey",
        role: "Vice President/Internal",
        details: "Olivera's goal is to strengthen ITSO's internal culture and maximize member satisfaction. He aims to create supportive committee structures, improve internal communication channels, ensure member retention, and foster a collaborative environment where everyone feels valued and engaged.",
        tech: ["Strategic Planning", "Team Management", "Networking"],
        photo: "./img/oliver.png"
    },
    3: {
        name: "Guanzon, Kristine Fate ",
        role: "Vice President/External",
        details: "Fate's goal is to build strategic partnerships with tech companies, other student organizations, and industry leaders. She works to increase ITSO's visibility across campus and beyond, create collaboration opportunities with external tech communities, and bring industry expertise into ITSO activities.",
        tech: ["Documentation", "Communication", "Organization"],
        photo: "./img/fate.png"
    },
    4: {
        name: "Lecreo, Monica Praxides",
        role: "Secretary",
        details: "Monica's goal is to maintain organizational transparency and efficient documentation of all ITSO activities. She strives to create accurate records, streamline administrative processes, ensure all communications are properly archived, and provide reliable information for organizational decision-making.",
        tech: ["Budgeting", "Financial Management", "Excel"],
        photo: "./img/monica.png"
    },
    5: {
        name: "Magana, Melody Odoño",
        role: "Assistant Secretary",
        details: "Melody's goal is to enhance member communication and keep everyone informed and engaged. She focuses on timely announcements, engaging newsletters, consistent messaging across platforms, and creating a sense of community through proactive and responsive communications with all members.",
        tech: ["Email/Messaging Platforms", "Microsoft Word/Google Docs", "Scheduling Tools"],
        photo: "./img/melody.png"
    },
    6: {
        name: "Jennelyn Bornilla",
        role: "Treasurer",
        details: "Jennelyn's goal is to manage ITSO's finances responsibly and fund meaningful member initiatives. She aims to allocate resources strategically, maximize value from every dollar spent, ensure financial sustainability, and enable ambitious projects that benefit the entire ITSO community.",
        tech: ["Accounting Software", "Digital Payment Platforms", "Microsoft Excel / Google Sheets"],
        photo: "./img/jen.png"
    },
    7: {
        name: "Joven Quinal",
        role: "Auditor",
        details: "Joven's goal is to ensure financial accountability and maintain regulatory compliance for ITSO. He conducts thorough audits, identifies financial discrepancies, provides recommendations for improvement, and ensures the organization operates with integrity and transparency in all financial matters.",
        tech: ["Microsoft Excel / Google Sheets", "Accounting Software", "Audit Checklist"],
        photo: "./img/joven.png"
    },
    8: {
        name: "Allison John Arriola",
        role: "P.R.O",
        details: "Allison's goal is to grow ITSO's public reputation and attract talented new members to the community. She focuses on media coverage, positive brand perception, compelling public communications, and creating excitement about ITSO events and achievements throughout campus.",
        tech: ["Recruitment", "Community Building", "Engagement"],
        photo: "./img/allison.png"
    },
    9: {
        name: "Rey Centeno",
        role: "Faculty Advisor",
        details: "Rey's goal is to bridge academic learning with real-world industry experience for ITSO members. He focuses on connecting members with professional opportunities, ensuring organizational activities align with academic excellence, and facilitating mentorship from experienced professionals in the tech industry.",
        tech: ["Mentoring", "Academic Guidance", "Industry Connections"],
        photo: "./img/Adviser.png"
    },
    10: {
        name: "Rey Vergel Abella",
        role: "Lead Web Developer",
        details: "Rey's goal is to modernize ITSO's digital presence and teach members web design excellence. He aims to create cutting-edge, responsive websites, mentor junior developers, establish best practices in web development, and inspire members to build impactful digital solutions.",
        tech: ["HTML/CSS", "JavaScript", "React"],
        photo: "./img/abella.png"
    },
    11: {
        name: "John Carl Carillo",
        role: "Grievance",
        details: "Carlo's goal is Handles concerns, complaints, and issues raised by members with fairness and confidentiality. Acts as a mediator to help resolve conflicts and ensure a respectful, transparent, and supportive organizational environment.",
        tech: ["Communication Tools", "Documentation & Record-Keeping Systems", "Case Management"],
        photo: "./img/carlo.png"
    },
    12: {
        name: "Kenji Generoso",
        role: "Grievance",
        details: "Kenji's goal is Handles concerns, complaints, and issues raised by members with fairness and confidentiality. Acts as a mediator to help resolve conflicts and ensure a respectful, transparent, and supportive organizational environment.",
        tech: ["Communication Tools", "Documentation & Record-Keeping Systems", "Case Management"],
        photo: "./img/kenji.png"
    },
    13: {
        name: "Carl",
        role: "Peace and Order",
        details: "Carl's goal is to maintain order, safety, and discipline during ITSO activities and events. He assists in crowd control, ensures compliance with rules, and promotes a safe and respectful environment for all members.",
        tech: ["Incident Report Forms", "CCTV / Event Monitoring Tools", "Two-Way Radio"],
        photo: "./img/carl.png"
    },
    14: {
        name: "Samuel Alcazar",
        role: "Peace and Order",
        details: "Samuel's goal is to maintain order, safety, and discipline during ITSO activities and events. He assists in crowd control, ensures compliance with rules, and promotes a safe and respectful environment for all members.",
        tech: ["Incident Report Forms", "CCTV / Event Monitoring Tools", "Two-Way Radio"],
        photo: "./img/sam.png"
    },
    15: {
        name: "Melody Magana",
        role: "ASST. SEC.",
        details: "Melody's goal is to expand community engagement and create meaningful volunteer opportunities for ITSO members. She focuses on building partnerships with local organizations, coordinating service projects, and fostering a sense of social responsibility and community impact.",
        tech: ["Community Engagement", "Partnership Development", "Volunteer Coordination"],
        photo: "./img/melody.png"
    },
    16: {
        name: "Kristel Ladot",
        role: "Social Media Manager",
        details: "Kristel's goal is to create visually compelling designs that enhance user experience across all ITSO digital platforms. She applies UI/UX principles to all projects, mentors members in design thinking, ensures brand consistency, and demonstrates how great design drives user engagement and satisfaction.",
        tech: ["Meta Business Suite", "UI/UX Design", "Adobe Creative Suite"],
        photo: "./img/kristel.png"
    },
    17: {
        name: "Gracie Castro",
        role: "Creative Director",
        details: "Gracie's goal is to produce engaging creative content that represents ITSO's innovation and culture. She develops compelling visual narratives, videos, and multimedia content that inspire and inform, showcases member achievements, and communicates ITSO's mission effectively to diverse audiences.",
        tech: ["Content Strategy", "Social Media", "Video Editing"],
        photo: "./img/gracie.png"
    },
    18: {
        name: "Mc Carlisle Dale Organo",
        role: "3rd year Representative",
        details: "Mc Carlisle's goal is to drive research initiatives and explore emerging technology trends within ITSO. He conducts investigations into cutting-edge developments, shares findings with the community, mentors junior researchers, and positions ITSO as a hub for technology innovation and discovery.",
        tech: ["Research Methodology", "Technical Writing", "Emerging Technologies"],
        photo: "./img/18.png"
    },
    19: {
        name: "Daryll Jhames Bonito",
        role: "Web Design",
        details: "Dar's goal is to develop cutting-edge web interfaces and lead design innovation at ITSO. He focuses on pushing boundaries in web aesthetics and functionality, teaching modern design trends, creating portfolio-worthy projects, and inspiring members to think creatively about web solutions.",
        tech: ["HTML, CSS, JavaScript", "Figma", "Word Press"],
        photo: "./img/dar.png"
    },
    20: {
        name: "Mark Joshua Punzalan",
        role: "4th year Representative",
        details: "Mark's goal is to build professional networks and establish industry connections for ITSO members. He facilitates introductions to tech professionals, organizes networking events, mentors juniors on career development, and helps bridge the gap between academic experience and professional opportunities.",
        tech: ["Networking", "Professional Development", "Event Coordination"],
        photo: "./img/19.png"
    },
    21: {
        name: "Giorj Allen Gonzales",
        role: "System Analyst",
        details: "Giorj's goal is to build robust technical infrastructure and optimize systems supporting ITSO operations. He focuses on ensuring reliable systems, implementing efficient solutions, mentoring on DevOps practices, and creating scalable infrastructure that supports ITSO's growth and technical initiatives.",
        tech: ["System Administration", "Cloud Services", "DevOps"],
        photo: "./img/gio.png"
    },
    22: {
        name: "John Vincet Olarte",
        role: "2nd year Representative",
        details: "Olarte ensures all ITSO projects and processes are properly documented for knowledge sharing and continuity.",
        tech: ["Technical Writing", "Documentation Tools", "Knowledge Management"],
        photo: "./img/olarte.png"
    },
    23: {
        name: "Gerald Jamindang",
        role: "First year Representative",
        details: "Gerald focuses on ensuring the quality and reliability of ITSO's technical projects and deliverables.",
        tech: ["Testing", "Quality Assurance", "Debugging"],
        photo: "./img/gerald.png"
    },
    24: {
        name: "Bienvinido James Publico",
        role: "Photographer",
        details: "Publico responsible for capturing events, people, and key moments through high-quality images. Skilled in composition, lighting, and timing to visually document activities and strengthen the organization’s identity and communication.",
        tech: ["DSLR / Mirrorless Camera", "Adobe Lightroom", "Adobe Photoshop"],
        photo: "./img/23.png"
    },
    25: {
        name: "Kristin Chine Calip",
        role: "Graphics Designer",
        details: "Calip is a creative and detail-oriented graphic designer bringing visual ideas to life with fresh, engaging designs.",
        tech: ["Adobe Photoshop", "Adobe Illustrator", "Canva"],
        photo: "./img/24.png"
    }
};

// DOM elements
const modal = document.getElementById('memberModal');
const closeModal = document.getElementById('closeModal');

// Add click event to ALL member cards (both carousels)
document.addEventListener('DOMContentLoaded', function () {
    const allItems = document.querySelectorAll('.item');

    allItems.forEach(item => {
        item.addEventListener('click', () => {
            const memberId = item.getAttribute('data-member');
            showMemberDetails(memberId);
        });
    });
});

// Show member details in modal
function showMemberDetails(memberId) {
    const member = teamMembers[memberId];

    if (member) {
        document.getElementById('modalPhoto').src = member.photo;
        document.getElementById('modalName').textContent = member.name;
        document.getElementById('modalRole').textContent = member.role;
        document.getElementById('modalDetails').textContent = member.details;

        // Set tech stack
        const techStack = document.getElementById('modalTech');
        techStack.innerHTML = '';
        member.tech.forEach(tech => {
            const techItem = document.createElement('span');
            techItem.className = 'tech-item';
            techItem.textContent = tech;
            techStack.appendChild(techItem);
        });

        // Set social links
        const memberLinks = document.getElementById('modalLinks');
        memberLinks.innerHTML = `
                    <a href="#" class="member-link"><i class="fab fa-linkedin"></i></a>
                    <a href="#" class="member-link"><i class="fab fa-github"></i></a>
                    <a href="#" class="member-link"><i class="fas fa-envelope"></i></a>
                `;

        modal.classList.add('active');
    } else {
        console.log('Member not found:', memberId);
    }
}

// Close modal
closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Add keyboard support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modal.classList.remove('active');
    }
});

// Mobile menu
const mobileBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('nav');

mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});