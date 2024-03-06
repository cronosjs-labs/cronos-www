# 📌 CLI

Expand the capabilities of your custom project builder using command line interface (CLI) options.

### Change the default configuration file

By default, the configuration file is `config.ts`. If you want to change the config file, you can do it by adding the `-c` flag.

```bash
npm create cronos@latest --- -c ./myConfig.ts
```

In the next execution, `myConfig.ts` file will be used as the configuration file if `-c` flag is added. This is possible because the previous configuration was bundled and cached in your system.

```bash
npm create cronos@latest --- -c
```

### Change the default templates folder

By default, the templates folder is `templates`. If you want to change the templates folder, you can do it by adding the `-t` flag.

```bash
npm create cronos@latest --- -t ./myTemplates
```
