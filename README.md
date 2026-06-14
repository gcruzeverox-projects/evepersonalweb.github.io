# 💼 Portafolio Personal — Evelyn Roxana Cruz

> **AI Business Analyst · AI Automation Analyst · Product Owner · Scrum Master**  
> Sitio web personal de marca profesional, orientado a reclutadores del sector tecnológico.

🌐 **Demo en vivo:** [gcruzeverox-projects.github.io/evepersonalweb.github.io](https://gcruzeverox-projects.github.io/evepersonalweb.github.io/)

---

## ✨ Características

- **100% HTML + CSS + JavaScript puro** — sin frameworks ni dependencias
- **Multiidioma (i18n)** — Español, Inglés y Francés sin recargar la página
- **Formulario de contacto real** — integrado con [Formspree](https://formspree.io), mensajes llegan a Gmail
- **Diseño responsive** — optimizado para móvil, tablet y escritorio (Mobile First)
- **Animaciones suaves** — Intersection Observer para efectos al hacer scroll
- **Navegación fija** con scroll suave y menú hamburger en móvil
- **Botón de descarga de CV** visible en la barra de navegación
- **SEO básico** — metadatos, estructura semántica y etiquetas Open Graph

---

## 📁 Estructura del proyecto

```
/
├── index.html          # Estructura HTML semántica completa
├── styles.css          # Estilos con variables CSS, Flexbox y Grid
├── scripts.js          # Lógica, datos, i18n, Formspree y animaciones
├── cv.pdf              # ← CV descargable (actualizar cuando haya cambios)
├── README.md
│
└── assets/
    └── img/
        ├── Profile-Eve.jpg   # Foto de perfil
        ├── Logo-Eve.png      # Logo EC
        └── favicon.png       # Favicon
```

---

## ✏️ Cómo actualizar contenido

### Datos de experiencia, habilidades y proyectos → `scripts.js`
Edita los arrays al inicio del archivo:
```js
const EXPERIENCE      = [ /* empleos */ ];
const EDUCATION       = [ /* estudios */ ];
const CERTIFICATIONS  = [ /* certs */ ];
const SKILLS          = [ /* habilidades */ ];
const PROJECTS        = [ /* proyectos */ ];
```

### Textos en tres idiomas → `scripts.js`
```js
const TRANSLATIONS = {
  es: { hero_pitch: 'Texto en español...' },
  en: { hero_pitch: 'Text in English...' },
  fr: { hero_pitch: 'Texte en français...' },
};
```

### Formulario de contacto → Formspree
El ID activo es `xjgdjkwk` (cuenta: eroxanacruz@gmail.com).
Panel: https://formspree.io/forms

---

## 🚀 Despliegue

El sitio se despliega automáticamente en **GitHub Pages** desde la rama `main`.

Para subir cambios:
```bash
git add .
git commit -m "descripción del cambio"
git push
```
En 2-3 minutos los cambios se reflejan en el sitio.

---

## 🛠️ Tecnologías

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-181717?style=flat&logo=github&logoColor=white)
![Formspree](https://img.shields.io/badge/Formspree-ED5B4F?style=flat&logoColor=white)

---

<p align="center">
  Hecho con ☕ · <a href="https://gcruzeverox-projects.github.io/evepersonalweb.github.io/">Ver sitio en vivo</a>
</p>
