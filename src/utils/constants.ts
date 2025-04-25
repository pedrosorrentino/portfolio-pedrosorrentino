import type { Project, ResourceCategory } from './types';

export const PROJECTS_EN: Project[] = [
  {
    title: 'GloboView',
    description:
      'An application to watch free live TV channels from around the world using an interactive map interface, powered by the IPTV-Org database.',
    technologies: [
      'Astro',
      'React',
      'Nano Stores',
      'Tailwind CSS',
      'DaisyUI',
      'MapLibre GL JS',
      'Video.js',
      'TanStack Virtual',
      'IPTV-Org API',
    ],
    image: '/images/globoview.webp',
    url: 'https://globoview.cam',
    github: null,
    challenges: [
      {
        title: 'Displaying and interacting with global data on a map.',
        solution:
          'Integrated MapLibre GL JS via `react-map-gl` to render an interactive 3D globe. Implemented event listeners on specific map layers to detect user clicks and hovers on countries, identified the country using feature properties, and triggered state updates in Nano Stores (`selectCountry`) to display relevant channels. Added a tooltip on hover for enhanced user experience.',
      },
      {
        title:
          'Efficiently handling and displaying thousands of channels and countries.',
        solution:
          'Utilized TanStack Virtual (`useVirtualizer`) in the channel/country list component (`RightDrawerContent`) to render only visible items, significantly improving performance. Fetched all data upfront and used Nano Stores with computed properties and pre-calculated maps (`$channelsByCountryMap`, `$channelsByCategoryMap`) for rapid filtering based on user selections (country, category, search term).',
      },
      {
        title:
          'Integrating a robust video player for diverse live stream formats.',
        solution:
          'Employed Video.js within a React component (`VideoPlayer`). Dynamically created and destroyed player instances based on the selected stream URL from Nano Stores. Configured Video.js for HLS streams, responsiveness, and live UI. Implemented comprehensive error handling (`player.on("error", ...)`) that displays user-friendly toast notifications, attempts player cleanup, and clears state to close the player UI gracefully.',
      },
      {
        title: 'Managing complex UI state and cross-component communication.',
        solution:
          'Adopted Nano Stores for global state management. Centralized application state including API data, UI selections (country, category, channel), search terms, and drawer visibility. Created computed stores for filtered lists and actions to manage state transitions predictably, enabling seamless communication between the map, drawers, header, and video player components.',
      },
    ],
    results: [
      'Successfully provides a unique, map-based interface for exploring hundreds of publicly available TV channels worldwide, leveraging the IPTV-Org database.',
      'Achieved smooth performance when browsing large lists of countries and channels through list virtualization and efficient state management.',
      'The application features robust error handling for stream playback, theme switching (light/dark), category/search filtering, and a responsive design adapting to both desktop and mobile devices.',
    ],
  },

  {
    title: 'VideoStats',
    description:
      'A YouTube analytics platform providing creators with in-depth insights into channel performance, audience engagement, and content optimization.',
    technologies: [
      'Next.js',
      'Turso',
      'Redis',
      'Clerk',
      'Shadcn/ui',
      'Chart.js',
    ],
    image: '/images/videostats.webp',
    url: 'https://videostats.vercel.app/',
    github: null,
    challenges: [
      {
        title:
          'Efficiently handling large volumes of data from the YouTube API.',
        solution:
          "Implemented a two-tiered caching system using Redis for frequently accessed data and Turso (SQLite) as the primary database. This reduced calls to the YouTube API by approximately 60% and improved the application's average response time by around 45%. Additionally, I used Web Workers to process data ingestion in the background, preventing UI freezes.",
      },
      {
        title: 'Implementing secure and scalable authentication.',
        solution:
          'Integrated Clerk for complete user lifecycle management, including registration, login, password recovery, and two-factor authentication (2FA). This not only enhanced security but also allowed me to focus on the core business logic of the application, reducing development time by roughly 20%.',
      },
      {
        title: 'Intuitive and customizable data visualization.',
        solution:
          'Developed a series of custom visualization components using Chart.js, integrated with Shadcn/ui styles. These components allow users to visualize key metrics such as views, watch time, subscribers, and engagement, with filtering options by time period and metric type. Clarity and ease of data interpretation were prioritized.',
      },
      {
        title: 'Database scalability.',
        solution:
          'By using Turso, the database automatically scales to handle user and data growth, ensuring consistent performance even with a large number of concurrent users.',
      },
    ],
    results: [
      'The platform is currently in beta and is used by over 50 YouTube creators to analyze their channel performance.',
      "Users report an improved understanding of their audience and an easier time identifying content growth opportunities. Early feedback indicates that users find the platform's insights helpful in making data-driven decisions.",
      "The application's architecture, based on Next.js and Vercel, allows for efficient horizontal scaling to handle traffic spikes and future growth.",
    ],
  },
  {
    title: 'Snapcraft',
    description:
      'An online media editor allowing users to customize images and videos with watermarks, text overlays, and stickers, accessible from any device.',
    technologies: [
      'Astro',
      'React',
      'Konva.js',
      'Clerk',
      'Shadcn/ui',
      'ffmpeg.wasm',
    ],
    image: '/images/snapcraft.webp',
    url: 'https://snapcraft.site/',
    github: null,
    challenges: [
      {
        title:
          'Client-side video processing to reduce server costs and improve privacy.',
        solution:
          "Implemented `ffmpeg.wasm`, a version of FFmpeg compiled to WebAssembly. This allows users to edit videos directly in their browsers, without needing to upload files to a server. This client-side architecture significantly reduces infrastructure costs and enhances user privacy, as video data never leaves the user's device.",
      },
      {
        title: 'Creating an intuitive drag-and-drop editing interface.',
        solution:
          'Utilized Konva.js, a JavaScript library that provides a high-level API for manipulating graphical elements on an HTML5 canvas. Konva.js facilitated the implementation of features such as drag-and-drop, resizing, rotating, and applying styles to images, text, and stickers. A smooth and responsive user experience was a key priority.',
      },
      {
        title:
          'Cross-browser and cross-device compatibility, and performance optimization.',
        solution:
          'Performed extensive testing across a wide range of browsers (Chrome, Firefox, Safari, Edge) and devices (desktop, tablets, mobile) to ensure a consistent user experience. Optimized application performance using techniques such as lazy loading of images, code minification, and optimization of Konva.js operations to minimize browser resource usage.',
      },
      {
        title: 'Application state management for media editing.',
        solution:
          'Utilized Zustand for efficient and predictable application state management. Zustand enabled centralized management of the state of editor elements (images, text, stickers, etc.), facilitating the implementation of features like undo/redo and synchronization between different parts of the interface.',
      },
    ],
    results: [
      'Snapcraft allows users to edit videos and create visual content without the need for specialized software, directly in their browser.',
      'The client-side architecture has proven to be highly scalable and cost-effective, requiring minimal server resources.',
      "Users consistently praise the application's ease of use and responsiveness, even on lower-powered devices. Initial user testing indicates high satisfaction with the editing tools provided.",
    ],
  },
  {
    title: 'Roast My Website',
    description:
      'A community-driven platform where website owners can receive constructive feedback on their design and performance.',
    technologies: ['Astro', 'Preact', 'Tailwind CSS', 'SQLite', 'Grok AI'],
    image: '/images/roastmyweb.webp',
    url: 'https://roastmyweb.site',
    github: null,
    challenges: [
      {
        title: 'Implementing a real-time feedback system.',
        solution:
          "Utilized Server-Sent Events (SSE) to send notifications to users in real-time when they receive new comments on their websites. SSE provides a persistent, unidirectional connection from the server to the client, making it ideal for this type of functionality. This implementation enhanced the platform's interactivity and encouraged greater user engagement.",
      },
      {
        title:
          'Integrating AI to provide automated and objective improvement suggestions.',
        solution:
          'Integrated the Grok AI API, a language model with web analysis capabilities. Grok AI analyzes the HTML, CSS, and JavaScript code of websites provided by users and generates suggestions for improvement in areas such as accessibility, performance, SEO, and design. This functionality adds significant value to the platform, providing instant and objective feedback.',
      },
      {
        title: 'Community building and content moderation.',
        solution:
          'Implemented a user registration and login system using Clerk. Developed a reporting system that allows users to flag inappropriate or abusive comments. Clear community rules were established, and a moderation system was implemented to ensure a respectful and constructive environment.',
      },
      {
        title: 'User Interface Design.',
        solution:
          'Used Tailwind CSS to create a clean, modern, and responsive user interface. Simplicity and ease of use were prioritized, allowing users to submit their websites and receive feedback quickly and intuitively.',
      },
    ],
    results: [
      'Roast My Website facilitates the review of over 150 websites, providing users with actionable feedback to improve their online presence.',
      'The platform fosters a growing community of developers and designers who share knowledge and provide constructive criticism.',
      'The integration of Grok AI has proven effective in identifying common design and performance issues, offering valuable insights alongside community feedback.',
    ],
  },
  {
    title: 'Expired Domain Finder',
    description:
      'An SEO tool to discover valuable expired domains, providing detailed analytics to identify potential opportunities.',
    technologies: ['Astro', 'Preact', 'Turso', 'Tailwind CSS', 'Node.js'],
    image: '/images/expireddomain.webp',
    url: 'https://expireddomain.site',
    github: null,
    challenges: [
      {
        title:
          'Efficiently collecting and processing large amounts of expired domain data.',
        solution:
          'Developed a custom scraper in Node.js using libraries such as `axios` for making HTTP requests and `cheerio` for parsing the HTML of data sources. Implemented responsible web scraping techniques, including respecting `robots.txt` and implementing delays to avoid overloading target servers. The collected data is efficiently stored and processed using Turso (SQLite).',
      },
      {
        title: 'Analyzing the quality and value of expired domains.',
        solution:
          'Integrated the Ahrefs and Majestic APIs to obtain key SEO metrics such as Domain Rating (DR), URL Rating (UR), number of backlinks, referring domains, and estimated organic traffic. Developed a custom scoring algorithm that combines these metrics to assess the potential value of each expired domain, enabling users to quickly identify promising opportunities.',
      },
      {
        title:
          'Presenting results in a clear and useful way, with filtering and sorting options.',
        solution:
          'Designed an interactive user interface with Preact and Tailwind CSS. The interface allows users to search for expired domains by keyword, filter by SEO metrics (DR, UR, backlinks, etc.), and sort the results according to different criteria. Speed and ease of use were prioritized, enabling users to efficiently find domains that meet their requirements.',
      },
    ],
    results: [
      'Expired Domain Finder provides users with a streamlined way to discover potentially valuable expired domains for SEO purposes.',
      "The tool aggregates data from multiple sources, offering a comprehensive view of each domain's key metrics.",
      'The user-friendly interface and filtering capabilities allow for efficient identification of relevant domains based on specific criteria.',
    ],
  },
  {
    title: 'Fly Fast',
    description:
      'A flight booking platform offering real-time flight data, price comparisons, and a seamless booking experience.',
    technologies: ['Next.js', 'Tailwind CSS', 'MongoDB', 'AMADEUS API'],
    image: '/images/flyfast.webp',
    url: 'https://fly-fast.vercel.app/',
    github: null,
    challenges: [
      {
        title: 'Integration with the Amadeus API for real-time flight data.',
        solution:
          'Utilized the official Amadeus SDK for Node.js to interact with the Amadeus API. Implemented authentication, error handling, API limit management (to avoid exceeding quotas), and conversion of API data to a consistent and easy-to-use format within the application. Robust error handling and retry mechanisms were implemented to ensure data reliability.',
      },
      {
        title:
          'Creating an efficient, responsive, and user-friendly flight search interface.',
        solution:
          "Utilized Next.js to build a fast and SEO-friendly user interface. Leveraged Next.js's Server-Side Rendering (SSR) and Static Site Generation (SSG) capabilities to optimize loading times and the overall user experience. The interface was designed using Tailwind CSS, with custom components for date selection (using a date picker), airport selection (with autocomplete), passenger selection, and for displaying search results (with filtering and sorting options).",
      },
      {
        title:
          'Secure payment handling and compliance with PCI DSS regulations.',
        solution:
          "Integrated Stripe as the payment gateway. Stripe provides a secure and easy-to-use API for processing credit and debit card payments. Utilized Stripe Elements, pre-built UI components, to ensure compliance with PCI DSS (Payment Card Industry Data Security Standard), as sensitive card data never reaches the application's servers. Implemented additional security measures, including server-side data validation and protection against Cross-Site Request Forgery (CSRF) attacks.",
      },
    ],
    results: [
      'Fly Fast offers a streamlined and intuitive flight search and booking experience.',
      'The integration with the Amadeus API provides access to a comprehensive range of flights and fares from various airlines.',
      'The platform adheres to industry-standard security practices for payment processing, ensuring the safety of user data.',
    ],
  },
];

