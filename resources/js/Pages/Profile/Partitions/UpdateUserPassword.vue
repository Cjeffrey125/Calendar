<template>
    <Toaster />
    <Card class="mt-24">
      <CardHeader>
        <span class="font-bold text-2xl">Update Password</span>
        <CardDescription>
          Ensure your account is using a long, random password to stay secure.
        </CardDescription>
      </CardHeader>
  
      <form @submit.prevent="updatePassword" class="space-y-6">
        <CardContent>
          <div>
            <Label for="currentPassword" class="block text-sm font-medium text-gray-700">Current Password</Label>
            <Input
              id="current_password"
              ref="currentPasswordInput"
              v-model="form.current_password"
              type="password"
              class="mt-1 block w-full"
              autocomplete="current-password"
            />
          </div>
  
          <div>
            <Label for="newPassword" class="block text-sm font-medium text-gray-700">New Password</Label>
            <Input
              id="password"
              ref="passwordInput"
              v-model="form.password"
              type="password"
              class="mt-1 block w-full"
              autocomplete="new-password"
            />
          </div>
  
          <div>
            <Label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm Password</Label>
            <Input
              id="password_confirmation"
              v-model="form.password_confirmation"
              type="password"
              class="mt-1 block w-full"
              autocomplete="new-password"
            />
            <InputError :message="form.errors.password_confirmation" class="mt-2" />
          </div>
        </CardContent>
  
        <CardFooter>
          <div class="flex items-center ml-auto">
            <Button :disabled="form.processing" class="bg-green-600 text-white hover:bg-green-700">
              Save
            </Button>
          </div>
          <p v-if="form.recentlySuccessful" class="text-sm text-gray-600">Saved.</p>
        </CardFooter>
      </form>
    </Card>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useForm } from '@inertiajs/vue3';
  import { Toaster } from '@/Components/ui/toast';
  import { useToast } from '@/Components/ui/toast/use-toast';
  import { Button } from '@/Components/ui/button';
  import { Label } from '@/Components/ui/label';
  import { Input } from '@/Components/ui/input';
  import { Card, CardHeader, CardDescription, CardContent, CardFooter } from '@/Components/ui/card';
  import InputError from '@/Components/InputError.vue';
  
  const passwordInput = ref(null);
  const currentPasswordInput = ref(null);
  
  const { toast } = useToast();
  
  const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
  });
  
  const updatePassword = async () => {
    form.processing = true;
  
    try {
      await form.put(route('password.update'), {
        preserveScroll: true,
      });
  
      toast({
        title: 'Success',
        description: 'Password updated successfully.',
        variant: 'success',
      });
  
      form.reset();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'error',
      });
  
      if (form.errors.password) {
        form.reset('password', 'password_confirmation');
        passwordInput.value.focus();
      }
  
      if (form.errors.current_password) {
        form.reset('current_password');
        currentPasswordInput.value.focus();
      }
    } finally {
      form.processing = false;
    }
  };
  </script>
  
  <style scoped>
  </style>
  