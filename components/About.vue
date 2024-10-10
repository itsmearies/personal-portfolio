<template>
    <div>
        <div>
            <div v-for="(info, index) in about" :key="index" class="grid md:grid-cols-2 mt-20 gap-20">
                <div data-aos="fade-left" ata-aos-easing="linear" data-aos-duration="1000">
                    <img :src=info.image class="max-w-100" />
                </div>
                <div class="text-center md:text-start" data-aos="fade-right" ata-aos-easing="linear" data-aos-duration="1000">
                    <div class="space-y-7">
                        <div class="font-bold text-6xl">{{ info.title }}</div>
                        <div class="text-4xl capitalize text-green-500">{{ info.subTitle }}</div>
                    </div>
                    <div class="mt-10">
                        <div class="leading-loose text-lg text-justify">
                            {{ info.text }}
                        </div>
                    </div>  
                    <div class="mt-10">
                        <ul class="flex flex-col gap-4 mt-2">
                            <li v-for="(link, index) in sample" :key="index" class="flex items-center gap-2 text-md">
                                <NuxtLink to="">
                                    <div class="flex items-center gap-5">
                                        <UAvatar :icon="link.icon" size="md" class="dark:bg-gray-950" />
                                        {{ link.label }}
                                    </div>
                                </NuxtLink> 
                            </li>
                        </ul>
                    </div>
                </div>
            </div> 
        </div>
        

    </div>
</template>

<script setup>
    import image from './assets/images/about.svg';

    const about = [
        {
            image: image,
            title: 'About Me',
            subTitle: 'Front-End Developer',
            text: `Hello!, I am a recent graduate with a Bachelor of Science in Information Technology, passionate in web development.
                    I love building a responsive, functional, and modern websites that deliver an excellent user experience. 
                    I like to learn new technologies and continuously to develop my skills.`            
        }
    ];

    const sample = [
        {
            label: 'Imus, Cavite, Philippines',
            icon: 'heroicons:map-pin',
            to: '/'
        }, 
        {
            label: 'jomelmalvar522@gmail.com',
            icon: 'heroicons:envelope'
        }, 
        {
            label: '+63 921 427 2171',
            icon: 'heroicons:phone'
        }
    ];
</script>

<style lang="scss" scoped>

</style>