export const PROJECTS_ES: Project[] = [
  {
    title: 'GloboView',
    description:
      'Una aplicación para ver canales de TV en vivo gratuitos de todo el mundo usando una interfaz de mapa interactivo, impulsada por la base de datos de IPTV-Org.',
    technologies: [
      'Astro',
      'React',
      'Nano Stores',
      'Tailwind CSS',
      'DaisyUI',
      'MapLibre GL JS',
      'Video.js',
      'TanStack Virtual',
      'IPTV-Org API',
    ],
    image: '/images/globoview.webp',
    url: 'https://globoview.cam',
    github: null,
    challenges: [
      {
        title: 'Mostrar e interactuar con datos globales en un mapa.',
        solution:
          'Integré MapLibre GL JS mediante `react-map-gl` para renderizar un globo terráqueo 3D interactivo. Implementé escuchadores de eventos en capas específicas del mapa para detectar clics y hovers del usuario sobre los países, identifiqué el país usando las propiedades de las features y activé actualizaciones de estado en Nano Stores (`selectCountry`) para mostrar los canales relevantes. Añadí un tooltip al pasar el ratón para mejorar la experiencia de usuario.',
      },
      {
        title: 'Manejar y mostrar eficientemente miles de canales y países.',
        solution:
          'Utilicé TanStack Virtual (`useVirtualizer`) en el componente de lista de canales/países (`RightDrawerContent`) para renderizar solo los elementos visibles, mejorando significativamente el rendimiento. Obtuve todos los datos al inicio y usé Nano Stores con propiedades computadas y mapas precalculados (`$channelsByCountryMap`, `$channelsByCategoryMap`) para un filtrado rápido basado en las selecciones del usuario (país, categoría, término de búsqueda).',
      },
      {
        title:
          'Integrar un reproductor de video robusto para diversos formatos de transmisión en vivo.',
        solution:
          'Empleé Video.js dentro de un componente React (`VideoPlayer`). Creé y destruí dinámicamente instancias del reproductor basándome en la URL de transmisión seleccionada desde Nano Stores. Configuré Video.js para streams HLS, responsividad y UI para directos. Implementé un manejo de errores completo (`player.on("error", ...)`) que muestra notificaciones toast amigables, intenta limpiar el reproductor y borra el estado para cerrar la interfaz del reproductor de forma elegante.',
      },
      {
        title:
          'Gestionar un estado de interfaz complejo y la comunicación entre componentes.',
        solution:
          'Adopté Nano Stores para la gestión global del estado. Centralicé el estado de la aplicación, incluyendo datos de la API, selecciones de UI (país, categoría, canal), términos de búsqueda y visibilidad de los cajones laterales (drawers). Creé stores computadas para listas filtradas y acciones para gestionar las transiciones de estado de forma predecible, permitiendo una comunicación fluida entre el mapa, los cajones, la cabecera y el reproductor de video.',
      },
    ],
    results: [
      'Proporciona con éxito una interfaz única basada en mapas para explorar cientos de canales de TV disponibles públicamente en todo el mundo, aprovechando la base de datos de IPTV-Org.',
      'Se logró un rendimiento fluido al navegar por largas listas de países y canales mediante la virtualización de listas y una gestión eficiente del estado.',
      'La aplicación cuenta con un manejo robusto de errores para la reproducción de streams, cambio de tema (claro/oscuro), filtrado por categoría/búsqueda y un diseño responsivo que se adapta tanto a dispositivos de escritorio como móviles.',
    ],
  },
  // ... mantén aquí el resto de tus proyectos existentes
  {
    title: 'VideoStats',
    description:
      'Una plataforma de análisis de YouTube que proporciona a los creadores información detallada sobre el rendimiento del canal, la interacción de la audiencia y la optimización del contenido.',
    technologies: [
      'Next.js',
      'Turso',
      'Redis',
      'Clerk',
      'Shadcn/ui',
      'Chart.js',
    ],
    image: '/images/videostats.webp',
    url: 'https://videostats.vercel.app/',
    github: null,
    challenges: [
      {
        title:
          'Manejar eficientemente grandes volúmenes de datos de la API de YouTube.',
        solution:
          'Implementé un sistema de caché de dos niveles utilizando Redis para datos de acceso frecuente y Turso (SQLite) como base de datos principal. Esto redujo las llamadas a la API de YouTube en aproximadamente un 60% y mejoró el tiempo de respuesta promedio de la aplicación en alrededor de un 45%. Además, utilicé Web Workers para procesar la ingesta de datos en segundo plano, evitando bloqueos de la interfaz de usuario.',
      },
      {
        title: 'Implementar una autenticación segura y escalable.',
        solution:
          'Integré Clerk para la gestión completa del ciclo de vida del usuario, incluyendo registro, inicio de sesión, recuperación de contraseña y autenticación de dos factores (2FA). Esto no solo mejoró la seguridad, sino que también me permitió concentrarme en la lógica de negocio principal de la aplicación, reduciendo el tiempo de desarrollo en aproximadamente un 20%.',
      },
      {
        title: 'Visualización de datos intuitiva y personalizable.',
        solution:
          'Desarrollé una serie de componentes de visualización personalizados utilizando Chart.js, integrados con los estilos de Shadcn/ui. Estos componentes permiten a los usuarios visualizar métricas clave como vistas, tiempo de visualización, suscriptores e interacción, con opciones de filtrado por período de tiempo y tipo de métrica. Se priorizó la claridad y la facilidad de interpretación de los datos.',
      },
      {
        title: 'Escalabilidad de la base de datos.',
        solution:
          'Al utilizar Turso, la base de datos se escala automáticamente para manejar el crecimiento de usuarios y datos, asegurando un rendimiento consistente incluso con un gran número de usuarios concurrentes.',
      },
    ],
    results: [
      'La plataforma está actualmente en beta y es utilizada por más de 50 creadores de YouTube para analizar el rendimiento de sus canales.',
      'Los usuarios informan una mejor comprensión de su audiencia y una mayor facilidad para identificar oportunidades de crecimiento de contenido. Los comentarios iniciales indican que los usuarios encuentran útiles las perspectivas de la plataforma para tomar decisiones basadas en datos.',
      'La arquitectura de la aplicación, basada en Next.js y Vercel, permite una escalabilidad horizontal eficiente para manejar picos de tráfico y crecimiento futuro.',
    ],
  },
  {
    title: 'Snapcraft',
    description:
      'Un editor de medios en línea que permite a los usuarios personalizar imágenes y videos con marcas de agua, superposiciones de texto y pegatinas, accesible desde cualquier dispositivo.',
    technologies: [
      'Astro',
      'React',
      'Konva.js',
      'Clerk',
      'Shadcn/ui',
      'ffmpeg.wasm',
    ],
    image: '/images/snapcraft.webp',
    url: 'https://snapcraft.site/',
    github: null,
    challenges: [
      {
        title:
          'Procesamiento de video del lado del cliente para reducir los costos del servidor y mejorar la privacidad.',
        solution:
          'Implementé `ffmpeg.wasm`, una versión de FFmpeg compilada a WebAssembly. Esto permite a los usuarios editar videos directamente en sus navegadores, sin necesidad de subir archivos a un servidor. Esta arquitectura del lado del cliente reduce significativamente los costos de infraestructura y mejora la privacidad del usuario, ya que los datos de video nunca salen del dispositivo del usuario.',
      },
      {
        title: 'Crear una interfaz de edición intuitiva de arrastrar y soltar.',
        solution:
          'Utilicé Konva.js, una biblioteca de JavaScript que proporciona una API de alto nivel para manipular elementos gráficos en un lienzo HTML5. Konva.js facilitó la implementación de funciones como arrastrar y soltar, redimensionar, rotar y aplicar estilos a imágenes, texto y pegatinas. Una experiencia de usuario fluida y receptiva fue una prioridad clave.',
      },
      {
        title:
          'Compatibilidad entre navegadores y dispositivos, y optimización del rendimiento.',
        solution:
          'Realicé pruebas exhaustivas en una amplia gama de navegadores (Chrome, Firefox, Safari, Edge) y dispositivos (escritorio, tabletas, móviles) para garantizar una experiencia de usuario consistente. Optimicé el rendimiento de la aplicación utilizando técnicas como la carga diferida de imágenes, la minificación del código y la optimización de las operaciones de Konva.js para minimizar el uso de recursos del navegador.',
      },
      {
        title: 'Gestión del estado de la aplicación para la edición de medios.',
        solution:
          'Utilicé Zustand para una gestión eficiente y predecible del estado de la aplicación. Zustand permitió la gestión centralizada del estado de los elementos del editor (imágenes, texto, pegatinas, etc.), facilitando la implementación de funciones como deshacer/rehacer y la sincronización entre diferentes partes de la interfaz.',
      },
    ],
    results: [
      'Snapcraft permite a los usuarios editar videos y crear contenido visual sin necesidad de software especializado, directamente en su navegador.',
      'La arquitectura del lado del cliente ha demostrado ser altamente escalable y rentable, requiriendo recursos mínimos del servidor.',
      'Los usuarios elogian consistentemente la facilidad de uso y la capacidad de respuesta de la aplicación, incluso en dispositivos de baja potencia. Las pruebas iniciales con usuarios indican una alta satisfacción con las herramientas de edición proporcionadas.',
    ],
  },
  {
    title: 'Roast My Website',
    description:
      'Una plataforma impulsada por la comunidad donde los propietarios de sitios web pueden recibir comentarios constructivos sobre su diseño y rendimiento.',
    technologies: ['Astro', 'Preact', 'Tailwind CSS', 'SQLite', 'Grok AI'],
    image: '/images/roastmyweb.webp',
    url: 'https://roastmyweb.site',
    github: null,
    challenges: [
      {
        title: 'Implementar un sistema de retroalimentación en tiempo real.',
        solution:
          'Utilicé Server-Sent Events (SSE) para enviar notificaciones a los usuarios en tiempo real cuando reciben nuevos comentarios en sus sitios web. SSE proporciona una conexión persistente y unidireccional desde el servidor al cliente, lo que la hace ideal para este tipo de funcionalidad. Esta implementación mejoró la interactividad de la plataforma y fomentó una mayor participación del usuario.',
      },
      {
        title:
          'Integrar IA para proporcionar sugerencias de mejora automatizadas y objetivas.',
        solution:
          'Integré la API de Grok AI, un modelo de lenguaje con capacidades de análisis web. Grok AI analiza el código HTML, CSS y JavaScript de los sitios web proporcionados por los usuarios y genera sugerencias de mejora en áreas como accesibilidad, rendimiento, SEO y diseño. Esta funcionalidad agrega un valor significativo a la plataforma, proporcionando comentarios instantáneos y objetivos.',
      },
      {
        title: 'Construcción de comunidad y moderación de contenido.',
        solution:
          'Implementé un sistema de registro e inicio de sesión de usuarios utilizando Clerk. Desarrollé un sistema de informes que permite a los usuarios marcar comentarios inapropiados o abusivos. Se establecieron reglas claras de la comunidad y se implementó un sistema de moderación para garantizar un entorno respetuoso y constructivo.',
      },
      {
        title: 'Diseño de la interfaz de usuario.',
        solution:
          'Utilicé Tailwind CSS para crear una interfaz de usuario limpia, moderna y receptiva. Se priorizó la simplicidad y la facilidad de uso, lo que permite a los usuarios enviar sus sitios web y recibir comentarios de forma rápida e intuitiva.',
      },
    ],
    results: [
      'Roast My Website facilita la revisión de más de 150 sitios web, proporcionando a los usuarios comentarios prácticos para mejorar su presencia en línea.',
      'La plataforma fomenta una comunidad creciente de desarrolladores y diseñadores que comparten conocimientos y brindan críticas constructivas.',
      'La integración de Grok AI ha demostrado ser eficaz para identificar problemas comunes de diseño y rendimiento, ofreciendo información valiosa junto con los comentarios de la comunidad.',
    ],
  },
  {
    title: 'Expired Domain Finder',
    description:
      'Una herramienta SEO para descubrir dominios caducados valiosos, proporcionando análisis detallados para identificar oportunidades potenciales.',
    technologies: ['Astro', 'Preact', 'Turso', 'Tailwind CSS', 'Node.js'],
    image: '/images/expireddomain.webp',
    url: 'https://expireddomain.site',
    github: null,
    challenges: [
      {
        title:
          'Recopilar y procesar eficientemente grandes cantidades de datos de dominios caducados.',
        solution:
          'Desarrollé un scraper personalizado en Node.js utilizando bibliotecas como `axios` para realizar solicitudes HTTP y `cheerio` para analizar el HTML de las fuentes de datos. Implementé técnicas responsables de web scraping, incluyendo el respeto de `robots.txt` y la implementación de retrasos para evitar sobrecargar los servidores de destino. Los datos recopilados se almacenan y procesan eficientemente utilizando Turso (SQLite).',
      },
      {
        title: 'Analizar la calidad y el valor de los dominios caducados.',
        solution:
          'Integré las API de Ahrefs y Majestic para obtener métricas SEO clave como Domain Rating (DR), URL Rating (UR), número de backlinks, dominios de referencia y tráfico orgánico estimado. Desarrollé un algoritmo de puntuación personalizado que combina estas métricas para evaluar el valor potencial de cada dominio caducado, lo que permite a los usuarios identificar rápidamente oportunidades prometedoras.',
      },
      {
        title:
          'Presentar los resultados de una manera clara y útil, con opciones de filtrado y clasificación.',
        solution:
          'Diseñé una interfaz de usuario interactiva con Preact y Tailwind CSS. La interfaz permite a los usuarios buscar dominios caducados por palabra clave, filtrar por métricas SEO (DR, UR, backlinks, etc.) y ordenar los resultados según diferentes criterios. Se priorizó la velocidad y la facilidad de uso, lo que permite a los usuarios encontrar eficientemente los dominios que cumplen con sus requisitos.',
      },
    ],
    results: [
      'Expired Domain Finder proporciona a los usuarios una forma simplificada de descubrir dominios caducados potencialmente valiosos para fines de SEO.',
      'La herramienta agrega datos de múltiples fuentes, ofreciendo una visión completa de las métricas clave de cada dominio.',
      'La interfaz fácil de usar y las capacidades de filtrado permiten una identificación eficiente de dominios relevantes basados en criterios específicos.',
    ],
  },
  {
    title: 'Fly Fast',
    description:
      'Una plataforma de reserva de vuelos que ofrece datos de vuelos en tiempo real, comparaciones de precios y una experiencia de reserva fluida.',
    technologies: ['Next.js', 'Tailwind CSS', 'MongoDB', 'AMADEUS API'],
    image: '/images/flyfast.webp',
    url: 'https://fly-fast.vercel.app/',
    github: null,
    challenges: [
      {
        title:
          'Integración con la API de Amadeus para datos de vuelos en tiempo real.',
        solution:
          'Utilicé el SDK oficial de Amadeus para Node.js para interactuar con la API de Amadeus. Implementé la autenticación, el manejo de errores, la gestión de límites de la API (para evitar exceder las cuotas) y la conversión de los datos de la API a un formato consistente y fácil de usar dentro de la aplicación. Se implementaron mecanismos robustos de manejo de errores y reintentos para garantizar la fiabilidad de los datos.',
      },
      {
        title:
          'Crear una interfaz de búsqueda de vuelos eficiente, receptiva y fácil de usar.',
        solution:
          'Utilicé Next.js para construir una interfaz de usuario rápida y optimizada para SEO. Aproveché las capacidades de Server-Side Rendering (SSR) y Static Site Generation (SSG) de Next.js para optimizar los tiempos de carga y la experiencia general del usuario. La interfaz se diseñó utilizando Tailwind CSS, con componentes personalizados para la selección de fechas (utilizando un selector de fechas), la selección de aeropuertos (con autocompletado), la selección de pasajeros y para mostrar los resultados de la búsqueda (con opciones de filtrado y clasificación).',
      },
      {
        title:
          'Manejo seguro de pagos y cumplimiento de las regulaciones PCI DSS.',
        solution:
          'Integré Stripe como pasarela de pago. Stripe proporciona una API segura y fácil de usar para procesar pagos con tarjeta de crédito y débito. Utilicé Stripe Elements, componentes de interfaz de usuario preconstruidos, para garantizar el cumplimiento de PCI DSS (Payment Card Industry Data Security Standard), ya que los datos confidenciales de la tarjeta nunca llegan a los servidores de la aplicación. Implementé medidas de seguridad adicionales, incluyendo la validación de datos del lado del servidor y la protección contra ataques de Cross-Site Request Forgery (CSRF).',
      },
    ],
    results: [
      'Fly Fast ofrece una experiencia de búsqueda y reserva de vuelos simplificada e intuitiva.',
      'La integración con la API de Amadeus proporciona acceso a una amplia gama de vuelos y tarifas de varias aerolíneas.',
      'La plataforma cumple con las prácticas de seguridad estándar de la industria para el procesamiento de pagos, garantizando la seguridad de los datos del usuario.',
    ],
  },
];

