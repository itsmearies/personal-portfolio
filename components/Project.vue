<template>
    <div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" ata-aos-easing="linear" data-aos-duration="1000">
            <div class="text-4xl font-bold text-center">Projects</div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
                <div v-for="(project, index) in projects" :key="index" class="card shadow-lg p-5 rounded-md dark:bg-gray-950">
                    <a :href="project.url" :target="project.target" class="flex flex-col gap-5">
                        <div class="card-url rounded-md h-[350px]">
                            <img :src=thumbnail alt="thumbnail" class="w-full h-full object-contain"/>
                        </div>
                        <div class="content leading-6">
                            <div class="card-title text-3xl font-bold">{{ project.title }}</div>
                            <div class="card-sub-title mt-2">{{ project.subTitle }}</div>
                            <div class="card-date mt-2">{{ project.date }}</div>    
                            <div class="card-skills">
                                <ul class="flex gap-2">
                                    <li v-for="(skill, index) in project.skills" :key="index">
                                        <UTooltip :text="skill.text" class="mt-2">
                                            <UIcon :name="skill.icon" class="icon-size" />
                                        </UTooltip>  
                                    </li>
                                </ul>
                            </div> 
                        </div>
                    </a> 
                </div>  
            </div>
        </div>
    </div>
</template>

<script setup>
    import thumbnail from './assets/images/thumbnail.png';
    const projects = ([
        {
            title: 'Weather App',
            subTitle: `A weather forecasting application built with Vue 3 and Vuetify. 
                    The app uses WeatherApi to fetch real-time weather data, providing users with accurate and up-to-date information.`,
            date: 'October 25, 2024',
            skills: [
                {text: 'Nuxt', icon: 'logos:nuxt-icon'},
                {text: 'Tailwind', icon: 'logos:tailwindcss-icon'},
                {text: 'Nuxt UI', icon: 'logos:nuxt-icon'},
            ],
            url: 'https://weather-app-flame-gamma-14.vercel.app/',
            target: '_blank'
        },  
        {
            title: 'Weather App',
            subTitle: `A weather forecasting application built with Vue 3 and Vuetify. 
                    The app uses WeatherApi to fetch real-time weather data, providing users with accurate and up-to-date information.`,
            date: 'October 25, 2024',
            skills: [
                {text: 'Nuxt', icon: 'logos:nuxt-icon'},
                {text: 'Tailwind', icon: 'logos:tailwindcss-icon'},
                {text: 'Nuxt UI', icon: 'logos:nuxt-icon'},
            ],
            url: 'https://weather-app-flame-gamma-14.vercel.app/',
            target: '_blank'
        },  
        {
            title: 'Weather App',
            subTitle: `A weather forecasting application built with Vue 3 and Vuetify. 
                    The app uses WeatherApi to fetch real-time weather data, providing users with accurate and up-to-date information.`,
            date: 'October 25, 2024',
            skills: [
                {text: 'Nuxt', icon: 'logos:nuxt-icon'},
                {text: 'Tailwind', icon: 'logos:tailwindcss-icon'},
                {text: 'Nuxt UI', icon: 'logos:nuxt-icon'},
            ],
            url: 'https://weather-app-flame-gamma-14.vercel.app/',
            target: '_blank'
        },  
        {
            title: 'Weather App',
            subTitle: `A weather forecasting application built with Vue 3 and Vuetify. 
                    The app uses WeatherApi to fetch real-time weather data, providing users with accurate and up-to-date information.`,
            date: 'October 25, 2024',
            skills: [
                {text: 'Nuxt', icon: 'logos:nuxt-icon'},
                {text: 'Tailwind', icon: 'logos:tailwindcss-icon'},
                {text: 'Nuxt UI', icon: 'logos:nuxt-icon'},
            ],
            url: 'https://weather-app-flame-gamma-14.vercel.app/',
            target: '_blank'
        },  
        {
            title: 'Weather App',
            subTitle: `A weather forecasting application built with Vue 3 and Vuetify. 
                    The app uses WeatherApi to fetch real-time weather data, providing users with accurate and up-to-date information.`,
            date: 'October 25, 2024',
            skills: [
                {text: 'Nuxt', icon: 'logos:nuxt-icon'},
                {text: 'Tailwind', icon: 'logos:tailwindcss-icon'},
                {text: 'Nuxt UI', icon: 'logos:nuxt-icon'},
            ],
            url: 'https://weather-app-flame-gamma-14.vercel.app/',
            target: '_blank'
        },  
        {
            title: 'Weather App',
            subTitle: `A weather forecasting application built with Vue 3 and Vuetify. 
                    The app uses WeatherApi to fetch real-time weather data, providing users with accurate and up-to-date information.`,
            date: 'October 25, 2024',
            skills: [
                {text: 'Nuxt', icon: 'logos:nuxt-icon'},
                {text: 'Tailwind', icon: 'logos:tailwindcss-icon'},
                {text: 'Nuxt UI', icon: 'logos:nuxt-icon'},
            ],
            url: 'https://weather-app-flame-gamma-14.vercel.app/',
            target: '_blank'
        },  
    ])
</script>

<style lang="scss" scoped>

</style>