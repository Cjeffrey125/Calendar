<template>
    <div class="w-full border border-gray-300 rounded-lg overflow-hidden shadow-md p-4">

      <div class="calendar-container">
        <FullCalendar :options="calendarOptions" />
      </div>
    </div>
  </template>
  
  <script>
  import FullCalendar from '@fullcalendar/vue3'
  import dayGridPlugin from '@fullcalendar/daygrid'
  
  export default {
    components: {
      FullCalendar
    },
    data() {
      return {
        calendarOptions: {
          plugins: [dayGridPlugin],
          initialView: 'dayGridMonth',
          headerToolbar: {
                right: 'prev,next', 
              
            }
        }
      }
    }
  }
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
</style>
  