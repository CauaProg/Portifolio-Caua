document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================================
    // Efeito máquina de escrever (Typewriter)
    // ==========================================================================
    const typewriterElement = document.getElementById('typewriter');
    const words = [
        "Desenvolvedor de Software",
        "Graduando em Ciência da Computação",
        "Entusiasta de Banco de Dados"
    ];
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 150; // Tempo de digitação padrão

    const type = () => {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            // Remove caractere
            typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            delay = 50; // Velocidade ao apagar
        } else {
            // Insere caractere
            typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            delay = 120; // Velocidade ao digitar
        }

        // Se completou a palavra
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            delay = 2000; // Tempo de pausa com a palavra completa
        } 
        // Se apagou a palavra toda
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // Próxima palavra
            delay = 500; // Tempo de pausa antes de digitar novamente
        }

        setTimeout(type, delay);
    };

    // Inicia o efeito caso o elemento exista
    if (typewriterElement) {
        type();
    }

    // ==========================================================================
    // Revelação de seções ao rolar a página (Scroll Reveal)
    // ==========================================================================
    const revealElements = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        const revealCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Para de observar após revelar
                }
            });
        };

        const observer = new IntersectionObserver(revealCallback, {
            root: null,
            threshold: 0.1, // Revela quando 10% do elemento está visível
            rootMargin: '0px 0px -40px 0px'
        });

        revealElements.forEach(el => observer.observe(el));
    } else {
        // Fallback imediato para navegadores antigos
        revealElements.forEach(el => el.classList.add('active'));
    }
});
