// Application Entry Point - Initializes the application on DOM load

import { ApplicationManager } from './app-manager.js';

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Create and initialize application
    const app = new ApplicationManager();
    app.initialize();

    // Make app instance available globally for debugging (optional)
    window.portfolioApp = app;
});
