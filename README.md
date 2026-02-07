# Next.js Template

A modern, high-performance Next.js template equipped with the latest technology for building robust web applications.

## 🚀 Tech Stack

### Framework & Runtime

- **[Next.js 16 (App Router)](https://nextjs.org/)** - The React Framework for the Web.
- **[React 19](https://react.dev/)** - The latest version of React with improved performance and features.
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript for better developer experience.

### UI & Styling

- **[Tailwind CSS 4](https://tailwindcss.com/)** - The newest version of the utility-first CSS framework.
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible UI components.
- **[Lucide React](https://lucide.dev/)** - Beautifully simple, pixel-perfect icons.
- **[Next Themes](https://github.com/pacocoursey/next-themes)** - Perfect dark mode support for Next.js.
- **[shadcn/ui](https://ui.shadcn.com/)** - Reusable components built using Radix UI and Tailwind CSS.

### State & Data Management

- **[TanStack Query (React Query)](https://tanstack.com/query/latest)** - Powerful asynchronous state management for TS/JS.
- **[Axios](https://axios-http.com/)** - Promise-based HTTP client for the browser and node.js.

### Forms & Validation

- **[React Hook Form](https://react-hook-form.com/)** - Performant, flexible, and extensible forms with easy-to-use validation.
- **[Zod](https://zod.dev/)** - TypeScript-first schema declaration and validation library.

### Testing & Quality

- **[Playwright](https://playwright.dev/)** - Reliable end-to-end testing for modern web apps.
- **[ESLint](https://eslint.org/)** - Pluggable linting utility for JavaScript and JSX.

---

## 🛠️ Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Mock Server (JSON Server)

We use **JSON Server** to provide a full fake REST API with zero coding. It's ideal for front-end development when the back-end is not ready or for prototyping.

### Why use it?

- **Speed**: Quickly prototype features without a real backend.
- **Persistence**: Changes are saved to `db.json`.
- **Relationship support**: Easily simulate complex data structures.

### How to run?

Run the following command to start both the Next.js development server and the JSON Server concurrently:

```bash
npm run server
```

The mock API will be available at [http://localhost:4000](http://localhost:4000).

### How to use?

- The server watches `db.json` for data.
- Custom routes are defined in `routes.json` (e.g., `/api/*` maps to `/*`).
- You can make standard REST requests (GET, POST, PUT, PATCH, DELETE) to `http://localhost:4000`.
- All changes are automatically persisted to the `db.json` file.

## 🏗️ Project Structure

- `src/app/` - Next.js App Router pages and layouts.
- `src/components/` - Reusable UI components.
- `tests/` - End-to-end tests with Playwright.
- `public/` - Static assets.

## 📖 Learn More

To learn more about the tools used in this template, check out their respective documentations.

- [Next.js Documentation](https://nextjs.org/docs)
- [TanStack Query Documentation](https://tanstack.com/query/latest/docs/react/overview)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Playwright Documentation](https://playwright.dev/docs/intro)
