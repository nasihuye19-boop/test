// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255,255,255,0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'white';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nama = document.getElementById('nama').value;
        const email = document.getElementById('email').value;
        const pesan = document.getElementById('pesan').value;
        
        // Simple validation
        if (!nama || !email || !pesan) {
            showFormStatus('Harap isi semua kolom yang wajib!', 'error');
            return;
        }
        
        if (!email.includes('@') || !email.includes('.')) {
            showFormStatus('Email tidak valid!', 'error');
            return;
        }
        
        // Show loading
        showFormStatus('Mengirim pesan...', 'info');
        
        // Simulate sending (replace with actual API call)
        setTimeout(() => {
            showFormStatus('Pesan berhasil dikirim! Terima kasih, saya akan segera merespon.', 'success');
            contactForm.reset();
        }, 1500);
    });
}

function showFormStatus(message, type) {
    if (!formStatus) return;
    
    formStatus.textContent = message;
    formStatus.style.display = 'block';
    
    if (type === 'success') {
        formStatus.style.backgroundColor = '#d4edda';
        formStatus.style.color = '#155724';
        formStatus.style.border = '1px solid #c3e6cb';
        
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    } else if (type === 'error') {
        formStatus.style.backgroundColor = '#f8d7da';
        formStatus.style.color = '#721c24';
        formStatus.style.border = '1px solid #f5c6cb';
    } else {
        formStatus.style.backgroundColor = '#cce5ff';
        formStatus.style.color = '#004085';
        formStatus.style.border = '1px solid #b8daff';
    }
}

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to elements
document.querySelectorAll('.exp-card, .achievement-card, .skills-box').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Auto-update year in footer
const footerYear = document.querySelector('footer p');
if (footerYear) {
    const year = new Date().getFullYear();
    footerYear.innerHTML = footerYear.innerHTML.replace('2024', year);
}

// Download CV alert
document.querySelectorAll('a[download]').forEach(link => {
    link.addEventListener('click', (e) => {
        // Uncomment to show alert
        // alert('Terima kasih telah mendownload CV saya!');
    });
});

// Copy phone number on click
document.querySelectorAll('.contact-item .fa-phone-alt, .contact-item .fa-whatsapp').forEach(icon => {
    icon.parentElement.addEventListener('click', () => {
        const phone = icon.parentElement.querySelector('p').textContent;
        navigator.clipboard.writeText(phone.replace(/\D/g, ''));
        showFormStatus('Nomor telepon berhasil disalin!', 'success');
    });
});

// Console greeting
console.log('%c👋 Halo HRD! Terima kasih sudah melihat portofolio saya.', 'color: #2563eb; font-size: 14px; font-weight: bold');
console.log('%c📧 Silakan hubungi saya jika ada lowongan yang cocok.', 'color: #64748b; font-size: 12px');

// Prevent default for demo links
document.querySelectorAll('.btn-small, .social-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.getAttribute('href') === '#') {
            e.preventDefault();
            alert('Link ini hanya contoh. Ganti dengan link asli Anda.');
        }
    });
});