import { useNavigate } from "react-router-dom";
import './styles.css';

const ReadmePage = () => {
    const navigate = useNavigate();
    return (
        <div className="login-container">
            <div className="login-form readme-page-card">
                <h1 className="readme-title">Documentación del Proyecto</h1>

                <div className="readme-content-wrapper">
                    
                    <section className="readme-bubble">
                        <h2>🚀 Explicación del Proyecto</h2>
                        <p>
                            Este proyecto es un clon de la interfaz de WhatsApp Web desarrollado para la UTN. 
                            <br />Busca simular la experiencia de mensajería en tiempo real, permitiendo la 
                            visualización de contactos, gestión de chats y persistencia de mensajes.
                        </p>
                    </section>

                 
                    <section className="readme-bubble">
                        <h2>🧩 Partes Principales</h2>
                        <ul className="readme-list">
                            <li><strong>Sistema de Autenticación:</strong> Flujo de Login y Registro con validaciones personalizadas.</li>
                            <li><strong>Panel de Chat:</strong> Interfaz dividida en lista de contactos y ventana de mensajes activa.</li>
                            <li><strong>Gestión de Estado:</strong> Uso de un Contexto global para sincronizar datos en toda la App.</li>
                        </ul>
                    </section>

             
                    <section className="readme-bubble">
                        <h2>🛠 Tecnologías Utilizadas</h2>
                        <ul className="readme-list">
                            <li><strong>React + Vite:</strong> Framework y entorno de desarrollo.</li>
                            <li><strong>Context API:</strong> Manejo de estado global del usuario y mensajes.</li>
                            <li><strong>React Router Dom:</strong> Navegación y protección de rutas.</li>
                            <li><strong>CSS3:</strong> Variables para identidad visual coherente.</li>
                        </ul>
                    </section>

                
                    <section className="readme-bubble">
                        <h2>🧠 Decisiones de Desarrollo</h2>
                        <p>
                            Se decidió utilizar <strong>LocalStorage</strong> para la persistencia de datos, asegurando 
                            que la experiencia del usuario no se interrumpa al recargar la página. Además, se 
                            implementó un sistema de <strong>Rutas Protegidas</strong> para separar el contenido 
                            público del privado de forma segura.
                        </p>
                    </section>

                  
                    <section className="readme-bubble">
                        <h2>📝 Observaciones y Dificultades</h2>
                        <p>
                            La mayor dificultad fue la sincronización de los mensajes en el estado global al 
                            cambiar entre contactos. Fue un desafio personal, el uso de componentes 
                            funcionales y Hooks me permitió un código más limpio y escalable.
                        </p>
                    </section>

                </div>

                <footer className="readme-footer">
                    <button 
                        onClick={() => navigate("/")} 
                        className="login-form button btn-back"
                    >
                        Volver al Chat
                    </button>
                </footer>
            </div>
        </div>
    );
};

export { ReadmePage };