export const RESOURCES_EN: ResourceCategory[] = [
  {
    category: 'Development Methodologies & Practices',
    items: [
      {
        name: 'Agile Development (Scrum)',
        description:
          'Working iteratively with Scrum helps keep projects on track and adaptable.',
        why: "It's key for responding to feedback and delivering value faster.",
      },
      {
        name: 'Web Performance Optimization',
        description:
          'Focusing on techniques like code splitting, image optimization, and lazy loading.',
        why: 'Because a fast, smooth website makes for a better user experience and achieves business goals.',
      },
      {
        name: 'Code Reviews (GitHub PRs)',
        description:
          'Actively participating in code reviews through GitHub Pull Requests.',
        why: "It's the best way to catch issues early, share knowledge, and maintain a high standard across the team.",
      },
      {
        name: 'Version Control (Git)',
        description:
          'Using Git daily for version control and managing code history.',
        url: 'https://git-scm.com/',
        why: 'Non-negotiable for team collaboration and keeping projects organized and safe.',
      },
    ],
  },
  {
    category: 'Hardware',
    items: [
      {
        name: 'Primary Laptop',
        description:
          'My main machine: MSI Creator M16 (i7, 64GB RAM, 1TB NVMe).',
        why: 'Handles demanding development tasks and multitasking without breaking a sweat.',
      },
      {
        name: 'External Display',
        description:
          'Often a hotel TV! (Making the most of remote work setups).',
        why: 'More screen space helps me stay organized and productive, wherever I am.',
      },
      {
        name: 'Mouse',
        description: 'A reliable ergonomic mouse with programmable buttons.',
        why: 'Keeps things comfortable and efficient during long coding sessions.',
      },
    ],
  },
  {
    category: 'Software',
    items: [
      {
        name: 'Code Editor',
        description: 'Visual Studio Code - my go-to editor.',
        url: 'https://code.visualstudio.com/',
        why: "It's incredibly versatile, and extensions like Prettier, ESLint, and GitLens are huge productivity boosters.",
      },
      {
        name: 'Terminal',
        description: 'The native Ubuntu terminal via WSL.',
        why: 'Gives me direct access to powerful Linux tools.',
      },
      {
        name: 'Web Browser',
        description: 'Brave Browser for daily use.',
        url: 'https://brave.com/',
        why: 'Fast, privacy-focused, and the built-in ad-blocking is a nice bonus.',
      },
      {
        name: 'Design Tool',
        description: 'Adobe Photoshop for image tasks.',
        url: 'https://www.adobe.com/products/photoshop.html',
        why: 'Great for quick mockups, asset editing, and when precise image control is needed.',
      },
    ],
  },
  {
    category: 'Apps & Tools',
    items: [
      {
        name: 'Task Management',
        description: 'Google Sheets for tracking personal projects.',
        url: 'https://www.google.com/sheets/about/',
        why: "It's surprisingly effective – simple, flexible, and accessible anywhere.",
      },
      {
        name: 'Communication',
        description: 'Usually Telegram or Slack for communication.',
        url: 'https://slack.com/',
        why: 'Keeps team and community interactions quick and organized.',
      },
      {
        name: 'Code Hosting',
        description: 'GitHub for hosting repositories and collaboration.',
        url: 'https://github.com/',
        why: "The standard for a reason – version control, PRs, Actions, it's all there.",
      },
      {
        name: 'API Client',
        description: 'Thunder Client (VS Code Extension) for API testing.',
        url: 'https://www.thunderclient.com/',
        why: 'Super convenient for quick API checks without leaving the editor.',
      },
    ],
  },
  {
    category: 'Learning Resources',
    items: [
      {
        title: 'Astro Framework: Build Fast, Content-Focused Websites',
        instructor: 'Fernando Herrera',
        platform: 'Udemy',
        year: '2023',
        summary:
          'A deep dive into Astro, covering everything from core concepts and integrations (React, Vue) to performance optimization.',
        skills: [
          'Astro',
          'JavaScript',
          'Performance Optimization',
          'TypeScript',
          'Integrations',
        ],
      },
      {
        title: 'Next.js: Zero to Expert (Updated)',
        instructor: 'Fernando Herrera',
        platform: 'Udemy',
        year: '2021',
        summary:
          'Comprehensive guide covering Next.js fundamentals through advanced topics like SSR, SSG, API Routes, and deployment.',
        skills: [
          'Next.js',
          'React.js',
          'JavaScript',
          'SSR',
          'SSG',
          'API Routes',
        ],
      },
      {
        title: 'React: Zero to Expert (Hooks & MERN)',
        instructor: 'Fernando Herrera',
        platform: 'Udemy',
        year: '2021',
        summary:
          'Advanced React course focused on Hooks, Context API, and building full MERN stack applications (MongoDB, Express, React, Node.js).',
        skills: [
          'React.js',
          'React Hooks',
          'Context API',
          'MERN Stack',
          'JavaScript',
          'TypeScript',
        ],
      },
      {
        name: 'Essential Reading',
        description: '"Clean Code" by Robert C. Martin.',
        url: 'https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882',
        why: "A foundational book on writing software that's easy to read, understand, and maintain.",
      },
      {
        name: 'Reference Material',
        description: '"JavaScript: The Definitive Guide" by David Flanagan.',
        url: 'https://www.oreilly.com/library/view/javascript-the-definitive/9781449393854/',
        why: 'My go-to reference for deep dives into JavaScript language specifics.',
      },
      {
        name: 'Acknowledgements',
        description:
          'Big thanks to my mentors Fernando Herrera & Miguel Ángel Durán (midudev).',
        why: "Their guidance and the communities they've built have been incredibly helpful.",
      },
    ],
  },
];

