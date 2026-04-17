# Chaufalo! – Documentación del Proyecto Web

Este documento describe la arquitectura, diseño, uso y configuración de la página web promocional para **Chaufalo!**, un servicio de entrega de arroz chaufa a domicilio.

---

## 1. Arquitectura del Sistema y Tecnologías Empleadas

El proyecto utiliza una arquitectura de **Frontend Estático** sin un entorno de compilación (build step) complejo, lo que garantiza tiempos de carga rápidos, fácil mantenimiento y la posibilidad de desplegar en casi cualquier plataforma de hosting estático (como GitHub Pages, Vercel, Netlify o un servidor Apache/Nginx básico).

Las tecnologías y sus funciones dentro de la arquitectura son:

*   **HTML5 (`index.html`):** Define la estructura semántica y el contenido principal de la Landing Page. Optimizado para SEO con meta etiquetas correspondientes y estructura accesible.
*   **CSS3 Vanilla (`style.css`):** Encargado de la presentación visual y el diseño adaptable (Responsive Design). No requiere preprocesadores (como Sass) ni frameworks (como Tailwind o Bootstrap), lo que mantiene las dependencias al mínimo absoluto y asegura que el desarrollador tenga el control total sobre los estilos.
*   **Vanilla JavaScript (`script.js`):** Maneja la interactividad básica de la página, como el menú hamburguesa móvil, animaciones dinámicas, o la lógica imperativa que no recae en la capa de interfaz compleja.
*   **React 18 vía CDN (`team.js`):** La sección "Equipo/Colaboradores" utiliza React incrustado directamente mediante CDN, sin JSX ni Webpack/Vite. Se emplea `React.createElement` de forma nativa para proporcionar un componente dinámico para renderizar las tarjetas del equipo.
    *   *Funcionalidad:* Permite mantener los datos de los fundadores/colaboradores separados de la vista en un estado estructurado (`TEAM_DATA`), facilitando su futura expansión y permitiendo un rendering eficiente.

**Funciones Clave de la Arquitectura Seleccionada:**
1.  **Alta Disponibilidad y Rendimiento:** Al ser archivos estáticos puros y aprovechar un CDN para React, la carga inicial al navegador es casi instantánea.
2.  **Mantenibilidad Modular Híbrida:** Combina la ligereza de Vanilla JS con las ventajas de estado y componentes de React en las secciones donde se requieren datos interactivos (Tarjetas del Equipo).
3.  **Portabilidad:** Cero dependencias en el lado del servidor y nula necesidad de `npm install` o comandos de build para ejecutar la web.

---

## 2. Estructura y Diseño Web

El diseño está concebido como una **Landing Page de Conversión (One-Page)** enfocada a redirigir a los usuarios al canal de ventas (WhatsApp).

### Secciones del Diseño
*   **Nav (Navegación):** Menú pegajoso (Sticky) con logo y enlaces tipo ancla a las diferencias secciones. Incluye botón flotante de WhatsApp y menú hamburguesa en mobile.
*   **Hero (Inicio):** Primera impresión impactante. Imagen de fondo interactiva, insignia "Free Delivery" y una propuesta de valor fuerte (Copywriting). El objetivo principal de captación.
*   **Ciclo del Chaufaholic:** Explicación paso a paso mediante diseño de tarjetas enumeradas que introducen al cliente en el "embudo" comercial.
*   **Nosotros:** Presentación de la identidad corporativa mediante un layout de texto con imagen. Refleja cercanía ("Hecho con amor").
*   **Equipo (React Component):** Presentación del personal en forma de cuadrícula de tarjetas, renderizada vía `team.js`.
*   **Foto del Plato & Horarios:** Muestra del producto y grilla temporal con los días de atención, reforzado con múltiples aserciones (CTAs).
*   **Redes y Footer:** Botones de enlace a TikTok e Instagram para aumentar la comunidad base.

### Tipografía y Estilos Visuales
*   **Tipografía Primaria:** *Outfit* (Moderna, legible para estructura).
*   **Tipografía Secundaria:** *Caveat* (Manuscrita o informal, usada para transmitir cercanía/artesanal).
*   **Paleta de Colores:** Uso intensivo de tonos cálidos y texturas orientadas a restaurantes informales y emocionantes, para estimular el apetito.

