export const useSocialLinks = () => {
    const socialLinks = ref([
        {
            label: 'Facebook',
            icon: 'fa6-brands:facebook',
            to: 'https://www.facebook.com/jomel.condes.94'
        },
        {
            label: 'Github',
            icon: 'fa6-brands:github',
            to: 'https://github.com/itsmearies'
        },
        {
            label: 'LinkedIn',
            icon: 'fa6-brands:linkedin',
            to: 'https://www.linkedin.com/in/jomel-malvar-116542245/'
        },
    ]);

    return { socialLinks };
};


