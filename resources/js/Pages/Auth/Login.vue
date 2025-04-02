<template>
    <Head title="Log in" />

    <div class="flex flex-col min-h-screen">
        <Header />
        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <main class="flex-grow flex items-center justify-center p-4">
            <Card class="w-full max-w-3xl mx-auto">
                <CardContent class="grid lg:grid-cols-2 gap-8 items-center">
                    <div class="flex flex-col items-center justify-center space-y-4 order-2 lg:order-1">
                        <div class="space-y-4 w-full max-w-md">
                            <CardHeader class="text-center">
                                <CardTitle class="text-3xl font-bold">Login</CardTitle>
                                <CardDescription>Enter your email below to login to your account</CardDescription>
                            </CardHeader>
                        </div>

                        <div class="space-y-4 w-full max-w-md">
                            <div>
                                <Label for="email">Email</Label>
                                <Input id="email" type="email" placeholder="m@example.com" v-model="form.email" required />
                                    <div v-if="form.errors.email" class="text-red-500 text-sm">
                                        {{ form.errors.email }}
                                    </div>
                            </div>

                            <div>
                                <Label for="password">Password</Label>
                                <Input id="password" type="password" v-model="form.password" required />
                                    <div v-if="form.errors.password" class="text-red-500 text-sm">
                                        {{ form.errors.password }}
                                    </div>

                                <Link v-if="canResetPassword" :href="route('password.request')" class="underline text-sm text-gray-600 hover:text-gray-900" >
                                    Forgot your password?
                                </Link>
                            </div>

                            <Button variant="lightGreen" type="submit" class="w-full" :class="{ 'opacity-50': form.processing }" :disabled="form.processing" @click.prevent="submit" >
                                Login
                            </Button>

                            <div class="mt-4 text-center text-sm">
                                Don't have an account?
                                <Link :href="route('register')" class="underline text-sm text-gray-600 hover:text-gray-900">
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-center items-center order-1 lg:order-2">
                        <img src="/images/test.jpg" alt="Test Image" class="w-full max-w-md lg:max-w-full lg:w-auto"/>
                    </div>
                </CardContent>
            </Card>
        </main>
    </div>
</template>

<script setup lang="ts">
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card';
import { Head, useForm, Link } from '@inertiajs/vue3';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import Header from '@/Layouts/Header.vue';

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
    password: '',
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<style scoped>
img {
    transition: transform 0.3s ease;
}

@media (max-width: 768px) {
    img {
        max-width: 50%;
    }
}
</style>
