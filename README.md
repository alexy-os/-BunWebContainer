# Bunjs + Vite + Shadcn-vue Starter Template

A minimalist starter template for small Vue.js projects using Bun as the JavaScript runtime and package manager.

> ⚠️ **Important**: This template is recommended for small projects that don't require SEO. For large-scale applications, consider using Nuxt.js instead.

## Stack

- 🚀 [Bun](https://bun.sh/) - Fast all-in-one JavaScript runtime & package manager
- ⚡️ [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- 🎨 [Shadcn-vue](https://www.shadcn-vue.com/) - Re-usable components built with Radix UI and Tailwind CSS
- 🎯 [Vue 3](https://vuejs.org/) - The Progressive JavaScript Framework
- 💎 [TypeScript](https://www.typescriptlang.org/) - JavaScript with syntax for types
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework

## Getting Started

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd <project-name>

# Install dependencies
bun install
```

## Project Setup

1. Initialize shadcn-vue:
```bash
npx shadcn-vue@latest init
```

2. Follow the initialization prompts for `components.json`:
- TypeScript: Yes
- Framework: Vite
- Style: Default
- Base color: Your preference
- Global CSS file: src/assets/index.css
- CSS variables: Yes
- Tailwind config: tailwind.config.js
- Import alias components: @/components
- Import alias utils: @/lib/utils

## Development Scripts

```bash
# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Using Components

Install shadcn-vue components:
```bash
npx shadcn-vue@latest add button
```

Usage example:
```vue
<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <Button>Click me</Button>
</template>
```

## Project Structure

```
├── src/
│   ├── assets/
│   │   └── index.css
│   ├── components/
│   │   └── ui/
│   ├── lib/
│   │   └── utils.ts
│   ├── App.vue
│   └── main.ts
├── components.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Features

- ⚡️ Lightning-fast development with Bun and Vite
- 🎨 Beautiful UI components from shadcn-vue
- 💪 Type-safe development with TypeScript
- 🎯 Modern Vue 3 Composition API
- 📦 Efficient package management with Bun
- 🎨 Utility-first styling with Tailwind CSS

## Performance Considerations

This template is optimized for:
- Single Page Applications (SPA)
- Client-side rendered applications
- Small to medium-sized projects
- Rapid prototyping and development

## License

MIT

---

🔍 **Note**: For projects requiring SEO, server-side rendering, or more complex architecture, we recommend using [Nuxt.js](https://nuxt.com/).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.