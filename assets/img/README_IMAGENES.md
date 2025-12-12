# Guía de Imágenes para el Portafolio

## Imágenes Requeridas

Coloca las siguientes imágenes en la carpeta `assets/img/`:

### 1. perfil.jpg
**Tu foto profesional**

- **Tamaño recomendado**: 400x400px o 500x500px
- **Formato**: JPG o PNG
- **Características**:
  - Fondo neutro o profesional
  - Buena iluminación
  - Vestimenta profesional o smart casual
  - Foto de busto o rostro
  - Sonrisa natural
  - Formato cuadrado

**Tips**:
- Si no tienes foto profesional, usa una foto clara con buena luz
- Evita selfies con mala calidad
- El fondo debe ser simple (azul, gris, blanco)
- Considera invertir en una sesión fotográfica profesional

### 2. portafolio.png
**Favicon/Logo del sitio**

- **Tamaño recomendado**: 512x512px
- **Formato**: PNG con transparencia
- **Opciones**:
  - Tus iniciales (EG)
  - Un ícono que represente tu profesión
  - Un logo personal si tienes

**Herramientas para crear**:
- [Canva](https://www.canva.com) - plantillas de favicon
- [Favicon.io](https://favicon.io) - generador de favicons
- [Figma](https://www.figma.com) - diseño personalizado

### 3. proyecto-cimo.jpg
**Screenshot del Proyecto CIMO**

- **Tamaño recomendado**: 1200x900px o 1600x1200px
- **Formato**: JPG o PNG
- **Qué capturar**:
  - Página principal del proyecto
  - Panel administrativo (si es apropiado)
  - Funcionalidad destacada

**Cómo tomar el screenshot**:
1. Abre el proyecto en navegador
2. Zoom al 100%
3. Usa herramienta de captura (puede ser del sistema o extensiones como Awesome Screenshot)
4. Captura la parte más representativa
5. Recorta si es necesario

### 4. proyecto-escuela.jpg
**Screenshot del Sistema de Gestión Escuela**

- Mismas especificaciones que proyecto-cimo.jpg
- Captura el panel administrativo o gestión documental

### 5. proyecto-servidor.jpg
**Screenshot del Servidor/Nextcloud**

- Muestra el panel de Nextcloud o Cockpit
- Interfaz de administración del servidor
- Dashboard con estadísticas si está disponible

### 6. proyecto-juegos.jpg
**Screenshot de los Juegos Web**

- Captura uno de los juegos en acción
- O un collage de varios juegos
- Muestra la interfaz más atractiva

### 7. placeholder-project.jpg (Opcional)
**Imagen genérica para proyectos futuros**

- Ya incluido como SVG
- Puedes reemplazarlo con una imagen personalizada
- Usa cuando no tengas screenshot de un proyecto

## Optimización de Imágenes

Antes de subir las imágenes, optimízalas para web:

### Herramientas Online (Gratuitas)
- [TinyPNG](https://tinypng.com) - Reduce el tamaño sin perder calidad
- [Compressor.io](https://compressor.io) - Compresor potente
- [Squoosh](https://squoosh.app) - De Google, muy completo

### Herramientas de Escritorio
- **ImageMagick** (Linux):
  ```bash
  # Redimensionar
  convert perfil.jpg -resize 400x400^ -gravity center -extent 400x400 perfil-optimizado.jpg
  
  # Optimizar calidad
  convert proyecto.jpg -quality 85 proyecto-optimizado.jpg
  ```

- **GIMP** (Linux/Windows/Mac):
  1. Abre la imagen
  2. Imagen → Escalar imagen
  3. Archivo → Exportar como → Ajusta calidad al 85%

### Tamaños Recomendados Finales

- **perfil.jpg**: 400x400px, ~50-100KB
- **portafolio.png**: 512x512px, ~20-50KB
- **Proyectos**: 1200x900px, ~150-300KB cada una

## Si No Tienes Screenshots de Proyectos

### Opción 1: Crear Mockups
Usa herramientas como:
- [Mockuper](https://mockuper.net)
- [Smartmockups](https://smartmockups.com)
- [Screely](https://www.screely.com)

### Opción 2: Usar Placeholders Temporales
Mientras consigues las imágenes reales:
- Usa el SVG placeholder incluido
- Crea imágenes simples con texto descriptivo
- Usa iconos grandes de Font Awesome con fondo de color

### Opción 3: Capturas de Desarrollo Local
Si los proyectos están en desarrollo local:
1. Inicia el servidor local
2. Abre en navegador
3. Toma screenshots
4. Optimiza y sube

## Formato de Nombres de Archivo

Mantén los nombres exactos:
```
perfil.jpg
portafolio.png
proyecto-cimo.jpg
proyecto-escuela.jpg
proyecto-servidor.jpg
proyecto-juegos.jpg
```

**Importante**: No uses espacios ni caracteres especiales en los nombres.

## Estructura Final

```
assets/
└── img/
    ├── perfil.jpg                  ← Tu foto
    ├── portafolio.png             ← Favicon
    ├── proyecto-cimo.jpg          ← Proyecto 1
    ├── proyecto-escuela.jpg       ← Proyecto 2
    ├── proyecto-servidor.jpg      ← Proyecto 3
    ├── proyecto-juegos.jpg        ← Proyecto 4
    └── placeholder-project.svg    ← Ya incluido
```

## Consejos Profesionales

1. **Consistencia**: Usa el mismo estilo para todos los screenshots
2. **Calidad**: Prioriza calidad sobre cantidad
3. **Privacidad**: No incluyas datos sensibles en los screenshots
4. **Watermark**: Considera agregar tu marca de agua si compartes código sensible
5. **Actualización**: Actualiza las imágenes cuando mejores los proyectos

## Alternativas si No Tienes Proyectos Visuales

Si tus proyectos son principalmente backend:

1. **Captura de API Documentation**
   - Usa Postman para mostrar endpoints
   - Captura la documentación de tu API

2. **Diagrama de Base de Datos**
   - Usa herramientas como dbdiagram.io
   - Muestra la estructura de tu BD

3. **Arquitectura del Sistema**
   - Crea diagrams de flujo
   - Muestra la arquitectura técnica

4. **Terminal/Código**
   - Captura del código bien formateado
   - Terminal mostrando el funcionamiento

## Verificación Final

Antes de publicar, verifica:

- [ ] Todas las imágenes están en la carpeta correcta
- [ ] Nombres de archivo son exactos
- [ ] Imágenes optimizadas (< 300KB cada una)
- [ ] Buena calidad visual
- [ ] Sin información sensible visible
- [ ] Se ven bien en diferentes tamaños

---

**Tip Pro**: Toma screenshots en resolución alta (1920x1080 o superior) y luego redimensiónalas. Así tendrás mejor calidad final.

¡Una vez que tengas todas las imágenes listas, tu portafolio se verá profesional y completo!