export const RESOURCES_ES: ResourceCategory[] = [
  {
    category: 'Metodologías y Prácticas de Desarrollo',
    items: [
      {
        name: 'Desarrollo Ágil (Scrum)',
        description:
          'Trabajar de forma iterativa con Scrum ayuda a mantener los proyectos flexibles y bien encaminados.',
        why: 'Es clave para adaptarse rápido a los cambios y entregar valor de forma continua.',
      },
      {
        name: 'Optimización del Rendimiento Web',
        description:
          'Aplicando técnicas como code splitting, optimización de imágenes y lazy loading.',
        why: 'Porque una web rápida y fluida mejora la experiencia del usuario y ayuda a cumplir objetivos.',
      },
      {
        name: 'Revisiones de Código (GitHub PRs)',
        description:
          'Participo activamente en las revisiones de código mediante Pull Requests en GitHub.',
        why: 'Es la mejor forma de detectar problemas a tiempo, compartir conocimiento y mantener un estándar de calidad alto en el equipo.',
      },
      {
        name: 'Control de Versiones (Git)',
        description:
          'Uso Git a diario para controlar versiones y gestionar el historial del código.',
        url: 'https://git-scm.com/',
        why: 'Imprescindible para colaborar en equipo y mantener los proyectos organizados y seguros.',
      },
    ],
  },
  {
    category: 'Hardware',
    items: [
      {
        name: 'Portátil Principal',
        description:
          'Mi equipo principal: MSI Creator M16 (i7, 64GB RAM, 1TB NVMe).',
        why: 'Potencia de sobra para desarrollo y multitarea sin problemas de rendimiento.',
      },
      {
        name: 'Pantalla Externa',
        description:
          '¡A menudo la TV del hotel! (Aprovechando al máximo el entorno de trabajo remoto).',
        why: 'Más espacio en pantalla me ayuda a organizarme y ser productivo, esté donde esté.',
      },
      {
        name: 'Ratón',
        description:
          'Un ratón ergonómico de confianza con botones programables.',
        why: 'Fundamental para mantener la comodidad y la eficiencia en sesiones largas de código.',
      },
    ],
  },
  {
    category: 'Software',
    items: [
      {
        name: 'Editor de Código',
        description: 'Visual Studio Code, mi editor de cabecera.',
        url: 'https://code.visualstudio.com/',
        why: 'Es súper versátil, y extensiones como Prettier, ESLint y GitLens me ahorran muchísimo tiempo.',
      },
      {
        name: 'Terminal',
        description: 'La terminal nativa de Ubuntu a través de WSL.',
        why: 'Me da acceso directo a las potentes herramientas de Linux.',
      },
      {
        name: 'Navegador Web',
        description: 'Brave Browser para el día a día.',
        url: 'https://brave.com/',
        why: 'Rápido, centrado en la privacidad, y el bloqueo de anuncios integrado es un plus.',
      },
      {
        name: 'Herramienta de Diseño',
        description: 'Adobe Photoshop para tareas con imágenes.',
        url: 'https://www.adobe.com/products/photoshop.html',
        why: 'Ideal para bocetos rápidos, editar recursos gráficos o cuando necesito control preciso de imágenes.',
      },
    ],
  },
  {
    category: 'Aplicaciones y Herramientas',
    items: [
      {
        name: 'Gestión de Tareas',
        description: 'Google Sheets para seguimiento de proyectos personales.',
        url: 'https://www.google.com/sheets/about/',
        why: 'Sorprendentemente eficaz: simple, flexible y accesible desde cualquier lugar.',
      },
      {
        name: 'Comunicación',
        description: 'Normalmente Telegram o Slack para comunicarme.',
        url: 'https://slack.com/',
        why: 'Facilitan una interacción rápida y organizada con equipos y comunidades.',
      },
      {
        name: 'Alojamiento de Código',
        description: 'GitHub para alojar repositorios y colaborar.',
        url: 'https://github.com/',
        why: 'El estándar por algo: control de versiones, PRs, Actions... lo tiene todo.',
      },
      {
        name: 'Cliente API',
        description: 'Thunder Client (Extensión VS Code) para probar APIs.',
        url: 'https://www.thunderclient.com/',
        why: 'Muy práctico para comprobaciones rápidas de APIs sin salir del editor.',
      },
    ],
  },
  {
    category: 'Recursos de Aprendizaje',
    items: [
      {
        title: 'Astro Framework: Desarrollo de aplicaciones web',
        instructor: 'Fernando Herrera',
        platform: 'Udemy',
        year: '2023',
        summary:
          'Un curso muy completo sobre Astro, desde conceptos básicos e integraciones (React, Vue) hasta optimización del rendimiento.',
        skills: [
          'Astro',
          'JavaScript',
          'Optimización Rendimiento',
          'TypeScript',
          'Integraciones',
        ],
      },
      {
        title: 'Next.js: De cero a experto (Actualizado)',
        instructor: 'Fernando Herrera',
        platform: 'Udemy',
        year: '2021',
        summary:
          'Guía exhaustiva que cubre Next.js desde los fundamentos hasta temas avanzados como SSR, SSG, API Routes y despliegue.',
        skills: [
          'Next.js',
          'React.js',
          'JavaScript',
          'SSR',
          'SSG',
          'API Routes',
        ],
      },
      {
        title: 'React: De cero a experto (Hooks y MERN)',
        instructor: 'Fernando Herrera',
        platform: 'Udemy',
        year: '2021',
        summary:
          'Formación avanzada en React, centrada en Hooks, Context API y la creación de aplicaciones full-stack con MERN.',
        skills: [
          'React.js',
          'React Hooks',
          'Context API',
          'Stack MERN',
          'JavaScript',
          'TypeScript',
        ],
      },
      {
        name: 'Lectura Esencial',
        description: '"Clean Code" (Código Limpio) de Robert C. Martin.',
        url: 'https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882',
        why: 'Un libro fundamental sobre cómo escribir software fácil de leer, entender y mantener.',
      },
      {
        name: 'Material de Referencia',
        description: '"JavaScript: The Definitive Guide" de David Flanagan.',
        url: 'https://www.oreilly.com/library/view/javascript-the-definitive/9781449393854/',
        why: 'Mi guía de consulta para profundizar en aspectos específicos del lenguaje JavaScript.',
      },
      {
        name: 'Agradecimientos',
        description:
          'Mi agradecimiento a mis mentores Fernando Herrera y Miguel Ángel Durán (midudev).',
        why: 'Su guía y las comunidades que han creado han sido una ayuda inestimable.',
      },
    ],
  },
];
