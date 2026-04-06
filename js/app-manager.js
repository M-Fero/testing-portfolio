// Application Manager - Coordinates all modules
// Using Facade Pattern to provide unified interface

import { TemplateRenderer } from './template-renderer.js';
import { NavigationController } from './navigation-controller.js';
import { DOMManager } from './dom-manager.js';
import { EventManager } from './event-manager.js';
import { SidebarManager } from './sidebar-manager.js';

export class ApplicationManager {
    constructor() {
        this.templateRenderer = new TemplateRenderer();
        this.navigationController = new NavigationController();
        this.domManager = new DOMManager();
        this.eventManager = new EventManager(
            this.navigationController,
            this.domManager,
            this.templateRenderer
        );
        this.sidebarManager = new SidebarManager(this.domManager);
    }

    // Initialize application
    initialize() {
        // Render sidebar
        this.sidebarManager.render();

        // Initialize event listeners
        this.eventManager.initializeEvents();

        // Load default page
        this.navigationController.navigateTo('home');
    }

    // Navigate to page (public API)
    navigateTo(pageName) {
        this.navigationController.navigateTo(pageName);
    }

    // Get current page (public API)
    getCurrentPage() {
        return this.navigationController.getCurrentPage();
    }
}
