import { ref } from 'vue'
import content from '@/content/site-content.json'
import type { Component } from 'vue'
import { 
  Bell, 
  CircleUser, 
  Home, 
  LineChart, 
  Menu, 
  Package, 
  Package2, 
  Search, 
  ShoppingCart, 
  Users,
  FolderTree 
} from 'lucide-vue-next'

const iconMap: Record<string, Component> = {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
  FolderTree
}

export function useContent() {
  const siteContent = ref(content)

  const getIcon = (iconName: string): Component => {
    return iconMap[iconName] || Package // Возвращаем Package как иконку по умолчанию
  }

  return {
    siteContent,
    getIcon
  }
}