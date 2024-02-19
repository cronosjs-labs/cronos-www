# Create Cronos

Generate a project with Vite, Express, Next.js, Astro and other technologies with a single command.

## 🚀 Create new project:

```bash
npm create cronos@latest
```

::: info
The possibility of using external templates has been added to expand the availability of technologies!
:::

## 📦 Supported technologies

Frontend and Backend technologies are supported, you can create a project With at least the following technologies:

| Name      | Description | Bibliography |
| --------- | ----------- | ------------ |
| `Vite`    |Build tool that aims to provide a faster and leaner development experience for modern web projects.             | https://vitejs.dev/ |
| `Astro`   |Web framework for building content-driven websites like blogs, marketing, and e-commerce.             |https://astro.build/
| `Next.js` |React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.             |https://nextjs.org/
| `Hono `   |Small, simple, and ultrafast web framework for the Edges.             |https://hono.dev/
| `Express` |Minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.             |https://expressjs.com/

You can check all the available technologies in the [Create Cronos](#) GitHub repository.

## 🪄API

Generate your **own project generator** adapted to the needs of your organization in record time using the Create Cronos API.

### Config file

Create a `config.ts` file in the root of your template with the following structure:

```typescript
import { Config } from "./types/Config";

const config: Config = {
  projects: [],
  initializer: () => {
    return [];
  },
  finalizer: () => {
    return [];
  },
};

export default config;
```

Let's see what each of the properties of the `Config` object is for:

- `projects`: Array of projects that can be generated.

```typescript
interface Project {
  name: string;
  value: string;
  type: 'local' | 'external';
  steps: Function[];
  path?: string;
  execCommand?: string | string[];
}

export { Project };
```

- `initializer`: A function that runs before launching the project's CLI or any other function that the user will interact with. For example:

```typescript
initializer: () => {
    // Do something before the project is generated
    return [() => console.log("⚡ Starting up")]
},
```

- `finalizer`: Once all the processes have finished, this function would be executed. For example:

```typescript
finalizer: () => {
  return [() => console.log("🪄 Project generated successfully")];
};
```
