<script setup>
import { cn } from '@/lib/utils';
import { DotsHorizontalIcon } from '@radix-icons/vue';

const props = defineProps({
  class: { type: null, required: false },
});
</script>

<template>
  <span
    role="presentation"
    aria-hidden="true"
    :class="cn('flex h-9 w-9 items-center justify-center', props.class)"
  >
    <slot>
      <DotsHorizontalIcon class="h-4 w-4" />
    </slot>
    <span class="sr-only">More</span>
  </span>
</template>
