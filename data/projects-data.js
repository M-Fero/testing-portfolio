// Projects Page Data
export const projectsPageData = {
    title: 'Projects',
    heading: 'Featured',
    
    projects: [
        {
            id: 'air-assault',
            title: 'Air Assault',
            description: 'A high-octane 3D space defense game. Airforce invades from outer space, and it\'s the player\'s duty to save the planet from alien invaders utilizing smooth movement and rapid-fire mechanics.',
            image: 'https://m-fero.github.io/wp-content/uploads/2024/05/Screenshot-2024-05-25-194912-800x450.png',
            imagePosition: 'left',
            
            technical: [
                'Implemented core C# gameplay loops and enemy wave AI.',
                'Optimized particle systems for high-performance laser combat.',
                'Managed Scene & Object Pooling for projectile efficiency.'
            ],
            
            tags: ['Unity 3D', 'C#', 'AI Navigation'],
            
            ctas: [
                {
                    text: 'Play Demo',
                    icon: 'fa-play',
                    type: 'primary',
                    link: '#'
                },
                {
                    text: 'Repo',
                    icon: 'fab fa-github',
                    type: 'secondary',
                    link: '#'
                }
            ]
        },
        {
            id: 'space-shooter',
            title: 'Space Shooter',
            description: 'Enjoy levels of challenging spaceship combat on unknown planets with special environment setups, advanced post-processing, and dynamic lighting.',
            image: 'https://m-fero.github.io/wp-content/uploads/2024/05/Screenshot-2024-05-25-182042-800x450.png',
            imagePosition: 'right',
            
            technical: [
                'Integrated Unity Post-Processing stack for cinematic visuals.',
                'Engineered custom shaders using Unity Shader Graph.',
                'Designed responsive UI/UX for mobile and PC displays.'
            ],
            
            tags: ['Post-Processing', 'Shader Graph', 'UI/UX'],
            
            ctas: [
                {
                    text: 'Play Demo',
                    icon: 'fa-play',
                    type: 'primary',
                    link: '#'
                }
            ]
        },
        {
            id: 'fearroad-highway',
            title: 'FearRoad Highway',
            description: 'An endless runner racing game featuring procedural road generation. Players achieve high scores, avoid traffic, and collect coins to unlock new rides.',
            image: 'https://m-fero.github.io/wp-content/uploads/2024/05/FearRoad-1-800x450.png',
            imagePosition: 'left',
            
            technical: [
                'Programmed Procedural Content Generation (PCG) for endless roads.',
                'Implemented monetization pipelines (In-App Purchases, Ads).',
                'Optimized for Android/iOS mobile deployment.'
            ],
            
            tags: ['PCG', 'Mobile Dev', 'Monetization'],
            
            ctas: [
                {
                    text: 'Play Store',
                    icon: 'fab fa-google-play',
                    type: 'primary',
                    link: '#'
                }
            ]
        }
    ]
};
