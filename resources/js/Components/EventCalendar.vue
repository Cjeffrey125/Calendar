<template>
    <div class="calendar-container">
      <FullCalendar :options="calendarOptions" />
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
  
  </style>
  