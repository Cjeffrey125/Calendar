<template>
  <div class="w-full border border-gray-300 rounded-lg overflow-hidden shadow-md p-4">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-lg font-semibold">Users</h2>
    </div>

    <div class="flex justify-end items-center mb-4">
      <CreateUserModal 
        :isOpen="isModalOpen" 
        @update:isOpen="isModalOpen = $event" 
        @refresh-users="fetchUsers" 
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
              <TableRow v-if="row.getIsExpanded()">
                <TableCell :colspan="row.getAllCells().length">
                  {{ JSON.stringify(row.original) }}
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
      <div class="space-x-2">
        <Button variant="outline" size="sm" :disabled="!table.getCanPreviousPage()" @click="table.previousPage()">Previous</Button>
        <Button variant="outline" size="sm" :disabled="!table.getCanNextPage()" @click="table.nextPage()">Next</Button>
      </div>
    </div>
  </div>

  <UserModal 
      :isOpen="isDialogOpen" 
      :user="selectedUser" 
      @update:isOpen="isDialogOpen = $event"
      @refresh-users="fetchUsers"
    />
</template>

<script setup lang="ts">
import type { ColumnDef, ColumnFiltersState, ExpandedState, SortingState, VisibilityState } from '@tanstack/vue-table';
import { Button } from '@/Components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/Components/ui/table';
import { FlexRender, getCoreRowModel, getExpandedRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useVueTable } from '@tanstack/vue-table';
import { ArrowUpDown } from 'lucide-vue-next';
import { h, ref, onMounted } from 'vue';
import { valueUpdater } from '@/lib/utils'
import UserModal from './Table/UserModal.vue';
import CreateUserModal from './Table/CreateUserModal.vue';
import axios from 'axios';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  roles: string;
  authenticated: number;
  created_at: string;
}

const users = ref<Inquiry[]>([]);
const isDialogOpen = ref(false);
const isModalOpen = ref(false);
const selectedUser = ref<Inquiry | null>(null);

const fetchUsers = async () => {
  try {
    const token = localStorage.getItem('auth_token');
    const response = await axios.get('/api/users', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    users.value = response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

onMounted(() => {
  fetchUsers();
});

const handleRowClick = (row: any) => {
  selectedUser.value = row.original;
  isDialogOpen.value = true;
};

const columns: ColumnDef<Inquiry>[] = [
  {
    accessorKey: 'id',
    header: 'Id',
    cell: ({ row }) => h('div', { class: 'capitalize' }, row.getValue('id')),
  },
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => h('div', { class: 'capitalize' }, row.getValue('name')),
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: ({ row }) => h('div', { class: 'lowercase' }, row.getValue('email')),
  },
  {
    accessorKey: 'roles',
    header: 'Roles',
    cell: ({ row }) => h('div', { class: 'capitalize' }, row.getValue('roles')),
  },
  {
    accessorKey: 'authenticated',
    header: 'Authenticated',
    cell: ({ row }) => {
      const isAuthenticated = row.getValue('authenticated');
      const displayValue = isAuthenticated === 1 ? 'True' : 'False';
      return h('div', { class: 'capitalize' }, displayValue);
    },
  },
];


const sorting = ref<SortingState>([]);
const columnFilters = ref<ColumnFiltersState>([]);
const columnVisibility = ref<VisibilityState>({});
const rowSelection = ref({});
const expanded = ref<ExpandedState>({});

const table = useVueTable({
  data: users,
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
