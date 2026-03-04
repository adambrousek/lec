// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const header = document.querySelector('.header');
    
    if (menuToggle && header) {
        menuToggle.addEventListener('click', function() {
            header.classList.toggle('menu-open');
        });
    }
});

// Form handling
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Placeholder - in production, send to server
            alert('Děkujeme! Brzy vás budeme kontaktovat.');
            form.reset();
        });
    });
});
