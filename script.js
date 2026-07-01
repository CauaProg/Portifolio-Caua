document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================================
    // Tradução PT/EN
    // ==========================================================================
    const translations = {
        pt: {
            pageTitle: "Cauã Moraes de Abreu | Portfólio Acadêmico",
            metaDescription: "Portfólio acadêmico de Cauã Moraes de Abreu, estudante do 4º período de Sistemas de Informação.",
            navAbout: "Sobre",
            navProjects: "Projetos",
            navSkills: "Habilidades",
            navExperience: "Experiência",
            navEducation: "Formação",
            heroGreeting: "Olá, meu nome é",
            heroLead: "Estudante de Sistemas de Informação focado em arquitetura de sistemas, desenvolvimento backend e banco de dados. Atualmente no 4º período, buscando oportunidades de estágio em Tecnologia.",
            aboutTitle: "Sobre Mim",
            aboutP1: "Estudante de <strong>Sistemas de Informação</strong> apaixonado por desenvolvimento de software, arquitetura de sistemas e resolução de problemas práticos através de código limpo e estruturado. Com sólida base teórica combinada a conhecimentos práticos em desenvolvimento web e de jogos, atuei como monitor acadêmico, auxiliando alunos no aprendizado de algoritmos.",
            aboutP2: "Busco aplicar meus conhecimentos técnicos em um ambiente profissional corporativo por meio de um estágio em Tecnologia, no qual possa contribuir para a criação de soluções eficientes, colaborar com equipes dinâmicas e continuar aprimorando minhas competências técnicas.",
            projectsTitle: "Projetos em Destaque",
            project1Tag: "ONG GAIARB",
            project1Title: "GAIARB - Gestão de Doadores",
            project1Desc: "Sistema web desenvolvido para auxiliar a ONG GAIARB no gerenciamento de doadores e doações para apoiar mães atípicas. Permite cadastro de doadores, consulta ágil de histórico e integração da API Mercado Pago para captação de recursos.",
            projectMemoryTag: "Unity / C#",
            projectMemoryTitle: "Jogo de Avaliação de Memória",
            projectMemoryDesc: "Jogo point-and-click desenvolvido em Unity e C# no qual o usuário organiza uma mala. O projeto foi criado para auxiliar na medição da capacidade de memória de idosos com Alzheimer.",
            project2Tag: "Banco de Dados",
            project2Title: "Loja Virtual - Controle de Estoque",
            project2Desc: "Sistema desenvolvido para consolidar conhecimentos de banco de dados e backend em Python. Permite o controle completo de estoque de produtos (Adicionar, Listar, Atualizar e Deletar) integrado via terminal a um banco de dados MySQL.",
            sourceCode: "Código Fonte",
            viewSite: "Visualizar Site",
            skillsTitle: "Habilidades Técnicas",
            skillCatLanguages: "Linguagens",
            skillCatWebDb: "Web & Banco de Dados",
            skillCatTools: "Ferramentas & Idiomas",
            apiIntegrations: "Integrações de API",
            englishSkill: "Inglês",
            levelIntermediate: "Intermediário",
            levelAdvanced: "Avançado",
            levelBeginner: "Iniciante",
            experienceTitle: "Experiência Profissional / Acadêmica",
            exp1Title: "Desenvolvedor de Jogos",
            exp1Period: "Maio de 2025 - Atualmente",
            exp1Desc: "Atuação no UnityLab, projeto da empresa júnior Ânimo da Unilasalle, com desenvolvimento de lógicas de jogabilidade robustas, algoritmos de colisão em C# e interface de usuário. Colaboração em equipes acadêmicas ágeis com foco em otimização de performance e controle de versão.",
            exp2Title: "Monitor de Programação I",
            exp2Period: "Março de 2026 - Julho de 2026",
            exp2Desc: "Responsável pelo suporte pedagógico e laboratorial a graduandos em disciplinas de algoritmos e programação de computadores, auxiliando na compreensão de lógica de programação e depuração de código.",
            educationTitle: "Formação Acadêmica",
            edu1Title: "Bacharelado em Sistemas de Informação",
            statusInProgress: "Em andamento",
            edu2Title: "Técnico em Eletromecânica",
            statusCompleted: "Concluído",
            footerMain: "&copy; 2026 Cauã Moraes de Abreu. Desenvolvido com HTML5 e CSS3.",
            footerCredits: "Portfólio de Estudante Acadêmico - Simples e Direto."
        },
        en: {
            pageTitle: "Cauã Moraes de Abreu | Academic Portfolio",
            metaDescription: "Academic portfolio of Cauã Moraes de Abreu, a 4th-semester Information Systems undergraduate student.",
            navAbout: "About",
            navProjects: "Projects",
            navSkills: "Skills",
            navExperience: "Experience",
            navEducation: "Education",
            heroGreeting: "Hi, my name is",
            heroLead: "Information Systems undergraduate focused on system architecture, backend development, and databases. Currently in the 4th semester and seeking internship opportunities in Technology.",
            aboutTitle: "About Me",
            aboutP1: "I am an <strong>Information Systems student</strong> passionate about software development, system architecture, and solving practical problems through clean and structured code. With a solid theoretical foundation combined with hands-on experience in web and game development, I have also worked as an academic teaching assistant, helping students learn algorithms.",
            aboutP2: "I am looking to apply my technical knowledge in a professional technology environment through an internship where I can contribute to efficient solutions, collaborate with dynamic teams, and continue improving my technical skills.",
            projectsTitle: "Featured Projects",
            project1Tag: "GAIARB NGO",
            project1Title: "GAIARB - Donor Management",
            project1Desc: "Web system developed to help the GAIARB NGO manage donors and donations supporting mothers of children with disabilities. It allows donor registration, quick donation history lookup, and Mercado Pago API integration for fundraising.",
            projectMemoryTag: "Unity / C#",
            projectMemoryTitle: "Memory Assessment Game",
            projectMemoryDesc: "Point-and-click game developed in Unity and C# where the user organizes a suitcase. The project was created to help measure memory capacity in older adults with Alzheimer's disease.",
            project2Tag: "Database",
            project2Title: "Virtual Store - Inventory Management",
            project2Desc: "System developed to strengthen database and Python backend skills. It supports complete product inventory CRUD operations through a terminal interface connected to a MySQL database.",
            sourceCode: "Source Code",
            viewSite: "View Website",
            skillsTitle: "Technical Skills",
            skillCatLanguages: "Languages",
            skillCatWebDb: "Web & Databases",
            skillCatTools: "Tools & Languages",
            apiIntegrations: "API Integrations",
            englishSkill: "English",
            levelIntermediate: "Intermediate",
            levelAdvanced: "Advanced",
            levelBeginner: "Beginner",
            experienceTitle: "Professional / Academic Experience",
            exp1Title: "Game Developer",
            exp1Period: "May 2025 - Present",
            exp1Desc: "Worked in UnityLab, a project from Ânimo, Unilasalle's junior company, developing robust gameplay logic, C# collision algorithms, and user interfaces. Collaborated in agile academic teams focused on performance optimization and version control.",
            exp2Title: "Programming I Teaching Assistant",
            exp2Period: "March 2026 - July 2026",
            exp2Desc: "Provided pedagogical and lab support to undergraduate students in algorithms and computer programming courses, helping them understand programming logic and code debugging.",
            educationTitle: "Education",
            edu1Title: "Bachelor's Degree in Information Systems",
            statusInProgress: "In Progress",
            edu2Title: "Technical Degree in Electromechanics",
            statusCompleted: "Completed",
            footerMain: "&copy; 2026 Cauã Moraes de Abreu. Built with HTML5 and CSS3.",
            footerCredits: "Academic Student Portfolio - Simple and Direct."
        }
    };

    const typewriterWords = {
        pt: [
            "Desenvolvedor de Software",
            "Graduando em Sistemas de Informação",
            "Entusiasta de Banco de Dados"
        ],
        en: [
            "Software Developer",
            "Information Systems Undergraduate",
            "Database Enthusiast"
        ]
    };

    let currentLanguage = localStorage.getItem("portfolioLanguage") || "pt";
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typewriterTimeout;

    const languageToggle = document.getElementById("languageToggle");
    const typewriterElement = document.getElementById("typewriter");

    function applyLanguage(language) {
        currentLanguage = language;
        localStorage.setItem("portfolioLanguage", language);

        document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
        document.title = translations[language].pageTitle;

        document.querySelectorAll("[data-i18n]").forEach(element => {
            const key = element.getAttribute("data-i18n");
            if (translations[language][key]) {
                element.textContent = translations[language][key];
            }
        });

        document.querySelectorAll("[data-i18n-html]").forEach(element => {
            const key = element.getAttribute("data-i18n-html");
            if (translations[language][key]) {
                element.innerHTML = translations[language][key];
            }
        });

        document.querySelectorAll("[data-i18n-content]").forEach(element => {
            const key = element.getAttribute("data-i18n-content");
            if (translations[language][key]) {
                element.setAttribute("content", translations[language][key]);
            }
        });

        if (languageToggle) {
            languageToggle.textContent = language === "pt" ? "EN" : "PT";
            languageToggle.setAttribute("aria-label", language === "pt" ? "Change language to English" : "Mudar idioma para Português");
        }

        restartTypewriter();
    }

    function type() {
        if (!typewriterElement) return;

        const words = typewriterWords[currentLanguage];
        const currentWord = words[wordIndex];

        if (isDeleting) {
            typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let delay = isDeleting ? 50 : 120;

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            delay = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            delay = 500;
        }

        typewriterTimeout = setTimeout(type, delay);
    }

    function restartTypewriter() {
        clearTimeout(typewriterTimeout);
        wordIndex = 0;
        charIndex = 0;
        isDeleting = false;

        if (typewriterElement) {
            typewriterElement.textContent = "";
            type();
        }
    }

    if (languageToggle) {
        languageToggle.addEventListener("click", () => {
            applyLanguage(currentLanguage === "pt" ? "en" : "pt");
        });
    }

    applyLanguage(currentLanguage);

    // ==========================================================================
    // Revelação de seções ao rolar a página (Scroll Reveal)
    // ==========================================================================
    const revealElements = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        const revealCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(revealCallback, {
            root: null,
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(el => observer.observe(el));
    } else {
        revealElements.forEach(el => el.classList.add('active'));
    }
});