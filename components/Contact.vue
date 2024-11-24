<template>
    <div>
        <div class="section">
            <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
                <div class="text-4xl font-bold text-center">Contact</div>
                <div class="text-lg text-center tracking-wide mt-2">Let's talk about something cool together.</div>
            </div>
            <div class="grid lg:grid-cols-2 mt-20">
                <div class="flex justify-center items-center" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000">
                    <img :src="avatar" class="rounded-full max-w-100" />
                </div>
                <div class="flex justify-center items-center" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000">
                    <UForm class="space-y-4 w-full lg:w-[550px]" :state="dataForm" @submit.prevent="sendEmail">
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

    const mail = useMail();
    const toast = useToast();

    const isLoading = ref(false);

    const dataForm = ref({
        name: '',
        email: '',
        message: ''
    });

    const sendEmail = async () => {
        isLoading.value = true;
        try {
            await mail.send({
            subject: `Message from ${dataForm.value.name}`,
            html: `
                <div>Name: ${dataForm.value.name}</div>
                <div>Email: ${dataForm.value.email}</div>
                <div>Message: ${dataForm.value.message}</div>
            `, 
            });
            isLoading.value = false;
            toast.add({ title: 'Message sent successfully!', color: 'blue', type: 'success'});  
            dataForm.value = { name: '', email: '', message: '' }; // Reset form
        } catch (error) {
            console.error('Email error:', error);
            isLoading.value = true;
            toast.add({ title: 'Failed to send.', color: 'blue', type: 'error'});
        } 
    };
</script>

