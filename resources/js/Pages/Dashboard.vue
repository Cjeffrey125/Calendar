<template>
    <Head title="Dashboard" />
    
    <Header />
    
    <Sidebar/>
 
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { Head } from '@inertiajs/vue3';
  import Header from '@/Layouts/Header.vue';
  import Sidebar from '@/Layouts/Sidebar.vue';

  </script>
  