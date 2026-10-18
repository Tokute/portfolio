// Search functionality with suggestions dropdown and toggle states
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const searchBar = document.getElementById('search-bar');
    const searchCircle = document.getElementById('search-circle');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const suggestionsContainer = document.getElementById('search-suggestions');

    function hideSuggestions() {
        suggestionsContainer.style.display = 'none';
    }

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

    // Toggle search bar state when circle is clicked
    searchCircle.addEventListener('click', function() {
        if (searchBar.getAttribute('data-state') === 'collapsed') {
            searchBar.setAttribute('data-state', 'expanded');
            // Focus the input when expanding
            searchInput.focus();
        } else {
            searchBar.setAttribute('data-state', 'collapsed');
            // Clear input when collapsing
            searchInput.value = '';
            hideSuggestions();
        }
    });

    // Perform search and jump to element
    function performSearch() {
        const query = searchInput.value.trim();

        if (!query) {
            hideSuggestions();
            return;
        }

        hideSuggestions();

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
            searchInput.value = '';
        }
    }

    function renderSuggestions(matches) {
        suggestionsContainer.replaceChildren(...matches.map(item => {
            const suggestion = document.createElement('div');
            suggestion.classList.add('suggestion-item');
            suggestion.dataset.id = item.id;
            suggestion.textContent = item.title;
            return suggestion;
        }));
        suggestionsContainer.style.display = 'block';
    }

    // Show suggestions as user types
    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase().trim();

        if (query.length === 0) {
            hideSuggestions();
            return;
        }

        // Filter items that match the ID or title
        const matches = searchableItems.filter(item =>
            item.id.toLowerCase().includes(query) ||
            item.title.toLowerCase().includes(query)
        );

        if (matches.length > 0) {
            renderSuggestions(matches);
        } else {
            hideSuggestions();
        }
    });

    // Delegate clicks so each rendered suggestion does not need its own listener
    suggestionsContainer.addEventListener('click', function(event) {
        if (!(event.target instanceof Element)) {
            return;
        }

        const suggestion = event.target.closest('.suggestion-item');
        if (!suggestion || !suggestionsContainer.contains(suggestion)) {
            return;
        }

        searchInput.value = suggestion.dataset.id;
        performSearch();
    });

    // Button click search handler
    searchButton.addEventListener('click', performSearch);

    // Enter key pressed in input field
    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            performSearch();
        }
    });

    // Hide dropdown if user clicks anywhere else on the page
    document.addEventListener('click', function(event) {
        if (!searchBar.contains(event.target)) {
            hideSuggestions();
        }
    });
});