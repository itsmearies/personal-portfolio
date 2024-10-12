<template>
    <div>
        <div class="section">
            <div data-aos="fade-up" ata-aos-easing="linear" data-aos-duration="1000">
                <div class="text-4xl font-bold text-center">Contact</div>
                <div class="text-lg text-center tracking-wide mt-2">Let's talk about something cool together.</div>
            </div>
            <div class="grid md:grid-cols-2 mt-20">
                <div class="flex justify-center items-center" data-aos="fade-left" ata-aos-easing="linear" data-aos-duration="1000">
                    <img :src=avatar class="rounded-full max-w-100" />
                </div>
                <div class="flex justify-center items-center" data-aos="fade-right" ata-aos-easing="linear" data-aos-duration="1000">
                    <UForm class="space-y-4 w-full md:w-[550px]" :state="dataForm" @submit.prevent="sendEmail">
                        <UFormGroup label="Name" name="name">
                            <UInput type="text" icon="heroicons:user" size="xl" placeholder="John Doe" v-model="dataForm.name" required/>
                        </UFormGroup>

                        <UFormGroup label="Email" name="email">
                            <UInput type="email" icon="heroicons:envelope" size="xl" placeholder="example@gmail.com" v-model="dataForm.email" required/>
                        </UFormGroup>

                        <UFormGroup label="Message" name="message">
                            <UTextarea variant="outline" size="xl" :rows="7" autoresize v-model="dataForm.message" required/>
                        </UFormGroup>

                        <UFormGroup class="flex justify-end">
                            <UButton type="submit" size="xl" :loading="isLoading" class="primary-color dark:text-white">
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
    import emailjs from '@emailjs/browser';

    const toast = useToast();

    const isLoading = ref(false);

    const dataForm = ref({
        name: '',
        email: '',
        message: ''
    });

    const sendEmail = () => {
        // Set loading state to true before sending the email
        isLoading.value = true;

        emailjs.send('service_hfxk05s', 'template_zl0toxw', dataForm.value, 'Fu01RPiEFPMbYeSpV')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                isLoading.value = false; // Set loading to false on success
                toast.add({ title: 'Message sent successfully!', color: 'blue', type: 'success'});  

                // Clear the form 
                dataForm.value.name = '';
                dataForm.value.email = '';
                dataForm.value.message = '';
            })
            .catch((error) => {
                console.log('FAILED...', error);
                isLoading.value = false; // Set loading to false on failure
                toast.add({ title: 'Failed to send.', color: 'blue', type: 'error'});
            });
    };
</script>

<style lang="" scoped>

</style>