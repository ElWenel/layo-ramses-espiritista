# Máxima La Pitonisa del Amor - Landing Page

Una landing page místico y elegante desarrollada en Next.js para una vidente especializada en temas de amor.

## 🌟 Características

- **Diseño Responsivo**: Optimizado para todos los dispositivos
- **Tema Místico**: Paleta de colores cósmica con dorado y rojo
- **Animaciones Suaves**: Efectos de fade-in y animaciones de partículas
- **Componentes Interactivos**: Tarjetas de servicios con efectos hover
- **Integración WhatsApp**: Botón de llamada a la acción directo
- **Optimización SEO**: Metadatos y estructura semántica

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 14+ con App Router
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Componentes UI**: ShadCN UI
- **Iconos**: Lucide React
- **Fuentes**: Google Fonts (Cinzel Decorative, Literata)

## 🎨 Paleta de Colores

- **Background**: Casi negro (`hsl(0 0% 4%)`)
- **Foreground**: Blanco (`hsl(0 0% 98%)`)
- **Primary**: Dorado (`hsl(45 92% 45%)`)
- **Accent**: Rojo (`hsl(0 84% 60%)`)
- **Card**: Gris oscuro (`hsl(0 0% 8%)`)
- **Border**: (`hsl(0 0% 20%)`)

## 📦 Instalación

1. Clona el repositorio:

```bash
git clone <repository-url>
cd pagina-amarres
```

2. Instala las dependencias:

```bash
npm install
```

3. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🚀 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## 📁 Estructura del Proyecto

```
pagina-amarres/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── CosmicBackground.tsx
│   └── ui/
│       └── card.tsx
├── lib/
│   └── utils.ts
├── .github/
│   └── copilot-instructions.md
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🌙 Componentes Principales

### CosmicBackground

Fondo animado con partículas doradas y efectos de nebulosa roja.

### Service Cards

Cuatro tarjetas de servicios principales:

- Amarres de Amor y Endulzamientos
- Relaciones en Crisis
- Bloqueos y Mal de Ojo
- Protección contra Maldiciones

### WhatsApp CTA

Botón de llamada a la acción con integración directa a WhatsApp.

## 📱 Responsividad

La landing page está optimizada para:

- **Desktop**: Diseño completo con grid de 2 columnas
- **Tablet**: Adaptación del layout y tipografías
- **Mobile**: Diseño en una columna con elementos apilados

## 🔧 Personalización

Para personalizar el número de WhatsApp, edita la función `handleWhatsAppClick` en `app/page.tsx`:

```tsx
const handleWhatsAppClick = () => {
  window.open("https://wa.me/TU_NUMERO_AQUI", "_blank");
};
```

## 📈 Optimización SEO

- Metadatos configurados en `layout.tsx`
- Estructura semántica HTML
- Open Graph tags
- Descripción y keywords relevantes

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu rama de feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👩‍💻 Desarrollado por

Proyecto desarrollado para Máxima La Pitonisa del Amor - Especialista en temas de amor con 20 años de experiencia.
