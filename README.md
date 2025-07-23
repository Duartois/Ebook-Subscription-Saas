# Ebook Subscription SaaS – Full-Stack SaaS Starter (Next.js + Prisma)

A fully functional SaaS template built with Next.js App Router, Prisma ORM, TailwindCSS, and TypeScript. Designed for paid access to digital content such as e-books or premium material. Includes authentication, database integration, subscription logic, and modular UI components.

## ✨ Features

- Modern layout with responsive design
- Authentication system (email/password or OAuth-ready)
- Plan-based access control (Free / Premium)
- UI component architecture using ShadCN-based system
- Fully integrated with Prisma ORM (SQLite as default)
- Easy to adapt to Stripe, Supabase, or other integrations
- Modular and extendable backend (`lib/` folder)
- Built with App Router (Next.js 13+)

## 🛠️ Tech Stack

- **Next.js** – App Router with layouts and server components
- **Tailwind CSS** – Utility-first responsive styling
- **TypeScript** – Strong typing for all layers
- **Prisma ORM** – Relational DB access (default SQLite)
- **ShadCN UI** – Prebuilt accessible UI primitives
- **SQLite (dev)** – Easily replaceable with PostgreSQL/MySQL
- **PostCSS** – Tailwind build integration

## 📁 Project Structure

/components → Reusable UI & logic (buttons, cards, pricing)
/lib → Server-side logic (DB, auth, utils)
/prisma → Prisma schema + dev DB
/public → Static assets
/pages or /app → App Router (landing, auth, dashboard)
/styles → Tailwind globals

.env.copy → Rename to .env and configure your DB/auth

## 🔐 Authentication

Built-in handler (auth.ts) with structure ready for full auth integration
Can be extended with NextAuth.js, Clerk, Supabase Auth or custom JWT

## 💼 Use Cases

Ebook access platform (single or multi-author)
Gated content SaaS (PDFs, guides, tutorials)
Template for launching new premium content projects
White-label MVP base for client SaaS development

## 📸 UI Components

Includes production-ready examples of:
Pricing cards
Auth inputs & forms
Call-to-action blocks
Responsive layout containers

## 🧩 TODO & Extensions

✅ Stripe integration (ready for plug-in)
✅ Replace SQLite with PostgreSQL for production
✅ Add email verification (NextAuth/Supabase)
✅ Build admin dashboard (CMS layer)

## 📬 Contact

GitHub: github.com/Duartois
LinkedIn: [LinkedIn](https://www.linkedin.com/in/matheusduartegoncalves/)
Email: matheusdugoncalves@gmail.com

## 🚀 Getting Started

```bash
git clone https://github.com/Duartois/Ebook-Subscription-Saas.git
cd Ebook-Subscription-Saas
npm install
npx prisma generate
npx prisma migrate dev
npm run dev
Default runs on http://localhost:3000
