<template>
    <div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" ata-aos-easing="linear" data-aos-duration="1000">
            <div class="text-4xl font-bold text-center">Projects</div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
                <div v-for="(project, index) in projects" :key="index">
                    <div class="card shadow-lg rounded-md dark:bg-gray-950">
                        <div class="flex flex-col gap-3">
                            <div class="relative card-url">
                                <img :src="project.thumbnail" class="w-full h-[300px] rounded-t-md object-contain"/>
                                <a :href="project.url" :target="project.target" class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-t-md">
                                    <span class="text-white text-center text-md font-semibold">{{  project.url }}</span>
                                </a>
                            </div>
                            <div class="content leading-6 p-4">
                                <div class="card-title text-3xl font-bold">{{ project.title }}</div>
                                <div class="card-sub-title mt-2 flex flex-col">
                                    <span v-if="expandedCards[index]">{{ project.description }}</span>
                                    <span v-else class="line-clamp-2">{{ project.description }}</span>
                                    <button
                                        @click="toggleReadMore(index)"
                                        class="text-green-500 underline mt-2 text-start"
                                    >
                                        {{ expandedCards[index] ? 'Read less' : 'Read more' }}
                                    </button>
                                </div>
                                
                                <div class="card-skills mt-5">
                                    <ul class="flex gap-2">
                                        <li v-for="(skill, index) in project.skills" :key="index">
                                            <UTooltip :text="skill.text" class="mt-2">
                                                <UIcon :name="skill.icon" class="icon-size" />
                                            </UTooltip>  
                                        </li>
                                    </ul>
                                </div> 
                            </div>
                        </div> 
                    </div>
                    
                </div>  
            </div>
        </div>
    </div>
</template>

<script setup>
    import weatherApp from '@/assets/images/thumbnail/weather-app.png';
    import portfolioApp from '@/assets/images/thumbnail/personal-portfolio.png';
    const projects = ([
        {
            thumbnail: weatherApp,
            title: 'Weather App',
            description: `A weather forecasting application built with Vue 3 and Vuetify. 
                    The app uses WeatherApi to fetch real-time weather data, providing users with accurate and up-to-date information.`,
            skills: [
                {text: 'Vue', icon: 'logos:vue'},
                {text: 'Vuetify', icon: 'logos:vuetifyjs'},
            ],
            url: 'https://weather-app-flame-gamma-14.vercel.app/',
            target: '_blank'
        },
        {
            thumbnail: portfolioApp,
            title: 'My Portfolio',
            description: `A personal portfolio website built with Nuxt and Tailwind CSS, showcasing my projects and skills.`,
            skills: [
                {text: 'Nuxt', icon: 'logos:nuxt-icon'},
                {text: 'Tailwind', icon: 'logos:tailwindcss-icon'},
            ],
            url: 'https://personal-portfolio-two-green.vercel.app/',
            target: '_blank'
        },
    ])

    const expandedCards = ref(Array(projects.length).fill(false));

    const toggleReadMore = (index) => {
        expandedCards.value[index] = !expandedCards.value[index];
    };
</script>

<style lang="scss" scoped>

</style>