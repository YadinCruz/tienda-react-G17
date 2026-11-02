import { Link } from "react-router-dom";


export default function QuienesSomos() {


    return (

        
        <section className="nosotros my-8 space-y-6 rounded-xl border p-6" >
            <div className="flex items-center gap-3 rounded-xl border p-6" >
                    <img src="/logo.png" alt="Logo de Tienda Tech" className="h-10 w-10 object-contain" />
                    <h1 className="text-3xl font-bold">Tienda Tech</h1> <br/>
                
                <p className="mt-3">
                    Somos una tienda dedicada a ofrecer productos para todos.
                </p>
            </div>

            <div className="rounded-xl border p-6">
                <h2 className="text-2xl font-bold">Nuestra historia</h2>
                <p className="mt-3">
                    Tienda Tech nace con la idea de acercar distintos productos de calidad a las personas  junto a  una experiencia de compra sencilla.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-xl border  p-6">
                    <h2 className="text-xl font-bold">Nuestra misión</h2>
                    <p className="mt-2">
                        Ofrecer todo tipo de productos de calidad y facilitar su adquisición.
                    </p>
                </div>

                <div className="rounded-xl border  p-6">
                    <h2 className="text-xl font-bold font-bold">Nuestra visión</h2>
                    <p className="mt-2">
                        Ser una tienda reconocida por su innovación,
                        confianza y atención al cliente.
                    </p>
                </div>
            </div>
            <div className="my-6 rounded-xl border p-6 text-center">
                <h2 className="mb-3 text-xl font-bold">Conoce nuestros productos</h2>
                <p className="mb-4 text-sm">
                    En Tienda Tech contamos con productos tecnológicos para tus estudios,
                    trabajo y entretenimiento. Te invitamos a conocer nuestro catálogo.
                </p>
                <Link to="/" className="rounded-full border px-5 py-2">
                    Volver al catálogo
                </Link>
            </div>
        </section>
    );
}
