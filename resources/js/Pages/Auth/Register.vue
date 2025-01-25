<template>
    <Head title="Register" />

    <div class="flex flex-col min-h-screen">
        <Header />

        <main class="flex-grow flex items-center justify-center p-4">
            <Card class="w-full max-w-3xl mx-auto">
                <CardContent class="grid lg:grid-cols-2 gap-8 items-center lg:flex-row-reverse">
                    <div class="flex justify-center items-center order-1 lg:order-1">
                        <img src="/images/test2.jpg" alt="Test Image" class="w-full max-w-md lg:max-w-full lg:w-auto" />
                    </div>

                    <div class="flex flex-col items-center justify-center space-y-4 order-2 lg:order-2">
                        <div class="space-y-4 w-full max-w-md">
                            <CardHeader class="text-center">
                                <CardTitle class="text-3xl font-bold">Register</CardTitle>
                                <CardDescription>Enter your information to create an account</CardDescription>
                            </CardHeader>

                            <form @submit.prevent="submit" class="space-y-4">
                                <div>
                                    <Label for="name">Name</Label>
                                    <Input id="name" type="text" class="mt-1 block w-full" v-model="form.name" required autofocus autocomplete="name"/>
                                    <InputError class="mt-2" :message="form.errors.name" />
                                </div>

                                <div>
                                    <Label for="email">Email</Label>
                                    <Input id="email" type="email" class="mt-1 block w-full" v-model="form.email" required autocomplete="username"/>
                                    <InputError class="mt-2" :message="form.errors.email" />
                                </div>

                                <div>
                                    <Label for="password">Password</Label>
                                    <Input id="password" type="password" class="mt-1 block w-full" v-model="form.password" required autocomplete="new-password"/>
                                    <InputError class="mt-2" :message="form.errors.password" />
                                </div>

                                <div>
                                    <Label for="password_confirmation">Confirm Password</Label>
                                    <Input id="password_confirmation" type="password" class="mt-1 block w-full" v-model="form.password_confirmation" required autocomplete="new-password"/>
                                    <InputError class="mt-2" :message="form.errors.password_confirmation" />
                                </div>

                                <div class="flex items-center justify-end mt-4">
                                    <Button class="w-full" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                        Register
                                    </Button>
                                </div>

                                <div class="mt-4 text-center text-sm">
                                    Already have an account?
                                    <Link :href="route('login')" class="underline text-sm text-gray-600 hover:text-gray-900">
                                        Sign In
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </main>
    </div>
</template>

<script setup lang="ts">
import InputError from '@/Components/InputError.vue';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Head, useForm, Link } from '@inertiajs/vue3';
import Header from '@/Layouts/Header.vue';

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
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
