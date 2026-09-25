document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.metric-card, .panel');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(15px)';
        setTimeout(() => {
            card.style.transition = 'all 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 120 * index);
    });

    document.querySelectorAll('.progress-bar span').forEach((bar, index) => {
        setTimeout(() => {
            bar.style.transition = 'width 0.8s ease';
            bar.style.width = bar.style.width || '0%';
        }, 300 + index * 120);
    });
});
