<template>
  <Toaster />
  <Dialog :open="props.isOpen" @update:open="emit('update:isOpen', $event)">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit Event</DialogTitle>
        <DialogDescription>Update event details below.</DialogDescription>
      </DialogHeader>

      <div class="space-y-4 mb-8">
        <div>
          <label class="font-semibold text-sm">Event Name:</label>
          <input v-model="eventName" class="w-full border rounded p-1" type="text" />
        </div>

        <div>
          <label class="font-semibold text-sm">Location:</label>
          <input v-model="location" class="w-full border rounded p-1" type="text" />
        </div>
        
        <div>
          <label class="font-semibold text-sm">Details:</label>
          <textarea v-model="eventDetails" class="w-full border rounded p-1" rows="3"></textarea>
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
            <input v-model="startDate" class="border rounded p-1 w-full h-10" type="date" />
          </div>
          <div class="w-full">
            <label class="font-semibold text-sm block mb-1">End Date:</label>
            <input v-model="endDate" class="border rounded p-1 w-full h-10" type="date" />
          </div>
        </div>

        <div class="flex space-x-4 mt-4">
          <div class="w-full">
            <label class="font-semibold text-sm block mb-1">Start Time:</label>
            <input v-model="startTime" class="border rounded p-1 w-full h-10" type="time" />
          </div>
          <div class="w-full">
            <label class="font-semibold text-sm block mb-1">End Time:</label>
            <input v-model="endTime" class="border rounded p-1 w-full h-10" type="time" />
          </div>
        </div>
      </div>



      <DialogFooter>
        <Button variant="secondary" @click="closeDialog">Close</Button>
        <Button variant="destructive" @click="deleteEvent">Delete</Button>
        <Button variant="lightGreen" @click="updateEvent">Update</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import axios from 'axios';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/Components/ui/dialog';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/Components/ui/select';
import { ref, defineProps, defineEmits, watch } from 'vue';
import { Button } from '@/Components/ui/button';
import { Toaster } from '@/Components/ui/toast';
import { useToast } from '@/Components/ui/toast/use-toast';

const props = defineProps({
  isOpen: Boolean,
  event: Object as () => {
    id: number;
    event: string;
    details: string;
    event_type: string;
    start_date: string;
    end_date: string;
    start_time?: string;
    end_time?: string;
    location?: string;
  } | null,
});

const { toast } = useToast();
const emit = defineEmits(['update:isOpen', 'refresh-events']);

const eventName = ref('');
const eventDetails = ref('');
const eventType = ref('');
const startDate = ref('');
const endDate = ref('');
const startTime = ref('');
const endTime = ref('');
const location = ref('');

const formatDateForInput = (date: string) => {
  return date ? date.split(' ')[0] : '';
};

watch(
  () => props.event,
  (newEvent) => {
    if (newEvent) {
      eventName.value = newEvent.event;
      eventDetails.value = newEvent.details;
      eventType.value = newEvent.event_type;
      startDate.value = formatDateForInput(newEvent.start_date);
      endDate.value = formatDateForInput(newEvent.end_date);
      startTime.value = newEvent.start_time;
      endTime.value = newEvent.end_time;
      location.value = newEvent.location;
    }
  },
  { immediate: true }
);

const closeDialog = () => {
  emit('update:isOpen', false);
};

const toTimeWithSeconds = (time: string | undefined | null) => {
  if (!time) return null;
  const parts = time.trim().split(':');
  if (parts.length === 2) {
    return `${time.trim()}:00`;
  } else if (parts.length === 3) {
    return time.trim();
  } else {
    return null;
  }
};

const updateEvent = async () => {
  if (!props.event?.id) return;

  try {
    const payload = {
      event: eventName.value,
      details: eventDetails.value,
      event_type: eventType.value,
      start_date: startDate.value,
      end_date: endDate.value,
      start_time: toTimeWithSeconds(startTime.value),
      end_time: toTimeWithSeconds(endTime.value),
      location: location.value,
    };

    await axios.put(`/api/events/${props.event.id}`, payload);
    toast({ title: 'Success', description: 'Event updated successfully.', variant: 'success' });
    
    closeDialog();
    emit('refresh-events');
  } catch (error) {
    console.error('Error updating event:', error);
    toast({ title: 'Error', description: 'There was an error updating the event.', variant: 'destructive' });
  }
};
const deleteEvent = async () => {
  if (!props.event?.id) return;

  try {
    await axios.delete(`/api/events/${props.event.id}`);
    toast({ 
        title: 'Success', 
        description: 'Event deleted successfully.', 
        variant: 'success' 
    });

    closeDialog();
    emit('refresh-events');
  } catch (error) {
    console.error('Error deleting event:', error);
    toast({ 
        title: 'Error', 
        description: 'There was an error deleting the event.', 
        variant: 'destructive' 
    });
  }
};

</script>