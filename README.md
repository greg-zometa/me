<h1 align="center">
  <a href="https://zometa.me" target="_blank">
    zometa.me 👻
  </a>
</h1>

[![og-flag](./public/site-og.png)](https://zometa.me)

Personal blog to share thoughts, notes, and shitsplain every now and then.

This project was created from the [AstroPaper](https://github.com/satnaing/astro-paper) template by [Sat Naing](https://github.com/satnaing).

## 🚀 Project Structure

```bash
/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   │   |  **/
│   │   |    └── some-blog-posts.md
│   │   └── config.ts
│   ├── layouts/
│   └── pages/
│   └── styles/
│   └── utils/
│   └── config.ts
│   └── types.ts
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

## 📖 Documentation

- [Configuration](https://astro-paper.pages.dev/posts/how-to-configure-astropaper-theme/)
- [Add Posts](https://astro-paper.pages.dev/posts/adding-new-posts-in-astropaper-theme/)
- [Customize Color Schemes](https://astro-paper.pages.dev/posts/customizing-astropaper-theme-color-schemes/)
- [Predefined Color Schemes](https://astro-paper.pages.dev/posts/predefined-color-schemes/)

## 💻 Tech Stack

- **Main Framework**: [Astro](https://astro.build/)
- **Type Checking**: [TypeScript](https://www.typescriptlang.org/)
- **Component Framework**: [Svelte](https://svelte.dev/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Fuzzy Search**: [FuseJS](https://fusejs.io/)
- **Icons**: [Boxicons](https://boxicons.com/) | [Tablers](https://tabler-icons.io/)
- **Code Formatting**: [Prettier](https://prettier.io/)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)
- **Illustrations**: [Unsplash](https://unsplash.com/)
- **Linting**: [ESLint](https://eslint.org)

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command            | Action                                                                                                                           |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm install`     | Installs dependencies                                                                                                            |
| `pnpm run dev`     | Starts local dev server at `localhost:4321`                                                                                      |
| `pnpm run build`   | Build your production site to `./dist/`                                                                                          |
| `pnpm run preview` | Preview your build locally, before deploying                                                                                     |
| `pnpm run format`  | Format codes with Prettier                                                                                                       |
| `pnpm run sync`    | Generates TypeScript types for all Astro modules. [Learn more](https://docs.astro.build/en/reference/cli-reference/#astro-sync). |
| `pnpm run lint`    | Lint with ESLint                                                                                                                 |

## 📜 License

Licensed under the MIT License, Copyright © 2023
