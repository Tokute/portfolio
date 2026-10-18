// Search functionality with suggestions dropdown
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const suggestionsContainer = document.getElementById('search-suggestions');

    // Comprehensive list of searchable sections across all pages
    const searchableItems = [
        // Index.html sections
        { id: 'hero', title: 'Hero Section' },
        { id: 'mobile-index-content', title: 'Welcome to My Portfolio (Mobile)' },
        { id: 'intro', title: 'Welcome to My Portfolio' },
        { id: 'featured-projects', title: 'Featured Projects' },
        { id: 'mobile-projects', title: 'Projects (Mobile)' },
        { id: 'socials', title: 'Connect With Me' },
        { id: 'site-footer', title: 'Footer' },

        // About.html sections
        { id: 'about-mobile-content', title: 'About Me (Mobile)' },
        { id: 'educational-background-mobile', title: 'Education (Mobile)' },
        { id: 'about-skills-mobile', title: 'Skills & Technologies (Mobile)' },
        { id: 'certifications-mobile', title: 'Certifications (Mobile)' },
        { id: 'technical-interests-mobile', title: 'Technical Interests (Mobile)' },
        { id: 'development-philosophy-mobile', title: 'Development Philosophy (Mobile)' },
        { id: 'development-journey-mobile', title: 'Development Journey (Mobile)' },
        { id: 'current-learning-interests-mobile', title: 'Current Learning Interests (Mobile)' },
        { id: 'about-content', title: 'Brief Introduction' },
        { id: 'educational-background', title: 'Educational Background' },
        { id: 'about-skills', title: 'Skills & Technologies' },
        { id: 'certifications', title: 'Certifications' },
        { id: 'technical-interests', title: 'Technical Interests' },
        { id: 'development-philosophy', title: 'Development Philosophy' },
        { id: 'development-journey', title: 'Development Journey' },
        { id: 'current-learning-interests', title: 'Current Learning Interests' },

        // Projects.html sections
        { id: 'featured-project-mobile', title: 'Featured Project (Mobile)' },
        { id: 'featured-project', title: 'Featured Project' },
        { id: 'mobile-project-list', title: 'Projects List (Mobile)' }
    ];

    // Perform search and jump to element
    function performSearch() {
        const query = searchInput.value.trim();

        if (!query) {
            // Clear suggestions if input is empty
            suggestionsContainer.style.display = 'none';
            return;
        }

        // Hide suggestions when performing actual search
        suggestionsContainer.style.display = 'none';

        // Find the element on the page matching the typed ID
        const targetElement = document.getElementById(query);

        if (targetElement) {
            // Smoothly scroll the element into the center of the viewport
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });

            // Add a temporary highlight effect so the user sees it
            targetElement.classList.add('highlight');
            setTimeout(() => {
                targetElement.classList.remove('highlight');
            }, 2000);
        } else {
            alert('No matching section found. Try searching for: hero, intro, featured-projects, about-content, etc.');
            document.getElementById('search-input').value = '';
        }
    }

    // Show suggestions as user types
    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase().trim();

        if (query.length === 0) {
            suggestionsContainer.style.display = 'none';
            return;
        }

        // Filter items that match the ID or title
        const matches = searchableItems.filter(item =>
            item.id.toLowerCase().includes(query) ||
            item.title.toLowerCase().includes(query)
        );

        // Render suggestions
        if (matches.length > 0) {
            suggestionsContainer.innerHTML = '';
            matches.forEach(item => {
                const div = document.createElement('div');
                div.classList.add('suggestion-item');
                div.textContent = item.title;

                // When a suggestion is clicked, fill input and jump to it
                div.addEventListener('click', function() {
                    searchInput.value = item.id;
                    suggestionsContainer.style.display = 'none';
                    performSearch();
                });

                suggestionsContainer.appendChild(div);
            });
            suggestionsContainer.style.display = 'block';
        } else {
            suggestionsContainer.style.display = 'none';
        }
    });

    // Button click search handler
    searchButton.addEventListener('click', performSearch);

    // Enter key pressed in input field
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch();
        }
    });

    // Hide dropdown if user clicks anywhere else on the page
    document.addEventListener('click', function(event) {
        const searchBar = document.getElementById('search-bar');
        if (!searchBar.contains(event.target)) {
            suggestionsContainer.style.display = 'none';
        }
    });
});