<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/Components/ui/tabs';

const selectedTab = ref('List');
const emit = defineEmits(['update:modelValue']);

const handleTabChange = (value: string) => {
  selectedTab.value = value;
  emit('update:modelValue', value);
};
</script>

<template>
<Tabs v-model="selectedTab">
  <TabsList class="grid w-full grid-cols-2">
    <TabsTrigger 
      value="List" 
      @click="handleTabChange('List')" 
      :class="{'text-emerald-400': selectedTab === 'List'}"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke-width="1.5" 
        :class="{'stroke-emerald-400': selectedTab === 'List', 'stroke-current': selectedTab !== 'List'}" 
        class="size-6"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
      </svg>
    </TabsTrigger>

    <TabsTrigger 
      value="Calendar" 
      @click="handleTabChange('Calendar')" 
      :class="{'text-emerald-400': selectedTab === 'Calendar'}"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke-width="1.5" 
        :class="{'stroke-emerald-400': selectedTab === 'Calendar', 'stroke-current': selectedTab !== 'Calendar'}" 
        class="size-6"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    </TabsTrigger>
  </TabsList>
</Tabs>
</template>
