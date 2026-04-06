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
        try {
            console.log('📱 App Manager: Starting initialization...');
            
            // Render sidebar first (this creates nav links and social links)
            console.log('📱 App Manager: Rendering sidebar...');
            this.sidebarManager.render();
            console.log('✓ App Manager: Sidebar rendered successfully');

            // Now set up navigation listeners (after sidebar is rendered)
            console.log('📱 App Manager: Setting up navigation listeners...');
            this.eventManager.setupNavigation();
            console.log('✓ App Manager: Navigation listeners attached');

            // Initialize other event listeners  
            console.log('📱 App Manager: Initializing other events...');
            this.eventManager.initializeEvents();
            console.log('✓ App Manager: Event listeners initialized');

            // Load default page
            console.log('📱 App Manager: Loading home page...');
            this.navigationController.navigateTo('home');
            console.log('✓ App Manager: Home page loaded');
        } catch (error) {
            console.error('❌ App Manager initialization failed:', error);
            throw error;
        }
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
