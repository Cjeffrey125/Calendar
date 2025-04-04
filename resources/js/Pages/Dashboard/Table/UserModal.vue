<template>
  <Toaster />
  <Dialog :open="props.isOpen" @update:open="emit('update:isOpen', $event)">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Update User</DialogTitle>
        <DialogDescription>
          Update the status of the user here.
        </DialogDescription>
      </DialogHeader>

      <div v-if="props.user" class="space-y-4 mb-8">
        <div class="flex items-center space-x-2">
          <p class="font-semibold text-sm">Created On:</p>
          <span class="text-sm text-muted-foreground">
            {{ new Date(props.user.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }}
          </span>
        </div>

        <div class="flex space-x-28">
          <div class="flex items-center space-x-2">
            <p class="font-semibold text-sm">Name:</p>
            <span class="text-sm text-muted-foreground">{{ props.user.name }}</span>
          </div>
          <div class="flex items-center space-x-2 ml-auto">
            <p class="font-semibold text-sm">Email:</p>
            <span class="text-sm text-muted-foreground">{{ props.user.email }}</span>
          </div>
        </div>

        <div class="flex space-x-8">
          <div class="flex items-center space-x-2">
            <p class="font-semibold text-sm">Roles:</p>

            <Select v-model="userRole">
              <SelectTrigger class="w-[120px]">
                <SelectValue :placeholder="userRole === 'Admin' ? 'Admin' : 'User'" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="User">User</SelectItem>
                  <SelectItem value="Admin">Admin</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div class="flex items-center space-x-2 ml-auto">
            <p class="font-semibold text-sm">Authenticated:</p>

            <Select v-model="isAuthenticated">
              <SelectTrigger class="w-[120px]">
                <SelectValue :placeholder="isAuthenticated === 1 ? 'True' : 'False'" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="1">True</SelectItem>
                  <SelectItem value="0">False</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <DialogFooter>
        <Button variant="secondary" @click="closeDialog">Close</Button>
        <Button variant="destructive" @click="deleteUser">Delete</Button>
        <Button variant="lightGreen" @click="updateUser">Save changes</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import axios from 'axios';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/Components/ui/dialog';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/Components/ui/select';
import { ref, defineProps, defineEmits } from 'vue';
import { Button } from '@/Components/ui/button';
import { Toaster } from '@/Components/ui/toast';
import { useToast } from '@/Components/ui/toast/use-toast';

const props = defineProps({
  isOpen: Boolean,
  user: Object as () => {
    id: string;
    name: string;
    email: string;
    roles: string;
    authenticated: number;
    created_at: string;
  } | null,
});

const { toast } = useToast();
const emit = defineEmits(['update:isOpen', 'refresh-users']);
const isAuthenticated = ref(props.user?.authenticated);
const userRole = ref(props.user?.roles);

const closeDialog = () => {
  emit('update:isOpen', false);
};

const updateUser = async () => {
  try {
    const payload = {
      roles: userRole.value,
      authenticated: isAuthenticated.value,
    };
    
    const response = await axios.put(`/api/users/${props.user?.id}`, payload);

    toast({
      title: 'Success',
      description: 'User updated successfully.',
      variant: 'success',
    });

    closeDialog();
    emit('refresh-users');
  } catch (error) {
    console.error('Error updating user:', error);
    toast({
      title: 'Error',
      description: 'There was an error updating the user.',
      variant: 'destructive',
    });
  }
};

const deleteUser = async () => {
  try {
    const token = localStorage.getItem('auth_token');
    const response = await axios.delete(`/api/users/${props.user?.id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    toast({
      title: 'Success',
      description: 'User deleted successfully.',
      variant: 'success',
    });

    closeDialog();
    emit('refresh-users');

  } catch (error) {
    console.error('Error deleting user:', error);
    toast({
      title: 'Error',
      description: 'There was an error deleting the user.',
      variant: 'destructive',
    });
  }
};
</script>