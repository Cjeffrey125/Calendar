<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { Button } from '@/Components/ui/button';
import { 
  Dialog, DialogContent, DialogDescription, DialogFooter, 
  DialogHeader, DialogTitle, DialogTrigger 
} from '@/Components/ui/dialog';
import axios from 'axios';
import CalendarFilter from './CalendarFilter.vue';

interface EventItem {
  id: number;
  event: string;
  details: string;
  start_date: string;
  end_date: string;
}

const events = ref<EventItem[]>([]);
const currentPage = ref(1);
const eventsPerPage = 5;
const selectedEvent = ref<EventItem | null>(null);

const isDialogOpen = ref(false);
const selectedMonth = ref<string | null>(null);

const fetchEvents = async () => {
  try {
    const response = await axios.get('/api/events');
    events.value = response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
  }
};

onMounted(fetchEvents);

const formatDate = (dateString: string) => {
  if (!dateString) return { day: '', month: '' };
  const date = new Date(dateString);
  return {
    day: date.getDate(),
    month: date.toLocaleString('en-US', { month: 'short' }),
  };
};

const filteredEvents = computed(() => {
  if (!selectedMonth.value) return events.value;
  return events.value.filter(event => {
    const eventMonth = new Date(event.start_date).toLocaleString('en-US', { month: 'long' });
    return eventMonth === selectedMonth.value;
  });
});

const paginatedEvents = computed(() => {
  const start = (currentPage.value - 1) * eventsPerPage;
  return filteredEvents.value.slice(start, start + eventsPerPage);
});

const totalPages = computed(() => Math.ceil(filteredEvents.value.length / eventsPerPage));

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const openModal = (event: EventItem) => {
  selectedEvent.value = event;
  isDialogOpen.value = true;
};

const closeModal = () => {
  isDialogOpen.value = false;
};

const formattedDate = (start: string, end: string) => {
  if (!start || !end) return "";

  const startDate = new Date(start);
  const endDate = new Date(end);

  const formatOptions: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric' };

  if (startDate.toDateString() === endDate.toDateString()) {
    return startDate.toLocaleDateString('en-US', formatOptions);
  } else {
    return `${startDate.toLocaleDateString('en-US', formatOptions)} - ${endDate.toLocaleDateString('en-US', formatOptions)}`;
  }
};
</script>

<template>
  <div class="w-full border border-gray-300 rounded-lg overflow-hidden shadow-md p-4">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-lg font-semibold">Event List</h2>
      <CalendarFilter v-model:month="selectedMonth" />
    </div>

    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <Dialog v-model:open="isDialogOpen">
        <DialogTrigger v-for="event in paginatedEvents" :key="event.id" as-child>
          <button 
            @click="openModal(event)" 
            class="w-full text-left border-b last:border-none flex items-center p-4 hover:bg-gray-100 transition"
          >
            <div class="w-16 h-16 bg-emerald-400 flex flex-col items-center justify-center rounded-lg shadow-md mr-4">
              <span class="text-xl font-bold">{{ formatDate(event.start_date).day }}</span>
              <span class="text-sm uppercase">{{ formatDate(event.start_date).month }}</span>
            </div>

            <div class="flex-1">
              <h3 class="text-lg font-semibold text-gray-800">{{ event.event }}</h3>
              <p class="text-sm text-gray-600">{{ event.details }}</p>
            </div>
          </button>
        </DialogTrigger>

        <DialogContent v-if="selectedEvent" class="max-w-lg p-6 rounded-lg shadow-xl bg-white">
            <DialogHeader class="mb-4 flex justify-between items-start">
              <DialogTitle class="text-xl font-semibold text-gray-900">
                {{ selectedEvent.event }}
              </DialogTitle>
            </DialogHeader>

            <div class="flex items-end space-x-1 text-sm text-gray-600 ml-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                  stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-500">
                  <path stroke-linecap="round" stroke-linejoin="round" 
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
                <span class="whitespace-nowrap">{{ formattedDate(selectedEvent.start_date, selectedEvent.end_date) }}</span>
            </div>
            
            <div class="border border-gray-300 p-3 rounded-md bg-gray-50 mt-4">
              <p class="font-semibold text-sm">Details:</p>
              <p class="text-sm text-muted-foreground">{{ selectedEvent.details }}</p>
            </div>

            <DialogFooter class="flex justify-end mt-6">
              <Button variant="outline" @click="closeModal" class="px-4 py-2">
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
      </Dialog>
    </div>

    <div class="flex justify-between mt-4">
      <Button @click="prevPage" :disabled="currentPage === 1" variant="outline">
        Previous
      </Button>
      
      <span class="text-sm font-semibold">Page {{ currentPage }} of {{ totalPages }}</span>
      
      <Button @click="nextPage" :disabled="currentPage >= totalPages" variant="outline">
        Next
      </Button>
    </div>
  </div>
</template>

<style scoped>
.border-b:hover {
  background-color: #f3f4f6;
}
</style>
