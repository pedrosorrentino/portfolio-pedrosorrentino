# 👨‍💻 Mi Portfolio Personal - pedrosorrentino.com

¡Hola! 👋 Bienvenido/a al código fuente de mi portfolio personal. Decidí darle un toque diferente y crearlo con una estética inspirada en una terminal. Aquí es donde comparto un poco sobre mí, los proyectos en los que he trabajado (¡y de los que estoy orgulloso!), las herramientas que uso y mis pensamientos en el blog (cuando me da por escribir 😅).

Todo está construido con [Astro](https://astro.build/), lo que lo hace súper rápido y genial para sitios como este.

**🚀 Puedes verlo en vivo aquí: [pedrosorrentino.com](https://pedrosorrentino.com)** (¡Espero que te guste!)

## ✨ ¿Qué tiene de especial?

- **Look de Terminal:** Un diseño que simula una consola, para darle un toque _geek_.
- **Multilingüe:** Puedes verlo en **Español** o **Inglés** gracias a `astro-i18n`.
- **Modo Claro/Oscuro:** Un interruptor chulo (hecho con Preact) para cambiar el tema según te apetezca.
- **Proyectos Detallados:** No solo listo mis proyectos, sino que explico un poco los retos y resultados de cada uno.
- **Mis Herramientas:** Una sección donde comparto el software, hardware y recursos que me ayudan en mi día a día.
- **Blog:** Una sección para artículos (¡actualmente vacía, pero lista para cuando llegue la inspiración!).
- **Formulario de Contacto:** Funciona con [Formspree](https://formspree.io/) y tiene validación directamente en el navegador.
- **Rendimiento:** He intentado optimizarlo al máximo. ¡Incluso muestra el tiempo de carga en el pie de página!
- **Descarga de CV:** Un botón animado para que puedas descargar mi CV fácilmente.
- **Hecho con Cariño:** ¡Y con tecnologías modernas!

## 🛠️ Tecnologías Principales

- **Framework:** [Astro](https://astro.build/) (¡Me encanta!)
- **UI Framework/Librería:** [Preact](https://preactjs.com/) (para los componentes interactivos como el toggle de tema y el cálculo del tiempo de carga)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) (para darle forma a todo rápidamente)
- **Internacionalización (i18n):** [astro-i18n](https://github.com/alexanderniebuhr/astro-i18n)
- **Iconos:** [astro-icon](https://github.com/natemoo-re/astro-icon) y `@iconify-json/fluent-emoji-flat`
- **Formulario:** [Formspree](https://formspree.io/) para el backend del contacto.
- **Markdown:** [Marked](https://marked.js.org/) para renderizar texto formateado en algunas secciones.

## 🚀 ¿Cómo ponerlo en marcha?

Si quieres trastear con el código o ejecutarlo en tu máquina, ¡adelante! Solo necesitas tener instalado [Node.js](https://nodejs.org/) (una versión reciente, LTS suele ir bien) y [pnpm](https://pnpm.io/) (mi gestor de paquetes preferido).

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/pedrosorrentino/portfolio.git
    ```
2.  **Entra en la carpeta:**
    ```bash
    cd portfolio
    ```
3.  **Instala las dependencias:**
    ```bash
    pnpm install
    ```
4.  **Inicia el servidor de desarrollo:**
    ```bash
    pnpm dev
    ```
    ¡Y listo! Abre tu navegador en la dirección que te indique la terminal (normalmente `http://localhost:4321`).

## 📜 Scripts Disponibles

Dentro del `package.json`, encontrarás estos scripts principales:

- `pnpm dev`: Arranca el servidor de desarrollo con hot-reloading. ¡Ideal para programar!
- `pnpm build`: Genera la versión estática del sitio, lista para producción, en la carpeta `dist/`.
- `pnpm preview`: Levanta un servidor local para previsualizar la build de producción.
- `pnpm astro ...`: Te permite ejecutar comandos directos de la CLI de Astro.

---

¡Gracias por pasarte y echar un vistazo al código! Si encuentras algún error o tienes alguna sugerencia, no dudes en abrir un _issue_. 😊
