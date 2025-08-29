function showProject(projectId) {
    // Hide all project content
    const allProjects = document.querySelectorAll('.project-content');
    allProjects.forEach(project => {
        project.classList.remove('active');
    });
    
    // Remove active class from all tab buttons
    const allTabs = document.querySelectorAll('.tab-button');
    allTabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected project
    const selectedProject = document.getElementById(projectId);
    if (selectedProject) {
        selectedProject.classList.add('active');
    }
    
    // Add active class to clicked tab
    const clickedTab = event.target;
    clickedTab.classList.add('active');
}

// Initialize the first project as active when page loads
document.addEventListener('DOMContentLoaded', function() {
    // First project is already active by default
    console.log('Portfolio website loaded successfully!');
});
