<template>
    <Head title="Events" />

    <div class="flex min-h-screen w-full flex-col">
        <Header 
            :can-login="canLogin" 
            :can-register="canRegister" 
        />

        <main class="flex flex-1 flex-col items-center justify-start mt-24 p-4 md:p-8">
            <h1 class="text-3xl">
                School Events
            </h1>
            <div class="flex w-full max-w-6xl flex-col items-center gap-8 md:flex-row mb-2">
                <div class="flex w-full md:w-auto md:ml-auto">
                    <EventToggle />
                </div>
            </div>
            <div class="flex w-full max-w-6xl flex-col items-center gap-8 md:flex-row">
                <EventCalendar />
            </div>
        </main>

    </div>
</template>

<script setup>
import { Head, Link } from '@inertiajs/vue3';
import EventList from '@/components/EventList.vue';
import EventCalendar from '@/Components/EventCalendar.vue';
import Header from '@/Layouts/Header.vue';
import EventToggle from '@/Components/EventToggle.vue';


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
