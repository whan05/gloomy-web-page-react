# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Contact form email configuration

The Netlify function at `netlify/functions/contact-lead.mjs` sends contact form emails through Resend.

Required environment variables:

- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL`
- `CONTACT_TO_EMAIL`
- `CONTACT_REPLY_TO_EMAIL` (optional)

Important:

- `CONTACT_FROM_EMAIL` must use a domain verified in Resend.
- Do not use public sender domains like `gmail.com` for `CONTACT_FROM_EMAIL`.
- Use the visitor's email as `reply_to`, not as the sender.

Example:

```env
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_FROM_EMAIL=Gloomy Studios <hello@yourdomain.com>
CONTACT_TO_EMAIL=you@yourdomain.com
CONTACT_REPLY_TO_EMAIL=hello@yourdomain.com
```
