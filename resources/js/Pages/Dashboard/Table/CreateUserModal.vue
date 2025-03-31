<script setup lang="ts">
import { ref, defineEmits, defineProps } from 'vue'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Toaster } from '@/components/ui/toast'
import { useToast } from '@/components/ui/toast/use-toast'
import axios from 'axios'

const { toast } = useToast()

const props = defineProps({
  isOpen: Boolean,
});

const name = ref('')
const email = ref('')
const password = ref('')
const role = ref('')

const emit = defineEmits(['update:isOpen', 'refresh-users'])

const closeDialog = () => {
  emit('update:isOpen', false)
}


const createUser = async () => {
  if (!name.value || !email.value || !password.value || !role.value) {
    toast({
      title: 'Error Creating the User',
      description: 'Please fill in all fields before submitting.',
      variant: 'destructive',
    })
    return
  }

  try {
    const userData = {
      name: name.value,
      email: email.value,
      password: password.value,
      roles: role.value,
    }

    const response = await axios.post('/api/create-user', userData)

    if (response.status === 201) {
      toast({
        title: 'User Created',
        description: `User ${name.value} has been created successfully.`,
        variant: 'success',
      })
      name.value = ''
      email.value = ''
      password.value = ''
      role.value = ''

      closeDialog()

      emit('refresh-users')
    }
  } catch (error) {
    toast({
      title: 'Error',
      description: 'Something went wrong while creating the user. Please try again.',
      variant: 'destructive',
    })
    console.error('Error creating user:', error)
  }
}
</script>

<template>
  <Toaster />

  <Dialog :open="props.isOpen" @update:open="emit('update:isOpen', $event)">
    <DialogTrigger as-child>
      <Button variant="outline">
        Create User
      </Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Create User</DialogTitle>
        <DialogDescription>
          Create the user profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
      <div class="grid gap-4 py-4">
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="name" class="text-right">
            Name
          </Label>
          <Input id="name" v-model="name" class="col-span-3" placeholder="Enter Name" />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="email" class="text-right">
            Email
          </Label>
          <Input id="email" v-model="email" class="col-span-3" placeholder="Enter Email" />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="password" class="text-right">
            Password
          </Label>
          <Input id="password" v-model="password" class="col-span-3" placeholder="Enter Password" />
        </div>

        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="role" class="text-right">
            Role:
          </Label>
          <Select v-model="role">
            <SelectTrigger class="w-[120px]">
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="1">Admin</SelectItem>
                <SelectItem value="0">User</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <DialogFooter>
        <Button variant="lightGreen" @click="createUser">
          Create User
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
