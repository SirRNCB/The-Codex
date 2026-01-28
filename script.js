document.addEventListener('keydown', function(event) {
    // Trigger only on 'v' or 'V'
    if (event.key.toLowerCase() === 'v') {
        
        // Check if glitch is already active (prevents spamming)
        if (document.body.classList.contains('void-glitch')) return;

        // Activate the Chaos
        document.body.classList.add('void-glitch');
        
        // Change the title temporarily
        const originalTitle = document.title;
        document.title = "SYSTEM FAILURE";

        // The "Reset" Timer (1000ms = 1 second)
        setTimeout(() => {
            document.body.classList.remove('void-glitch');
            document.title = originalTitle; // Restore title
        }, 1000); 
    }
});