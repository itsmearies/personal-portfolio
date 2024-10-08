<template>
    <div>
        <div class="grid md:grid-cols-2 gap-16 py-[2rem] md:py-[4rem]">
            <div class="typography flex flex-col justify-center items-center md:items-start gap-3 
                order-2 text-center md:text-start" 
                data-aos="fade-up" ata-aos-easing="linear"
            >
                <div class="title font-bold text-6xl">Hi, I'm Jomel Malvar</div>
                <div class="sub-title text-4xl capitalize">Aspiring Front-End Developer</div>
                <div class="text-lg">
                    Let's continue our journey together and bring the experience to success.
                </div>
                <div class="social-links mt-5">
                    <ul class="flex gap-6">
                        <li v-for="(link, index) in socialLinks" :key="index">
                            <NuxtLink to="">
                                <UTooltip :text="link.text" class="mt-2">
                                    <UIcon :name="link.icon" class="icon-size" />
                                </UTooltip>   
                            </NuxtLink> 
                        </li>
                    </ul>
                </div>
                <div class="mt-5">
                    <UButton color="green" variant="solid" class="p-3">Download Resume</UButton>
                </div>   
            </div>
            <div class="avatar flex justify-center md:justify-end order-1 md:order-2">
                <img :src=avatar alt="avatar" class="rounded-full max-w-100 md:max-w-[600px]" data-aos="flip-left" ata-aos-easing="linear"/>
            </div>
        </div>
        
    </div>
</template>

<script setup>
    import avatar from './assets/images/avatar.jpg';

    const socialLinks = ref([
        {
            text: 'Home',
            icon: 'heroicons:home'
        },
        {
            text: 'About',
            icon: 'heroicons:information-circle'
        },
        {
            text: 'Skills',
            icon: 'heroicons:academic-cap'
        },
    ]);
</script>

<style lang="scss" scoped>

</style>