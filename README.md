# Portafolio Profesional - Emilio Guerrero

Portafolio web moderno y profesional para desarrollador backend especializado en PHP, Laravel, MySQL/PostgreSQL y Ubuntu Server.

## 🚀 Características

- **Diseño Moderno y Responsive**: Adaptado para móviles, tablets y desktop
- **Animaciones Sutiles**: Efectos fade-in, hover y transiciones suaves
- **Sección Hero**: Presentación impactante con foto y enlaces a CV y contacto
- **Servicios**: Muestra de servicios ofrecidos
- **Proyectos Destacados**: Galería de proyectos con tecnologías utilizadas
- **Timeline de Experiencia**: Línea de tiempo visual con experiencia laboral y educación
- **Habilidades Técnicas**: Barras de progreso animadas y iconos de tecnologías
- **Formulario de Contacto**: Formulario funcional con validación
- **Descarga de CV**: Botón para descargar CV en PDF
- **Optimizado para SEO**: Meta tags y estructura semántica

## 📁 Estructura del Proyecto

```
portafolio/
│
├── index.html              # Página principal
├── README.md              # Este archivo
│
├── assets/
│   ├── cv/                # Coloca aquí tu CV en PDF
│   │   └── CV_Emilio_Guerrero.pdf
│   └── img/               # Imágenes del portafolio
│       ├── perfil.jpg     # Tu foto de perfil
│       ├── portafolio.png # Favicon
│       ├── proyecto-cimo.jpg
│       ├── proyecto-escuela.jpg
│       ├── proyecto-servidor.jpg
│       ├── proyecto-juegos.jpg
│       └── placeholder-project.jpg
│
├── css/
│   └── styles.css         # Estilos principales
│
└── js/
    └── scripts.js         # JavaScript principal
```

## 🛠️ Instalación y Uso

### 1. Preparar las Imágenes

Agrega las siguientes imágenes en la carpeta `assets/img/`:

- **perfil.jpg**: Tu foto profesional (recomendado: 400x400px, formato cuadrado)
- **portafolio.png**: Favicon/logo (recomendado: 512x512px)
- **proyecto-cimo.jpg**: Screenshot del proyecto CIMO
- **proyecto-escuela.jpg**: Screenshot del proyecto escuela
- **proyecto-servidor.jpg**: Screenshot del servidor/Nextcloud
- **proyecto-juegos.jpg**: Screenshot de los juegos web
- **placeholder-project.jpg**: Imagen genérica para proyectos sin imagen (opcional)

### 2. Agregar tu CV

1. Exporta tu CV a formato PDF
2. Nómbralo como `CV_Emilio_Guerrero.pdf`
3. Colócalo en la carpeta `assets/cv/`

### 3. Personalización

#### Información Personal

Edita el archivo `index.html` y actualiza:

- Nombre y tagline en la sección Hero
- Información de contacto (email, teléfono, ubicación)
- Enlaces a LinkedIn y GitHub
- Descripción "Sobre mí"

#### Proyectos

Actualiza la sección de proyectos con tus propios trabajos:

```html
<div class="project-card">
    <!-- Imagen del proyecto -->
    <!-- Título y descripción -->
    <!-- Tecnologías utilizadas -->
</div>
```

#### Habilidades

Ajusta los porcentajes de las barras de habilidades según tu nivel:

```html
<div class="skill-progress" style="width: 85%"></div>
```

### 4. Desplegar

#### Opción 1: GitHub Pages (Recomendado)

1. Crea un repositorio en GitHub
2. Sube todos los archivos
3. Ve a Settings → Pages
4. Selecciona la rama main como fuente
5. Tu sitio estará disponible en `https://tu-usuario.github.io/portafolio`

#### Opción 2: Netlify

1. Conecta tu repositorio de GitHub
2. Netlify detectará automáticamente los archivos HTML
3. ¡Despliega con un clic!

#### Opción 3: Servidor Propio

Si tienes tu propio servidor (como mencionas en tu perfil):

```bash
# Copia los archivos a tu servidor
scp -r portafolio/ usuario@servidor:/var/www/html/

# O usa Git
git clone tu-repositorio.git /var/www/html/portafolio
```

## 🎨 Personalización de Colores

Los colores principales se definen en `css/styles.css`:

```css
:root {
    --primary-color: #2563eb;      /* Azul principal */
    --secondary-color: #f59e0b;    /* Naranja/Amarillo */
    --text-primary: #1f2937;       /* Texto principal */
}
```

## 📧 Configurar Formulario de Contacto

El formulario actualmente muestra un mensaje de éxito. Para hacerlo funcional:

### Opción 1: EmailJS (Gratis)

1. Regístrate en [EmailJS](https://www.emailjs.com/)
2. Crea un servicio de email
3. Crea una plantilla
4. Descomenta el código de EmailJS en `js/scripts.js`
5. Agrega tus credenciales

### Opción 2: Formspree (Gratis)

1. Regístrate en [Formspree](https://formspree.io/)
2. Obtén tu endpoint
3. Actualiza el formulario para usar POST a Formspree

### Opción 3: Backend Propio (PHP)

Crea un archivo `contact.php` con tu lógica de envío de emails.

## ✨ Características Adicionales Opcionales

El código incluye funcionalidades opcionales que puedes activar:

- **Typing Animation**: Descomenta en `scripts.js` para animar el título
- **Dark Mode**: Código preparado para implementar modo oscuro
- **Cursor Personalizado**: Efecto de cursor personalizado

## 🔧 Tecnologías Utilizadas

- HTML5
- CSS3 (Variables CSS, Grid, Flexbox, Animaciones)
- JavaScript ES6+
- Font Awesome 6
- Google Fonts (Poppins, Inter)

## 📱 Responsive

El portafolio es totalmente responsive con breakpoints en:

- Desktop: > 1024px
- Tablet: 768px - 1024px
- Mobile: < 768px

## 🌐 Navegadores Compatibles

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)

## 📊 SEO

Para mejorar tu SEO:

1. Actualiza los meta tags en `<head>`
2. Agrega Google Analytics (opcional)
3. Crea un archivo `sitemap.xml`
4. Agrega `robots.txt`

## 💡 Consejos

1. **Imágenes**: Optimiza todas las imágenes antes de subirlas (usa TinyPNG o similar)
2. **CV**: Mantén tu CV actualizado
3. **Proyectos**: Agrega enlaces a repositorios o demos en vivo cuando sea posible
4. **Contenido**: Sé claro y conciso en las descripciones
5. **Testing**: Prueba en diferentes dispositivos y navegadores

## 📝 Próximos Pasos

1. ✅ Agregar tus imágenes personales
2. ✅ Subir tu CV en PDF
3. ✅ Personalizar contenido
4. ✅ Configurar formulario de contacto
5. ✅ Desplegar en GitHub Pages o servidor
6. ⬜ Configurar dominio personalizado (opcional)
7. ⬜ Agregar Google Analytics (opcional)

## 📫 Contacto

**Emilio Guerrero**
- Email: guerreroemilio001@gmail.com
- LinkedIn: [linkedin.com/in/emilio-guerrero-80b964280](https://www.linkedin.com/in/emilio-guerrero-80b964280)
- GitHub: [github.com/Groe21](https://github.com/Groe21)

## 📄 Licencia

Este proyecto es de uso personal. Siéntete libre de usarlo como inspiración para tu propio portafolio.

---

**Nota**: No olvides reemplazar todas las imágenes placeholder y personalizar el contenido antes de desplegarlo en producción.

¡Éxito con tu portafolio! 🚀
