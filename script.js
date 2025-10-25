
const teamMembers = {
    1: {
        name: "Jonathan Allen Mina",
        role: "President",
        details: "Allen leads our organization with vision and dedication. With a passion for technology and leadership, he ensures ITSO achieves its goals and provides value to all members.",
        tech: ["Leadership", "Project Management", "Web Development"],
        photo: "../img/mina.png"
    },
    2: {
        name: "Olivera John Rey",
        role: "Vice President/Internal",
        details: "Olivera supports the president in organizational leadership and oversees various committees. He specializes in strategic planning and team coordination.",
        tech: ["Strategic Planning", "Team Management", "Networking"],
        photo: "../img/oliver.png"
    },
    3: {
        name: "Guanzon, Kristine Fate ",
        role: "Vice President/External",
        details: "Fate Guanzon represents ITSO in events and partnerships outside the campus. She helps build connections with other organizations and promotes ITSO’s goals to a wider community.",
        tech: ["Documentation", "Communication", "Organization"],
        photo: "../img/fate.png"
    },
    4: {
        name: "Lecreo, Monica Praxides",
        role: "Secretary",
        details: "Monica handles the organization's finances with precision and care. She manages budgets, expenses, and ensures financial transparency.",
        tech: ["Budgeting", "Financial Management", "Excel"],
        photo: "../img/monica.png"
    },
    5: {
        name: "Magana , Melody Odoño",
        role: "Assistant Secretary",
        details: "Melody is the voice of ITSO, managing our external communications and building relationships with partners and the wider community.",
        tech: ["Communication", "Marketing", "Social Media"],
        photo: "../img/melody.png"
    },
    6: {
        name: "Jennelyn Bornilla",
        role: "Finance Officer (Treasurer)",
        details: "Jennelyn plans and executes all ITSO events, from workshops to networking sessions. She ensures every event is memorable and impactful.",
        tech: ["Event Planning", "Logistics", "Coordination"],
        photo: "../img/jen.png"
    },
    7: {
        name: "Joven Quinal",
        role: "Technical Lead",
        details: "Joven guides the technical direction of our projects and ensures our members have access to the latest technologies and learning resources.",
        tech: ["Software Development", "Technical Training", "Mentoring"],
        photo: "../img/joven.png"
    },
    8: {
        name: "Allison",
        role: "Membership Coordinator",
        details: "Allison manages member recruitment and engagement, ensuring our community continues to grow and every member feels valued.",
        tech: ["Recruitment", "Community Building", "Engagement"],
        photo: "../img/allison.png"
    },
    9: {
        name: "Rey Centeno",
        role: "Faculty Advisor",
        details: "Rey provides guidance and support from a faculty perspective, helping bridge the gap between academic learning and practical application.",
        tech: ["Mentoring", "Academic Guidance", "Industry Connections"],
        photo: "../img/Adviser.png"
    },
    10: {
        name: "Alex Abella",
        role: "Web Development Committee",
        details: "Alex specializes in creating responsive and user-friendly web interfaces. He leads our web development initiatives and workshops.",
        tech: ["HTML/CSS", "JavaScript", "React"],
        photo: "../img/abella.png"
    },
    11: {
        name: "Carlo",
        role: "Cybersecurity Committee",
        details: "Carlo focuses on security best practices and educates members about protecting digital assets and privacy.",
        tech: ["Network Security", "Ethical Hacking", "Encryption"],
        photo: "../img/carlo.png"
    },
    12: {
        name: "Kenji",
        role: "Data Science Committee",
        details: "Kenji explores the world of data analytics and machine learning, sharing insights and techniques with the ITSO community.",
        tech: ["Python", "Data Analysis", "Machine Learning"],
        photo: "../img/kenji.png"
    },
    13: {
        name: "Carl",
        role: "Mobile Development Committee",
        details: "Carl leads our mobile app development efforts, creating cross-platform applications with modern frameworks.",
        tech: ["React Native", "Flutter", "iOS/Android"],
        photo: "../img/carl.png"
    },
    14: {
        name: "Sam",
        role: "AI/ML Committee",
        details: "Sam explores artificial intelligence and machine learning applications, organizing workshops and projects in this cutting-edge field.",
        tech: ["Python", "TensorFlow", "Neural Networks"],
        photo: "../img/sam.png"
    },
    15: {
        name: "Jessica Patel",
        role: "Outreach Committee",
        details: "Jessica connects ITSO with the wider community, organizing volunteer activities and partnership opportunities.",
        tech: ["Community Engagement", "Partnership Development", "Volunteer Coordination"],
        photo: "../img/17.png"
    },
    16: {
        name: "Kristel",
        role: "Design Committee",
        details: "Kristel focuses on UI/UX design principles, ensuring our projects are not only functional but also visually appealing and user-friendly.",
        tech: ["Figma", "UI/UX Design", "Adobe Creative Suite"],
        photo: "../img/kristel.png"
    },
    17: {
        name: "Gracie",
        role: "Content Creation Committee",
        details: "Gracie manages our digital content across various platforms, creating engaging materials that showcase ITSO's activities and achievements.",
        tech: ["Content Strategy", "Social Media", "Video Editing"],
        photo: "../img/gracie.png"
    },
    18: {
        name: "Daniel Miller",
        role: "Research Committee",
        details: "Daniel leads research initiatives within ITSO, exploring emerging technologies and their potential applications.",
        tech: ["Research Methodology", "Technical Writing", "Emerging Technologies"],
        photo: "../img/18.png"
    },
    19: {
        name: "Dar",
        role: "Workshop Committee",
        details: "Dar organizes and facilitates technical workshops, ensuring members have hands-on learning experiences with various technologies.",
        tech: ["Workshop Planning", "Technical Training", "Public Speaking"],
        photo: "../img/dar.png"
    },
    20: {
        name: "Amanda Taylor",
        role: "Networking Committee",
        details: "Amanda focuses on building professional connections for ITSO members with industry professionals and alumni.",
        tech: ["Networking", "Professional Development", "Event Coordination"],
        photo: "../img/19.png"
    },
    21: {
        name: "Gio",
        role: "Infrastructure Committee",
        details: "Gio manages the technical infrastructure supporting ITSO's activities and projects.",
        tech: ["System Administration", "Cloud Services", "DevOps"],
        photo: "../img/gio.png"
    },
    22: {
        name: "Olarte",
        role: "Documentation Committee",
        details: "Olarte ensures all ITSO projects and processes are properly documented for knowledge sharing and continuity.",
        tech: ["Technical Writing", "Documentation Tools", "Knowledge Management"],
        photo: "../img/olarte.png"
    },
    23: {
        name: "Gerald",
        role: "Quality Assurance Committee",
        details: "Gerald focuses on ensuring the quality and reliability of ITSO's technical projects and deliverables.",
        tech: ["Testing", "Quality Assurance", "Debugging"],
        photo: "../img/gerald.png"
    },
    24: {
        name: "Brian Clark",
        role: "Innovation Committee",
        details: "Brian explores innovative applications of technology and encourages creative problem-solving within ITSO.",
        tech: ["Innovation Management", "Creative Thinking", "Project Ideation"],
        photo: "../img/23.png"
    },
    25: {
        name: "Rachel Green",
        role: "Mentorship Committee",
        details: "Rachel coordinates mentorship programs, connecting experienced members with those new to technology fields.",
        tech: ["Mentorship Programs", "Peer Learning", "Skill Development"],
        photo: "../img/24.png"
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