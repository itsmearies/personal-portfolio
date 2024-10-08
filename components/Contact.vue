<template>
    <div>
        <div class="overflow-hidden">
            <div data-aos="fade-up" ata-aos-easing="linear" data-aos-duration="1000">
                <div class="text-4xl font-bold text-center">Contact</div>
                <div class="text-lg text-center tracking-wide mt-2">Let's talk about something cool together</div>
            </div>
            <div class="grid md:grid-cols-2 mt-20">
                <div class="flex justify-center items-center" data-aos="fade-left" ata-aos-easing="linear" data-aos-duration="1000">
                    <img :src=avatar class="rounded-full max-w-100" />
                </div>
                <div class="flex justify-center items-center" data-aos="fade-right" ata-aos-easing="linear" data-aos-duration="1000">
                    <UForm class="space-y-4 w-full md:w-[550px]">
                        <UFormGroup label="Name" name="name">
                            <UInput type="text" icon="heroicons:user" size="xl" placeholder="John Doe" />
                        </UFormGroup>

                        <UFormGroup label="Email" name="email">
                            <UInput type="email" icon="heroicons:envelope" size="xl" placeholder="example@gmail.com" />
                        </UFormGroup>

                        <UFormGroup label="Message" name="password">
                            <UTextarea variant="outline" size="xl" :rows="7" autoresize />
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
    import avatar from './assets/images/message.svg';
</script>

<style lang="css" scoped>
    #v-0-11{
        background-color: red !important;
    }
</style>