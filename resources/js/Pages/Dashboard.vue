<template>
    <Head title="Dashboard" />

    <Header/>


        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">Logged in!</div>
                </div>
            </div>
        </div>
</template>

<script setup>
import { Head } from '@inertiajs/vue3';
import Header from '@/Layouts/Header.vue'
</script>