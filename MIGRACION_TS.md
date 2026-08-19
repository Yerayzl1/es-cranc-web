# Migración a TypeScript — guía commit por commit

Objetivo: pasar la app de JS a TS en commits pequeños y revisables. Usa `git mv`
para los renombrados (conserva el historial del archivo). Al final, `npm run build`
debe pasar el type-check en verde.

Tienes dos formas de aplicarlo:
- **A)** Copiar los archivos ya migrados de este ZIP a tu repo, commit por commit según la lista de abajo.
- **B)** Hacer los cambios tú a mano siguiendo cada paso (mejor para aprender TS).

---

## Commit 1 — `chore: configura el tooling de TypeScript`

Añade el compilador y la config; aún no cambias código.

Cambios:
- `package.json`: añade a `devDependencies` → `"typescript": "^5.4.0"`, `"vue-tsc": "^2.0.0"`.
  Cambia scripts: `"build": "vue-tsc --noEmit && vite build"` y añade `"type-check": "vue-tsc --noEmit"`.
- Nuevo `tsconfig.json` (ver archivo en el ZIP).
- Nuevo `env.d.ts` (shims de `*.vue` y de los tipos de Vite).
- Renombra la config de Vite: `git mv vite.config.js vite.config.ts` (el contenido no cambia).

```bash
git mv vite.config.js vite.config.ts
# (edita package.json, crea tsconfig.json y env.d.ts)
npm install
git add -A && git commit -m "chore: configura el tooling de TypeScript"
```

---

## Commit 2 — `refactor: tipa el modelo de contenido`

El núcleo de la migración: defines las interfaces y tipas los datos.

Cambios:
- Nuevo `src/types.ts` con las interfaces (`Restaurant`, `I18nText`, `Lang`, etc.).
- `git mv src/data/restaurant.js src/data/restaurant.ts` y:
  - Arriba: `import type { Lang, Restaurant } from '../types'`.
  - `export const idiomas: Lang[] = ['es', 'en']` y `export const idiomaPorDefecto: Lang = 'es'`.
  - `const data: Restaurant = { ... }` y al final `export default data`.

A partir de aquí, si te dejas un campo o pones mal un idioma en los datos, TS te avisa.

```bash
git mv src/data/restaurant.js src/data/restaurant.ts
# (crea src/types.ts, añade los tipos a restaurant.ts)
git add -A && git commit -m "refactor: tipa el modelo de contenido"
```

---

## Commit 3 — `refactor: pasa el composable useContent a TypeScript`

Cambios:
- `git mv src/composables/useContent.js src/composables/useContent.ts`.
- Tipa `lang` como `ref<Lang>(...)`, `setLang(nuevo: Lang)`, y el helper `t` con
  **sobrecargas** para que cada tipo de nodo devuelva el tipo correcto:
  `I18nText → string`, `I18nTextList → string[]`, `HorarioI18n → HorarioItem[]`.
- Actualiza el import de datos a `from '../data/restaurant'` (sin `.js`).

```bash
git mv src/composables/useContent.js src/composables/useContent.ts
git add -A && git commit -m "refactor: pasa el composable useContent a TypeScript"
```

---

## Commit 4 — `refactor: punto de entrada a TypeScript`

Cambios:
- `git mv src/main.js src/main.ts`.
- `index.html`: cambia `<script type="module" src="/src/main.js">` por `/src/main.ts`.

```bash
git mv src/main.js src/main.ts
# (edita index.html)
git add -A && git commit -m "refactor: punto de entrada a TypeScript"
```

---

## Commit 5 — `refactor: componentes a <script setup lang="ts">`

En `App.vue` y en los 10 componentes de `src/components/`:
- Cambia `<script setup>` por `<script setup lang="ts">`.
- Quita la extensión `.js` de los imports: `from '../composables/useContent'`.
- Tipa las funciones sueltas:
  - `SiteHeader.vue`: `function go(id: string): void`.
  - `HeroSection.vue`: `function scrollTo(id: string): void`.
  - `App.vue`: la callback del IntersectionObserver → `(entries: IntersectionObserverEntry[])`.

```bash
git add -A && git commit -m "refactor: componentes a <script setup lang=\"ts\">"
```

---

## Verificación final

```bash
npm run type-check   # debe salir sin errores
npm run build        # type-check + build de producción, en verde
```

## Notas de aprendizaje (TS)
- `import type { ... }`: importa solo tipos (se borra en el build). Necesario con `isolatedModules`.
- Sobrecargas de función (`interface TranslateFn`): una misma función `t()` con varias
  firmas según el argumento. Así el `v-for` de párrafos sabe que recibe `string[]` y el de
  horario que recibe `HorarioItem[]`, sin castings en las plantillas.
- `strict: true` está activado; es lo que hace que TS te proteja de verdad.
- Este proyecto no cambia nada de la lógica ni del diseño: es una migración de tipos pura.
  El bundle final es prácticamente idéntico.
