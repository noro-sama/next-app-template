# Launchpad Next.js starter

A small Next.js App Router template with TypeScript, Tailwind CSS, Zustand,
Zod, and React Hook Form. It deliberately avoids auth providers, component
libraries, and monorepo tooling.

## Getting started

```bash
git clone <your-repository-url>
cd app-template
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

On Windows PowerShell, copy the environment file with:

```powershell
Copy-Item .env.example .env.local
```

`NEXT_PUBLIC_API_URL` is empty by default, so API requests use the current
origin. Set it in `.env.local` when connecting to a separate backend.

## Included examples

- A responsive landing page and reusable Tailwind components in `src/components`.
- Login fields validated with Zod and React Hook Form.
- A typed `http` client in `src/lib/api/http.ts` with JSON parsing, normalized
  `ApiError`s, cookie credentials, and optional Zustand bearer-token injection.
- A `userService` login method that calls the local fake endpoint at
  `/api/auth/login`. Any valid email and password of at least eight characters
  are accepted. The endpoint sets a demo cookie; it is not real authentication.
- An optimistic `src/proxy.ts` guard for `/dashboard`. Next.js 16 renamed
  Middleware to Proxy. This cookie check is only a starter stub; production
  applications must verify sessions and authorize access in their data layer.
- A dynamic dashboard route with loading and error UI.

## Project structure

```text
src/
├── app/                  # Routes and route layouts
│   ├── (auth)/login/
│   ├── api/auth/login/
│   └── dashboard/[id]/
├── components/
│   ├── forms/
│   ├── layout/
│   └── ui/
├── constants/
├── hooks/
├── lib/api/
├── services/
├── store/
├── styles/
├── types/
└── utils/
```

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm start
```
