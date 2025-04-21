<template>
  <div class="w-full border border-gray-300 rounded-lg overflow-hidden shadow-md p-4">
    <div class="calendar-container">
      <FullCalendar :options="calendarOptions" />
    </div>
  </div>

  <Dialog v-model:open="isDialogOpen">
    <DialogContent v-if="selectedEvent" class="max-w-lg p-6 rounded-lg shadow-xl bg-white">
            <DialogHeader class="mb-4 flex justify-between items-start">
              <DialogTitle class="text-xl font-semibold text-gray-900">
                {{ selectedEvent.title }}
              </DialogTitle>
            </DialogHeader>

            <div class="flex flex-col space-y-1 text-sm ">
              <div class="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-500">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
                <p class="font-semibold text-sm">Date:</p>
                  <span class="whitespace-nowrap">{{ formattedDate(selectedEvent.start_date, selectedEvent.end_date) }}
                </span>
              </div>

              <div class="flex items-center space-x-2" v-if="selectedEvent.start_time && selectedEvent.end_time">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-500">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <p class="font-semibold text-sm">Time:</p>
                <span class="whitespace-nowrap">
                  {{ formatTime(selectedEvent.start_time) }} to {{ formatTime(selectedEvent.end_time) }}
                </span>
              </div>

              <div class="flex items-center space-x-2" v-if="selectedEvent.location">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <p class="font-semibold text-sm">Location:</p>
                <span class="whitespace-nowrap">{{ selectedEvent.location }}</span>
              </div>

            </div>

            <div class="border border-gray-300 p-3 rounded-md bg-gray-50">
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
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/Components/ui/dialog';
import { Button } from '@/Components/ui/button';
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import axios from 'axios'

interface EventData {
  id: number;
  event: string;
  start_date: string;
  end_date: string;
  details: string;
  location: string;
  start_time: string;
  end_time: string;
}

interface CalendarEvent {
  title: string;
  start: string;
  end: string;
  allDay: boolean;
  extendedProps: {
    details: string;
    location: string;
    start_time: string;
    end_time: string;
    start_date: string;
    end_date: string;
  };
}

const events = ref<EventData[]>([])
const isDialogOpen = ref(false)
const selectedEvent = ref<{ title: string; details: string; formattedDate: string; start_time: string; end_time: string; location: string } | null>(null)

const fetchEvents = async () => {
  try {
    const response = await axios.get<EventData[]>('/api/events')
    events.value = response.data
  } catch (error) {
    console.error('Error fetching events:', error)
  }
}

const openModal = (event: any) => {
  selectedEvent.value = {
    title: event.title,
    details: event.extendedProps.details,
    location: event.extendedProps.location || 'No location provided',
    start_time: event.extendedProps.start_time,
    end_time: event.extendedProps.end_time,
    start_date: event.extendedProps.start_date,
    end_date: event.extendedProps.end_date,
  }
  isDialogOpen.value = true
}

const closeModal = () => {
  isDialogOpen.value = false
  selectedEvent.value = null
}

const calendarOptions = ref({
  plugins: [dayGridPlugin],
  initialView: 'dayGridMonth',
  headerToolbar: {
    right: 'prev,next'
  },
  events: [],
  eventClick: ({ event }: { event: any }) => openModal(event)
})

watch(events, (newEvents) => {
  calendarOptions.value.events = newEvents.map((event: EventData) => ({
    title: event.event,
    start: new Date(event.start_date).toISOString(),
    end: new Date(event.end_date).toISOString(),
    allDay: true,
    extendedProps: {
      details: event.details,
      location: event.location,
      start_time: event.start_time,
      end_time: event.end_time,
      start_date: event.start_date,
      end_date: event.end_date,
    }
  })) as CalendarEvent[]
})

onMounted(fetchEvents)

const formatTime = (time: string) => {
  if (!time) return '';
  const [h, m] = time.split(':');
  const hour = parseInt(h);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const formattedHour = hour % 12 || 12;
  return `${formattedHour}:${m} ${ampm}`;
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

<style scoped>
.calendar-container {
  width: 100%;
  max-width: 800px;
  height: auto;
  max-height: 700px;
  overflow: hidden;
  margin: 0 auto;
}

:deep(.fc) {
  width: 100%;
  height: 100%;
}

:deep(.fc-prev-button),
:deep(.fc-next-button) {
  background-color: white !important;
  border: 1px solid #ccc !important;
  color: #333 !important;
  padding: 6px 12px !important;
  border-radius: 4px !important;
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
}

:deep(.fc-prev-button:hover),
:deep(.fc-next-button:hover) {
  background-color: #f3f4f6 !important;
  border-color: #999 !important;
}

:deep(.fc-prev-button span),
:deep(.fc-next-button span) {
  font-size: 16px !important;
}

:deep(.fc-daygrid-event) {
  background-color: #f3f4f6 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: transparent;
  text-align: center;
  max-width: 100%;
  display: block;
}

:deep(.fc-daygrid-event:hover) {
  background-color: #10b981 !important;
  color: black !important;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

:deep(.fc-daygrid-event .fc-event-title),
:deep(.fc-daygrid-event-title) {
  color: black !important; 
  text-overflow: ellipsis !important;
}

:deep(.fc-daygrid-event-dot) {
  display: none !important;
}
</style>
