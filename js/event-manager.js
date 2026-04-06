// Event Manager - Centralized event handling
// Using Observer Pattern for loose coupling

export class EventManager {
    constructor(navigationController, domManager, templateRenderer) {
        this.navigationController = navigationController;
        this.domManager = domManager;
        this.templateRenderer = templateRenderer;
        this.mobileMenuBtn = domManager.getMobileMenuBtn();
    }

    // Initialize all event listeners
    initializeEvents() {
        this.setupMobileMenu();
        this.setupNavObserver();
        this.setupResponsiveListener();
    }

    // Setup navigation click listeners (dynamic - called after sidebar renders)
    setupNavigation() {
        const navLinks = this.domManager.getNavLinks();
        console.log(`📌 Event Manager: Found ${navLinks.length} nav links, attaching listeners...`);
        
        if (navLinks.length === 0) {
            console.error('❌ CRITICAL: No nav links found! Navigation will not work.');
        }
        
        navLinks.forEach((link, index) => {
            // Click handler with strong prevention
            const clickHandler = (e) => {
                console.log(`📍 Event Manager: Click on nav link ${index + 1}`);
                
                // ABSOLUTELY prevent any default behavior
                if (e && e.preventDefault) e.preventDefault();
                if (e && e.stopPropagation) e.stopPropagation();
                if (e && e.stopImmediatePropagation) e.stopImmediatePropagation();
                
                const page = link.getAttribute('data-page');
                console.log(`✓ Event Manager: Navigating to page="${page}"`);
                
                if (page) {
                    this.navigationController.navigateTo(page);
                } else {
                    console.error('❌ No data-page attribute on nav link');
                }
                
                return false;  // Additional safety
            };
            
            link.addEventListener('click', clickHandler, true);  // Use capture phase
            link.onclick = clickHandler;  // Also set onclick property directly
            
            console.log(`  ✓ Listener attached to nav link ${index + 1}`);
        });
        console.log(`✅ Event Manager: ${navLinks.length} navigation listeners fully attached`);
    }

    // Setup mobile menu toggle
    setupMobileMenu() {
        if (!this.mobileMenuBtn) {
            console.warn('⚠️ Event Manager: Mobile menu button not found');
            return;
        }
        this.mobileMenuBtn.addEventListener('click', () => {
            console.log('✓ Event Manager: Mobile menu clicked');
            this.domManager.toggleSidebar();
        });
    }

    // Setup observer for navigation changes
    setupNavObserver() {
        this.navigationController.subscribe((pageName) => {
            console.log(`📡 Event Manager: Page change observed → '${pageName}'`);
            
            // Render new content
            const content = this.templateRenderer.render(pageName);
            this.domManager.renderContent(content);
            
            // Update active nav link
            this.domManager.updateActiveNavLink(pageName);
            
            // Close sidebar on mobile
            this.domManager.closeSidebar();

            // Re-attach event listeners for dynamic content
            this.attachDynamicEventListeners();
            
            console.log(`✓ Event Manager: Page rendering complete for '${pageName}'`);
        });
        console.log('✓ Event Manager: Navigation observer set up');
    }

    // Setup responsive window listener
    setupResponsiveListener() {
        window.addEventListener('resize', () => {
            // Handle responsive behavior if needed
            if (window.innerWidth >= 768) {
                this.domManager.getSidebar().classList.remove('hidden');
            }
        });
    }

    // Attach event listeners to dynamically rendered content
    attachDynamicEventListeners() {
        // Handle project navigation buttons
        const projectButtons = document.querySelectorAll('.nav-project-btn');
        projectButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const page = btn.getAttribute('data-page');
                this.navigationController.navigateTo(page);
            });
        });

        // Handle contact form submission
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            const submitBtn = contactForm.querySelector('button[type="button"]');
            submitBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleContactFormSubmit(contactForm);
            });
        }
    }

    // Handle contact form submission
    handleContactFormSubmit(form) {
        const inputs = form.querySelectorAll('input, textarea');
        const formData = new FormData();
        
        let isValid = true;
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('border-red-500');
            } else {
                input.classList.remove('border-red-500');
            }
            formData.append(input.name || input.placeholder, input.value);
        });

        if (isValid) {
            // Success feedback
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        } else {
            // Validation feedback
            alert('Please fill in all fields.');
        }
    }
}
