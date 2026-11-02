
import { useState, type FormEvent } from "react";
import { Link,useNavigate } from "react-router-dom";
import { registrarUsuario } from "../../infraestructura/auth";

export default function Registro() {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [clave, setClave] = useState('');
    const [confirmar, setConfirmar] = useState('');
    const [error, setError] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [enviando, setEnviando] = useState(false);
    const navigate = useNavigate();

    async function manejarRegistro(e: FormEvent) {
        e.preventDefault();
        setError('');
        setMensaje('');
        if (clave !== confirmar) { setError('Las contraseñas no coinciden');
            return;
        }
        setEnviando(true);
        try {
            const nuevoUsuario = await registrarUsuario( nombre, apellido, usuario, email, clave);
            alert(`Usuario ${nuevoUsuario.username} registrado correctamente`);
                navigate('/login');
            setNombre('');
            setApellido('');
            setUsuario('')  ;
            setEmail('');
            setClave('');
            setConfirmar('');

        } catch (error) {
            setError(
                error instanceof Error
                    ? error.message
                    : 'No se pudo registrar el usuario'
            );
        } finally {
            setEnviando(false);
        }
    }

    return (
        <form onSubmit={manejarRegistro} className="mx-auto flex max-w-sm flex-col gap-3" >
            <h1 className="text-2xl font-bold">Crear cuenta</h1>

            <label className="flex flex-col text-sm"> Nombre
                <input type="text" className="rounded border px-3 py-2"
                    value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
            </label>

            <label className="flex flex-col text-sm"> Apellido
                <input type="text" className="rounded border px-3 py-2"
                    value={apellido} onChange={(e) => setApellido(e.target.value)} required/>
            </label>

            <label className="flex flex-col text-sm"> Usuario
                <input type="text" className="rounded border px-3 py-2"
                    value={usuario} onChange={(e) => setUsuario(e.target.value)} required/>
            </label>
            <label className="flex flex-col text-sm">Correo electrónico
                <input type="email" className="rounded border px-3 py-2"
                    value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </label>
            <label className="flex flex-col text-sm"> Contraseña
                <input type="password" className="rounded border px-3 py-2"
                    value={clave} onChange={(e) => setClave(e.target.value)} minLength={6} required />
            </label>

            <label className="flex flex-col text-sm"> Confirmar contraseña
                <input type="password"  className="rounded border px-3 py-2"
                    value={confirmar} onChange={(e) => setConfirmar(e.target.value)} required />
            </label>

            {error && (
                <p className="text-sm text-red-600">{error}</p>
            )}

            {mensaje && (
                <p className="text-sm text-green-600">{mensaje}</p>
            )}

            <button type="submit" className="rounded-full border px-4 py-2"disabled={enviando} >
                {enviando ? 'Registrando...' : 'Registrarse'}
            </button>
            <p className="text-center text-sm">  ¿Ya tienes una cuenta?{" "}
                <Link to="/login" className="underline">
                    Inicia sesión
                </Link>
            </p>
        </form>
    );
}
