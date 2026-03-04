# 💼 Portafolio Personal — Ana García López

> **Data Analyst · Product Owner · Scrum Master**  
> Sitio web personal de marca profesional, orientado a reclutadores del sector tecnológico.

🌐 **Demo en vivo:** [tuusuario.github.io/portfolio](https://tuusuario.github.io/portfolio)

---

## 📋 Tabla de contenidos

- [Vista previa](#-vista-previa)
- [Características](#-características)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Cómo personalizar](#-cómo-personalizar)
- [Despliegue en GitHub Pages](#-despliegue-en-github-pages)
- [Seguridad y buenas prácticas](#-seguridad-y-buenas-prácticas)
- [Mejoras futuras](#-mejoras-futuras)
- [Tecnologías usadas](#-tecnologías-usadas)

---

## 👁️ Vista previa

| Sección | Descripción |
|---|---|
| **Hero** | Foto, nombre, pitch y stats rápidos con animaciones de entrada |
| **Sobre mí** | Resumen, habilidades blandas y valores profesionales |
| **Experiencia** | Línea de tiempo con responsabilidades y logros cuantificables |
| **Educación** | Estudios formales y certificaciones |
| **Habilidades** | Barras de nivel y etiquetas por categoría |
| **Proyectos** | Grid de tarjetas con stack, rol y enlaces a demo/código |
| **Contacto** | Formulario de demostración, redes sociales y disponibilidad |

---

## ✨ Características

- **100% HTML + CSS + JavaScript puro** — sin frameworks ni dependencias
- **Multiidioma (i18n)** — Español, Inglés y Francés sin recargar la página
- **Diseño responsive** — optimizado para móvil, tablet y escritorio (Mobile First)
- **Animaciones suaves** — Intersection Observer para efectos al hacer scroll
- **Navegación fija** con scroll suave y menú hamburger en móvil
- **Botón de descarga de CV** visible en la barra de navegación
- **SEO básico** — metadatos, estructura semántica y etiquetas Open Graph
- **Accesibilidad** — roles ARIA, foco visible, contraste suficiente
- **Datos separados del diseño** — edita tu contenido sin tocar el HTML

---

## 📁 Estructura del proyecto

```
portfolio/
│
├── index.html          # Estructura HTML semántica completa
├── styles.css          # Estilos con variables CSS, Flexbox y Grid
├── scripts.js          # Lógica, datos, i18n y animaciones
├── cv.pdf              # ← SUBE TU CV AQUÍ
├── .gitignore          # Archivos excluidos del repositorio
│
└── assets/
    └── img/
        ├── foto.jpg    # ← REEMPLAZA con tu foto de perfil
        └── og-preview.png  # ← Imagen para redes sociales (1200×630 px)
```

---

## ✏️ Cómo personalizar

### 1. Datos personales (HTML)

Abre `index.html` y busca los comentarios `<!-- REEMPLAZA -->`:

```html
<!-- Tu nombre completo -->
<h1 id="hero-name">Tu Nombre</h1>

<!-- Tu foto de perfil -->
<img src="assets/img/foto.jpg" alt="Foto de perfil de Tu Nombre" />

<!-- Tu email real -->
<a href="mailto:tu@email.com">tu@email.com</a>

<!-- Tu LinkedIn -->
<a href="https://linkedin.com/in/tuusuario">linkedin.com/in/tuusuario</a>
```

### 2. Experiencia, proyectos y habilidades (JavaScript)

Abre `scripts.js` y edita los arrays al inicio del archivo:

```js
const EXPERIENCE      = [ /* tus empleos */ ];
const EDUCATION       = [ /* tus estudios */ ];
const CERTIFICATIONS  = [ /* tus certificaciones */ ];
const SKILLS          = [ /* tus habilidades */ ];
const PROJECTS        = [ /* tus proyectos */ ];
```

### 3. Textos en tres idiomas (JavaScript)

Edita el objeto `TRANSLATIONS` en `scripts.js`:

```js
const TRANSLATIONS = {
  es: { hero_pitch: 'Tu descripción en español...' },
  en: { hero_pitch: 'Your description in English...' },
  fr: { hero_pitch: 'Votre description en français...' },
};
```

### 4. Colores y tipografía (CSS)

Edita las variables al inicio de `styles.css`:

```css
:root {
  --color-accent:  #2D6A4F;   /* Color principal de acento */
  --color-bg:      #F7F5F0;   /* Fondo general */
  --font-display:  'DM Serif Display', serif;
  --font-body:     'DM Sans', sans-serif;
}
```

### 5. CV en PDF

Coloca tu archivo `cv.pdf` en la raíz del proyecto. Los botones ya apuntan a `cv.pdf` con el atributo `download`.

---

## 🚀 Despliegue en GitHub Pages

### Paso 1 — Prepara el repositorio

```bash
git init
git add .
git commit -m "feat: portafolio personal inicial"
git branch -M main
git remote add origin https://github.com/TUUSUARIO/NOMBRE-REPO.git
git push -u origin main
```

### Paso 2 — Activa GitHub Pages

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** → **Pages**
3. En *Source*: selecciona **Deploy from a branch**
4. Branch: `main` · Folder: `/ (root)`
5. Haz clic en **Save**

### Paso 3 — Accede a tu sitio

Después de 1–5 minutos, tu sitio estará disponible en:

```
https://TUUSUARIO.github.io/NOMBRE-REPO/
```

> 💡 Si el repositorio se llama exactamente `tuusuario.github.io`, la URL será simplemente `https://tuusuario.github.io`

---

## 🔒 Seguridad y buenas prácticas

| ✅ Hacer | ❌ Evitar |
|---|---|
| Activar 2FA en tu cuenta de GitHub | Subir archivos `.env` o con contraseñas |
| Usar `.gitignore` para excluir archivos locales | Incluir números de teléfono o dirección exacta |
| Revisar permisos del repo periódicamente | Subir tokens o claves de API |
| Mantener el repo actualizado | Usar contraseñas débiles en GitHub |

El archivo `.gitignore` incluido ya cubre los casos más comunes.

---

## 🔮 Mejoras futuras

- [ ] **Dark Mode** — toggle 🌙/☀️ con variables CSS y `prefers-color-scheme`
- [ ] **Efecto de typing** en el título del héroe (Typed.js o vanilla JS)
- [ ] **Sección Blog** — cards de artículos de Medium o Dev.to vía RSS/API
- [ ] **Modo impresión** — `@media print` optimizado para PDF desde el navegador
- [ ] **Cursor personalizado** — identidad visual extra en escritorio
- [ ] **Testimonios** — recomendaciones de LinkedIn de compañeros o managers
- [ ] **Analytics** — Google Analytics 4 o Plausible (privacidad-first)
- [ ] **Preloader** — splash screen corto con las iniciales
- [ ] **Formulario real** — integración con [Formspree](https://formspree.io) o [EmailJS](https://www.emailjs.com) sin backend

---

## 🛠️ Tecnologías usadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-181717?style=flat&logo=github&logoColor=white)

- **HTML5** semántico (`header`, `nav`, `main`, `section`, `footer`, `article`)
- **CSS3** moderno — variables CSS, Flexbox, CSS Grid, animaciones `@keyframes`
- **JavaScript ES6+** — Intersection Observer API, módulos de datos, i18n
- **Fuentes** — [DM Serif Display](https://fonts.google.com/specimen/DM+Serif+Display) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) via Google Fonts
- **Despliegue** — GitHub Pages (gratuito, sin servidor)

---

## 📄 Licencia

Este proyecto es de uso personal. Siéntete libre de adaptarlo para tu propio portafolio.

---

<p align="center">
  Hecho con ☕ y mucho CSS · <a href="https://tuusuario.github.io/portfolio">Ver sitio en vivo</a>
</p>
