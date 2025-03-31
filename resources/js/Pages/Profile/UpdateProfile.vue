<template>

    <div class="flex min-h-screen w-full flex-col">

        <Header 
            :can-login="canLogin" 
            :can-register="canRegister" 
        />

        <main className="flex flex-col mx-12">
            <div className="flex flex-row space-x-4">
                <div className="w-1/2">
                    <UpdateUserProfile />
                </div>
                <div className="w-1/2">
                    <UpdateUserPassword />
                </div>
            </div>
            <DeleteUserProfile />
        </main>



    </div>
</template>

<script setup>
import Header from '@/Layouts/Header.vue';
import UpdateUserProfile from '@/Pages/Profile/Partitions/UpdateUserProfile.vue'
import UpdateUserPassword from '@/Pages/Profile/Partitions/UpdateUserPassword.vue'
import DeleteUserProfile from '@/Pages/Profile/Partitions/DeleteUserProfile.vue'


defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    }
});


</script>

<style scoped>
</style>
