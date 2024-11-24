<template>
  <div>
    <UButton class="lg:hidden" color="gray" variant="ghost" @click="isOpen = true">
      <UIcon name="heroicons:list-bullet" class="icon-size"/>
    </UButton>
    
    <USlideover v-model="isOpen" side="left">
      <UCard class="flex flex-col flex-1">
        <template #header>
          <div class="flex items-center justify-between">
            <div class="nav-logo text-3xl italic">Jomel Malvar</div>
            <UButton color="gray" variant="ghost" icon="heroicons:x-mark" class="icon-size" @click="isOpen = false"/>
          </div>
        </template>

        <div class="">
          <ul class="flex flex-col gap-2">
            <li v-for="(link, index) in navLinks" :key="index" @click="isOpen = false">
              <ULink :to="`#${link.label}`" @click="setActiveLink(link.label)" class="flex items-center gap-3">
                <div>
                  <UIcon 
                    :name="link.icon" 
                    :class="['icon-size', { 'primary-color': activeLink === link.label }]" 
                  />
                </div>
                <div class="capitalize text-lg">
                  {{ link.label }}
                </div>
              </ULink> 
            </li>      
          </ul>
        </div>
      </UCard>
    </USlideover>
  </div>  
</template>

<script setup>
    const isOpen = ref(false);

    const navLinks = ref([
      {
        label: 'home',
        icon: 'heroicons:home',
        to: '#home'
      },
      {
        label: 'about',
        icon: 'heroicons:information-circle',
        to: '#about'
        
      },
      {
        label: 'skills',
        icon: 'heroicons:academic-cap',
        to: '#skills'
      },
      {
        label: 'projects',
        icon: 'heroicons:clipboard-document',
        to: '#projects'
      },
      {
        label: 'contact',
        icon: 'heroicons:phone',
        to: '#contact'
      },
    ]);

    const activeLink = ref('home'); // Default active link

    // Function to set the active link
    const setActiveLink = (linkText) => {
        activeLink.value = linkText;
    };
</script>

<style scoped>
  .nav-logo{
      font-family: "Pacifico", cursive;
  }  
</style>


