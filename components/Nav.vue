<template>
    <div>
        <div class="fixed left-0 right-0 z-50 bg-white dark:bg-[#121212] border-b dark:border-gray-950 h-[83px]">
            <div class="container mx-auto flex justify-between items-center px-5 lg:px-20 h-full">
                <NuxtLink to="#home">
                    <div class="nav-logo text-3xl italic">Jomel Malvar</div>
                </NuxtLink>

                <div class="hidden lg:flex nav-links h-full">
                    <ul class="flex gap-12">
                        <li 
                            v-for="(link, index) in navLinks" 
                            :key="index" 
                            class="h-full flex items-center" 
                            :class="{'border-b-[3.5px] border-blue-400': activeLink === link.label}"
                        >
                            <ULink :to="`#${link.label}`" @click="setActiveLink(link.label)">
                                <UTooltip :text="link.label" class="mt-2">
                                    <UIcon 
                                        :name="link.icon" 
                                        :class="['icon-size', {'primary-color': activeLink === link.label}]" 
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

    // Default ative link
    const activeLink = ref('home'); 

    const setActiveLink = (linkText) => {
        activeLink.value = linkText;
    };
</script>

<style scoped>
    .nav-logo{
        font-family: "Pacifico", cursive;
    }  
</style>