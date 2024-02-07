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

| Name      | Description |
| --------- | ----------- |
| `Vite`    |             |
| `Astro`   |             |
| `Next.js` |             |
| `Hono `   |             |
| `Express` |             |

You can check all the available technologies in the [Create Cronos](#api) GitHub repository.

## 🪄API

Generate your **own project generator** adapted to the needs of your organization in record time using the Create Cronos API.

### Config file

Create a `config.ts` file in the root of your template with the following structure:

```typescript
import { Config } from "./types/Config";

const config: Config = {
  projects: [],
  preMiddleware: () => {
    return [];
  },
  postMiddleware: () => {
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
  type: "local" | "external";
  requestProjectName?: boolean;
  steps: Function[];
  path?: string;
  execCommand?: string | string[];
}

export { Project };
```

- `preMiddleware`: A function that runs before launching the project's CLI or any other function that the user will interact with. For example:

```typescript
preMiddleware: () => {
    return [() => console.log("🚀 Let's go! 🚀")];
},
```

- `postMiddleware`: Once all the processes have finished, this function would be executed. For example:

```typescript
postMiddleware: () => {
  return [() => console.log("🚀 Let's go! 🚀")];
};
```
