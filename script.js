const teamMembers = {
    1: {
        name: "Alex Johnson",
        role: "Senior Systems Architect",
        details: "Alex leads our infrastructure team with over 10 years of experience in cloud architecture and system design. He specializes in scalable solutions and security implementations.",
        tech: ["AWS", "Docker", "Kubernetes", "Linux"],
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    2: {
        name: "Sarah Williams",
        role: "Lead Software Engineer",
        details: "Sarah manages our development team and oversees all software projects. With expertise in full-stack development, she ensures our applications meet business requirements.",
        tech: ["JavaScript", "React", "Node.js", "MongoDB"],
        photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    3: {
        name: "Michael Chen",
        role: "Cybersecurity Specialist",
        details: "Michael protects our organization from cyber threats and ensures compliance with security standards. He conducts regular security audits and trains staff on best practices.",
        tech: ["Firewalls", "SIEM", "Pen Testing", "Encryption"],
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    4: {
        name: "Emily Rodriguez",
        role: "Data Analyst",
        details: "Emily transforms complex data into actionable insights. She specializes in data visualization and statistical analysis to support strategic decision-making.",
        tech: ["Python", "SQL", "Tableau", "R"],
        photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80"
    },
    5: {
        name: "David Kim",
        role: "Network Engineer",
        details: "David designs and maintains our network infrastructure. He ensures optimal performance and reliability for all network-dependent services across the organization.",
        tech: ["Cisco", "VPN", "SD-WAN", "VoIP"],
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    6: {
        name: "Jessica Patel",
        role: "IT Support Manager",
        details: "Jessica leads our IT support team, ensuring timely resolution of technical issues. She focuses on improving user experience and streamlining support processes.",
        tech: ["ServiceNow", "Windows", "macOS", "Active Directory"],
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
    },
    7: {
        name: "Robert Wilson",
        role: "DevOps Engineer",
        details: "Robert bridges the gap between development and operations, implementing CI/CD pipelines and automation solutions to improve deployment efficiency.",
        tech: ["Jenkins", "Ansible", "Terraform", "AWS"],
        photo: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=798&q=80"
    },
    8: {
        name: "Lisa Brown",
        role: "UX/UI Designer",
        details: "Lisa creates intuitive and visually appealing user interfaces. She focuses on user-centered design principles to enhance the overall user experience.",
        tech: ["Figma", "Adobe XD", "Sketch", "User Research"],
        photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    9: {
        name: "Daniel Miller",
        role: "Database Administrator",
        details: "Daniel manages and optimizes our database systems, ensuring data integrity, security, and performance across all applications.",
        tech: ["SQL Server", "MySQL", "PostgreSQL", "MongoDB"],
        photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
    },
    10: {
        name: "Amanda Taylor",
        role: "Project Manager",
        details: "Amanda oversees IT projects from conception to completion, ensuring they are delivered on time, within budget, and meet quality standards.",
        tech: ["Agile", "Scrum", "Jira", "Risk Management"],
        photo: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    11: {
        name: "James Anderson",
        role: "Mobile Developer",
        details: "James specializes in creating cross-platform mobile applications with focus on performance and user experience.",
        tech: ["React Native", "Flutter", "iOS", "Android"],
        photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
   
    12: {
        name: "Chris Evans",
        role: "Frontend Developer",
        details: "Chris creates responsive and interactive web interfaces with modern JavaScript frameworks.",
        tech: ["Vue.js", "TypeScript", "SASS", "Webpack"],
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    13: {
        name: "Maria Garcia",
        role: "Backend Developer",
        details: "Maria builds robust server-side applications and APIs with focus on scalability and security.",
        tech: ["Python", "Django", "PostgreSQL", "Redis"],
        photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    14: {
        name: "Kevin Lee",
        role: "AI/ML Engineer",
        details: "Kevin develops machine learning models and AI solutions for various business applications.",
        tech: ["TensorFlow", "PyTorch", "Python", "Data Science"],
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    15: {
        name: "Sophia Martinez",
        role: "Cloud Engineer",
        details: "Sophia designs and implements cloud infrastructure solutions across multiple platforms.",
        tech: ["Azure", "Google Cloud", "Terraform", "CI/CD"],
        photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80"
    },
    16: {
        name: "Thomas Wilson",
        role: "QA Engineer",
        details: "Thomas ensures software quality through comprehensive testing strategies and automation.",
        tech: ["Selenium", "Jest", "Cypress", "Test Automation"],
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    },
    17: {
        name: "Olivia Davis",
        role: "Product Manager",
        details: "Olivia bridges the gap between technical teams and business stakeholders to deliver successful products.",
        tech: ["Agile", "Product Strategy", "User Stories", "Roadmapping"],
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
    },
    18: {
        name: "Brian Clark",
        role: "Security Analyst",
        details: "Brian monitors and protects organizational assets from security threats and vulnerabilities.",
        tech: ["SOC", "Incident Response", "Threat Intelligence", "Compliance"],
        photo: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=798&q=80"
    },
    19: {
        name: "Rachel Green",
        role: "Technical Writer",
        details: "Rachel creates clear and comprehensive documentation for technical products and processes.",
        tech: ["Documentation", "API Docs", "Technical Communication", "Markdown"],
        photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    }
};

// DOM elements
const modal = document.getElementById('memberModal');
const closeModal = document.getElementById('closeModal');

// Add click event to ALL member cards (both carousels)
document.addEventListener('DOMContentLoaded', function() {
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
