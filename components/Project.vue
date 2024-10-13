<template>
    <div>
        <div class="section" data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-easing="linear" data-aos-duration="1000">
            <div class="text-4xl font-bold text-center">Projects</div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
                <div v-for="(project, index) in projects" :key="index">
                    <div class="card shadow-lg rounded-md dark:bg-gray-950">
                        <div class="flex flex-col gap-5">
                            <div class="relative card-url">
                                <img :src="project.thumbnail" class="w-full h-[300px] rounded-t-md object-contain"/>
                                <a :href="project.url" :target="project.target" class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-t-md">
                                    <span class="text-white text-center text-md font-semibold">{{  project.url }}</span>
                                </a>
                            </div>
                            <div class="content leading-6 p-4">
                                <div class="card-title text-3xl font-bold">{{ project.title }}</div>
                                <div class="card-sub-title mt-2">
                                    <p :class="{'line-clamp-2': !project.expanded}">
                                        {{ project.description }}
                                    </p>
                                    <button @click="toggleExpand(index)" class="text-blue-400 underline mt-2">
                                        {{ project.expanded ? 'Read less' : 'Read more' }}
                                    </button>
                                </div>
                                
                                <div class="card-skills mt-5">
                                    <ul class="flex gap-4">
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
    const projects = ref([
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
            target: '_blank',
            expanded: false 
        },
        {
            thumbnail: portfolioApp,
            title: 'My Portfolio',
            description: `A personal portfolio website built with Nuxt and Tailwind CSS, showcasing my projects and skills.`,
            skills: [
                {text: 'Nuxt', icon: 'logos:nuxt-icon'},
                {text: 'Tailwind', icon: 'logos:tailwindcss-icon'},
            ],
            url: 'https://jomel-malvar.vercel.app/',
            target: '_blank',
            expanded: false 
        },  
    ]);

    const toggleExpand = (index) => {
        projects.value[index].expanded = !projects.value[index].expanded;
    };
</script>

<style scoped>

</style>
