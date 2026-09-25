function showMessage() {
    alert("Welcome to Smart Impact Analyzer! Start by uploading your requirement documents to begin the analysis.");
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href');
            if (targetId && targetId !== '#') {
                const target = document.querySelector(targetId);
                if (target) {
                    event.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    const revealItems = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealItems.forEach((item) => revealObserver.observe(item));

    const counters = document.querySelectorAll('[data-count]');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const counter = entry.target;
            const target = Number(counter.dataset.count);
            const suffix = counter.dataset.suffix || '';
            const duration = 1400;
            let start = null;

            const step = (timestamp) => {
                if (!start) start = timestamp;
                const progress = Math.min((timestamp - start) / duration, 1);
                const current = Math.floor(progress * target);
                counter.textContent = `${current}${suffix}`;

                if (progress < 1) {
                    requestAnimationFrame(step);
                } else {
                    counter.textContent = `${target}${suffix}`;
                }
            };

            requestAnimationFrame(step);
            counterObserver.unobserve(counter);
        });
    }, { threshold: 0.6 });

    counters.forEach((counter) => counterObserver.observe(counter));
});