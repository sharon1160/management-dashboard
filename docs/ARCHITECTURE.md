# Architecture

This is the target architecture, not what exists today. Right now we only
have app/ (with app/components/ui/). features/ and shared/ will show up as
the project grows, but new code should already follow this structure.

## Layers

app/ -> Next.js App Router. Only routing and composition, pages just import
and arrange stuff from features/ and shared/. No business logic here.

features/ -> one folder per business domain (auth, dashboard, items,
navigation, theme...). Each feature is self-contained and only exposes
itself through its index.ts. Everything else inside is private.

shared/ -> only business-agnostic code. If it's tied to one feature it
belongs in that feature, not here. This is where the shadcn/ui primitives
live (shared/ui), plus generic components, hooks, types and utils.

## Dependency direction

app/ -> features/ and shared/
features/ -> shared/, and other features only through their index.ts
shared/ -> nothing from features/ or app/

## Target file tree

```
my-app/
├── app/                              # Next.js App Router | routing & composition only
│   ├── layout.tsx
│   ├── page.tsx
│   ├── (auth)/
│   │   ├── login/page.tsx            # composes features/auth
│   │   └── register/page.tsx
│   ├── (dashboard)/
│   │   ├── layout.tsx
│   │   ├── dashboard/page.tsx        # composes features/dashboard
│   │   └── items/
│   │       ├── page.tsx              # composes features/items -> <ItemTable />
│   │       └── [id]/page.tsx         # composes features/items -> <ItemDetail />
│   ├── api/
│   │   └── external-service/route.ts # proxy to an external API (hides keys)
│   ├── globals.css
│   └── favicon.ico
│
├── features/                         # each folder is a self-contained business domain
│   ├── auth/
│   │   ├── components/               # LoginForm, RegisterForm
│   │   ├── hooks/                    # useAuth
│   │   ├── schemas/                  # loginSchema, registerSchema (Zod)
│   │   ├── types/                    # User, Session
│   │   ├── constants.ts
│   │   └── index.ts                  # public API (barrel export)
│   │
│   ├── dashboard/
│   │   ├── components/               # MetricCard, Chart
│   │   ├── hooks/                    # useDashboardData
│   │   ├── data/dummy.json
│   │   ├── types/
│   │   └── index.ts
│   │
│   ├── items/                        # generic CRUD/listing example
│   │   ├── components/
│   │   │   ├── ItemTable.tsx
│   │   │   ├── ItemForm.tsx
│   │   │   └── ItemBadge.tsx
│   │   ├── hooks/
│   │   │   ├── useItemTable.ts
│   │   │   └── useItemForm.ts
│   │   ├── data/dummy.json
│   │   ├── schemas/
│   │   ├── types/
│   │   ├── utils/
│   │   ├── constants.ts
│   │   └── index.ts
│   │
│   ├── navigation/                   # sidebar/navbar as a feature (not a "widget")
│   │   ├── components/
│   │   ├── hooks/
│   │   └── index.ts
│   │
│   └── theme/                        # light/dark toggle
│       ├── components/
│       ├── hooks/
│       └── index.ts
│
├── shared/                           # only what's 100% business-agnostic
│   ├── ui/                           # shadcn: Button, Input, Table, Dialog
│   ├── components/                   # DataTable, Pagination, EmptyState, Spinner
│   ├── hooks/                        # useDebounce, useMediaQuery
│   ├── mock/                         # dummy data genuinely shared across features
│   ├── types/                        # ApiResponse<T>, PaginatedResponse<T>
│   ├── utils/                        # cn, formatDate, slugify
│   ├── constants/
│   └── fonts.ts
│
├── public/
├── docs/
├── components.json
├── next.config.ts
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```
