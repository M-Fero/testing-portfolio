// Template Renderer - Renders page templates from data
// Using Template Method Pattern for rendering different page types

import { homePageData } from '../data/home-data.js';
import { projectsPageData } from '../data/projects-data.js';
import { skillsPageData } from '../data/skills-data.js';
import { experiencePageData } from '../data/experience-data.js';
import { contactPageData } from '../data/contact-data.js';

export class TemplateRenderer {
    constructor() {
        this.templates = {
            home: this.renderHomePage.bind(this),
            projects: this.renderProjectsPage.bind(this),
            skills: this.renderSkillsPage.bind(this),
            experience: this.renderExperiencePage.bind(this),
            contact: this.renderContactPage.bind(this)
        };
    }

    // Render page by name
    render(pageName) {
        console.log(`🎨 Template Renderer: Rendering page '${pageName}'`);
        if (this.templates[pageName]) {
            const html = this.templates[pageName]();
            console.log(`✓ Template Renderer: Page '${pageName}' rendered (${html.length} chars)`);
            return html;
        }
        console.error(`❌ Template Renderer: Page '${pageName}' not found`);
        return '<h2 class="text-2xl text-white">Page not found</h2>';
    }

    // HOME PAGE TEMPLATE
    renderHomePage() {
        const data = homePageData;
        return `
            <div class="fade-in">
                <p class="text-gray-400 text-lg mb-2 tracking-wider uppercase text-sm font-semibold">${data.badge}</p>
                <h1 class="text-4xl md:text-6xl font-bold text-white mb-3">Hi, I'm <span class="text-orange-500 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]">${data.heading}</span></h1>
                <h2 class="text-xl md:text-2xl text-gray-400 mb-8 font-light">${data.subheading}</h2>

                <div class="flex flex-wrap gap-4 mb-12">
                    <button class="nav-project-btn bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:bg-orange-500 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(249,115,22,0.3)] active:scale-95 flex items-center" data-page="projects">
                        ${data.cta.primary.text} <i class="fas ${data.cta.primary.icon} ml-3"></i>
                    </button>
                    <a href="${data.cta.secondary.link}" target="_blank" class="bg-transparent border border-gray-600 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 hover:border-orange-500 hover:text-orange-500 active:scale-95 flex items-center md:hidden">
                        <i class="fas ${data.cta.secondary.icon} mr-3"></i> ${data.cta.secondary.text}
                    </a>
                </div>

                <div class="bg-dark-surface rounded-2xl p-8 md:p-10 mb-12 shadow-2xl border border-dark-border relative overflow-hidden group">
                    <div class="absolute top-0 left-0 w-1 h-full bg-orange-500 transition-all duration-500 group-hover:w-2"></div>
                    <h3 class="text-2xl font-bold text-white mb-6 flex items-center"><i class="fas ${data.summary.icon} text-orange-500 mr-3"></i> ${data.summary.title}</h3>
                    <div class="space-y-4 text-gray-400 leading-relaxed text-lg">
                        ${data.summary.paragraphs.map(p => `<p>${p}</p>`).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    // PROJECTS PAGE TEMPLATE
    renderProjectsPage() {
        const data = projectsPageData;
        return `
            <div class="fade-in">
                <h2 class="text-4xl font-bold text-white mb-10 border-b border-dark-border pb-4"><span class="text-orange-500">${data.heading}</span> Projects</h2>
                <div class="space-y-12">
                    ${data.projects.map(project => this.renderProjectCard(project)).join('')}
                </div>
            </div>
        `;
    }

    renderProjectCard(project) {
        const imageDiv = `<img src="${project.image}" alt="${project.title}" class="w-full h-64 md:h-full object-cover transition-transform duration-700 group-hover:scale-110">`;
        const imageSection = project.imagePosition === 'left' 
            ? `<div class="md:w-5/12 relative overflow-hidden">${imageDiv}<div class="absolute inset-0 bg-gradient-to-r from-transparent to-[#111] opacity-0 md:opacity-100"></div></div>`
            : `<div class="md:w-5/12 relative overflow-hidden md:order-last">${imageDiv}<div class="absolute inset-0 bg-gradient-to-l from-transparent to-[#111] opacity-0 md:opacity-100"></div></div>`;

        return `
            <div class="bg-dark-surface rounded-2xl overflow-hidden border border-dark-border transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(249,115,22,0.15)] hover:border-orange-500/50 flex flex-col md:flex-row group">
                ${imageSection}
                <div class="p-8 ${project.imagePosition === 'left' ? 'md:w-7/12' : 'md:w-7/12'} flex flex-col justify-center">
                    <h3 class="text-3xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">${project.title}</h3>
                    <p class="text-gray-400 text-lg leading-relaxed mb-4">${project.description}</p>
                    
                    <h4 class="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Technical Contributions</h4>
                    <ul class="text-gray-400 space-y-1 mb-6 list-disc list-inside">
                        ${project.technical.map(t => `<li>${t}</li>`).join('')}
                    </ul>
                    
                    <div class="flex flex-wrap gap-2 mb-6">
                        ${project.tags.map(tag => `<span class="bg-[#1a1a1a] text-orange-400 text-xs font-bold px-3 py-1 rounded border border-[#333]">${tag}</span>`).join('')}
                    </div>
                    <div class="flex gap-4">
                        ${project.ctas.map(cta => this.renderCTA(cta)).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    renderCTA(cta) {
        const baseStyle = cta.type === 'primary' 
            ? 'bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition-all hover:bg-orange-500 hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] active:scale-95'
            : 'bg-transparent border border-gray-600 text-gray-300 font-bold py-2 px-6 rounded-lg transition-all hover:border-orange-500 hover:text-orange-500 active:scale-95';
        return `<a href="${cta.link}" class="${baseStyle}"><i class="${cta.icon} mr-2"></i> ${cta.text}</a>`;
    }

    // SKILLS PAGE TEMPLATE
    renderSkillsPage() {
        const data = skillsPageData;
        return `
            <div class="fade-in">
                <h2 class="text-4xl font-bold text-white mb-10 border-b border-dark-border pb-4"><span class="text-orange-500">${data.heading}</span> Skills</h2>

                <div class="bg-dark-surface p-8 md:p-10 rounded-2xl shadow-2xl border border-dark-border mb-12 relative overflow-hidden">
                    <div class="absolute -right-10 -top-10 text-9xl text-[#1a1a1a] opacity-50 z-0"><i class="fas fa-laptop-code"></i></div>
                    
                    <div class="relative z-10">
                        <h3 class="text-2xl font-bold text-white mb-6 flex items-center"><i class="fas fa-bolt text-orange-500 mr-3"></i> Core Strengths & Tech Stack</h3>
                        
                        <div class="flex flex-wrap gap-3 mb-10">
                            ${data.coreSkills.map(skill => `
                                <span class="bg-[#1a1a1a] text-gray-300 text-sm font-semibold px-5 py-2.5 rounded-full border border-[#333] transition-all duration-300 hover:bg-orange-500 hover:text-white hover:border-orange-400 hover:scale-105 hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] cursor-default">${skill}</span>
                            `).join('')}
                        </div>

                        <h3 class="text-2xl font-bold text-white mb-6 flex items-center"><i class="fas fa-star text-orange-500 mr-3"></i> Key Specializations</h3>
                        <ul class="space-y-6 text-gray-400">
                            ${data.specializations.map(spec => `
                                <li class="flex items-start group">
                                    <i class="fas ${spec.icon} text-orange-500 mt-1 mr-4 text-xl transition-transform duration-300 group-hover:translate-x-2"></i>
                                    <div><strong class="text-white">${spec.title}:</strong> ${spec.description}</div>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>

                <h3 class="text-3xl font-bold text-white mb-6 flex items-center"><i class="fas ${data.education.icon} text-orange-500 mr-3"></i> Education</h3>
                <div class="bg-dark-surface p-8 rounded-2xl shadow-xl border border-dark-border hover:border-orange-500/30 transition-colors duration-500 group">
                    <div class="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <h4 class="text-2xl font-bold text-white group-hover:text-orange-500 transition-colors">${data.education.institution} <span class="text-gray-500 font-normal text-lg block md:inline">| ${data.education.location}</span></h4>
                        <span class="bg-orange-900/20 text-orange-500 border border-orange-900/50 text-sm font-bold px-4 py-1.5 rounded-full mt-2 md:mt-0 inline-block w-max">Graduated ${data.education.graduated}</span>
                    </div>
                    <h5 class="text-xl text-gray-300 font-medium mb-6">${data.education.degree}</h5>
                    <ul class="space-y-3 text-gray-400">
                        ${data.education.highlights.map(h => `<li class="flex items-start"><span class="text-orange-500 mr-3 mt-1">▹</span> ${h}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    }

    // EXPERIENCE PAGE TEMPLATE
    renderExperiencePage() {
        const data = experiencePageData;
        return `
            <div class="fade-in">
                <h2 class="text-4xl font-bold text-white mb-12 border-b border-dark-border pb-4"><span class="text-orange-500">${data.heading}</span> Experience</h2>
                <div class="timeline-container mt-8">
                    ${data.positions.map(position => this.renderTimelineItem(position)).join('')}
                </div>
            </div>
        `;
    }

    renderTimelineItem(position) {
        const dateStyle = position.dateType === 'current' 
            ? 'text-sm font-bold text-white bg-orange-600 shadow-[0_0_10px_rgba(234,88,12,0.4)] px-4 py-1.5 rounded-full mb-4 inline-block'
            : 'text-sm font-bold text-orange-400 bg-orange-900/20 border border-orange-900/50 px-4 py-1.5 rounded-full mb-4 inline-block';
        
        const logo = position.logo ? `<img src="${position.logo}" alt="${position.company}" class="company-logo">` : '';

        return `
            <div class="timeline-item group">
                <div class="timeline-dot"></div>
                ${logo}
                <span class="${dateStyle}">${position.dateRange}</span>
                <h3 class="text-2xl font-bold text-white mt-2 group-hover:text-orange-500 transition-colors">${position.title}</h3>
                <h4 class="text-xl text-gray-500 font-medium mt-1 mb-4">${position.company}</h4>
                <ul class="space-y-3 text-gray-400">
                    ${position.responsibilities.map(resp => `
                        <li class="flex items-start">
                            <span class="text-orange-500 mr-3 mt-1 transition-transform group-hover:translate-x-1">▹</span>
                            <p><strong class="text-gray-200">${resp.title}:</strong> ${resp.description}</p>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    }

    // CONTACT PAGE TEMPLATE
    renderContactPage() {
        const data = contactPageData;
        return `
            <div class="fade-in">
                <h2 class="text-4xl font-bold text-white mb-2">Let's Get in <span class="text-orange-500 drop-shadow-[0_0_10px_rgba(249,115,22,0.4)]">Touch</span></h2>
                <p class="text-gray-400 mb-10 text-lg">${data.subheading}</p>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    ${data.contactInfo.map(info => `
                        <div class="bg-dark-surface p-8 rounded-2xl border border-dark-border text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-[0_15px_30px_rgba(249,115,22,0.15)] group ${info.link ? 'cursor-pointer' : ''}">
                            <div class="w-16 h-16 bg-[#1a1a1a] text-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl border border-[#333] transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-400">
                                <i class="fas ${info.icon}"></i>
                            </div>
                            <h3 class="text-white font-bold mb-2 text-lg">${info.title}</h3>
                            <a href="${info.link || '#'}" ${info.link ? '' : 'onclick="event.preventDefault()"'} class="text-gray-400 group-hover:text-orange-400 transition-colors text-sm break-all">${info.value}</a>
                        </div>
                    `).join('')}
                </div>

                <div class="bg-dark-surface p-8 md:p-10 rounded-2xl border border-dark-border shadow-2xl relative overflow-hidden group">
                    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <h3 class="text-2xl font-bold text-white mb-8 flex items-center"><i class="fas ${data.form.icon} text-orange-500 mr-3"></i> ${data.form.title}</h3>
                    <form class="space-y-6" id="contact-form">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" placeholder="Your Name" class="w-full bg-[#111] text-white border border-[#333] rounded-xl p-4 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all shadow-inner" required>
                            <input type="email" placeholder="Your Email" class="w-full bg-[#111] text-white border border-[#333] rounded-xl p-4 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all shadow-inner" required>
                        </div>
                        <textarea placeholder="Your Message..." rows="6" class="w-full bg-[#111] text-white border border-[#333] rounded-xl p-4 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all shadow-inner resize-none" required></textarea>
                        <button type="button" class="bg-orange-600 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 hover:bg-orange-500 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(249,115,22,0.3)] active:scale-95 active:translate-y-0 w-full md:w-auto flex items-center justify-center">
                            ${data.form.submitButton.text} <i class="fas ${data.form.submitButton.icon} ml-3 text-sm"></i>
                        </button>
                    </form>
                </div>
            </div>
        `;
    }
}
