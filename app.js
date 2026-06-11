document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.15, 
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = document.querySelectorAll('.header-right-part a');

    const scrollspyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                navLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href === `#${id}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, {
        root: null,
        threshold: 0.3,
        rootMargin: '-80px 0px -40% 0px'
    });

    sections.forEach(section => {
        scrollspyObserver.observe(section);
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            if (href.startsWith('#') && href.length > 1) {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    navLinks.forEach(item => item.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    });

    const header = document.querySelector('header');
    const toggleHeaderScrolled = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', toggleHeaderScrolled);
    toggleHeaderScrolled();
});
