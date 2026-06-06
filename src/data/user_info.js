const info = {
    // ============ MAIN DETAILS ============
    main: {
        name: "Joseph Odunayo Babatunde",
        role: "Senior Full-Stack Engineer",
        description: "I am a results-driven Senior Full-Stack Engineer specializing in building high-performance, secure, and user-centric web applications. I bridge the gap between pixel-perfect client-side experiences (React/Next.js/TypeScript) and robust, scalable backend architectures (Django/Laravel/PostgreSQL/Supabase). Passionate about optimizing development workflows, reducing page load times, and delivering digital solutions with measurable business impact.",
        photo: "../photo.png",
        email: "codextrafreelancer@gmail.com",
        location: "Lagos, Nigeria (Available for Global Remote roles)",
        resume: "/joseph_cv_software_developer.pdf",
    },

    // ============ SOCIAL LINKS ============
    socials: {
        twitter: "https://twitter.com/proff_official",
        github: "https://github.com/Freecodextra",
        linkedin: "https://www.linkedin.com/in/odunayo-joseph-a43a361a0",
        instagram: "https://instagram.com/proff_official",
        facebook: "https://www.facebook.com/profile.php?id=100069560193423&mibextid=ZbWKwL",
    },

    // ============ KEY METRICS ============
    stats: [
        { value: "5+", label: "Years Experience" },
        { value: "12+", label: "Production Apps Built" },
        { value: "98%+", label: "Healthcare Claim Success" },
        { value: "40%", label: "Load Time Reduction" }
    ],

    // ============ PROJECTS WITH CASE STUDIES ============
    projects: [
        {
            title: "Grace Healthcare Solutions",
            description: "A professional medical billing and practice support platform built to optimize healthcare revenue cycles and manage social health grants.",
            technologies: "React, TypeScript, Tailwind CSS, Framer Motion",
            github: "https://github.com/Freecodextra/grace-healthcare-solutions",
            link: "https://gracehcsolutions.net/",
            category: "Frontend",
            role: "Lead Frontend Engineer",
            metrics: "98% Claim Success | 15k+ Lives Impacted | 20+ Social Programs",
            challenge: "Medical billing and practice management require strict layout alignment and clear instruction paths. The client needed a portal that could simultaneously onboard medical practices and guide community members through complex health grant application processes without friction.",
            solution: "Designed and implemented a fluid, responsive client interface using React, TypeScript, and Tailwind CSS. Integrated Framer Motion for smooth micro-animations to enhance user trust, and optimized resource delivery to ensure near-instant page loads.",
            results: "The platform successfully supported onboarding for dozens of private practices, maintaining a 98%+ claims processing success rate, and successfully guided over 15,000 community members in applying for critical health grants."
        },
        {
            title: "Squeaks",
            description: "The #1 trending community meme coin platform integrated with interactive games, premium NFT collections, and decentralized community spaces.",
            technologies: "Next.js, TypeScript, Tailwind CSS, Supabase, Thirdweb Web3 SDK",
            github: "https://github.com/Freecodextra/squeaks-meme-coin",
            link: "https://www.squeaks.fun/",
            category: "Web3 / NGO",
            role: "Frontend & Web3 Lead",
            metrics: "Web3 Integrations | Custom NFT Portal | Sub-Second State Syncs",
            challenge: "The cryptocurrency and meme coin space moves extremely fast. The client needed an immersive, responsive website that would engage users, securely connect Web3 wallets, and display live updates of coin metadata, NFT collections, and community events.",
            solution: "Built the interface using Next.js for superior SEO and page generation speed. Integrated the Thirdweb SDK for seamless Web3 wallet logins (MetaMask, Coinbase Wallet) and custom NFT minting interactions. Connected Supabase to handle real-time leaderboard statistics and account preferences.",
            results: "Deployed a high-end, responsive crypto platform that handled initial launch spikes with zero downtime. Wallet connection latency was reduced under 1.5 seconds, enhancing user acquisition and retention."
        },
        {
            title: "CLBM Shop",
            description: "A premium cultural streetwear e-commerce platform featuring limited-edition drop models, catalog management, and secure international checkouts.",
            technologies: "React, TypeScript, Tailwind CSS, PHP (Laravel), MySQL",
            github: "https://github.com/Freecodextra/clbm-ecommerce",
            link: "https://clbm.shop/",
            category: "Full-Stack",
            role: "Full-Stack Developer",
            metrics: "10k+ Monthly Active Users | 18% Abandoned Cart Decrease",
            challenge: "Streetwear drops experience high traffic volumes in minutes, causing traditional databases to lock. The shop needed a secure backend to manage inventory in real-time, process payments securely, and offer a smooth desktop-and-mobile shopping interface.",
            solution: "Architected a high-throughput backend using Laravel and MySQL with optimized query indexes. Built a responsive frontend in React and TypeScript. Implemented custom inventory locking mechanisms to prevent double-selling during drop rushes, and integrated a simplified checkout flow.",
            results: "Successfully powered multiple streetwear drop campaigns. Cart abandonment dropped by 18%, and the database successfully resolved high-concurrency requests with zero inventory discrepancies."
        },
        {
            title: "SturdyBuddy",
            description: "A comprehensive study preparation and practice exam engine helping students practice multi-choice questions with automated scoring.",
            technologies: "React, TypeScript, Tailwind CSS, PHP, MySQL",
            github: "https://github.com/Freecodextra/sturdybuddy",
            link: "https://www.sturdybuddy.ng/",
            category: "Full-Stack",
            role: "Lead Full-Stack Developer",
            metrics: "30% Lower Test Latency | Advanced Teacher & Student Dashboards",
            challenge: "Students preparing for professional exams needed a low-latency, reliable system to practice exams online. The platform required an administrative panel for teachers to generate and schedule tests, and a secure engine to grade student tests immediately.",
            solution: "Created an optimized JSON-based test engine in React that caches questions locally to allow uninterrupted practice even on weak networks. Developed a PHP/MySQL backend API with detailed role-based access controls for Admins, Teachers, and Students.",
            results: "Reduced test load latency by 30% and enabled thousands of concurrent test-taking sessions. Teachers reported saving up to 10 hours a week on grading and report generation."
        },
        {
            title: "ASMS (Academic School Management System)",
            description: "A robust institutional administration platform managing student databases, grades, teacher assignments, and billing schedules.",
            technologies: "React, TypeScript, Tailwind CSS, Python (Django), PostgreSQL",
            github: "https://github.com/Freecodextra/asms-frontend",
            link: "https://asms-frontend.vercel.app/app/admin",
            category: "Full-Stack",
            role: "Core Full-Stack Developer",
            metrics: "40% Admin Overhead Saved | Strict Role-Based Security",
            challenge: "Schools managing student records manually suffered from data fragmentation and security leaks. The system needed absolute security compliance, detailed audit logging, and custom report builders for academic performance.",
            solution: "Built a secure, centralized API in Django utilizing PostgreSQL's native security features. Designed a dashboard using React and Tailwind CSS with custom tables, dynamic filtering, and interactive chart panels for metrics representation.",
            results: "Digitized administration processes across multiple school branches, reducing administrative processing times by 40% and providing parents with secure, real-time access to child grade reports."
        },
        {
            title: "Megeminds",
            description: "A modern e-commerce storefront for a high-end clothing and shoe brand with seamless catalog browsing and cart state preservation.",
            technologies: "React, TypeScript, Tailwind CSS, Python (Django), PostgreSQL",
            github: "https://github.com/Freecodextra/megaminds",
            link: "https://megeminds.ng/",
            category: "Full-Stack",
            role: "Full-Stack Engineer",
            metrics: "35% API Response Speedup | 25% Increase in Mobile Conversions",
            challenge: "E-commerce shoppers abandon slow sites. The brand wanted a visually rich product catalog that loaded instantly on mobile devices, with dynamic filters for categories, sizes, and price points.",
            solution: "Optimized Django REST framework backend with query prefetching and database indexes. Implemented React client-side state caching for product filters and utilized lazy-loading of images to keep initial page sizes tiny.",
            results: "Achieved a 35% speedup in API response times. The visual smoothness and page speed directly contributed to a 25% increase in conversion rates for mobile shoppers."
        },
        {
            title: "Aerie Empowerment Foundation",
            description: "A Christian Non-Governmental Organization platform featuring event directories, outreach media galleries, and donation portals.",
            technologies: "Next.js, TypeScript, Tailwind CSS, Framer Motion, Axios, TanStack Query",
            github: "https://github.com/Freecodextra/aeire-foundation",
            link: "https://aerieempowermentfoundation.org/",
            category: "Web3 / NGO",
            role: "Lead Web Developer",
            metrics: "50% Outreach User Increase | 100% SEO Health Score",
            challenge: "To attract volunteers and funding, the foundation needed a secure, search-engine-optimized platform to showcase active campaigns, humanitarian outreaches, and event schedules.",
            solution: "Utilized Next.js Server-Side Rendering (SSR) to ensure fast loading and robust indexing. Handled global state querying via TanStack Query, and built dynamic media grids using Framer Motion for high visual polish.",
            results: "Attained a 100% SEO performance rating, leading to a 50% increase in volunteer signups and digital outreach tracking engagement within 3 months of launch."
        },
        {
            title: "AEISTN Website",
            description: "The digital home of the Apprentice Engineers, Inventors, Scientists and Technologists of Nigeria, supporting STEM training programs.",
            technologies: "Next.js, TypeScript, Tailwind CSS, Clerk Auth, TanStack Query",
            github: "https://github.com/Freecodextra/aeistn-website",
            link: "https://aeistn-website.vercel.app/",
            category: "Web3 / NGO",
            role: "Frontend Architect",
            metrics: "500+ Active STEM Apprentices | Integrated Clerk Security",
            challenge: "The association needed a structured portal to register students, assign industry mentors, manage training workshops, and track engineering projects across different Nigerian cities.",
            solution: "Built a modern Next.js client integrated with Clerk for secure, passwordless user authentication. Created interactive course lists and mentor pairing pages powered by dynamic JSON databases.",
            results: "Successfully onboarded over 500 active apprentices and 50+ mentors, streamlining STEM workshop schedules across 10 major cities."
        },
        {
            title: "Global Teen Nigeria",
            description: "A secure, high-concurrency public voting and community portal for the national leadership and beauty pageant.",
            technologies: "React, TypeScript, Tailwind CSS, Supabase (Auth + Database)",
            github: "https://github.com/Freecodextra/global-teen-nigeria",
            link: "https://theglobalteennigeria.com.ng",
            category: "Full-Stack",
            role: "Full-Stack Engineer",
            metrics: "50k+ Secure Votes Handled | Real-time Leaderboards",
            challenge: "Voting events attract thousands of concurrent hits during live broadcasts. The platform needed absolute voting integrity, duplicate prevention, and real-time live scoreboard displays.",
            solution: "Leveraged Supabase's database triggers and serverless function layers to validate each vote. Built a reactive React client that subscribed to Supabase Realtime changes to update contestant rank scoreboards instantly.",
            results: "Successfully processed over 50,000 secure votes without a single second of downtime, providing a transparent and exciting live voting experience."
        },
        {
            title: "Ultimate Concept",
            description: "A premium digital agency landing page showcasing branding, graphic design, UI/UX prototyping, and training packages.",
            technologies: "React, TypeScript, Tailwind CSS, Framer Motion",
            github: "https://github.com/Freecodextra/digital-agencies-wesite",
            link: "https://iultimateconcept.space/",
            category: "Frontend",
            role: "Frontend Designer & Developer",
            metrics: "22% Jump in Service Inquiries | Sleek Dark Mode Interface",
            challenge: "A creative agency needs to stand out immediately. The landing page required immersive dark aesthetics, premium layouts, and fluid transitions that demonstrated design capabilities.",
            solution: "Designed a premium dark theme utilizing custom HSL color palettes and soft glowing borders. Created interactive service cards and high-end animations using Framer Motion.",
            results: "Wow-factor loading animations helped secure new branding clients, resulting in a 22% increase in service inquiries through the embedded contact form."
        },
        {
            title: "Lubal Logistics",
            description: "An elegant corporate landing and service calculator page for a fast-growing delivery and logistics company.",
            technologies: "React, TypeScript, Tailwind CSS, Framer Motion",
            github: "https://github.com/Freecodextra/luballogistics",
            link: "https://luballogistics.netlify.app/",
            category: "Frontend",
            role: "Lead Developer",
            metrics: "Interactive Rate Calculator | 25% Increase in Service Inquiries",
            challenge: "Delivery clients want to know pricing instantly. The logistics provider needed a responsive portal that allowed customers to calculate delivery estimates and book courier jobs.",
            solution: "Created an interactive, responsive rate calculator in React. Used Tailwind CSS and Framer Motion to build an optimized mobile layout for field couriers and customers on the go.",
            results: "Delivered a clean corporate presence that boosted customer inquiries by 25% within the first month of release."
        },
        {
            title: "Herlabyte Revamp",
            description: "A modernized corporate site revamp featuring sleek transitions, customer portal overlays, and structured services portfolios.",
            technologies: "React, CSS, Firebase",
            github: "https://github.com/Freecodextra/herlabytes-revamp",
            link: "https://elaborate-druid-c49eb6.netlify.app/",
            category: "Frontend",
            role: "Frontend Developer",
            metrics: "40% faster loading | High-fidelity animations",
            challenge: "The original corporate portal was slow and outdated, failing to convert corporate traffic. The client wanted a modern, fast-loading revamp with high-fidelity transitions.",
            solution: "Refactored the codebase to React and optimized graphics assets. Used Firebase for rapid hosting deployment and built custom transition layers using pure CSS animations.",
            results: "Page speed improved by 40%, delivering a highly polished corporate image that immediately enhanced credibility."
        }
    ],

    // ============ EDUCATION ============
    education: [
        {
            school: "Ahmadu Bello University",
            degree: "Bachelor of Science in Botany (Analytical Problem Solving Focus)",
            duration: "2019 - 2024",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/ABU_logo.png" // Fallback to public domain or local path
        }
    ],

    // ============ EXPERIENCE ============
    experience: [
        {
            position: "Senior Full-Stack Engineer",
            company: "Freelance",
            duration: "Feb 2024 - PRESENT",
            image: "../freelance.png", // Replaced with general freelance/agency graphic
            descriptions: [
                "Delivered 12+ production client web apps ahead of deadlines, ensuring high customer satisfaction and repeat contracts.",
                "Collaborated with diverse international clients to design scalable databases and optimized REST APIs (Django, Laravel), improving response times by 35%.",
                "Led frontend architecture updates using React, Next.js, and Tailwind CSS, resulting in average page loading improvements of 40%.",
                "Integrated secure payment gateways, Web3 wallet protocols, and real-time database synchronizations."
            ]
        },
        {
            position: "Web Developer & Systems Analyst",
            company: "Codehub",
            duration: "July 2022 - Nov 2023 (16 Months)",
            image: "../codehub.png",
            descriptions: [
                "Boosted user engagement by 30% by developing responsive UI components and implementing user experience enhancements.",
                "Collaborated in design sprints to build multi-role school database management systems and e-commerce stores.",
                "Refactored legacy PHP codebases into modernized React + API-driven structures, boosting developer pipeline efficiency."
            ]
        }
    ],

    // ============ CERTIFICATES ============
    certificates: [
        {
            title: "JavaScript Algorithms and Data Structures",
            description: "Provided by freeCodeCamp",
            icon: "freecodecamp",
            link: "https://www.freecodecamp.org/certification/fcc914c0bd3-d0bc-4d98-8728-9c9998da6142/javascript-algorithms-and-data-structures",
        },
        {
            title: "Backend Development with PHP",
            description: "Provided by SoloLearn",
            icon: "sololearn",
            link: "https://api2.sololearn.com/v2/certificates/CT-WN7EAYPV/image/png?t=0",
        },
        {
            title: "Front End Development with React",
            description: "Provided by SoloLearn",
            icon: "sololearn",
            link: "https://api2.sololearn.com/v2/certificates/CT-VKI0XWWT/image/png?t=0"
        }
    ],

    // ============ CONTACT ============
    contact: {
        title: "Let's Build Something Exceptional Together",
        description: "Whether you're a recruiter seeking a high-performing remote engineer, a startup founder ready to launch a fast-scaling MVP, or a client looking to optimize existing digital infrastructures—I am here to help. Reach out via email, social networks, or use the interactive lead form below, and let's align on your business goals. I respond within 24 hours.",
    },

    // ============ FOOTER ============
    footer: "© 2026 Joseph Odunayo Babatunde. All Rights Reserved."
}

export default info;