<template>
    <div>
        <div class=" fixed left-0 right-0 py-5 z-50 bg-white dark:bg-[#121212] border-b dark:border-gray-950">
            <div class="container mx-auto flex justify-between items-center px-5 md:px-20">
                <div class="nav-logo text-3xl italic">Jomel Malvar</div>
            
                <div class="hidden md:flex nav-links">
                    <ul class="flex items-center gap-10">
                        <li v-for="(link, index) in navLinks" :key="index" class="">
                            <ULink :to="`#${link.label}`" @click="setActiveLink(link.label)">
                                <UTooltip :text="link.label" class="mt-2">
                                    <UIcon 
                                        :name="link.icon" 
                                        :class="['icon-size', { 'active': activeLink === link.label }]" 
                                    />
                                </UTooltip>   
                            </ULink> 
                        </li>      
                    </ul>
                </div>
                
                <div class="nav-theme flex items-center gap-1">
                    <ToggleTheme></ToggleTheme>
                    <SlideOver></SlideOver>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script setup>
    const { navLinks } = useNavLinks();

    // Reactive property to store the active link
    const activeLink = ref('home'); // Default active link

    // Function to set the active link
    const setActiveLink = (linkText) => {
        activeLink.value = linkText;
    };
</script>

<style scoped>
    .nav-logo{
        font-family: "Pacifico", cursive;
    }  

    .active{
        color: #22C55E;
    }
</style>