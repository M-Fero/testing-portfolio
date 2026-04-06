// DOM Manager - Handles all DOM interactions and updates
// Using Facade Pattern to simplify DOM manipulation

export class DOMManager {
    constructor() {
        this.contentArea = document.getElementById('content-area');
        this.sidebar = document.getElementById('sidebar');
        this.mobileMenuBtn = document.getElementById('mobile-menu-btn');
        this.header = document.querySelector('header');
        
        // Validate critical elements
        if (!this.contentArea) {
            console.error('❌ Critical element missing: #content-area');
            throw new Error('Missing required DOM element: content-area');
        }
        if (!this.sidebar) {
            console.error('❌ Critical element missing: #sidebar');
            throw new Error('Missing required DOM element: sidebar');
        }
        console.log('✓ DOM Manager initialized with critical elements');
    }

    // Get nav links (lazy loading - queries after DOM is ready)
    getNavLinks() {
        return document.querySelectorAll('.nav-link');
    }

    // Render content to main area
    renderContent(html) {
        if (!this.contentArea) {
            console.error('❌ Cannot render: content-area element missing');
            return;
        }
        this.contentArea.innerHTML = html;
    }

    // Update active nav link
    updateActiveNavLink(pageName) {
        const navLinks = this.getNavLinks();
        if (navLinks.length === 0) {
            console.warn('⚠️ No nav links found for updating');
            return;
        }
        
        navLinks.forEach(link => {
            const isActive = link.getAttribute('data-page') === pageName;
            
            if (isActive) {
                link.classList.remove('text-gray-400', 'hover:bg-[#1a1a1a]', 'hover:text-orange-500');
                link.classList.add('bg-orange-600', 'text-white', 'shadow-[0_0_15px_rgba(249,115,22,0.4)]');
                console.log(`✓ Active nav link set to: ${pageName}`);
            } else {
                link.classList.remove('bg-orange-600', 'text-white', 'shadow-[0_0_15px_rgba(249,115,22,0.4)]');
                link.classList.add('text-gray-400', 'hover:bg-[#1a1a1a]', 'hover:text-orange-500');
            }
        });
    }

    // Close sidebar on mobile
    closeSidebar() {
        if (window.innerWidth < 768) {
            this.sidebar.classList.add('hidden');
        }
    }

    // Toggle sidebar on mobile
    toggleSidebar() {
        this.sidebar.classList.toggle('hidden');
    }

    // Get mobile menu button
    getMobileMenuBtn() {
        return this.mobileMenuBtn;
    }

    // Get sidebar element
    getSidebar() {
        return this.sidebar;
    }
}
