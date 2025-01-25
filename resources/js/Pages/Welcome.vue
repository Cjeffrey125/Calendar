<template>
    <Head title="Welcome" />

    <div class="flex min-h-screen w-full flex-col">
        <Header 
            :can-login="canLogin" 
            :can-register="canRegister" 
        />

        <main class="flex flex-1 flex-col items-center justify-center p-4 md:p-8">
            <div class="flex w-full max-w-6xl flex-col items-center justify-center gap-8 md:flex-row">
                <div class="flex-1 text-center md:text-left">
                    <h1 class="text-5xl font-bold">
                        Stay Organized and Plot Every Moment.
                    </h1>
                    <p class="text-2xl mt-4 ">
                        Simplify your schedule, manage events effortlessly.    
                    </p>

                    <Link :href="route('register')">
                        <Button class="mt-4 px-12 py-6 text-lg flex justify-start">
                                Get Started
                        </Button>
                    </Link>
                </div>

                <div class="flex-1 flex items-center justify-center">
                    <img src="/images/test.png" alt="Test Image" style="width: 100%; height: auto;" />
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { Head, Link } from '@inertiajs/vue3';
import { Button } from '@/components/ui/button';
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
