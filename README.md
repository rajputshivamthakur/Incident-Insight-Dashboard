# Incident Insight Frontend

![React](https://img.shields.io/badge/React-18.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Vite](https://img.shields.io/badge/Vite-4.0-orange)
![License](https://img.shields.io/badge/License-MIT-green)

A modern dashboard application for visualizing and analyzing incident data, built with React, TypeScript, and Shadcn UI components.

## ✨ Features

- **Blazing Fast** ⚡ - Powered by Vite for instant hot module replacement
- **Beautiful UI** 🎨 - Professional design system with Tailwind CSS and Shadcn UI
- **Type Safe** 🔒 - Full TypeScript integration for robust development
- **Responsive** 📱 - Fully responsive layout for all device sizes
- **Data Visualization** 📊 - Interactive charts with Recharts
- **Modern State Management** 🔄 - Simple global state with Zustand
- **Form Validation** 📝 - Efficient forms with React Hook Form + Zod

## 🚀 Quick Start

### Prerequisites

- Node.js v18 or higher
- npm v9+ or yarn v1.22+

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rajputshivamthakur/Incident-Insight-Dashboard.git
cd incident-insight-frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Edit the `.env` file with your configuration.

### Development

Start the development server:
```bash
npm run dev
# or
yarn dev
```

### Production

Build for production:
```bash
npm run build
# or
yarn build
```

Preview production build:
```bash
npm run preview
# or
yarn preview
```

## 🛠 Technology Stack

| Technology       | Purpose                          | Why Chosen?                     |
|------------------|----------------------------------|---------------------------------|
| React 18         | UI Framework                     | Component-based architecture    |
| TypeScript 5     | Type Safety                      | Catch errors at compile time    |
| Vite 4           | Build Tool                       | Lightning fast development      |
| Tailwind CSS 3   | Styling                          | Utility-first CSS framework     |
| Shadcn UI        | Component Library                | Accessible, customizable UI     |
| Zustand 4        | State Management                 | Minimal boilerplate             |
| Recharts 2       | Data Visualization               | React-native charting library   |
| date-fns 2       | Date Manipulation                | Lightweight date utilities      |
| React Hook Form 7| Form Handling                    | Performance-optimized forms     |
| Zod 3            | Schema Validation                | Type-safe validation            |

## 🏗 Project Structure

```
/src
├── assets/          # Static assets (images, fonts)
├── components/      # Reusable UI components (atomic design)
│   ├── ui/         # Shadcn components
│   ├── charts/     # Custom chart components
│   └── shared/     # Shared components
├── hooks/          # Custom React hooks
├── lib/            # Utilities and helpers
├── pages/          # Page components
├── stores/         # Zustand state stores
├── types/          # TypeScript types
├── App.tsx         # Main app component
└── main.tsx        # Application entry point
```

## 🔧 Configuration

### Environment Variables

Configure these in your `.env` file:

```ini
VITE_API_BASE_URL=https://api.example.com
VITE_MAPBOX_ACCESS_TOKEN=your_mapbox_token
VITE_APP_ENV=development
```

### Tailwind Config

Customize your design system in `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6',
          dark: '#2563eb'
        }
      }
    }
  }
}
```

## 🎨 UI Components

We use Shadcn UI components with customizations:

```tsx
import { Button } from "@/components/ui/button"

function Example() {
  return <Button variant="primary">Click me</Button>
}
```

All components are:
- Fully typed with TypeScript
- Themeable via Tailwind
- Accessible by default
- Customizable at the component level

## 📊 Data Visualization

Example chart implementation:

```tsx
import { BarChart, Bar, XAxis, YAxis } from 'recharts'

function IncidentChart({ data }) {
  return (
    <BarChart data={data}>
      <XAxis dataKey="month" />
      <YAxis />
      <Bar dataKey="incidents" fill="#3b82f6" />
    </BarChart>
  )
}
```

## 🧠 State Management

Zustand store example:

```ts
import { create } from 'zustand'

interface IncidentStore {
  incidents: Incident[]
  addIncident: (incident: Incident) => void
}

export const useIncidentStore = create<IncidentStore>((set) => ({
  incidents: [],
  addIncident: (incident) => 
    set((state) => ({ incidents: [...state.incidents, incident] }))
}))
```

## 📝 Forms

Example form with validation:

```tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const formSchema = z.object({
  title: z.string().min(3),
  severity: z.enum(['low', 'medium', 'high'])
})

function IncidentForm() {
  const form = useForm({
    resolver: zodResolver(formSchema)
  })

  return (
    <Form {...form}>
      <FormField name="title" render={({ field }) => (
        <FormItem>
          <FormLabel>Title</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
        </FormItem>
      )}/>
    </Form>
  )
}
```

## 🧪 Testing

Run tests:
```bash
npm test
# or
yarn test
```

Test coverage:
```bash
npm run test:coverage
```

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## ✉️ Contact

Project Maintainer - [Shivam Thakur](mailto:shivamthakur1924@gmail.com)

Project Link: [https://github.com/rajputshivamthakur/Incident-Insight-Dashboard](https://github.com/rajputshivamthakur/Incident-Insight-Dashboard)
```

Key features of this README:

1. **Professional Header** with version badges
2. **Quick Start** section for immediate setup
3. **Detailed Technology Stack** table
4. **Complete Project Structure**
5. **Configuration Examples** for key files
6. **Code Examples** for major features
7. **Testing Instructions**
8. **Complete Contributing Guide**
9. **License and Contact Info**

The README is organized to serve both quick starters who want to get the app running immediately and developers who need deeper technical details about the implementation.# Incident-Insight-Dashboard
