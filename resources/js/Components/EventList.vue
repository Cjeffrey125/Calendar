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

    <!-- Table -->
    <Table class="w-full border border-gray-300 border-collapse">
        <TableHeader class="bg-gray-100">
        <TableRow>
          <TableHead class="border-b p-4 text-left w-1/4 text-sm">Date</TableHead>
          <TableHead class="border-b p-4 text-left w-3/4">Event</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow class="hover:bg-gray-50">
          <TableCell class="border-b p-4 w-1/4 text-sm">2025-03-15</TableCell>
          <TableCell class="border-b p-4 w-3/4">Vue.js Workshop</TableCell>
        </TableRow>
        <TableRow class="hover:bg-gray-50">
          <TableCell class="border-b p-4 w-1/4 text-sm">2025-03-20</TableCell>
          <TableCell class="border-b p-4 w-3/4">Product Launch</TableCell>
        </TableRow>
        <TableRow class="hover:bg-gray-50">
          <TableCell class="border-b p-4 w-1/4 text-sm">2025-03-20</TableCell>
          <TableCell class="border-b p-4 w-3/4">Product Launch</TableCell>
        </TableRow>
        <TableRow class="hover:bg-gray-50">
          <TableCell class="border-b p-4 w-1/4 text-sm">2025-03-20</TableCell>
          <TableCell class="border-b p-4 w-3/4">Product Launch</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
