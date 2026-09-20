# Arquitectura

Esta es la arquitectura objetivo, no lo que existe hoy. Ahora mismo solo
tenemos app/ (con app/components/ui/). features/ y shared/ van a aparecer
a medida que el proyecto crezca, pero el código nuevo ya debería seguir
esta estructura.

## Capas

app/ -> Next.js App Router. Solo routing y composición, las páginas
importan y organizan cosas de features/ y shared/. Sin lógica de negocio
aquí.

features/ -> una carpeta por dominio de negocio (auth, dashboard, items,
navigation, theme...). Cada feature es autocontenida y solo se expone a
través de su index.ts. Todo lo demás adentro es privado.

shared/ -> solo código agnóstico de negocio. Si está atado a una feature
específica, va en esa feature, no aquí. components/ui/ tiene las
primitivas crudas de shadcn, components/common/ tiene componentes
reusables construidos sobre ellas, más hooks, types y utils.

Cuando una feature tiene varias pantallas, cada pantalla es una carpeta
autocontenida dentro de la feature (ver "Features con varias pantallas"
más abajo). Las carpetas de feature se nombran por dominio, no por URL:
la estructura de rutas vive solo en app/.

## Dirección de dependencias

app/ -> features/ y shared/
features/ -> shared/, y otras features solo a través de su index.ts
shared/ -> nada de features/ ni de app/

## Árbol de archivos objetivo

```
my-app/
├── app/                              # Next.js App Router | solo routing y composición
│   ├── layout.tsx
│   ├── page.tsx
│   ├── (auth)/
│   │   ├── login/page.tsx            # compone features/auth
│   │   └── register/page.tsx
│   ├── (dashboard)/
│   │   ├── layout.tsx
│   │   ├── dashboard/page.tsx        # compone features/dashboard
│   │   └── items/
│   │       ├── page.tsx              # compone features/items -> <ItemTable />
│   │       └── [id]/page.tsx         # compone features/items -> <ItemDetail />
│   ├── api/
│   │   └── external-service/route.ts # proxy a una API externa (oculta claves)
│   ├── globals.css
│   └── favicon.ico
│
├── features/                         # cada carpeta es un dominio de negocio autocontenido
│   ├── auth/
│   │   ├── components/               # LoginForm, RegisterForm
│   │   ├── hooks/                    # useAuth
│   │   ├── schemas/                  # loginSchema, registerSchema (Zod)
│   │   ├── types/                    # User, Session
│   │   ├── constants.ts
│   │   └── index.ts                  # API pública (barrel export)
│   │
│   ├── dashboard/
│   │   ├── components/               # MetricCard, Chart
│   │   ├── hooks/                    # useDashboardData
│   │   ├── data/dummy.json
│   │   ├── types/
│   │   └── index.ts
│   │
│   ├── items/                        # ejemplo genérico de CRUD/listado
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
│   ├── navigation/                   # sidebar/navbar como feature (no como "widget")
│   │   ├── components/
│   │   ├── hooks/
│   │   └── index.ts
│   │
│   └── theme/                        # toggle de light/dark
│       ├── components/
│       ├── hooks/
│       └── index.ts
│
├── shared/                           # solo lo que es 100% agnóstico de negocio
│   ├── components/
│   │   ├── ui/                       # shadcn: Button, Input, Table, Dialog
│   │   └── common/                   # construidos sobre shadcn: DataTable, Pagination, EmptyState, Spinner
│   ├── hooks/                        # useDebounce, useMediaQuery
│   ├── mock/                         # datos dummy realmente compartidos entre features
│   ├── types/                        # ApiResponse<T>, PaginatedResponse<T>
│   ├── utils/                        # styles.ts (cn), formatDate, slugify
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

## Features con varias pantallas

Si una feature agrupa varias pantallas del mismo dominio, cada pantalla
lleva su propia carpeta con sus components/, hooks/, schemas/, data/ y
constants.ts. La carpeta se nombra como la sección del sidebar, en inglés.
El index.ts de la raíz exporta las pantallas y sigue siendo la única API
pública. Una pantalla no importa de otra: si algo se comparte entre
pantallas, va en una carpeta común dentro de la feature (o en shared/ si es
agnóstico de negocio).

Ejemplo real, features/web-pages/:

```
features/web-pages/
├── index.ts                  # exporta WebPages y Administrator
├── web-pages/                # sidebar: "Páginas webs" (listado)
│   ├── web-pages.tsx         # pantalla, la usa app/(dashboard)/paginas-webs/page.tsx
│   ├── components/
│   ├── hooks/
│   ├── schemas/
│   ├── types/
│   ├── utils/
│   ├── data/
│   └── constants.ts
└── administrator/            # sidebar: "Administrador" (formulario)
    ├── administrator.tsx     # pantalla, la usa app/(dashboard)/paginas-webs/administrador/page.tsx
    ├── components/
    ├── hooks/
    ├── schemas/
    ├── types/
    ├── utils/
    ├── data/
    └── constants.ts
```

Las features con una sola pantalla (auth, dashboard) mantienen la
estructura plana del árbol de arriba.
