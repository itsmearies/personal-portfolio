<template>
    <div class="min-h-screen">
        <nav>
           <Nav></Nav>
        </nav>

        <main class="container mx-auto pt-[83px] px-5 md:px-20">
            <slot />  
        </main> 

        <footer>
            <Footer></Footer>
        </footer> 
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>