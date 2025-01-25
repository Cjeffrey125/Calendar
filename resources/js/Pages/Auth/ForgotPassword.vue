<template>
    <Head title="Forgot Password" />

    <div class="flex flex-col min-h-screen">
        <Header />

        <main class="flex-grow flex items-center justify-center p-4">
            <Card class="w-full max-w-sm mx-auto">
                <div class="flex justify-center items-center order-1 lg:order-2">
                    <img src="/images/fpass.jpg" alt="Test Image" class="w-full max-w-md lg:max-w-full lg:w-auto"/>
                </div>
                <CardHeader>
                    <CardTitle class="text-center text-2xl">Forgot Password</CardTitle>
                    <CardDescription class="text-center">
                        Forgot your password? No problem. Just let us know your email address and we will email you a password reset
                        link that will allow you to choose a new one.
                    </CardDescription>
                </CardHeader>

                <form @submit.prevent="submit">
                    <CardContent class="grid gap-4">
                        <div class="grid gap-2">
                            <Label for="email">Email</Label>
                            <Input id="email" type="email" v-model="form.email" placeholder="Existing Email" required autofocus autocomplete="username"/>
                            <div v-if="form.errors.email" class="text-red-600 text-sm mt-2">
                                {{ form.errors.email }}
                            </div>
                        </div>
                    </CardContent>

                    <CardFooter class="flex flex-col">
                        <Button class="w-full" :class="{ 'opacity-50 cursor-not-allowed': form.processing }" :disabled="form.processing">
                            Email Password Reset Link
                        </Button>

                        <div v-if="status" class="mt-4 font-medium text-sm text-green-600">
                            {{ status }}
                        </div>
                    </CardFooter>
                </form>    
            </Card>
        </main>
    </div>
</template>

<script setup lang="ts">
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Head, useForm } from '@inertiajs/vue3';
import Header from '@/Layouts/Header.vue';

defineProps({
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
});

const submit = () => {
    form.post(route('password.email'), {
        onSuccess: () => {
            form.reset();
        }
    });
};
</script>
