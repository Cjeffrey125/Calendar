<script setup>
import { Button } from '@/Components/ui/button';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import Modal from '@/Components/Modal.vue';
import { Input } from '@/Components/ui/input';
import { Card, CardHeader, CardDescription, CardFooter } from '@/Components/ui/card';
import { useForm } from '@inertiajs/vue3';
import { ref, watch } from 'vue';
import { Toaster } from '@/Components/ui/toast';
import { useToast } from '@/Components/ui/toast/use-toast';

const confirmingUserDeletion = ref(false);
const passwordInput = ref(null);
const { toast } = useToast();

const form = useForm({
    password: '',
});

const confirmUserDeletion = () => {
    confirmingUserDeletion.value = true;
};

const deleteUser = async () => {
    form.processing = true;

    try {
        await form.delete(route('profile.destroy'), {
            preserveScroll: true,
        });
    } catch (error) {
        toast({
            title: 'Error',
            description: 'Something went wrong. Please try again.',
            variant: 'error',
        });

        passwordInput.value.focus();
    } finally {
        form.processing = false;
    }
};

const closeModal = () => {
    confirmingUserDeletion.value = false;
    form.reset();
};

watch(() => form.errors.password, (newError) => {
    if (!newError) {
        toast({
            title: 'Success',
            description: 'Your account has been deleted successfully.',
            variant: 'success',
        });
    }
});
</script>

<template>
    <Toaster />
    <Card class="mt-6">
        <CardHeader>
            <span class="font-bold text-2xl">Delete Account</span>
            <CardDescription>                
                Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting
                your account, please download any data or information that you wish to retain.
            </CardDescription>
        </CardHeader>

        <CardFooter>
            <div class="flex items-center gap-4 ml-auto">
                <Button variant="destructive" @click="confirmUserDeletion">Delete Account</Button>
            </div>
        </CardFooter>

        <Modal :show="confirmingUserDeletion" @close="closeModal">
            <div class="p-6">
                <h2 class="text-lg font-medium text-gray-900">
                    Are you sure you want to delete your account?
                </h2>

                <p class="mt-1 text-sm text-gray-600">
                    Once your account is deleted, all of its resources and data will be permanently deleted. Please
                    enter your password to confirm you would like to permanently delete your account.
                </p>

                <div class="mt-6">
                    <InputLabel for="password" value="Password" class="sr-only" />
                    <Input
                        id="password"
                        ref="passwordInput"
                        v-model="form.password"
                        type="password"
                        class="mt-1 block w-3/4"
                        placeholder="Password"
                        @keyup.enter="deleteUser"
                    />

                    <InputError :message="form.errors.password" class="mt-2" />
                </div>

                <div class="mt-6 flex justify-end">
                    <Button variant="secondary" @click="closeModal"> Cancel </Button>

                    <Button variant="destructive"
                        class="ms-3"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                        @click="deleteUser"
                    >
                        Delete Account
                    </Button>
                </div>
            </div>
        </Modal>
    </Card>
</template>