---

## 3. Manual de Usuario (Navegación e Interacción)

Para un cliente final (usuario de la página), la experiencia consta de:

1.  **Navegación Principal:**
    *   Hacer scroll a través de la página para leer la propuesta de valor.
    *   Se puede usar la barra de navegación superior para saltar directamente a secciones de interés como "Nosotros", "Horarios" o "Equipo".
    *   En dispositivos móviles, se usa el ícono de las tres líneas (menú hamburguesa) de la esquina superior derecha para desplegar las opciones.
2.  **Visualización del Equipo:** Al hacer scroll hasta la sección equipo, se cargarán de forma animada las postales de los fundadores/colabores. Es posible visitar sus redes si tienen botones correspondientes en su respectiva tarjeta.
3.  **Realizar Pedidos:**
    *   A lo largo de toda la página existen botones llamativos que dicen "¡Hacer mi pedido!" o iconos de WhatsApp.
    *   Existe un botón esférico flotante con el icono de WhatsApp en la esquina inferior derecha en todo momento.
    *   Al hacer clic en cualquiera de estos botones, el usuario será redirigido automáticamente a la aplicación WhatsApp con un mensaje predeterminado ("Hola! Quiero hacer un pedido...").

---

## 4. Manual de Configuración (Para Administradores / Desarrolladores)

Debido a su naturaleza sin compilación, el despliegue y modificación son muy sencillos.

### Visualización Local
Para ver y modificar la página en tu propia computadora:
1.  No se requiere NodeJS, npm, ni bases de datos.
2.  Solamente debes hacer doble clic en el archivo `index.html`. Éste se abrirá directamente en tu navegador web.
3.  *(Opcional / Recomendado)* Para un Live Reload en tiempo real durante el desarrollo, puedes usar extensiones como **Live Server** en Visual Studio Code. Esto levanta un servidor en `http://127.0.0.1:5500`.

### Modificación de Contenido
*   **Para cambiar textos o imágenes básicas:** Edita directamente el archivo `index.html`. Busca la sección deseada (por ejemplo, el mensaje de bienvenida en la sección `<section ... id="inicio">`).
*   **Para cambiar números de WhatsApp:** En `index.html`, busca todos los enlaces (`<a href="...">`) que comiencen con `https://wa.me/` y actualiza el número de teléfono con el formato internacional.
*   **Para cambiar el Estilo/Diseño:** Modifica el archivo `style.css`. Las clases son semánticas. Considera limpiar el caché de tu navegador para visualizar los cambios inmediatamente tras modificar CSS.

### Configuración y Edición de Miembros del Equipo
El apartado de "Equipo" es dinámico gracias a React, pero muy sencillo de modificar.
1.  Abre el archivo `team.js` en tu editor de código.
2.  Localiza el objeto constante llamado `TEAM_DATA` (líneas iniciales).
3.  Para **editar** a alguien, modifica las propiedades de texto (ej. `"name": "Nuevo Nombre"`).
4.  Para **agregar** a alguien nuevo, simplemente añade un nuevo objeto al final de ese array respetando la estructura:
    ```javascript
    {
      id: "collab3",
      name: "Juan Pérez",
      role: "Repartidor",
      bio: "El más rápido de la ciudad.",
      photo: "assets/nueva_foto.jpg", // Asegúrate de colocar la foto en la carpeta assets/
      badge: "Repartidor",
      badgeClass: "badge-collab",
      socials: { instagram: "", tiktok: "", whatsapp: "" }
    }
    ```
5.  Recarga la página y ¡el nuevo miembro aparecerá automáticamente de forma estilizada!

### Despliegue a Producción
Puesto que son archivos estáticos en su totalidad, la carpeta `/ChaufaloWeb` puede ser subida directamente a un servicio de hosting arrastrando la carpeta.
*   **Plataformas Gratuitas Recomendadas:** Vercel, Netlify o GitHub Pages.
*   Asegúrese de subir la carpeta `assets` (e `Imagenes`) y todos los scripts a la raíz de su hospedaje de manera que mantenga la relación de carpetas con `index.html`.
