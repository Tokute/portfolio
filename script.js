// Search functionality with suggestions dropdown and toggle states
// Set up search controls and their event handlers after the page markup is ready.
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const searchBar = document.getElementById('search-bar');
    if (!searchBar) {
        return;
    }

    const searchCircle = document.getElementById('search-circle');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const suggestionsContainer = document.getElementById('search-suggestions');

    // Hide the suggestions list when the query is empty or search is complete.
    function hideSuggestions() {
        suggestionsContainer.style.display = 'none';
    }

    // Comprehensive list of searchable sections across all pages
    const searchableItems = [
        // Index.html sections
        { id: 'hero', title: 'Hero Section', page: 'index.html' },
        { id: 'mobile-index-content', title: 'Welcome to My Portfolio (Mobile)', page: 'index.html' },
        { id: 'intro', title: 'Welcome to My Portfolio', page: 'index.html' },
        { id: 'featured-projects', title: 'Featured Projects (Home)', page: 'index.html' },
        { id: 'mobile-projects', title: 'Projects (Mobile)', page: 'index.html' },
        { id: 'socials', title: 'Connect With Me', page: 'index.html' },
        { id: 'site-footer', title: 'Footer', page: 'index.html' },

        // About.html sections
        { id: 'about-mobile-content', title: 'About Me (Mobile)', page: 'about.html' },
        { id: 'educational-background-mobile', title: 'Education (Mobile)', page: 'about.html' },
        { id: 'about-skills-mobile', title: 'Skills & Technologies (Mobile)', page: 'about.html' },
        { id: 'certifications-mobile', title: 'Certifications (Mobile)', page: 'about.html' },
        { id: 'technical-interests-mobile', title: 'Technical Interests (Mobile)', page: 'about.html' },
        { id: 'development-philosophy-mobile', title: 'Development Philosophy (Mobile)', page: 'about.html' },
        { id: 'development-journey-mobile', title: 'Development Journey (Mobile)', page: 'about.html' },
        { id: 'current-learning-interests-mobile', title: 'Current Learning Interests (Mobile)', page: 'about.html' },
        { id: 'about-content', title: 'Brief Introduction', page: 'about.html' },
        { id: 'educational-background', title: 'Educational Background', page: 'about.html' },
        { id: 'about-skills', title: 'Skills & Technologies', page: 'about.html' },
        { id: 'certifications', title: 'Certifications', page: 'about.html' },
        { id: 'technical-interests', title: 'Technical Interests', page: 'about.html' },
        { id: 'development-philosophy', title: 'Development Philosophy', page: 'about.html' },
        { id: 'development-journey', title: 'Development Journey', page: 'about.html' },
        { id: 'current-learning-interests', title: 'Current Learning Interests', page: 'about.html' },

        // Projects.html sections
        { id: 'featured-project-mobile', title: 'Featured Project (Mobile)', page: 'projects.html' },
        { id: 'featured-project', title: 'Featured Project (Projects)', page: 'projects.html' },
        { id: 'mobile-project-list', title: 'Projects List (Mobile)', page: 'projects.html' },

        // Contact.html sections
        { id: 'contact-mobile', title: 'Contact (Mobile)', page: 'contact.html' },
        { id: 'contact', title: 'Contact', page: 'contact.html' }
    ];

    // Toggle search bar state when circle is clicked
    // Expand and focus the search input, or collapse the bar and clear its state.
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
    // Scroll to a matching section on this page or navigate to its page first.
    function performSearch() {
        const query = searchInput.value.trim();

        if (!query) {
            hideSuggestions();
            return;
        }

        hideSuggestions();

        const targetElement = document.getElementById(query);

        if (targetElement) {
            // Smoothly scroll the element into the center of the viewport
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });

            // Add a temporary highlight effect so the user sees it
            targetElement.classList.add('highlight');
            // Schedule removal of the highlight after two seconds.
            setTimeout(() => {
                targetElement.classList.remove('highlight');
            }, 2000);
        } else {
            // Match the query to its registered page and section.
            const matchingItem = searchableItems.find(item => item.id === query);
            if (matchingItem) {
                // Load the page containing the section; the URL fragment scrolls to its ID.
                window.location.href = `${matchingItem.page}#${encodeURIComponent(matchingItem.id)}`;
            } else {
                alert('No matching section found. Try searching for: hero, intro, featured-projects, about-content, etc.');
                searchInput.value = '';
            }
        }
    }

    // Replace the suggestion list with the supplied matching search results.
    function renderSuggestions(matches) {
        // Map each result to a clickable element before replacing the dropdown contents.
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
    // Filter searchable sections by ID or title and refresh the dropdown.
    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase().trim();

        if (query.length === 0) {
            hideSuggestions();
            return;
        }

        // Filter items that match the ID or title
        // Keep entries whose IDs or titles contain the typed query.
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
    // Use the selected suggestion's stored ID to perform the corresponding search.
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
    // Submit the current query when Enter is pressed instead of inserting a newline.
    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            performSearch();
        }
    });

    // Hide dropdown if user clicks anywhere else on the page
    // Close suggestions on outside clicks while leaving clicks inside the search alone.
    document.addEventListener('click', function(event) {
        if (!searchBar.contains(event.target)) {
            hideSuggestions();
        }
    });
});