<template>
  <Toaster />

  <Dialog :open="props.isOpen" @update:open="emit('update:isOpen', $event)">
    <DialogTrigger as-child>
      <Button variant="outline">
        Create Event
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create Event</DialogTitle>
        <DialogDescription>
            Create the event here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>

      <div class="space-y-4 mb-8">
        <div>
          <label class="font-semibold text-sm">Event Name:</label>
          <input v-model="eventName" class="w-full border rounded p-2" type="text" />
        </div>

        <div>
          <label class="font-semibold text-sm block mb-1 mt-4">Location:</label>
          <input v-model="location" class="w-full border rounded p-2 h-10" type="text"/>
        </div>
        
        <div>
          <label class="font-semibold text-sm">Details:</label>
          <textarea v-model="eventDetails" class="w-full border rounded p-2" rows="3"></textarea>
        </div>
        
        <div>
          <label class="font-semibold text-sm">Event Type:</label>
          <Select v-model="eventType">
            <SelectTrigger class="w-full">
              <SelectValue :placeholder="eventType || 'Select Type'" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Start of School Year">Start of School Year</SelectItem>
                <SelectItem value="End of School Year">End of School Year</SelectItem>
                <SelectItem value="Midterm">Midterm</SelectItem>
                <SelectItem value="Finals">Finals</SelectItem>
                <SelectItem value="Holiday">Holiday</SelectItem>
                <SelectItem value="Seminars">Seminars</SelectItem>
                <SelectItem value="Academic Events">Academic Events</SelectItem>
                <SelectItem value="Examination Day">Examination Day</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        
        <div class="flex space-x-4">
          <div class="w-full">
            <label class="font-semibold text-sm block mb-1">Start Date:</label>
            <input v-model="startDate" class="border rounded p-2 w-full h-10" type="date" />
          </div>
          <div class="w-full">
            <label class="font-semibold text-sm block mb-1">End Date:</label>
            <input v-model="endDate" class="border rounded p-2 w-full h-10" type="date" />
          </div>
        </div>

        <div class="flex space-x-4 mt-4">
          <div class="w-full">
            <label class="font-semibold text-sm block mb-1">Start Time:</label>
            <input v-model="startTime" class="border rounded p-2 w-full h-10" type="time" />
          </div>
          <div class="w-full">
            <label class="font-semibold text-sm block mb-1">End Time:</label>
            <input v-model="endTime" class="border rounded p-2 w-full h-10" type="time" />
          </div>
        </div>
      </div>

      <DialogFooter>
        <Button variant="secondary" @click="closeDialog">Close</Button>
        <Button variant="lightGreen" @click="saveEvent">Save</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import axios from 'axios';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/Components/ui/dialog';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select';
import { ref, defineProps, defineEmits } from 'vue';
import { Button } from '@/Components/ui/button';
import { Toaster } from '@/Components/ui/toast';
import { useToast } from '@/Components/ui/toast/use-toast';

const { toast } = useToast()

const props = defineProps({
  isOpen: Boolean,
});

const eventName = ref('')
const eventDetails = ref('')
const eventType = ref('')
const startDate = ref('')
const endDate = ref('')
const startTime = ref('');
const endTime = ref('');
const location = ref('');

const emit = defineEmits(['update:isOpen', 'refresh-events']);

const closeDialog = () => {
    emit('update:isOpen', false);
};

const saveEvent = async () => {
    if (!eventName.value || !eventDetails.value || !eventType.value || !startDate.value || !endDate.value) {
    toast({
      title: 'Error Creating the Event',
      description: 'Please fill in all fields before submitting.',
      variant: 'destructive',
    })
    return
  }

  try {
    const eventData = {
      event: eventName.value,
      details: eventDetails.value,
      event_type: eventType.value,
      start_date: startDate.value,
      end_date: endDate.value,
      start_time: startTime.value ? `${startTime.value}:00` : null,
      end_time: endTime.value ? `${endTime.value}:00` : null,
      location: location.value,
    };

    const response = await axios.post('/api/events', eventData)

    if (response.status === 201) {
        toast({
        title: 'Event Created',
        description: `${eventName.value} has been created successfully.`,
        variant: 'success',
      })
      eventName.value = ''
      eventDetails.value = ''
      eventType.value = ''
      startDate.value = ''
      endDate.value = ''
      startTime.value = ''
      endTime.value = ''
      location.value = ''

      closeDialog()

      emit('refresh-events')
    }
    } catch (error) {
        toast({
        title: 'Error',
        description: 'Something went wrong while creating the user. Please try again.',
        variant: 'destructive',
        })
        console.error('Error creating user:', error)
    }
};
</script>