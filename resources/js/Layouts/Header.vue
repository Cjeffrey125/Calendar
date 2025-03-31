<template>
    <header class="fixed top-0 left-0 w-full flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-50">
        <nav class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link :href="route('welcome')" class="flex items-center gap-2 text-lg font-semibold md:text-base">
                <div class="h-12 w-12">
                    <img src="/images/school_logo.png" alt="Test Image" class="w-full h-full" />
                </div>
                <span>Laguna Science and Technology College</span>
            </Link>


            <Link v-if="$page.props.auth.user" :href="route('dashboard')" class="flex items-center gap-2 text-lg font-semibold md:text-base">
                <span class="text-sm">Dashboard</span>
            </Link>

            <!-- <div v-if="$page.props.auth.user" class="flex flex-col md:flex-row md:items-center md:gap-5">
                <Link :href = "route('dashboard')" class="text-foreground transition-colors hover:text-foreground">
                    Dashboard
                </Link>

                <a href="#" class="text-muted-foreground transition-colors hover:text-foreground">
                    Orders
                </a>
            </div> -->

            <div class="sm:fixed sm:right-0 p-6 text-end">
                <Link v-if="$page.props.auth.user" :href="route('dashboard')" class="text-muted-foreground hover:text-foreground">
                    <DropdownMenu>
                        <DropdownMenuTrigger as-child>
                            <Button variant="primary" size="icon" class="rounded-full">
                                <CircleUser class="h-5 w-5" />
                                <span class="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                           
                            <DropdownMenuItem>
                                <Link :href="route('user-profile')" class="w-full text-left">
                                    My Profile
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link :href="route('logout')" method="post" as="button" class="w-full text-left">
                                    Logout
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </Link>

                <template v-else>
                    <div class="flex h-16 items-center gap-6 px-4 md:px-6">

                        <!-- <Link :href="route('login')" class="text-muted-foreground hover:text-foreground">
                            Log in
                        </Link>

                        <Link :href="route('register')" class="text-muted-foreground hover:text-foreground">
                            Register
                        </Link>
                         -->
                    </div>
                </template>
            </div> 
        </nav>

        <Sheet>
            <SheetTrigger as-child>
                <Button variant="outline" size="icon" class="shrink-0 md:hidden">
                    <Menu class="h-5 w-5" />
                    <span class="sr-only">Toggle navigation menu</span>
                </Button>
            </SheetTrigger>

            <SheetContent side="left">
                <nav class="grid gap-6 text-lg font-medium">
                    <Link :href="route('welcome')" class="flex items-center gap-2 text-lg font-semibold">
                        <div class="h-10 w-10">
                            <img src="/images/school_logo.png" alt="Test Image" class="w-full h-full" />
                        </div>   
                        Laguna Science and <br/>Technology College                     
                    <span class="sr-only">Logo</span>
                    </Link>

                    <template v-if="$page.props.auth.user">
                        <!-- <Link :href="route('dashboard')" class="text-muted-foreground hover:text-foreground">
                            Dashboard
                        </Link> -->
                    </template>

                    <template v-else>
                        <div>
                            <Link :href="route('login')" class="text-muted-foreground hover:text-foreground">
                                Events
                            </Link>
                        </div>
                        <div>
                            <Link :href="route('login')" class="text-muted-foreground hover:text-foreground">
                                About Us
                            </Link>
                        </div>
                        <div>
                            <Link :href="route('login')" class="text-muted-foreground hover:text-foreground">
                                Contact Us
                            </Link>
                        </div>
                        <!-- <div>
                            <Link :href="route('login')" class="text-muted-foreground hover:text-foreground">
                                Log in
                            </Link>
                        </div>
                        <div>
                            <Link :href="route('register')" class="text-muted-foreground hover:text-foreground">
                                Register
                            </Link>
                        </div> -->
                    </template>
                </nav>
            </SheetContent>
        </Sheet>
    </header>

</template>

<script setup>
import { Link } from '@inertiajs/vue3';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { CircleUser, Menu } from 'lucide-vue-next';

defineProps({
    canLogin: {
        type: Boolean,
    },
});
</script>

<style>

</style>
