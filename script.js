// script.js

// Function to adjust the behavior on mobile/tablet viewports
function adjustProjectBehavior() {
    const projectContainers = document.querySelectorAll('.project-container');
    const isMobileOrTablet = window.matchMedia("(max-width: 768px)").matches;

    projectContainers.forEach(container => {
        if (isMobileOrTablet) {
            container.onclick = function() {
                window.open(this.href, '_blank');
                return false; // Prevent default anchor behavior
            };
        } else {
            container.onclick = null;
        }
    });
}

// Run the function on load and on resize
window.addEventListener('load', adjustProjectBehavior);
window.addEventListener('resize', adjustProjectBehavior);
