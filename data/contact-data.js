// Contact Page Data
export const contactPageData = {
    title: 'Contact',
    heading: "Let's Get in Touch",
    subheading: "Feel free to reach out for collaborations, project inquiries, or just to say hi!",
    
    contactInfo: [
        {
            id: 'email',
            icon: 'fa-envelope',
            title: 'Email Address',
            value: 'Mostafa.F.Fero@gmail.com',
            link: 'mailto:Mostafa.F.Fero@gmail.com'
        },
        {
            id: 'phone',
            icon: 'fa-phone-alt',
            title: 'Call Me',
            value: '+20 111 800 5622',
            link: 'tel:+201118005622'
        },
        {
            id: 'address',
            icon: 'fa-map-marker-alt',
            title: 'Address',
            value: '6 of October City, Egypt',
            link: null
        }
    ],
    
    form: {
        title: 'Send Message',
        icon: 'fa-paper-plane',
        fields: [
            {
                type: 'text',
                name: 'name',
                placeholder: 'Your Name',
                required: true
            },
            {
                type: 'email',
                name: 'email',
                placeholder: 'Your Email',
                required: true
            },
            {
                type: 'textarea',
                name: 'message',
                placeholder: 'Your Message...',
                rows: 6,
                required: true
            }
        ],
        submitButton: {
            text: 'Send Message',
            icon: 'fa-arrow-right'
        }
    },
    
    socialLinks: [
        {
            icon: 'fab fa-linkedin',
            link: 'https://www.linkedin.com/in/mostafa-fero/',
            label: 'LinkedIn'
        },
        {
            icon: 'fab fa-github',
            link: '#',
            label: 'GitHub'
        },
        {
            icon: 'fab fa-discord',
            link: '#',
            label: 'Discord'
        },
        {
            icon: 'fab fa-spotify',
            link: 'https://open.spotify.com/user/fero.nitro?si=46ec73f195194b44',
            label: 'Spotify'
        }
    ]
};
