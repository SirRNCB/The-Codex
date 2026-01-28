/* --- GLITCH MODE --- */
document.addEventListener('keydown', function(event) {
    if (event.key.toLowerCase() === 'v') {
        if (document.body.classList.contains('void-glitch')) return;
        document.body.classList.add('void-glitch');
        
        const originalTitle = document.title;
        document.title = "SYSTEM FAILURE";

        const dashboardTitle = document.querySelector('h1');
        if(dashboardTitle) {
            const originalH1 = dashboardTitle.innerText;
            dashboardTitle.innerText = "CRITICAL FAILURE OF TH-...";
            dashboardTitle.style.color = "#DC143C";

            setTimeout(() => {
                document.body.classList.remove('void-glitch');
                document.title = originalTitle;
                dashboardTitle.innerText = originalH1;
                dashboardTitle.style.color = "";
            }, 1000); 
        } else {
             setTimeout(() => {
                document.body.classList.remove('void-glitch');
                document.title = originalTitle;
            }, 1000); 
        }
    }
});

/* --- DRAWER NAVIGATION SYSTEM --- */
function toggleDrawer(mode) {
    const drawer = document.getElementById('drawer-panel');
    const contentExplore = document.getElementById('content-explore');
    const contentProjects = document.getElementById('content-projects');
    const isOpen = drawer.classList.contains('open');
    const isExploreActive = contentExplore.style.display !== 'none';
    const isProjectsActive = contentProjects.style.display !== 'none';

    if (isOpen) {
        if (mode === 'explore' && isExploreActive) {
            drawer.classList.remove('open');
            return;
        }
        if (mode === 'projects' && isProjectsActive) {
            drawer.classList.remove('open');
            return;
        }
    }

    if (mode === 'explore') {
        contentExplore.style.display = 'block';
        contentProjects.style.display = 'none';
    } else { 
        contentExplore.style.display = 'none';
        contentProjects.style.display = 'block';
    }
    drawer.classList.add('open');
}

document.addEventListener('click', function(event) {
    const drawer = document.getElementById('drawer-panel');
    const sidebar = document.querySelector('.sidebar-nav');
    if (!drawer.contains(event.target) && !sidebar.contains(event.target) && !document.getElementById('settings-modal').contains(event.target)) {
        drawer.classList.remove('open');
    }
});

/* --- SETTINGS MODAL SYSTEM --- */
function openSettings() {
    const modal = document.getElementById('settings-modal');
    modal.classList.add('active');
    
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const savedFilter = localStorage.getItem('accessFilter') || 'none';
    
    document.getElementById('theme-select').value = savedTheme;
    document.getElementById('filter-select').value = savedFilter;
}

function closeSettings() {
    document.getElementById('settings-modal').classList.remove('active');
}

window.onclick = function(event) {
    const modal = document.getElementById('settings-modal');
    if (event.target === modal) {
        closeSettings();
    }
}

function applySettings() {
    const body = document.body;
    const themeVal = document.getElementById('theme-select').value;
    const filterVal = document.getElementById('filter-select').value;

    if (themeVal === 'light') {
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
    }

    body.classList.remove('deuteranopia-mode', 'tritanopia-mode', 'protanopia-mode');
    if (filterVal !== 'none') {
        body.classList.add(filterVal + '-mode');
        localStorage.setItem('accessFilter', filterVal);
    } else {
        localStorage.setItem('accessFilter', 'none');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-mode');
    }
    const savedFilter = localStorage.getItem('accessFilter');
    if (savedFilter && savedFilter !== 'none') {
        document.body.classList.add(savedFilter + '-mode');
    }
});