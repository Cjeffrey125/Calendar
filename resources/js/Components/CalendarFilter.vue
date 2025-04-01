<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const selectedMonth = ref<string | null>(null);
const emit = defineEmits(['update:month']);

const updateMonth = (value: string) => {
  selectedMonth.value = value;
  emit('update:month', value);
};
</script>

<template>
  <Select v-model="selectedMonth" @update:modelValue="updateMonth">
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
