// Utility Functions
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    
    if (type === 'success') {
        toast.style.background = 'linear-gradient(135deg, hsl(199, 89%, 48%), hsl(271, 91%, 65%))';
    } else {
        toast.style.background = 'hsl(0, 84%, 60%)';
    }
    
    const bsToast = new bootstrap.Toast(toast);
    bsToast.show();
}

// Formulário de contato
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('contactEmail').value;
        const message = document.getElementById('contactMessage').value;
        
        if (!email || !message) {
            showToast('Preencha todos os campos', 'error');
            return;
        }
        
        showToast('Mensagem enviada com sucesso!');
        contactForm.reset();
    });
}

// Formulário login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        if (!email || !password) {
            showToast('Preencha todos os campos', 'error');
            return;
        }
        
        // Simula login
        localStorage.setItem('kuma-logged-in', 'true');
        localStorage.setItem('kuma-user-email', email);
        
        showToast('Login realizado com sucesso!');
        
        // Fecha modal e redireciona
        const modal = bootstrap.Modal.getInstance(document.getElementById('authModal'));
        modal.hide();
        
        setTimeout(() => {
            window.location.href = 'library.html';
        }, 500);
    });
}

// Signup Form
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        
        if (!name || !email || !password) {
            showToast('Preencha todos os campos', 'error');
            return;
        }
        
        if (password.length < 6) {
            showToast('A senha deve ter no mínimo 6 caracteres', 'error');
            return;
        }
        
        // Simula signup
        localStorage.setItem('kuma-logged-in', 'true');
        localStorage.setItem('kuma-user-email', email);
        localStorage.setItem('kuma-user-name', name);
        
        showToast('Conta criada com sucesso!');
        
        // Fecha modal e redireciona
        const modal = bootstrap.Modal.getInstance(document.getElementById('authModal'));
        modal.hide();
        
        setTimeout(() => {
            window.location.href = 'library.html';
        }, 500);
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.header-nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(14, 17, 23, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(14, 165, 233, 0.1)';
    } else {
        navbar.style.background = 'rgba(14, 17, 23, 0.95)';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});
