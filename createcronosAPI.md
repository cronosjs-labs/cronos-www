# 🪄API

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
  banner: () => {
    console.clear();
    console.log("🪄 Create Cronos API");
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
  steps: Function[];
  path?: string;
  execCommand?: string | string[];
  create?: boolean;
}

export { Project };
```

- `initializer`: A function that runs before launching the project's CLI or any other function that the user will interact with. For example:

```typescript
initializer: () => {
    return [() => console.log("⚡ Starting up")]
},
```

- `finalizer`: Once all the processes have finished, this function would be executed. For example:

```typescript
finalizer: () => {
  return [() => console.log("🪄 Project generated successfully")];
};
```

- `banner`: Print a banner when the project is generated. For example:

```typescript
banner: () => {
  console.clear();
  console.log("🪄 Create Cronos API");
};
```
