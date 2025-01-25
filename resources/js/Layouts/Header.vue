<template>
    <header class="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav class="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link :href="route('welcome')" class="flex items-center gap-2 text-lg font-semibold md:text-base">
                <div class="h-8 w-8">
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" width="100%" height="100%">
                        <title>Plotted</title>
                        <g data-name="Layer 7" id="Layer_7">
                            <path d="M14,1h-.5363c0-.0159.0065-.03.0051-.0464A.5064.5064,0,0,0,12.9243.502,1.5085,1.5085,0,0,0,11.9449,1H8.9359a.4476.4476,0,0,0,.005-.0464A.508.508,0,0,0,8.3965.502,1.5055,1.5055,0,0,0,7.4176,1H4.493A.4476.4476,0,0,0,4.498.9536.5047.5047,0,0,0,3.9536.502,1.5058,1.5058,0,0,0,2.9747,1H2A2.0023,2.0023,0,0,0,0,3V14a2.0023,2.0023,0,0,0,2,2H14a2.0023,2.0023,0,0,0,2-2V3A2.0023,2.0023,0,0,0,14,1Zm1,13a1,1,0,0,1-1,1H2a1,1,0,0,1-1-1V5.5H11a.5.5,0,0,0,0-1H1V3A1,1,0,0,1,2,2h.5851v.0005A1.5087,1.5087,0,0,0,3.9976,3.499L4.03,3.5a.5.5,0,0,0,.0312-.999A.5127.5127,0,0,1,3.5851,2H7.028l0,.0005A1.5088,1.5088,0,0,0,8.44,3.499l.0323.001a.5.5,0,0,0,.0312-.999A.5127.5127,0,0,1,8.028,2h3.5278v.0005A1.5087,1.5087,0,0,0,12.9683,3.499l.0322.001a.5.5,0,0,0,.0312-.999A.513.513,0,0,1,12.5558,2H14a1,1,0,0,1,1,1V4.5H13a.5.5,0,0,0,0,1h2Z"/>
                            <path d="M5.5249,12.6621a.5207.5207,0,0,0,.1582-.0254l2.1216-.707A.4989.4989,0,0,0,8,11.8086l3.5356-3.5357a.5.5,0,0,0,0-.707L10.1211,6.1514a.5146.5146,0,0,0-.707,0L5.8789,9.6875a.5014.5014,0,0,0-.1206.1953l-.7075,2.1211a.5.5,0,0,0,.4741.6582Zm4.2427-5.45.7075.7075-.7072.7071-.7074-.7072Zm-3.0982,3.1,1.6842-1.685.7073.7069L7.3765,11.0176l-1.0606.3535Z"/>
                            <path d="M12,13.0049H4a.5.5,0,0,0,0,1h8a.5.5,0,0,0,0-1Z"/>
                        </g>
                    </svg>
                </div>
                <span>Plotted</span>
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
                  
                            <DropdownMenuSeparator />
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
                        <Link :href="route('login')" class="text-muted-foreground hover:text-foreground">
                            Log in
                        </Link>

                        <Link :href="route('register')" class="text-muted-foreground hover:text-foreground">
                            Register
                        </Link>
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
                        <div class="h-8 w-8">
                            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true" swidth="100%" height="100%">
                                <title>Icon</title>
                                <g data-name="Layer 7" id="Layer_7">
                                    <path d="M14,1h-.5363c0-.0159.0065-.03.0051-.0464A.5064.5064,0,0,0,12.9243.502,1.5085,1.5085,0,0,0,11.9449,1H8.9359a.4476.4476,0,0,0,.005-.0464A.508.508,0,0,0,8.3965.502,1.5055,1.5055,0,0,0,7.4176,1H4.493A.4476.4476,0,0,0,4.498.9536.5047.5047,0,0,0,3.9536.502,1.5058,1.5058,0,0,0,2.9747,1H2A2.0023,2.0023,0,0,0,0,3V14a2.0023,2.0023,0,0,0,2,2H14a2.0023,2.0023,0,0,0,2-2V3A2.0023,2.0023,0,0,0,14,1Zm1,13a1,1,0,0,1-1,1H2a1,1,0,0,1-1-1V5.5H11a.5.5,0,0,0,0-1H1V3A1,1,0,0,1,2,2h.5851v.0005A1.5087,1.5087,0,0,0,3.9976,3.499L4.03,3.5a.5.5,0,0,0,.0312-.999A.5127.5127,0,0,1,3.5851,2H7.028l0,.0005A1.5088,1.5088,0,0,0,8.44,3.499l.0323.001a.5.5,0,0,0,.0312-.999A.5127.5127,0,0,1,8.028,2h3.5278v.0005A1.5087,1.5087,0,0,0,12.9683,3.499l.0322.001a.5.5,0,0,0,.0312-.999A.513.513,0,0,1,12.5558,2H14a1,1,0,0,1,1,1V4.5H13a.5.5,0,0,0,0,1h2Z"/>
                                    <path d="M5.5249,12.6621a.5207.5207,0,0,0,.1582-.0254l2.1216-.707A.4989.4989,0,0,0,8,11.8086l3.5356-3.5357a.5.5,0,0,0,0-.707L10.1211,6.1514a.5146.5146,0,0,0-.707,0L5.8789,9.6875a.5014.5014,0,0,0-.1206.1953l-.7075,2.1211a.5.5,0,0,0,.4741.6582Zm4.2427-5.45.7075.7075-.7072.7071-.7074-.7072Zm-3.0982,3.1,1.6842-1.685.7073.7069L7.3765,11.0176l-1.0606.3535Z"/>
                                    <path d="M12,13.0049H4a.5.5,0,0,0,0,1h8a.5.5,0,0,0,0-1Z"/>
                                </g>
                            </svg>
                        </div>   
                        Plotted                     
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
                                Log in
                            </Link>
                        </div>
                        <div>
                            <Link :href="route('register')" class="text-muted-foreground hover:text-foreground">
                                Register
                            </Link>
                        </div>
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
