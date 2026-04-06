// Application Entry Point - Initializes the application on DOM load

import { ApplicationManager } from './app-manager.js';

console.log('✓ Portfolio app starting...', new Date().toISOString());

// Handle any module loading errors
window.addEventListener('error', (event) => {
    console.error('❌ Runtime error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('❌ Unhandled promise rejection:', event.reason);
});

// Initialize when DOM is ready
function initializeApp() {
    try {
        console.log('✓ DOM ready, initializing application...');
        const app = new ApplicationManager();
        app.initialize();
        
        // Make app instance available globally for debugging
        window.portfolioApp = app;
        console.log('✓ Portfolio app initialized successfully!');
        console.log('✓ Current page:', app.getCurrentPage());
    } catch (error) {
        console.error('❌ Failed to initialize portfolio:', error);
        document.getElementById('content-area').innerHTML = `
            <div class="text-center p-8">
                <h2 class="text-2xl text-red-500 mb-4">⚠️ Error Loading Portfolio</h2>
                <p class="text-gray-400 mb-4">${error.message}</p>
                <button onclick="location.reload()" class="bg-orange-600 text-white px-4 py-2 rounded">
                    Reload Page
                </button>
            </div>
        `;
    }
}

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
    console.log('📄 Document still loading, waiting for DOMContentLoaded...');
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    console.log('✓ Document already loaded, initializing immediately...');
    setTimeout(initializeApp, 0);  // Next tick to ensure all modules loaded
}
