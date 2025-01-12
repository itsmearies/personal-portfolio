<template>
    <div class="section">
        <div>
            <div class="text-4xl font-bold text-center">Skills</div>
            <div class="lg:px-[10rem] mt-16">
                <ul class="flex flex-col gap-[3rem]">
                    <NuxtMarquee direction="right" speed=30>
                        <li class="mx-7" v-for="(skill, index) in primarySkills" :key="index">
                            <UIcon :name="skill.icon" class="text-[3.5rem]"/>
                        </li>
                    </NuxtMarquee>
                    <NuxtMarquee direction="left" speed=30>
                        <li class="mx-7" v-for="(skill, index) in secondarySkills" :key="index">
                            <UIcon :name="skill.icon" class="text-[3.5rem]"/>
                        </li>
                    </NuxtMarquee>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
    const primarySkills = [
        {text: 'HTML', icon: 'vscode-icons:file-type-html'},
        {text: 'CSS', icon: 'vscode-icons:file-type-css'},
        {text: 'Javascript', icon: 'logos:javascript'},
        {text: 'PHP', icon: 'logos:php'},
        {text: 'MYSQL', icon: 'logos:mysql'},
        {text: 'Vue', icon: 'logos:vue'},
        {text: 'Nuxt', icon: 'logos:nuxt-icon'},
        {text: 'Vuetify', icon: 'logos:vuetifyjs'},
    ]

    const secondarySkills = [
        {text: 'React', icon: 'logos:react'},
        {text: 'Next', icon: 'logos:nextjs-icon'},
        {text: 'MongoDB', icon: 'logos:mongodb-icon'},
        {text: 'Firebase', icon: 'logos:firebase'}, 
        {text: 'Laravel', icon: 'logos:laravel'},
        {text: 'Tailwind', icon: 'logos:tailwindcss-icon'},
        {text: 'Boostrap', icon: 'logos:bootstrap'},
        {text: 'Github', icon: 'logos:github-icon'},
        {text: 'Git', icon: 'logos:git-icon'},
    ]
</script>

<style scoped>

</style>