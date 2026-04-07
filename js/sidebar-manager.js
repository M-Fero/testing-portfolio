// Sidebar Manager - Handles sidebar rendering and initialization
// Using Template Pattern for sidebar structure

import { profileData, navItems } from '../data/profile-data.js';

export class SidebarManager {
    constructor(domManager) {
        this.domManager = domManager;
        this.profileData = profileData;
        this.navItems = navItems;
    }

    // Generate sidebar HTML
    render() {
        const sidebar = this.domManager.getSidebar();
        
        if (!sidebar) {
            console.error('❌ Cannot find sidebar element');
            return;
        }
        
        // Ensure sidebar is visible on desktop
        sidebar.classList.remove('hidden');
        console.log('✓ Sidebar made visible');
        
        const navLinksContainer = sidebar.querySelector('#nav-links');
        
        if (!navLinksContainer) {
            console.error('❌ Cannot find #nav-links in sidebar');
            return;
        }
        
        console.log('✓ Rendering sidebar with', this.navItems.length, 'nav items');
        
        // Update nav links
        navLinksContainer.innerHTML = this.navItems.map(item => `
            <li>
                <a href="javascript:void(0);" onclick="return false;" data-page="${item.page}" class="nav-link block py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center group">
                    <i class="${item.icon} w-8 text-center transition-transform group-hover:scale-125"></i>
                    <span class="ml-3">${item.label}</span>
                </a>
            </li>
        `).join('');
        console.log('✓ Nav links rendered');

        // Update profile section
        const profileSection = sidebar.querySelector('.profile-section');
        if (profileSection) {
            profileSection.innerHTML = `
                <div class="profile-avatar group cursor-pointer">
                    <img src="${this.profileData.avatar}" alt="${this.profileData.name}">
                </div>
                <h2 class="text-2xl font-bold text-white group-hover:text-orange-500 transition-colors">${this.profileData.name}</h2>
                <p class="text-orange-500 mt-1 font-medium tracking-wide">${this.profileData.title}</p>
            `;
            console.log('✓ Profile section rendered');
        } else {
            console.warn('⚠️ Profile section not found in sidebar');
        }

        // Update social links
        const socialLinks = sidebar.querySelector('.social-links');
        if (socialLinks) {
            socialLinks.innerHTML = this.profileData.socialLinks.map(link => `
                <a href="${link.url}" target="_blank" class="text-gray-500 hover:text-orange-500 hover:scale-125 transition-all duration-300 text-xl" title="${link.label}">
                    <i class="${link.icon}"></i>
                </a>
            `).join('');
            console.log('✓ Social links rendered');
        } else {
            console.warn('⚠️ Social links section not found in sidebar');
        }
    }
}
