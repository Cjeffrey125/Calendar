<script setup lang="ts">
import type { ColumnDef, SortingState, ColumnFiltersState, VisibilityState, ExpandedState } from '@tanstack/vue-table';
import { Button } from '@/Components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table';
import { FlexRender, getCoreRowModel, getExpandedRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useVueTable } from '@tanstack/vue-table';
import { h, ref, onMounted } from 'vue';
import { valueUpdater } from '@/lib/utils';
import EventModal from './Table/EventModal.vue';
import UpdateEventModal from './Table/UpdateEventModal.vue';
import axios from 'axios';

interface Event {
  id: number;
  event: string;
  details: string;
  event_type: string;
  start_date: string;
  end_date: string;
}

const events = ref<Event[]>([]);
const isDialogOpen = ref(false);
const isModalOpen = ref(false);
const selectedEvent = ref<Event | null>(null);


const fetchEvents = async () => {
  try {
    const response = await axios.get('/api/events');
    events.value = response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
  }
};

onMounted(() => {
    fetchEvents();
});

const handleRowClick = (row: any) => {
    selectedEvent.value = row.original;
    isDialogOpen.value = true;
};

const formatDate = (dateString: string) => {
  if (!dateString) return '-';
  return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(dateString));
};

const columns: ColumnDef<Event>[] = [
  { accessorKey: 'event', header: 'Event', cell: ({ row }) => h('div', {}, row.getValue('event')) },
  { accessorKey: 'event_type', header: 'Type', cell: ({ row }) => h('div', {}, row.getValue('event_type')) },
  { accessorKey: 'start_date', header: 'Start Date', cell: ({ row }) => h('div', {}, formatDate(row.getValue('start_date'))) },
  { accessorKey: 'end_date', header: 'End Date', cell: ({ row }) => h('div', {}, formatDate(row.getValue('end_date'))) },
];

const sorting = ref<SortingState>([]);
const columnFilters = ref<ColumnFiltersState>([]);
const columnVisibility = ref<VisibilityState>({});
const rowSelection = ref({});
const expanded = ref<ExpandedState>({});

const table = useVueTable({
  data: events,
  columns,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  getExpandedRowModel: getExpandedRowModel(),
  onSortingChange: updaterOrValue => valueUpdater(updaterOrValue, sorting),
  onColumnFiltersChange: updaterOrValue => valueUpdater(updaterOrValue, columnFilters),
  onColumnVisibilityChange: updaterOrValue => valueUpdater(updaterOrValue, columnVisibility),
  onRowSelectionChange: updaterOrValue => valueUpdater(updaterOrValue, rowSelection),
  onExpandedChange: updaterOrValue => valueUpdater(updaterOrValue, expanded),
  state: {
    get sorting() { return sorting.value },
    get columnFilters() { return columnFilters.value },
    get columnVisibility() { return columnVisibility.value },
    get rowSelection() { return rowSelection.value },
    get expanded() { return expanded.value },
  },
});

</script>

<template>
  <div class="w-full border border-gray-300 rounded-lg overflow-hidden shadow-md p-4">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-lg font-semibold">University Calendar</h2>
      <EventModal 
        :isOpen="isModalOpen" 
        @update:isOpen="isModalOpen = $event" 
        @refresh-events="fetchEvents" 
      />
    </div>

    <div class="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
            <TableHead v-for="header in headerGroup.headers" :key="header.id">
              <FlexRender v-if="!header.isPlaceholder" :render="header.column.columnDef.header" :props="header.getContext()" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <template v-if="table.getRowModel().rows?.length">
            <template v-for="row in table.getRowModel().rows" :key="row.id">
                <TableRow :data-state="row.getIsSelected() && 'selected'" @click="handleRowClick(row)">
                    <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
                  <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
                </TableCell>
              </TableRow>
            </template>
          </template>
          <TableRow v-else>
            <TableCell :colspan="columns.length" class="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>

    <div class="flex items-center justify-end space-x-2 py-4">
      <Button variant="outline" size="sm" :disabled="!table.getCanPreviousPage()" @click="table.previousPage()">Previous</Button>
      <Button variant="outline" size="sm" :disabled="!table.getCanNextPage()" @click="table.nextPage()">Next</Button>
    </div>

    <UpdateEventModal 
      :isOpen="isDialogOpen" 
      :event="selectedEvent" 
      @update:isOpen="isDialogOpen = $event"
      @refresh-events="fetchEvents"
    />
  </div>
</template>
