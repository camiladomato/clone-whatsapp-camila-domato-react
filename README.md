## **📱 WSP-Clon - Trabajo Práctico UTN**

Este proyecto es un **clon funcional de la interfaz de WhatsApp Web,** desarrollado como parte de la formación en la UTN. 
La aplicación permite la gestión de contactos, envío de mensajes simulados y persiste la información del usuario mediante tecnologías modernas de desarrollo frontend.

### **🚀 Tecnologías Utilizadas**

El proyecto fue construido utilizando las siguientes herramientas:

- REACT + VITE: Entorno de desarrollo de alto rendimiento.

- REACT ROUTER DOM: Gestión de navegación y protección de rutas.

- CONTEXT API: Manejo del estado global (Autenticación y Mensajes).

- CSS3: Diseño personalizado basado en la interfaz original de WhatsApp.

- LOCALSTORAGE: Persistencia de datos local para sesiones y chats.

- NVM: Gestión de versiones de Node.js (v16 / v24).

#### **📂 Estructura del Proyecto**

src/
├── components/
│    ├── Aside/          # Barra lateral (Buscador y Lista de Contactos)
│    ├── Chat/           # Ventana de conversación y envío de mensajes
│    ├── Nav/            # Navegación principal de la App
│    ├── PublicRoute.jsx     # Lógica de rutas públicas
│    └── RouteProtected.jsx  # Lógica de rutas privadas
├── context/             # appContext.jsx (Estado global)
├── pages/               # Vistas: HomePage, Login, Registro, Readme, 404
├── router/              # RouterApp.jsx (Configuración de rutas)
├── services/            # mockApi.js (Simulación de datos)
├── App.jsx              # Componente raíz
└── main.jsx             # Punto de entrada de React

### 🛠️ Instrucciones para ejecutar el proyecto localmente

Para correr este proyecto en tu entorno local, seguí estos pasos:

**Clonar el repositorio:**
git clone [https://github.com/camiladomato/clone-whatsapp-camila-domato-react.git](https://github.com/camiladomato/clone-whatsapp-camila-domato-react.git)

**Ingresar a la carpeta del proyecto:**
cd clone-whatsapp-camila-domato-react

**Instalar las dependencias necesarias:**
npm install

**Iniciar el servidor de desarrollo:**
npm run dev

**Nota:** Una vez iniciado, abrí el link proporcionado en la terminal (por defecto http://localhost:5173).

### **🌐 Instrucciones para el Deploy**

Ejecutar el comando de construcción: **npm run build.**

El contenido de la carpeta /dist es el que debe subirse al servicio de hosting (Vercel o Netlify).

### **📄 Documentación Adicional **

Para consultar decisiones de diseño, dificultades técnicas y observaciones personales, visitá la sección interna de Documentación en la ruta pública: /acerca

##### Desarrollado por: Camila Domato - Estudiante de UTN
##### Año: 2026