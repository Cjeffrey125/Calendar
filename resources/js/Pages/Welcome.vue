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
                            <div class="flex items-center justify-between">
                                <h3 class="text-3xl font-semibold">Mission</h3>
                                <svg class="w-12 h-12" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#34D399">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path fill="#34D399" d="M311.133 257.95a15.074 15.074 0 0 1-12.845 17.026l-147.248 20.61-21.33 32.522-82.637 11.57 21.33-32.568-24.547 3.44c-.278 0-.555.12-.843.165a15.218 15.218 0 0 1-2.108.144 15.074 15.074 0 0 1-2.074-30.016c.29 0 .567 0 .855-.078l24.547-3.438-29.45-25.512 82.582-11.547 29.45 25.51 147.26-20.608a15.196 15.196 0 0 1 2.107-.145 15.085 15.085 0 0 1 14.953 12.923zm-36.704-38.546a32.4 32.4 0 0 1 10.847-10.326 23.427 23.427 0 0 1 13.422-3.04 27.875 27.875 0 0 1 13.542 5.047 44.557 44.557 0 0 1 11.924 12.59 66.342 66.342 0 0 1 8.386 19.134 77.48 77.48 0 0 1 2.562 21.995 67.895 67.895 0 0 1-3.494 19.966 46.132 46.132 0 0 1-8.54 15.352 28.163 28.163 0 0 1-12.402 8.552 23.382 23.382 0 0 1-13.765.255 32.012 32.012 0 0 1-12.512-7.122 45.478 45.478 0 0 1-5.734-6.2l-32.278 4.514a131.154 131.154 0 0 0 7.1 15.973 104.566 104.566 0 0 0 18.656 25.512 69.016 69.016 0 0 0 23.893 15.806 48.373 48.373 0 0 0 27.597 2.22 53.43 53.43 0 0 0 26.31-14.876c7.898-7.853 14.42-18.258 19.112-30.514a131.997 131.997 0 0 0 8.32-41.995 153.26 153.26 0 0 0-5.48-46.92 128.758 128.758 0 0 0-18.49-39.932c-7.6-10.726-16.417-18.946-25.78-24.403a52.998 52.998 0 0 0-27.962-7.62 48.573 48.573 0 0 0-26.278 8.718 69.88 69.88 0 0 0-20.165 21.897 107.505 107.505 0 0 0-11.99 29.516A137.144 137.144 0 0 0 237.68 235l31.192-4.37a49.172 49.172 0 0 1 5.557-11.226zm198.305-34.984c-10.926-35.274-27.287-64.757-46.842-87.374-18.557-21.518-39.544-36.26-61.118-44.213-20.155-7.41-40.564-8.74-59.953-4.248-18.058 4.204-35.196 13.466-50.603 27.62-14.42 13.21-26.09 29.626-35.185 47.807a233.224 233.224 0 0 0-19.29 56.57 286.023 286.023 0 0 0-5.856 60.674l22.582-3.16a209.143 209.143 0 0 1 5.047-40.344 166.26 166.26 0 0 1 15.972-42.926c7.365-13.4 16.716-25.124 27.997-34.087 11.89-9.44 24.88-14.986 38.3-16.64 14.165-1.774 28.773.744 42.938 7.51 14.863 7.1 29.084 18.78 41.485 34.774 12.856 16.572 23.515 37.46 30.66 61.917a225.515 225.515 0 0 1 8.74 74.65c-1.254 24.05-6.4 46.422-14.72 65.656-8.042 18.58-18.857 33.887-31.824 44.88-12.313 10.47-26.345 16.915-41.463 18.656a76.226 76.226 0 0 1-41.163-7.1c-12.313-5.722-23.826-14.485-34.03-25.51a162.212 162.212 0 0 1-25.724-37.637 204.584 204.584 0 0 1-14.542-38.578l-22.484 3.106a280.965 280.965 0 0 0 19.966 57.823 228.2 228.2 0 0 0 32.168 50.092c12.99 15.186 27.82 27.83 43.914 36.793 17.18 9.574 36.027 15.064 55.705 14.865 21.263-.21 41.44-7.022 59.52-19.778 19.356-13.654 36.005-33.897 48.617-59.432 13.244-26.82 21.697-58.788 24.048-93.64a300.742 300.742 0 0 0-12.856-108.76z"></path>
                                    </g>
                                </svg>
                            </div>
                            <p class="text-lg text-gray-700 leading-relaxed">
                                The mission of Laguna Science and Technology College is to train young men and women to become productive citizens fully
                                equipped with rightful skills and values that the modern industries demand.
                            </p>
                        </div>

                        <div class="flex-1 text-center md:text-left bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div class="flex items-center justify-between">
                                <h3 class="text-3xl font-semibold mb-4">Vision</h3>
                                <svg class="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="#34D399">
                                <g>
                                    <path d="M31,24c0,1.6-2.4,3.1-6,4v-9.5V12c3.6-0.9,6-2.4,6-4c0-2.8-6.7-5-15-5S1,5.2,1,8c0,1.6,2.4,3.1,6,4v7.4V28 c-3.6-0.9-6-2.4-6-4"
                                        style="fill:none;stroke:#34D399;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"/>
                                    <path d="M7,20c2.5-0.6,5.6-1,9-1c3.4,0,6.5,0.4,9,1"
                                        style="fill:none;stroke:#34D399;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"/>
                                    <line x1="1" y1="24" x2="1" y2="8" style="fill:none;stroke:#34D399;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"/>
                                    <line x1="31" y1="24" x2="31" y2="8" style="fill:none;stroke:#34D399;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"/>
                                    <polyline points="7,16 14,12 18,16 22,14 25,17" style="fill:none;stroke:#34D399;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"/>
                                    <circle cx="11.5" cy="8.5" r="1.5" style="fill:none;stroke:#34D399;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;"/>
                                </g>
                                </svg>
                            </div>
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
