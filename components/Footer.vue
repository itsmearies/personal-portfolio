<template>
    <div>
        <div class="mt-[10rem] py-[2.5rem] px-5 md:px-20">
            <div class="flex flex-col md:flex-row justify-between gap-10 container mx-auto">
                <div>
                    <div class="nav-logo text-2xl italic">Jomel Malvar</div>
                    <div class="mt-5">
                        <ul class="flex flex-col gap-4 mt-2">
                            <li v-for="(link, index) in info" :key="index" class="flex items-center gap-2 text-md">
                                <NuxtLink to="">
                                    <div class="flex items-center gap-2">
                                        <UIcon :name="link.icon" class="text-2xl" />
                                        {{ link.label }}
                                    </div>
                                </NuxtLink> 
                            </li>
                        </ul>
                    </div>
                </div>
              
                <div>
                    <div class="text-xl font-bold">Nav Links</div>
                    <ul class="flex flex-col gap-2 mt-2">
                        <li v-for="(link, index) in socialLinks" :key="index" class="flex items-center gap-2 text-md">  
                            {{ link.label }}
                        </li>
                    </ul>
                </div>

                <!-- <div>
                    <div class="text-xl font-bold">Social Links</div>
                    <ul class="flex flex-col gap-2 mt-2">
                        <li v-for="(link, index) in socialLinks" :key="index" class="flex items-center gap-2 text-md">
                            {{ link.label }}
                        </li>
                    </ul>
                </div> -->
                
                <UDivider :avatar="{ src: avatar }" orientation="vertical" />

                <div class="flex justify-center items-center">
                    Copyright&#169;{{ new Date().getFullYear() }}; Designed By Me
                </div>
            </div>  
        </div>
    </div>
</template>

<script setup>
    import avatar from './assets/images/avatar.jpg';

    const info = ref([
        {
            label: 'Imus, Cavite, Philippines',
            icon: 'heroicons:map-pin'
        },
        {
            label: '+63 921 427 2171',
            icon: 'heroicons:phone'
        },
        {
            label: 'jomelmalvar522@gmail.com',
            icon: 'heroicons:envelope'
        },  
    ]);

    const socialLinks = ref([
        {
            label: 'Home',
            icon: 'heroicons:home'
        },
        {
            label: 'About',
            icon: 'heroicons:information-circle'
        },
        {
            label: 'Skills',
            icon: 'heroicons:academic-cap'
        },
        {
            label: 'Projects',
            icon: 'heroicons:home'
        },
        {
            label: 'Contact',
            icon: 'heroicons:information-circle'
        },
        
    ]);
    
</script>

<style scoped>
    .nav-logo{
        font-family: "Pacifico", cursive;
    }
</style>