<template>
    <Toaster />
    <Dialog :open="props.isOpen" @update:open="emit('update:isOpen', $event)">
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Update Inquiry</DialogTitle>
                <DialogDescription>
                Update the status of the inquiry here.
                </DialogDescription>
            </DialogHeader>

        <div v-if="props.inquiry" class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
                <div class="flex items-center space-x-2">
                    <p class="font-semibold text-sm">Date:</p>
                    <span class="text-sm text-muted-foreground">
                    {{ new Date(props.inquiry.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }}
                    </span>
                </div>
                <div class="flex items-center space-x-2">
                    <p class="font-semibold text-sm">Status:</p>
                    <Select v-model="selectedStatus">
                        <SelectTrigger class="w-[120px]">
                        <SelectValue :placeholder="props.inquiry.status.replace(/^./, props.inquiry.status[0].toUpperCase())" />
                        </SelectTrigger>
                        <SelectContent>
                        <SelectGroup>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="resolved">Resolved</SelectItem>
                        </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div class="flex items-center space-x-2">
                    <p class="font-semibold text-sm">Name:</p>
                    <span class="text-sm text-muted-foreground">{{ props.inquiry.name }}</span>
                </div>
                <div class="flex items-center space-x-2">
                    <p class="font-semibold text-sm">Email:</p>
                    <span class="text-sm text-muted-foreground">{{ props.inquiry.email }}</span>
                </div>
                </div>

                <div class="border border-gray-300 p-3 rounded-md bg-gray-50 mt-4">
                <p class="font-semibold text-sm">Message:</p>
                <p class="text-sm text-muted-foreground">{{ props.inquiry.message }}</p>
            </div>
        </div>

        <DialogFooter>
            <Button variant="secondary" @click="closeDialog">Close</Button>
            <Button variant="destructive" @click="deleteInquiry">Delete</Button>
            <Button variant="lightGreen" @click="updateStatus">Save changes</Button>
        </DialogFooter>
        </DialogContent>
    </Dialog>
</template>


<script setup lang="ts">
import axios from 'axios';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/Components/ui/dialog';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue,} from '@/Components/ui/select'
import { ref, defineProps, defineEmits, watch  } from 'vue';
import { Button } from '@/Components/ui/button';
import { Toaster } from '@/Components/ui/toast'
import { useToast } from '@/Components/ui/toast/use-toast'

const props = defineProps({
  isOpen: Boolean,
  inquiry: Object as () => {
    id: string;
    status: string;
    created_at: string;
    name: string;
    email: string;
    message: string;
  } | null,
});

const { toast } = useToast();
const emit = defineEmits(['update:isOpen', 'refresh-inquiries']);
const selectedStatus = ref(props.inquiry?.status);

const closeDialog = () => {
  emit('update:isOpen', false);
};

const updateStatus = async () => {
  if (!props.inquiry) return;

  try {
    const response = await axios.put(`/api/inquiries/${props.inquiry.id}`, {
      status: selectedStatus.value,
    });

    closeDialog();

    toast({
      title: 'Success!',
      description: response.data.message || 'The inquiry has been updated.',
      variant: 'success',
      duration: 3000,
    });

    emit('refresh-inquiries');

  } catch (error) {
    console.error('Error updating status:', error);

    toast({
      title: 'Error',
      description: 'Failed to update status. Please try again.',
      variant: 'destructive',
      duration: 3000,
    });
  }
};

const deleteInquiry = async () => {
  if (!props.inquiry) return;

  try {
    const response = await axios.delete(`/api/inquiries/${props.inquiry.id}`);

    closeDialog();

    toast({
      title: 'Deleted!',
      description: response.data.message || 'The inquiry has been deleted.',
      variant: 'success',
      duration: 3000,
    });

    emit('refresh-inquiries');
  } catch (error) {
    console.error('Error deleting inquiry:', error);

    toast({
      title: 'Error',
      description: 'Failed to delete the inquiry. Please try again.',
      variant: 'destructive',
      duration: 3000,
    });
  }
};

watch(
  () => props.inquiry,
  (newInquiry) => {
    selectedStatus.value = newInquiry?.status || 'pending';
  },
  { immediate: true }
);
</script>