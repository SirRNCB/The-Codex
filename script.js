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