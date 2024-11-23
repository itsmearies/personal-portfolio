<template>
    <div class="bg-[url('@/assets/images/bubble.svg')] bg-no-repeat bg-cover">
        <div class="section">
            <div class="grid md:grid-cols-2 gap-16 py-[2rem] md:py-[4.5rem]">
                <div class="typography flex flex-col justify-center items-center md:items-start gap-3 
                    order-2 text-center md:text-start" 
                    data-aos="fade-up" ata-aos-easing="linear"
                >
                    <div class="title font-bold text-6xl">Hi, I'm Jomel Malvar</div>
                    <div class="text-lg">
                        Let's continue our journey together and bring the experience to success.
                    </div>
                    <div class="social-links mt-5">
                        <ul class="flex gap-6">
                            <li v-for="(link, index) in socialLinks" :key="index">
                                <NuxtLink :to="link.to" target="_blank">
                                    <UTooltip :text="link. label" class="mt-2">
                                        <UIcon :name="link.icon" class="icon-size" />
                                    </UTooltip>   
                                </NuxtLink> 
                            </li>
                        </ul>
                    </div>
                    <div class="mt-5">
                        <NuxtLink to="#contact">
                            <UButton label="Get in touch" class="primary-color dark:text-white p-3" size="xl"/> 
                        </NuxtLink>
                    </div>   
                </div>
                <div class="avatar flex justify-center md:justify-end order-1 md:order-2">
                    <img :src=avatar alt="avatar" class="rounded-full max-w-100 md:max-w-[600px]" data-aos="flip-left" ata-aos-easing="linear"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import avatar from './assets/images/avatar.jpg';

    const { socialLinks } = useSocialLinks();
</script>
