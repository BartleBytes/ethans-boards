# Bartle Boards Commerce

Opinionated starter for a custom woodwork commerce experience using Next.js 15, React 19, Prisma, and ShadCN UI.

## Stack

- **App**: Next.js App Router, React Server Components, React Compiler enabled
- **Styling**: Tailwind CSS 3, ShadCN-inspired UI primitives, custom theming
- **Auth**: NextAuth.js (credentials provider wired up, OAuth ready)
- **Database**: PostgreSQL with Prisma ORM (User, Product, and Order domain models)
- **Validation & Forms**: Zod + React Hook Form
- **Testing**: Jest + Testing Library

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Copy env vars**
   ```bash
   cp .env.example .env.local
   ```
   Update `DATABASE_URL`, `NEXTAUTH_SECRET`, and any provider credentials.
3. **Provision the database** (local postgres, Supabase, Neon, etc.) and push the schema:
   ```bash
   npm run db:push
   # or generate SQL migrations
   npm run db:migrate -- --name init
   ```
4. **Generate Prisma client** (runs automatically with push/migrate, provided separately if your workflow differs):
   ```bash
   npm run db:generate
   ```
5. **Start developing**
   ```bash
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000) to view the marketing shell.

## Scripts

- `npm run dev` – Next.js dev server
- `npm run build` / `npm start` – production build & serve
- `npm run lint` / `npm run lint:fix` – ESLint (Next core web vitals rules)
- `npm run typecheck` – isolated TypeScript check
- `npm run test` / `npm run test:watch` – Jest + Testing Library
- `npm run db:*` – Prisma helpers (`generate`, `push`, `migrate`, `studio`)

## Project Structure

```
src/
  app/
    (auth)/sign-in        ← placeholder auth route
    api/auth/...          ← NextAuth route handler
    api/contact           ← Zod-validated inquiry endpoint
    page.tsx              ← hero + marketing sections
  components/
    layout/               ← header/footer/app shell
    sections/             ← hero, products, contact, etc.
    ui/                   ← ShadCN-style primitives (button, card, toast...)
    providers/            ← theme provider
    forms/                ← React Hook Form implementations
  data/                   ← mock data for the landing page
  lib/
    auth/                 ← NextAuth options + helpers
    prisma.ts             ← singleton Prisma client
    validations/          ← Zod schemas
    utils.ts              ← `cn` helper
prisma/schema.prisma       ← Database models for Postgres
components.json            ← shadcn/ui config (ready for `npx shadcn@latest add ...`)
```

## Next Steps

1. **Auth providers** – Add OAuth/email providers in `src/lib/auth/options.ts`, seed users via Prisma, and build a real sign-in UI.
2. **Database migrations** – After adjusting models, run `npm run db:migrate -- --name <change>` and commit the generated SQL.
3. **Commerce features** – Build product listing pages, cart/checkout flows, and connect to a payment processor (Stripe, Lemon Squeezy, etc.).
4. **ShadCN components** – Use the provided `components.json` with `npx shadcn@latest add <component>` to extend the design system.
5. **Deployment** – Configure Vercel project, set environment variables, and connect to your managed Postgres instance.

Feel free to iterate on the visual direction (palette + typography) inside `src/app/globals.css` and `tailwind.config.ts`.
