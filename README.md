# Management Dashboard

Panel de administración con dashboard de métricas, listado de páginas web y formulario de administración de contacto.

## Tech Stack 💻

- **Framework:** [Next.js 16](https://nextjs.org) (App Router)
- **UI:** [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- **Estilos:** [Tailwind CSS 4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com) (Radix UI)
- **Formularios y validación:** React Hook Form + Zod
- **Gráficos:** Recharts
- **Iconos y notificaciones:** Lucide React, Sonner
- **Tema claro/oscuro:** next-themes
- **Calidad de código:** ESLint, Prettier, Husky
- **Gestor de paquetes:** pnpm

## Architecture 🏦

El proyecto sigue una arquitectura por capas basada en features (detalle completo en [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)):

| Capa        | Responsabilidad                                                                                          |
| ----------- | -------------------------------------------------------------------------------------------------------- |
| `app/`      | Next.js App Router. Solo routing y composición, sin lógica de negocio.                                   |
| `features/` | Un dominio de negocio por carpeta, autocontenido y expuesto únicamente a través de su `index.ts`.        |
| `shared/`   | Código agnóstico de negocio: primitivas de shadcn, componentes reutilizables, hooks, utils y constantes. |

Dirección de dependencias:

```
app/      -> features/ y shared/
features/ -> shared/ (y otras features solo vía su index.ts)
shared/   -> nada de features/ ni de app/
```

Las features con varias pantallas (como `web-pages`) tienen una carpeta autocontenida por pantalla.

## Code Structure 🗃️

```
management-dashboard/
├── app/                      # Rutas y layouts
│   ├── (auth)/register/
│   └── (dashboard)/
│       ├── dashboard/
│       └── paginas-webs/     # listado y /administrador
├── features/
│   ├── auth/                 # registro
│   ├── dashboard/            # métricas, referidos, gráficos de ventas
│   ├── layout/               # header y sidebar
│   └── web-pages/
│       ├── web-pages/        # listado de páginas
│       └── administrator/    # formulario de contacto y categorías
│           ├── components/
│           ├── hooks/
│           ├── schemas/      # esquemas Zod
│           ├── types/
│           ├── utils/
│           ├── data/
│           └── constants.ts
├── shared/
│   ├── components/
│   │   ├── ui/               # primitivas shadcn
│   │   └── common/           # componentes reutilizables
│   ├── hooks/
│   ├── utils/
│   └── constants/
├── docs/                     # documentación (ARCHITECTURE.md)
├── husky/                    # git hooks
└── public/
```

## Requirements 📝

- [Node.js](https://nodejs.org) 20.9 o superior
- [pnpm](https://pnpm.io) 10.11.1 (definido en `packageManager`; se puede activar con `corepack enable`)

## Dependencies 📚

**Producción**

| Paquete                                                                  | Uso                                 |
| ------------------------------------------------------------------------ | ----------------------------------- |
| `next`, `react`, `react-dom`                                             | Framework y librería de UI          |
| `radix-ui`, `shadcn`, `class-variance-authority`, `cn`, `tw-animate-css` | Componentes y utilidades de estilos |
| `react-hook-form`, `@hookform/resolvers`, `zod`                          | Formularios y validación            |
| `recharts`                                                               | Gráficos                            |
| `lucide-react`                                                           | Iconos                              |
| `sonner`                                                                 | Notificaciones toast                |
| `next-themes`                                                            | Tema claro/oscuro                   |

**Desarrollo:** `typescript`, `tailwindcss`, `@tailwindcss/postcss`, `eslint`, `eslint-config-next`, `eslint-config-prettier`, `prettier`, `husky`, `npm-run-all2`, `@types/*`.

## Install and Run 🚀

```bash
# 1. Instalar dependencias
pnpm install

# 2. Levantar el servidor de desarrollo
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

### Scripts disponibles

| Comando             | Descripción                                      |
| ------------------- | ------------------------------------------------ |
| `pnpm dev`          | Servidor de desarrollo                           |
| `pnpm build`        | Build de producción                              |
| `pnpm start`        | Levanta el build de producción                   |
| `pnpm lint`         | Ejecuta ESLint                                   |
| `pnpm lint:fix`     | ESLint con autocorrección                        |
| `pnpm format`       | Formatea el código con Prettier                  |
| `pnpm format:check` | Verifica el formato                              |
| `pnpm typecheck`    | Chequeo de tipos con TypeScript                  |
| `pnpm check:all`    | `lint:fix` + `format` + `typecheck` (pre-commit) |
