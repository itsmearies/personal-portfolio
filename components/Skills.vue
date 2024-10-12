<template>
    <div class="section" data-aos="fade-up" data-aos-anchor-placement="top-center" ata-aos-easing="linear" data-aos-duration="1000">
        <div>
            <div class="text-4xl font-bold text-center">Skills</div>
            <div class="mt-16 md:px-[6rem]">
                <ul class="flex justify-center flex-wrap gap-5 gap-y-[3rem]">
                    <li v-for="(skill, index) in skills" :key="index">
                        <UTooltip :text="skill.text" class="mt-2">
                            <UIcon :name="skill.icon" class="text-[4.5rem]"/>
                        </UTooltip>  
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
    const skills = ([
        {text: 'HTML', icon: 'vscode-icons:file-type-html'},
        {text: 'CSS', icon: 'vscode-icons:file-type-css'},
        {text: 'Javascript', icon: 'logos:javascript'},
        {text: 'PHP', icon: 'logos:php'},
        {text: 'MYSQL', icon: 'logos:mysql'},
        {text: 'Vue', icon: 'logos:vue'},
        {text: 'Nuxt', icon: 'logos:nuxt-icon'},
        {text: 'Vuetify', icon: 'logos:vuetifyjs'},
        {text: 'Firebase', icon: 'logos:firebase'},
        {text: 'Laravel', icon: 'logos:laravel'},
        {text: 'Tailwind', icon: 'logos:tailwindcss-icon'},
        {text: 'Boostrap', icon: 'logos:bootstrap'},
        {text: 'Github', icon: 'logos:github-icon'},
        {text: 'Git', icon: 'logos:git-icon'},
    ])
</script>

<style scoped>

</style>