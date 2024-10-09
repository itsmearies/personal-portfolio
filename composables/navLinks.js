export const useNavLinks = () => {
    const navLinks = ref([
        {
            label: 'home',
            icon: 'heroicons:home'
        },
        {
            label: 'about',
            icon: 'heroicons:information-circle'
        },
        {
            label: 'skills',
            icon: 'heroicons:academic-cap'
        },
        {
            label: 'projects',
            icon: 'heroicons:clipboard-document'
        },
        {
            label: 'contact',
            icon: 'heroicons:phone'
        },
    ]);

    return { navLinks };
};