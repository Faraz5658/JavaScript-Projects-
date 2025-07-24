// Light/Dark Toggle with additional color functionality

// Array of theme options with background and text colors
const themes = [
    { background: "#FFFFFF", color: "#333333", name: "Light" },  // Light theme
    { background: "#333333", color: "#FFFFFF", name: "Dark" },   // Dark theme
    { background: "#264653", color: "#E9C46A", name: "Ocean" },  // Ocean theme
    { background: "#6D597A", color: "#E0B1CB", name: "Purple" }, // Purple theme
    { background: "#2A9D8F", color: "#F4A261", name: "Teal" }    // Teal theme
];

// Keep track of current theme index
let currentThemeIndex = 0;

// Function to toggle between themes
function toggle() {
    // Move to next theme, loop back to beginning if at the end
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    
    // Get the selected theme
    const selectedTheme = themes[currentThemeIndex];
    
    // Apply the theme
    document.body.style.background = selectedTheme.background;
    document.body.style.color = selectedTheme.color;
    
    // Update button text to show current theme
    const toggleButton = document.querySelector('button');
    if (toggleButton) {
        toggleButton.textContent = `Current: ${selectedTheme.name} Theme`;
    }
}

// Initialize theme on page load
function initTheme() {
    // Apply the default theme (first in the array)
    const defaultTheme = themes[currentThemeIndex];
    document.body.style.background = defaultTheme.background;
    document.body.style.color = defaultTheme.color;
    
    // Update button text
    const toggleButton = document.querySelector('button');
    if (toggleButton) {
        toggleButton.textContent = `Current: ${defaultTheme.name} Theme`;
    }
}

// Run initialization when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initTheme);