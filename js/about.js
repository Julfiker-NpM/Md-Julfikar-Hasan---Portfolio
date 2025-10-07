// About page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(44, 62, 80, 0.95)';
        } else {
            header.style.background = '#2c3e50';
        }
    });

    // About image animation
    const aboutImg = document.querySelector('.about-img');
    if (aboutImg) {
        // Intersection Observer for fade-in animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        });

        aboutImg.style.opacity = '0';
        aboutImg.style.transform = 'translateY(20px)';
        aboutImg.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        observer.observe(aboutImg);
    }

    // Animate about text
    const aboutText = document.querySelector('.about-text');
    if (aboutText) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }
            });
        });

        aboutText.style.opacity = '0';
        aboutText.style.transform = 'translateX(20px)';
        aboutText.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        observer.observe(aboutText);
    }

    console.log('About page loaded successfully!');
});
