## **📱 WSP-Clon - Trabajo Práctico UTN**

Este proyecto es un **clon funcional de la interfaz de WhatsApp Web,** desarrollado como parte de la formación en la UTN. 
La aplicación permite la gestión de contactos, envío de mensajes simulados y persiste la información del usuario mediante tecnologías modernas de desarrollo frontend.
Realizada desde cero viendo las clases del curso e investigando.

### **🚀 Proceso de Desarrollo: Del Maquetado a la Lógica Real**
1. La Base: De HTML/JS a Componentes de React
Al principio, el reto fue migrar la estructura estática a React con Vite.

Lo que costó: Organizar la carpeta de componentes para que fuera escalable y pasar de los atributos de HTML puro (class) a la sintaxis de React (className).

Cómo lo resolvi: implemente una estructura de carpetas por componentes padres e hijos, separando los estilos por cada uno para mantener el código limpio.

2. Dinamismo y Estado Global 
Aquí es donde el proyecto dejó de ser "visual" para ser "funcional".

Lo que costó: Lograr que al hacer clic en un contacto se viera su chat específico y que el buscador filtrara en tiempo real. Manejar esto con props se hacia dificil.

Cómo lo resolvi: implemente React Context (Context Global). Esto me permitió centralizar la información del contacto seleccionado y los chats. También use useState para controlar el buscador mediante un filtrado dinámico del array de contactos.

3. Persistencia y Experiencia de Usuario (UX)
Un chat no sirve si al recargar la página se borra todo.

Lo que costó: Integrar LocalStorage para que los mensajes nuevos y el usuario logueado persistieran. También, lidiar con los scrolls  y que la barra de enviar se oculte si no hay nadie seleccionado.

Cómo lo resolvi: * Usaste useEffect para sincronizar el estado con localStorage.

Corregi bugs de CSS en los scrolls para que la navegación fuera fluida.

Agrege validaciones lógicas para renderizar condicionalmente componentes (como el input de mensajes).

4. Seguridad y Rutas
Lo que costó: Crear un flujo de Login y Registro que realmente protegiera el contenido.

Cómo lo resolvi: implemente React Router Dom con Rutas Protegidas. Si el usuario no está en el localStorage, el sistema lo redirige automáticamente al Login, asegurando que nadie vea los chats sin permiso.

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
│    ├── Aside/   Barra lateral (Buscador y Lista de Contactos)
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

email: camiladomato@gmail.com
password: utn123

email: mateoricci@gmail.com
password: backend123

 email: martinav@gmail.com
password: prod123


### **🌐 Instrucciones para el Deploy**

Link de vercel -> https://clone-whatsapp-camila-domato-react.vercel.app/


### **📄 Documentación Adicional **

Para consultar decisiones de diseño, dificultades técnicas y observaciones personales, visitá la sección interna de Documentación en la ruta pública: /acerca , tambien se puede acceder desde cualquier pagina del proyecto ingresando al botón "Acerca de".

Se creo todas las funcionalidades obligatorias .

 ### **Rutas**
 
 /registro (con sus validaciones correspondientes)
 /acerca (mencionada anteriormente)

  ### **Documentacion en DeepWiki -> **
 Se realizo la presentacion del proyecto tambien como se solicita en Deepwiki.

 link : https://deepwiki.com/camiladomato/clone-whatsapp-camila-domato-react

 ### **Funcionalidades que fueron opcionales y realizadas:**

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

### **Mi EXPERIENCIA **
Este proyecto fue un gran desafío técnico para mí. Lo que más me costó fue la gestión del estado global; pasar de manejar estados simples a coordinar la información entre el buscador, la lista de contactos y la ventana de chat mediante Context API.
Aprendí a darle mucha importancia a la UX: desde asegurar que el scroll se mantenga en el lugar correcto hasta manejar la persistencia de datos con LocalStorage para que la experiencia no se pierda al refrescar. Resolver los errores de nombres de carpetas y la estructura de archivos me ayudó a entender mejor cómo escalar una aplicación profesional.

##### Desarrollado por: Camila Domato - Estudiante de UTN - Desarrolladora Web Full Stack
##### Año: 2026