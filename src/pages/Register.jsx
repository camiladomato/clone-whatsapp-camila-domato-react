import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./styles.css";

const Register = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        let tempErrors = {};

        if (!formData.nombre) {
            tempErrors.nombre = "El nombre es obligatorio";
        } else if (formData.nombre.length < 3) {
            tempErrors.nombre = "El nombre debe tener al menos 3 caracteres";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            tempErrors.email = "El email es obligatorio";
        } else if (!emailRegex.test(formData.email)) {
            tempErrors.email =
                "Formato de email inválido (ejemplo: usuario@email.com)";
        }

        if (!formData.password) {
            tempErrors.password = "La contraseña es obligatoria";
        } else if (formData.password.length < 6) {
            tempErrors.password = "La contraseña debe tener al menos 6 caracteres";
        }

        setErrors(tempErrors);

        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });

        if (errors[event.target.name]) {
            setErrors({
                ...errors,
                [event.target.name]: "",
            });
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (validate()) {
            alert("Registro exitoso. Ahora puedes iniciar sesión.");
            navigate("/ingresar");
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2 style={{ textAlign: "center", color: "#333" }}>Crear Cuenta</h2>

                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre completo"
                    onChange={handleChange}
                    value={formData.nombre}
                    className={errors.nombre ? "input-error" : ""}
                />
                {errors.nombre && <span className="error-text">{errors.nombre}</span>}

                <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    onChange={handleChange}
                    value={formData.email}
                    className={errors.email ? "input-error" : ""}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}

                <input
                    type="password"
                    name="password"
                    placeholder="Contraseña (mín. 6 caracteres)"
                    onChange={handleChange}
                    value={formData.password}
                    className={errors.password ? "input-error" : ""}
                />
                {errors.password && (
                    <span className="error-text">{errors.password}</span>
                )}

                <button type="submit">Registrarse</button>

                <p style={{ textAlign: "center", fontSize: "14px", color: "#666" }}>
                    ¿Ya tienes cuenta?{" "}
                    <Link
                        to="/ingresar"
                        style={{ color: "#4a90e2", textDecoration: "none" }}
                    >
                        Inicia sesión
                    </Link>
                </p>
            </form>
        </div>
    );
};

export { Register };
