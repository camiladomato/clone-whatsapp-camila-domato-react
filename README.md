## **📱 WSP-Clon - Trabajo Práctico UTN**

Este proyecto es un **clon funcional de la interfaz de WhatsApp Web,** desarrollado como parte de la formación en la UTN. 
La aplicación permite la gestión de contactos, envío de mensajes simulados y persiste la información del usuario mediante tecnologías modernas de desarrollo frontend.
Realizada desde cero viendo las clases del curso e investigando.

### **🚀 Tecnologías Utilizadas**

El proyecto fue construido utilizando las siguientes herramientas:

- REACT + VITE: Entorno de desarrollo de alto rendimiento.

- REACT ROUTER DOM: Gestión de navegación y protección de rutas.

- CONTEXT API: Manejo del estado global (Autenticación y Mensajes).

- CSS3: Diseño personalizado basado en la interfaz original de WhatsApp.

- LOCALSTORAGE: Persistencia de datos local para sesiones y chats.

- NVM: Gestión de versiones de Node.js (v24).

#### **📂 Estructura del Proyecto**

> src/
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

USUARIOS PARA PRUEBAS

email: Camiladomato@gmail.com
password: utn123

email: "mateoricci@gmail.com"
password: "backend123"

 email: "martinav@gmail.com"
password: "prod123"


### **🌐 Instrucciones para el Deploy**

Ejecutar el comando de construcción: **npm run build.**

El contenido de la carpeta /dist es el que debe subirse al servicio de hosting (Vercel).

Link de vercel -> https://clone-whatsapp-camila-domato-react.vercel.app/


### **📄 Documentación Adicional **

Para consultar decisiones de diseño, dificultades técnicas y observaciones personales, visitá la sección interna de Documentación en la ruta pública: /acerca , tambien se puede acceder desde cualquier pagina del proyecto ingresando al botón "Acerca de".

Se creo todas las funcionalidades obligatorias .

Rutas
 
 /registro (con sus validaciones correspondientes)
 /acerca (mencionada anteriormente)

 Documentacion en DeepWiki -> 
 Se realizo la presentacion del proyecto tambien como se solicita en Deepwiki.

 link : https://deepwiki.com/camiladomato/clone-whatsapp-camila-domato-react

 Funcionalidades que fueron opcionales y realizadas:

 - Login
 - LogOut
 - Proteccion de rutas privadas
 - Rutas publicas (teniendo en cuenta si el usuario esta logueado o no)
 - Mejoras visuales
 - Estetica coherente en todas las paginas
 - Orden de codigo en carpetas necesarias
 - Resposive desde tablet a desktop
 - creacion de nuevos componentes como Nav (que fue usado globalmente para navegar a chat - acerca de - ingresar y registro - log out dependiendo si el usuario esta o no logueado).
 - creacion de mockApi para utilzar datos de contactos y usuarios 

##### Desarrollado por: Camila Domato - Estudiante de UTN - Desarrolladora Web Full Stack
##### Año: 2026