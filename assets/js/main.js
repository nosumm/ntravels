// Function to render next up countries
function renderNextUpCountries() {
    const grid = document.querySelector('.next-up-grid');
    grid.innerHTML = '';
    
    nextUpCountries.forEach(country => {
        const countryCard = document.createElement('div');
        countryCard.className = 'country-card fade-in';
        countryCard.style.border = '2px dashed var(--sage-green)';
        countryCard.innerHTML = `
            <div class="country-image" style="background: linear-gradient(45deg, var(--sage-green), var(--light-sage)); opacity: 0.8;">
                ${country.flag}
            </div>
            <div class="country-content">
                <div class="country-name">${country.name}</div>
                <div class="country-description">${country.description}</div>
                <div class="country-date" style="color: var(--sage-green);">Planned: ${country.planned}</div>
            </div>
        `;
        grid.appendChild(countryCard);
    });
}

// Function to render countries
function renderCountries() {
    const grid = document.getElementById('countriesGrid');
    grid.innerHTML = '';
    
    visitedCountries.forEach(country => {
        const countryCard = document.createElement('div');
        countryCard.className = 'country-card fade-in';
        countryCard.innerHTML = `
            <div class="country-image">
                ${country.flag}
            </div>
            <div class="country-content">
                <div class="country-name">${country.name}</div>
                <div class="country-description">${country.description}</div>
                <div class="country-date">${country.date}</div>
            </div>
        `;
        grid.appendChild(countryCard);
    });
}

// Function to update statistics
function updateStats() {
    const totalCountries = visitedCountries.length;
    const continents = [...new Set(visitedCountries.map(c => c.continent))].length;
    
    document.getElementById('visitedCount').textContent = totalCountries;
    document.getElementById('countriesVisited').textContent = totalCountries;
    document.getElementById('continents').textContent = continents;
    
    // Update progress bar
    const progressFill = document.getElementById('progressFill');
    const percentage = (totalCountries / 100) * 100;
    progressFill.style.width = percentage + '%';
}

// Add country functionality (placeholder)
document.getElementById('addCountryBtn').addEventListener('click', function() {
    const countryName = prompt('Which country did you visit?');
    if (countryName) {
        const newCountry = {
            name: countryName,
            flag: '🌍', // Default flag
            description: 'Amazing experience!',
            date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
            continent: 'Unknown' // You can enhance this with a continent selector
        };
        
        visitedCountries.unshift(newCountry);
        renderCountries();
        updateStats();
    }
});

// Smooth scrolling for navigation links
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
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'var(--white)';
        navbar.style.backdropFilter = 'none';
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderCountries();
    renderNextUpCountries();
    updateStats();
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure elements are rendered
    setTimeout(() => {
        document.querySelectorAll('.country-card, .stat-item').forEach(el => {
            observer.observe(el);
        });
    }, 100);
});
