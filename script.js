/* --- GLITCH MODE --- */

document.addEventListener('keydown', function(event) {
    
    // Trigger only on 'v' or 'V'
    if (event.key.toLowerCase() === 'v') {
        
        // Check if glitch is already active
        if (document.body.classList.contains('void-glitch')) return;

        // Activate the chaos
        document.body.classList.add('void-glitch');
        
        // Change the title
        const originalTitle = document.title;
        document.title = "SYSTEM FAILURE";

        // Select the dashboard H1 title
        const dashboardTitle = document.querySelector('.main-content h1');
        const originalH1 = dashboardTitle.innerText; // Save "ARCHIVE DASHBOARD"

        // Change the H1 title text and colour
        dashboardTitle.innerText = "CRITICAL FAILURE OF TH-...";
        dashboardTitle.style.color = "#DC143C"; // Turn it red

        // The "Reset" timer (1000ms = 1 second)
        setTimeout(() => {
            document.body.classList.remove('void-glitch');
            document.title = originalTitle; // Restore title
            dashboardTitle.innerText = originalH1; // Restore original text of H1 title
            dashboardTitle.style.color = ""; // Restore original colour of H1 title
        }, 1000); 
    }
});

/* --- DRAWER NAVIGATION SYSTEM --- */

function toggleDrawer(mode) {
    const drawer = document.getElementById('drawer-panel');
    const contentExplore = document.getElementById('content-explore');
    const contentProjects = document.getElementById('content-projects');
    
    const isOpen = drawer.classList.contains('open');
    
    // Check which tab is currently visible (Active if NOT display: none)
    const isExploreActive = contentExplore.style.display !== 'none';
    const isProjectsActive = contentProjects.style.display !== 'none';

    // CLOSE LOGIC: If clicking the tab that is ALREADY open, close the drawer.
    if (isOpen) {
        if (mode === 'explore' && isExploreActive) {
            drawer.classList.remove('open');
            return; // Stop here
        }
        if (mode === 'projects' && isProjectsActive) {
            drawer.classList.remove('open');
            return; // Stop here
        }
    }

    // SWITCH CONTENT: Show the correct list
    if (mode === 'explore') {
        contentExplore.style.display = 'block';
        contentProjects.style.display = 'none';
    } else { // mode === 'projects'
        contentExplore.style.display = 'none';
        contentProjects.style.display = 'block';
    }

    drawer.classList.add('open');
}

// Close drawer when clicking outside
document.addEventListener('click', function(event) {
    const drawer = document.getElementById('drawer-panel');
    const sidebar = document.querySelector('.sidebar-nav');
    
    // If click is NOT on drawer AND NOT on sidebar buttons
    if (!drawer.contains(event.target) && !sidebar.contains(event.target)) {
        drawer.classList.remove('open');
    }
});