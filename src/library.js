// Vê se o usuário tá logado
const isLoggedIn = localStorage.getItem('kuma-logged-in');
if (!isLoggedIn) {
    window.location.href = 'index.html';
}

// Functions
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

// Games Data
const games = [
    {
        id: 1,
        title: "Cyberpunk 2077",
        image: "images/Cyberpunk_2077_capa.png",
        rating: 4.8,
        genre: "RPG/Ação",
        players: "12.5K online"
    },
    {
        id: 2,
        title: "God of War Ragnarok",
        image: "images/God_of_War_Ragnarök_capa.jpg",
        rating: 4.9,
        genre: "Aventura",
        players: "8.3K online"
    },
    {
        id: 3,
        title: "Spider-Man 2",
        image: "images/Spider-Man_2_capa.jpg",
        rating: 4.7,
        genre: "Ação/Aventura",
        players: "15.2K online"
    },
    {
        id: 4,
        title: "Horizon Forbidden West",
        image: "images/Horizon.png",
        rating: 4.8,
        genre: "RPG/Aventura",
        players: "9.8K online"
    },
    {
        id: 5,
        title: "Dark Souls III",
        image: "images/Dark_Souls_3_capa.png",
        rating: 4.9,
        genre: "RPG/Souls-like",
        players: "11.4K online"
    },
    {
        id: 6,
        title: "Red Dead Redemption 2",
        image: "images/Red_Dead_2.png",
        rating: 4.8,
        genre: "Ação/Aventura",
        players: "14.7K online"
    }
];

// Carrega Games
function loadGames() {
    const gamesContainer = document.getElementById('gamesContainer');
    
    games.forEach((game, index) => {
        const gameCard = document.createElement('div');
        gameCard.className = 'col-md-6 col-lg-4';
        gameCard.style.animationDelay = `${index * 0.1}s`;
        
        gameCard.innerHTML = `
            <div class="game-card">
                <div class="game-image-container">
                    <img src="${game.image}" alt="${game.title}" class="game-image">
                    <div class="game-overlay">
                        <button class="btn btn-primary btn-lg" onclick="playGame('${game.title}')">
                            <svg class="me-2" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <polygon points="5 3 19 12 5 21 5 3"/>
                            </svg>
                            JOGAR AGORA
                        </button>
                    </div>
                </div>
                <div class="game-content">
                    <h3 class="game-title">${game.title}</h3>
                    <div class="game-rating mb-3">
                        <svg class="rating-star" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                        </svg>
                        <span class="fw-bold">${game.rating}</span>
                        <span class="game-genre ms-2">${game.genre}</span>
                    </div>
                    <p class="game-players mb-0">${game.players}</p>
                </div>
            </div>
        `;
        
        gamesContainer.appendChild(gameCard);
    });
}

// Play Games
function playGame(gameTitle) {
    showToast(`Iniciando ${gameTitle}...`);
    setTimeout(() => {
        showToast('Conectando aos servidores em nuvem', 'success');
    }, 1500);
}

// Logout
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('kuma-logged-in');
        localStorage.removeItem('kuma-user-email');
        localStorage.removeItem('kuma-user-name');
        
        showToast('Logout realizado com sucesso!');
        
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 500);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadGames();
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
