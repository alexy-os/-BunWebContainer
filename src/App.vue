<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useColorMode } from '@vueuse/core'
import { useContent } from '@/composables/useContent'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet'
import { Bell, CircleUser, Menu, PencilRuler, Search } from 'lucide-vue-next'
import { Icon } from '@iconify/vue'

const mode = useColorMode()
const { siteContent, getIcon } = useContent()

useHead({
  title: siteContent.value.brand.name,
  meta: [
    { name: 'description', content: siteContent.value.brand.description }
  ],
  link: [
    { rel: 'icon', href: siteContent.value.brand.favicon_base64 }
  ]
})
</script>

<template>
  <div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
    <!-- Sidebar -->
    <div class="hidden border-r bg-muted/40 md:block">
      <div class="flex h-full max-h-screen flex-col gap-2">
        <!-- Brand -->
        <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <a href="/" class="flex items-center gap-2 font-semibold">
            <PencilRuler class="h-5 w-5" />
            <span>{{ siteContent.brand.name }}</span>
          </a>
          <Button variant="outline" size="icon" class="ml-auto h-8 w-8">
            <Bell class="h-4 w-4" />
            <span class="sr-only">Toggle notifications</span>
          </Button>
        </div>

        <!-- Navigation -->
        <div class="flex-1">
          <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
            <a
              v-for="item in siteContent.navigation.main"
              :key="item.title"
              :href="item.href"
              class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
            >
              <component :is="getIcon(item.icon)" class="h-4 w-4" />
              {{ item.title }}
              <Badge
                v-if="item.badge"
                class="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
              >
                {{ item.badge }}
              </Badge>
            </a>
          </nav>
        </div>

        <!-- Upgrade Card -->
        <div class="mt-auto p-4">
          <Card>
            <CardHeader class="p-2 pt-0 md:p-4">
              <CardTitle>{{ siteContent.upgradeCard.title }}</CardTitle>
              <CardDescription>
                {{ siteContent.upgradeCard.description }}
              </CardDescription>
            </CardHeader>
            <CardContent class="p-2 pt-0 md:p-4 md:pt-0">
              <Button size="sm" class="w-full">
                {{ siteContent.upgradeCard.buttonText }}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>

    <div class="flex flex-col">
  <header class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
    <!-- Mobile Navigation Sheet -->
    <Sheet>
      <SheetTrigger as-child>
        <Button variant="outline" size="icon" class="shrink-0 md:hidden">
          <Menu class="h-5 w-5" />
          <span class="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" class="flex flex-col">
        <SheetTitle class="sr-only">Navigation Menu</SheetTitle>
        <SheetDescription class="sr-only">Mobile navigation menu for easy access to main sections</SheetDescription>
        <nav class="grid gap-2 text-lg font-medium">
          <a href="#" class="flex items-center gap-2 text-lg font-semibold">
            <Package2 class="h-6 w-6" />
            <span class="sr-only">{{ siteContent.brand.name }}</span>
          </a>
          <!-- Mobile Navigation Items -->
          <a
            v-for="item in siteContent.navigation.main"
            :key="item.title"
            href="#"
            class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
          >
            <component :is="getIcon(item.icon)" class="h-5 w-5" />
            {{ item.title }}
            <Badge
              v-if="item.badge"
              class="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
            >
              {{ item.badge }}
            </Badge>
          </a>
        </nav>
        <!-- Mobile Upgrade Card -->
        <div class="mt-auto">
          <Card>
            <CardHeader>
              <CardTitle>{{ siteContent.upgradeCard.title }}</CardTitle>
              <CardDescription>
                {{ siteContent.upgradeCard.description }}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm" class="w-full">
                {{ siteContent.upgradeCard.buttonText }}
              </Button>
            </CardContent>
          </Card>
        </div>
      </SheetContent>
    </Sheet>

    <!-- Search -->
    <div class="w-full flex-1">
      <form>
        <div class="relative">
          <Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            :placeholder="siteContent.search.placeholder"
            class="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
          />
        </div>
      </form>
    </div>

    <!-- Theme Switcher -->
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="secondary" size="icon" class="rounded-full">
          <Icon icon="radix-icons:moon" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Icon icon="radix-icons:sun" class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span class="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem @click="mode = 'light'" class="cursor-pointer">
          Light
        </DropdownMenuItem>
        <DropdownMenuItem @click="mode = 'dark'" class="cursor-pointer">
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem @click="mode = 'auto'" class="cursor-pointer">
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    <!-- User Menu -->
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="secondary" size="icon" class="rounded-full">
          <CircleUser class="h-5 w-5" />
          <span class="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel class="cursor-pointer">{{ siteContent.userMenu.label }}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          v-for="item in siteContent.userMenu.items"
          :key="item.title"
          class="cursor-pointer"
        >
          {{ item.title }}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </header>

  <!-- Main Content -->
  <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
    <div class="flex items-center">
      <h1 class="text-lg font-semibold md:text-2xl">
        {{ siteContent.inventory.title }}
      </h1>
    </div>
    <div class="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
      <div class="flex flex-col items-center gap-1 text-center">
        <h3 class="text-2xl font-bold tracking-tight">
          {{ siteContent.inventory.emptyState.title }}
        </h3>
        <p class="text-sm text-muted-foreground">
          {{ siteContent.inventory.emptyState.description }}
        </p>
        <Button class="mt-4">
          {{ siteContent.inventory.emptyState.buttonText }}
        </Button>
      </div>
    </div>
  </main>
</div>
  </div>
</template> 