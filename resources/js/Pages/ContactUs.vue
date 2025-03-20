<template>
    <Head title="Events" />

    <div class="flex min-h-screen w-full flex-col">
        <Header 
            :can-login="canLogin" 
            :can-register="canRegister" 
        />

        <main class="flex flex-1 flex-col items-center justify-center p-4 md:p-8">
            <h1 class="text-5xl font-bold">
                Contact Us
            </h1>

        </main>

    </div>
</template>

<script setup>
import { Head, Link } from '@inertiajs/vue3';
import Header from '@/Layouts/Header.vue'


defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
});
</script>

<style>

</style>
