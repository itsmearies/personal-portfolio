<template>
    <div>
        <div class="section">
            <div class="grid md:grid-cols-2 gap-16 py-[2rem] md:py-[4.5rem]">
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
                
                <!-- Modal -->
                <UModal v-model="isOpen" prevent-close>
                    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                        <template #header>
                            <div class="flex items-center justify-between">
                                <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                                    My Resume
                                </h3>
                                <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
                            </div>
                        </template>

                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eligendi! Nam sapiente repellendus dignissimos libero non? Nostrum debitis quisquam recusandae, accusantium itaque aliquam nam facilis! Quae maxime minus libero officia voluptates, deserunt consequuntur illo et, asperiores magnam ipsam voluptas ut quos nulla sunt placeat totam temporibus quidem non recusandae laboriosam. Nemo assumenda iure voluptate nulla cupiditate placeat quo eum autem iusto explicabo quae unde, fugiat molestias quod aliquid ducimus dolores, iste animi officia distinctio doloribus, quos perspiciatis. Perspiciatis maxime impedit voluptatem sunt consectetur a doloremque natus quaerat aliquam asperiores provident illum blanditiis deserunt, dignissimos animi quae incidunt illo atque vitae.
                        </div>

                        <template #footer>
                            <UButton label="Download" class="p-3">
                                <template #trailing>
                                    <UIcon name="heroicons:arrow-down-tray-16-solid" class="w-5 h-5" />
                                </template>
                            </UButton>
                        </template>
                    </UCard>
                </UModal>
            </div>
        </div>
    </div>
</template>

<script setup>
    import avatar from './assets/images/avatar.jpg';

    const { socialLinks } = useSocialLinks();
    const isOpen = ref(false);
</script>
