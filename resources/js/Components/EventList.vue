<script setup>
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import CalendarFilter from './CalendarFilter.vue'
</script>

<template>
  <div class="w-full border border-gray-300 rounded-lg overflow-hidden shadow-md p-4">
    <!-- Header Section: CalendarFilter on the right -->
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-lg font-semibold"></h2>
      <CalendarFilter />
    </div>
    
  </div>
</template>
