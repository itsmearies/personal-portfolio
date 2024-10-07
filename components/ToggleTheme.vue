<template>
    <div>
      <ClientOnly>
        <UButton
          color="gray"
          variant="ghost"
          aria-label="Theme"
          @click="isDark = !isDark"
        >
          <UIcon
            :name="isDark ? 'heroicons-moon-20-solid' : 'heroicons-sun-20-solid'"
            class="icon-size"  
          />
        </UButton>
      </ClientOnly>
    </div>
  </template>

<script setup lang="ts">
    const colorMode = useColorMode()
    const isDark = computed({
        get () {
            return colorMode.value === 'dark'
        },
        set () {
            colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
        }
    })
</script>

<style lang="scss" scoped>

</style>
