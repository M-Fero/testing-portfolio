// User Profile Data - Sidebar Info
export const profileData = {
    name: 'Mostafa Fero',
    title: 'Unity Game Developer',
    avatar: 'https://ui-avatars.com/api/?name=Mostafa+Fero&background=111&color=f97316&size=128',
    cvUrl: 'Mostafa-Fero-Unity-Developer.pdf',
    
    socialLinks: [
        {
            icon: 'fab fa-linkedin',
            url: 'https://www.linkedin.com/in/mostafa-fero/',
            label: 'LinkedIn'
        },
        {
            icon: 'fab fa-github',
            url: '#',
            label: 'GitHub'
        },
        {
            icon: 'fab fa-discord',
            url: '#',
            label: 'Discord'
        },
        {
            icon: 'fab fa-spotify',
            url: 'https://open.spotify.com/user/fero.nitro?si=46ec73f195194b44',
            label: 'Spotify'
        }
    ]
};

// Navigation Items
export const navItems = [
    {
        id: 'home',
        icon: 'fas fa-home',
        label: 'Profile',
        page: 'home'
    },
    {
        id: 'projects',
        icon: 'fas fa-gamepad',
        label: 'Projects',
        page: 'projects'
    },
    {
        id: 'skills',
        icon: 'fas fa-code',
        label: 'Skills',
        page: 'skills'
    },
    {
        id: 'experience',
        icon: 'fas fa-briefcase',
        label: 'Experience',
        page: 'experience'
    },
    {
        id: 'contact',
        icon: 'fas fa-envelope',
        label: 'Contact',
        page: 'contact'
    }
];
