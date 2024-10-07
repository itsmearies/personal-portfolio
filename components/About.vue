<template>
    <div>
        <div data-aos="fade-up" ata-aos-easing="linear" data-aos-duration="1000">
            <div class="text-4xl font-bold text-center">About</div>
            <div class="grid md:grid-cols-2 mt-20">
                <div class="flex justify-center items-center">
                    <UIcon name="logos:nuxt-icon" class="w-[400px] h-[400px]" />
                </div>
                <div class="flex justify-center items-center">
                    <UForm class="space-y-4 w-full md:w-[550px]">
                        <UFormGroup label="Name" name="name">
                            <UInput type="text" icon="heroicons:user" size="xl" placeholder="John Doe" />
                        </UFormGroup>

                        <UFormGroup label="Email" name="email">
                            <UInput type="email" icon="heroicons:envelope" size="xl" placeholder="example@gmail.com" />
                        </UFormGroup>

                        <UFormGroup label="Message" name="password">
                            <UTextarea 
                            variant="outline" size="xl" :rows="7" autoresize />
                        </UFormGroup>

                        <UFormGroup class="flex justify-end">
                            <UButton type="submit" color="green" size="xl">
                                Submit 
                            </UButton>
                        </UFormGroup> 
                    </UForm>
                </div>
            </div> 
        </div>
    </div>
</template>

<script setup>
    
</script>

<style lang="scss" scoped>

</style>