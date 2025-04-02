<template>
    <Head title="Events" />

    <div class="flex min-h-screen w-full flex-col">
        <Header 
            :can-login="canLogin" 
            :can-register="canRegister" 
        />

        <main class="flex flex-1 flex-col items-center justify-start mt-24 p-4 md:p-8">
  

            <div class="flex w-full max-w-6xl flex-col items-center gap-8 md:flex-row mb-2">
                <div>
                    <h3 class="text-3xl font-semibold mb-4 text-left w-full">
                        University Calendar
                    </h3>
                </div>

                <div class="flex w-full md:w-auto md:ml-auto">
                    <EventToggle v-model="selectedView" />
                </div>
            </div>

            <div class="flex w-full max-w-6xl flex-col items-center gap-8 md:flex-row">
                <EventList v-if="selectedView === 'List'" />
                <EventCalendar v-if="selectedView === 'Calendar'" />
            </div>
        </main>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Head, Link } from '@inertiajs/vue3';
import EventList from '@/Components/EventList.vue';
import EventCalendar from '@/Components/EventCalendar.vue';
import Header from '@/Layouts/Header.vue';
import EventToggle from '@/Components/EventToggle.vue';

const selectedView = ref('List');

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
