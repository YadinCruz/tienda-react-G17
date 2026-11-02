import { useState } from "react";
import { useSesion } from "../../aplicacion/useSesion";

export default function Contactanos() {
    const { usuario } = useSesion();

    const [asunto, setAsunto] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [enviado, setEnviado] = useState(false);

    function manejarEnvio(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setEnviado(true);
        setAsunto("");
        setMensaje("");
    }

    return (
<section className="mx-auto my-8 max-w-sm rounded-xl border p-6">
    <form onSubmit={manejarEnvio} className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold">Contáctanos</h1>
        <p className="text-sm">Hola, {usuario?.nombre}. ¿En qué podemos ayudarte?</p>
        <label className="flex flex-col text-sm">Correo electrónico
            <input type="email" value={usuario?.email ?? ""} readOnly className="rounded border px-3 py-2"/>
        </label>
        <label className="flex flex-col text-sm">Asunto
            <input type="text" value={asunto} onChange={(e) => setAsunto(e.target.value)} required className="rounded border px-3 py-2"/>
        </label>
        <label className="flex flex-col text-sm">Mensaje
            <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} required rows={5} className="rounded border px-3 py-2"/>
        </label>
        <button type="submit" className="rounded-full border px-4 py-2">Enviar mensaje</button>
        {enviado && <p className="text-sm">Tu mensaje fue registrado correctamente.</p>}
    </form>
</section>
    );
}