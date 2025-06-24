// Problem data - this would typically be loaded from a JSON file or API
const problems = [
    {
        id: "min-cost-climbing-stairs",
        title: "Min Cost Climbing Stairs",
        description: "Dynamic programming solution with step-by-step visualization of the minimum cost path calculation.",
        difficulty: "Easy",
        tags: ["Dynamic Programming", "Array"],
        filename: "problems/min-cost-climbing-stairs.html"
    }
    // Add more problems here as they are created
];

// Load and display problems
function loadProblems() {
    const container = document.getElementById('problemsContainer');
    
    if (!container) {
        console.error('Problems container not found');
        return;
    }
    
    if (problems.length === 0) {
        container.innerHTML = `
            <div class="loading">
                No problems available yet. Check back soon!
            </div>
        `;
        return;
    }
    
    const problemsHTML = problems.map(problem => `
        <a href="${problem.filename}" class="problem-card">
            <div class="problem-number">${problem.id}</div>
            <h3>${problem.title}</h3>
            <p class="problem-description">${problem.description}</p>
            <div class="problem-tags">
                <span class="tag">${problem.difficulty}</span>
                ${problem.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </a>
    `).join('');
    
    container.innerHTML = problemsHTML;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadProblems();
    
    // Add smooth scrolling for anchor links
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
    
    // Add loading animation for problem cards
    const problemCards = document.querySelectorAll('.problem-card');
    problemCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Utility function to check if a file exists (for future use)
async function checkFileExists(url) {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        return response.ok;
    } catch {
        return false;
    }
}

// Add some interactive features
function addInteractiveFeatures() {
    // Add search functionality (future enhancement)
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search problems...';
    searchInput.className = 'search-input';
    
    // Add filter by difficulty (future enhancement)
    const filterButtons = document.createElement('div');
    filterButtons.className = 'filter-buttons';
    filterButtons.innerHTML = `
        <button class="filter-btn active" data-difficulty="all">All</button>
        <button class="filter-btn" data-difficulty="Easy">Easy</button>
        <button class="filter-btn" data-difficulty="Medium">Medium</button>
        <button class="filter-btn" data-difficulty="Hard">Hard</button>
    `;
}

// Export for potential future use
window.AlgorithmViz = {
    loadProblems,
    problems,
    checkFileExists
}; 