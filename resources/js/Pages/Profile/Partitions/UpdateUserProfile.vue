<template>
        <Toaster />
            <Card class = "mt-24">
                <CardHeader>
                    <span class="font-bold text-2xl">Profile Information</span>
                    <CardDescription>
                        Update your account's profile information and email address.
                    </CardDescription>
                </CardHeader>
              
                
                <form @submit.prevent="handleSubmit" class="space-y-6">
                    <CardContent>
                        <div>
                            <Label for="name" class="block text-sm font-medium text-gray-700">Name</Label>
                            <Input
                                id="name"
                                v-model="form.name"
                                type="text"
                                required
                                autofocus
                                class="mt-1 block w-full"
                                autocomplete="name"
                            />
                        </div>

                        <div>
                            <Label for="email" class="block text-sm font-medium text-gray-700">Email</Label>
                            <Input
                                id="email"
                                v-model="form.email"
                                type="email"
                                required
                                class="mt-1 block w-full"
                                autocomplete="email"
                            />
                        </div>

                        <div v-if="mustVerifyEmail && user.email_verified_at === null">
                            <p class="text-sm mt-2 text-gray-800">
                                Your email address is unverified.
                                <Link
                                    :href="route('verification.send')"
                                    method="post"
                                    as="button"
                                    class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Click here to re-send the verification email.
                                </Link>
                            </p>

                            <div
                                v-show="status === 'verification-link-sent'"
                                class="mt-2 font-medium text-sm text-green-600"
                            >
                                A new verification link has been sent to your email address.
                            </div>
                        </div>
                    </CardContent>

                    <CardFooter>
                        <div class="flex items-center gap-4 ml-auto">
                            <Button :disabled="form.processing" class="bg-green-600 text-white hover:bg-green-700">
                                Save
                            </Button>
                        </div>
                    </CardFooter>

                </form>
            </Card>   
</template>

<script setup>
import { useForm, usePage, Link } from '@inertiajs/vue3';
import { Button } from '@/Components/ui/button';
import { Toaster } from '@/Components/ui/toast';
import { useToast } from '@/Components/ui/toast/use-toast';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Card, CardHeader, CardDescription, CardContent, CardFooter } from '@/Components/ui/card';
import Header from '@/Layouts/Header.vue';

defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const user = usePage().props.auth.user;
const { toast } = useToast();

const form = useForm({
    name: user.name,
    email: user.email,
});

const handleSubmit = async () => {
    form.processing = true;

    try {
        await form.patch(route('profile.update'));

        toast({
            title: 'Success',
            description: 'User updated successfully.',
            variant: 'success',
        });
    } catch (error) {
        toast({
            title: 'Error',
            description: 'Something went wrong. Please try again.',
            variant: 'error',
        });
    } finally {
        form.processing = false;
    }
};
</script>

<style scoped>
</style>
