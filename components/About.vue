<template>
    <div>
        <div class="section">
            <div v-for="(info, index) in about" :key="index" class="grid lg:grid-cols-2 mt-20 gap-20">
                <div data-aos="fade-left" ata-aos-easing="linear" data-aos-duration="1000">
                    <img :src=info.image class="max-w-100" />
                </div>
                <div class="text-center lg:text-start flex flex-col justify-center" data-aos="fade-right" ata-aos-easing="linear" data-aos-duration="1000">
                    <div class="space-y-7">
                        <div class="font-bold text-6xl">{{ info.title }}</div>
                    </div>
                    <div class="mt-10">
                        <div class="leading-loose text-lg text-justify">
                            {{ info.text }}
                        </div>
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
            text: `I am a recent graduate with a Bachelor of Science in Information Technology, passionate about creating responsive, functional, and modern websites that deliver exceptional user experiences. I am dedicated to continuously learning new technologies 
            to refine my skills and stay at the forefront of web development.`            
        }
    ];
</script>

<style scoped>

</style>