<template>
    <Head title="Welcome" />

    <div class="flex min-h-screen w-full flex-col">
        <Toaster />

        <Header 
            :can-login="canLogin" 
            :can-register="canRegister" 
        />
            <main ref="scrollContainer" class="scroll-container">
                <section class="section">
                    <div class="flex w-full max-w-6xl flex-col items-center justify-center gap-8 md:flex-row">
                        <div class="flex-1 text-center md:text-left">
                            <h1 class="text-5xl font-bold">
                                Discover Upcoming Events and Stay Engaged.
                            </h1>
                            <p class="text-2xl mt-4">
                                Don't miss our upcoming School Events and Activities
                            </p>

                            <a href="#events">
                                <Button variant="lightGreen" class="mt-4 px-12 py-6 text-lg flex justify-start">
                                    Check Events
                                </Button>
                            </a>                       
                        </div>

                        <div class="flex-1 flex items-center justify-center">
                            <img src="/images/test.jpg" alt="Test Image" style="width: 100%; height: auto;" />
                        </div>
                    </div>
                </section>

                <section class="section" id="events">
                    <Events />
                </section>

                <section class="section">
                    <div class="flex w-full max-w-6xl flex-col items-center justify-center gap-8 md:flex-row">
                        
                        <div class="flex-1 text-center md:text-left bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 class="text-3xl font-semibold mb-4">Mission</h3>
                            <p class="text-lg text-gray-700 leading-relaxed">
                                The mission of Laguna Science and Technology College is to train young men and women to become productive citizens fully
                                equipped with rightful skills and values that the modern industries demand.
                            </p>
                        </div>

                        <div class="flex-1 text-center md:text-left bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 class="text-3xl font-semibold mb-4">Vision</h3>
                            <p class="text-lg text-gray-700 leading-relaxed">
                                Laguna Science and Technology College envisions itself as a growing institution of learning and developing individuals technically,
                                technologically, and professionally, thus becoming useful citizens of the nation contributing to its greatness.
                            </p>
                        </div>

                    </div>
                </section>

                <section class="section">
                    <div class="flex w-full max-w-6xl flex-col items-center justify-center gap-8 md:flex-row-reverse">
                        <div class="flex-1 flex items-center justify-center">
                            <img src="/images/objectives.jpg" alt="Objectives Image" style="width: 100%; height: auto;" />
                        </div>

                        <div class="flex-1 text-center md:text-left p-8">
                            <h3 class="text-3xl font-semibold mb-4">Our Objectives</h3>
                            <ul class="list-disc pl-5 mt-4 text-lg text-gray-700">
                                <li>Provide individuals different opportunities to become God-fearing, self-disciplined, and skilled.</li>
                                <li>Join hands with the government and private entities in meeting the current and future needs of the labor market.</li>
                                <li>Intensify the linkages in providing employment to current and future graduates.</li>
                                <li>Get involved and realize the value and importance of becoming entrepreneurs with the aid of technical and vocational courses being offered.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section class="section">
                    <div class="flex w-full max-w-6xl flex-col items-center justify-center gap-8 md:flex-row">
                        <div class="flex-1 text-center md:text-left">
                            <h3 class="text-3xl font-bold">
                                Contact Us!
                            </h3>
                            <p class="text-2xl mt-4 ">
                                Talk to a member of our team!
                            </p>

                            <div class="flex flex-col w-full">
                                <input v-model="name" type="text" placeholder="Name" class="w-full px-4 py-2 mt-4 border border-gray-300 rounded-md" />
                                <input v-model="email" type="email" placeholder="Email" class="w-full px-4 py-2 mt-4 border border-gray-300 rounded-md" />
                                <textarea v-model="message" placeholder="Message" class="w-full px-4 py-2 mt-4 border border-gray-300 rounded-md" rows="4"></textarea>

                                <Button @click="submitForm" variant="lightGreen" class="w-20 ml-auto mt-4">
                                    Submit
                                </Button>
                            </div>
                        </div>

                        <div class="flex-1 flex items-center justify-center">
                            <img src="/images/contact.jpg" alt="Test Image" style="width: 100%; height: auto;" />
                        </div>
                    </div>

                    <div class="flex items-center space-x-8">
                        <div class="flex items-center space-x-2">
                            <div class="flex items-center justify-center bg-emerald-500 text-white rounded-full p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                            </div>
                            <span>0912 123 4567</span>
                        </div>
                        <hr>
                        <div class="flex items-center space-x-2">
                            <div class="flex items-center justify-center bg-emerald-500 text-white rounded-full p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                            </div>
                            <span>school@email.com</span>
                        </div>
                    </div>
                </section>

            </main>
        </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { Head, Link } from '@inertiajs/vue3';
import { Button } from '@/Components/ui/button';
import { useToast } from '@/Components/ui/toast/use-toast';
import { Toaster } from '@/Components/ui/toast'
import Events from './Events.vue';
import Header from '@/Layouts/Header.vue'


defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
});

const { toast } = useToast();
const scrollContainer = ref(null);
const name = ref('');
const email = ref('');
const message = ref('');
const status = ref('');

onMounted(() => {
    scrollContainer.value.addEventListener('wheel', (event) => {
        event.preventDefault();

        let scrollSpeed = event.deltaY * 1.5;
        scrollContainer.value.scrollBy({
            top: scrollSpeed,
            behavior: 'smooth'
        });
    });
});


const submitForm = () => {
    if (!name.value || !email.value || !message.value) {
        toast({
            title: 'Missing Fields',
            description: 'All fields are required!',
            variant: 'destructive',
            duration: 5000,
        });
        return;
    }

    const payload = {
        name: name.value,
        email: email.value,
        message: message.value,
        status: "pending"
    };

    axios.post('/api/inquiries', payload)
        .then(response => {
            toast({
                title: 'Success!',
                description: response.data.message || 'Your inquiry has been submitted.',
                variant: 'success',
                duration: 5000,
            });

            name.value = '';
            email.value = '';
            message.value = '';
        })
        .catch(error => {
            toast({
                title: 'Error',
                description: error.response?.data?.message || 'There was an issue submitting your inquiry.',
                variant: 'destructive',
                duration: 5000,
            });
        });
};


</script>

<style scoped>
.scroll-container {
    height: 100vh;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
}

.scroll-container::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
}

.scroll-container {
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.section {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    scroll-snap-align: start;
    opacity: 0;
    visibility: hidden;
    animation: fadeIn 1s ease-out forwards;
}

.section:nth-child(1) { animation-delay: 0.1s; }
.section:nth-child(2) { animation-delay: 0.3s; }
.section:nth-child(3) { animation-delay: 0.5s; }
.section:nth-child(4) { animation-delay: 0.7s; }

@keyframes fadeIn {
    from {
        visibility: visible;
        opacity: 0;
    }
    to {
        visibility: visible;
        opacity: 1;
    }
}

</style>
