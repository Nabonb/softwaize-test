// // Function to toggle the menu and close icon
function toggleMenu() {
    var menuIcon = document.getElementById("menu-image");
    var closeIcon = document.getElementById("close-image");
    var menuOverlay = document.getElementById("menu-overlay");

    if (menuOverlay.classList.contains("show")) {
        // Close the menu
        menuOverlay.classList.remove("show");
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
    } else {
        // Open the menu
        menuOverlay.classList.add("show");
        menuIcon.style.display = "none";
        closeIcon.style.display = "block";
    }
}

// Add event listener to the menu icon to toggle the sidebar
document.getElementById("menu-icon").addEventListener("click", toggleMenu);

// Add event listener to the close icon to close the sidebar
document.getElementById("close-icon").addEventListener("click", function() {
    var menuOverlay = document.getElementById("menu-overlay");
    var menuIcon = document.getElementById("menu-image");
    var closeIcon = document.getElementById("close-image");

    menuOverlay.classList.remove("show");
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
});

// Handle category click
function updateContent(category) {
    document.getElementById('content-area').innerHTML = '<p>This is the ' + category + ' category.</p>';
}

// Add event listeners to category links and images
document.querySelectorAll('.category-link, .category-image').forEach(function(item) {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        var category = this.closest('.category-item').getAttribute('data-category');
        updateContent(category);
    });
});
