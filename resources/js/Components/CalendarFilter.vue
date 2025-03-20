<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ref } from 'vue'

// Store selected month
const selectedMonth = ref<string | null>(null)
</script>

<template>
  <Select v-model="selectedMonth">
    <SelectTrigger class="w-[180px]">
      <SelectValue :placeholder="'Select a month'" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem v-for="(month, index) in [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
          ]" 
          :key="index"
          :value="month"
        >
          {{ month }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
