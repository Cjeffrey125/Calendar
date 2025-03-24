<template>
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              <Collapsible
                v-for="item in data.navMain"
                :key="item.title"
                as-child
                :default-open="item.isActive"
                class="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger as-child>
                    <SidebarMenuButton
                      :tooltip="item.title"
                      @click="selectItem(item)"
                      :class="[
                        'flex items-center gap-2 p-2 rounded-md transition-colors',
                        selectedItemTitle === item.title ? 'text-emerald-500 bg-gray-100' : 'hover:text-emerald-500 hover:bg-gray-100'
                      ]"
                    >
                      <component :is="item.icon" :class="selectedItemTitle === item.title ? 'text-emerald-500' : ''" />
                      <span :class="selectedItemTitle === item.title ? 'text-emerald-500' : ''">{{ item.title }}</span>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      <header class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div class="flex items-center gap-2 px-4">
            <SidebarTrigger class="-ml-1 mt-32" />
          </div>
      </header>

      <SidebarInset>
      <div class="flex items-center gap-2 px-4 mt-24">
      </div>
      <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
        <Inquiries v-if="selectedItemTitle === 'Inquiries'" />
        <UsersList v-if="selectedItemTitle === 'Users'" />
      </div>
    </SidebarInset>

    </SidebarProvider>
</template>

<script setup lang="ts">
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { Users, Calendar, MessageCircleQuestion } from 'lucide-vue-next'
import { defineProps, ref } from 'vue'
import Inquiries from '@/Pages/Dashboard/Inquiries.vue'
import UsersList from '@/Pages/Dashboard/UsersList.vue'

const selectedItemTitle = ref('Events')

const selectItem = (item) => {
  selectedItemTitle.value = item.title
}

const data = {
  navMain: [
    {
      title: 'Events',
      icon: Calendar,
    },
    {
      title: 'Inquiries',
      icon: MessageCircleQuestion,
    },
    {
      title: 'Users',
      icon: Users,
    },
  ],
}
</script>
