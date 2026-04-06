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
        const navLinksContainer = sidebar.querySelector('#nav-links');
        
        // Update nav links
        navLinksContainer.innerHTML = this.navItems.map(item => `
            <li>
                <a href="#" data-page="${item.page}" class="nav-link block py-3 px-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 active:scale-95 flex items-center group">
                    <i class="${item.icon} w-8 text-center transition-transform group-hover:scale-125"></i>
                    <span class="ml-3">${item.label}</span>
                </a>
            </li>
        `).join('');

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
        }

        // Update social links
        const socialLinks = sidebar.querySelector('.social-links');
        if (socialLinks) {
            socialLinks.innerHTML = this.profileData.socialLinks.map(link => `
                <a href="${link.url}" target="_blank" class="text-gray-500 hover:text-orange-500 hover:scale-125 transition-all duration-300 text-xl" title="${link.label}">
                    <i class="${link.icon}"></i>
                </a>
            `).join('');
        }
    }
}
