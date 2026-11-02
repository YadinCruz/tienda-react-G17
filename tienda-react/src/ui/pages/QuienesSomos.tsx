
export default function QuienesSomos() {
    return (
        <section className="my-8 space-y-6">
            <div className="rounded-xl bg-blue-900 p-8 text-white">
                <h2 className="text-3xl font-bold">
                    Sobre Tienda Tech
                </h2>
                <p className="mt-3">
                    Somos una tienda dedicada a ofrecer productos
                    tecnológicos para todos.
                </p>
            </div>

            <div className="rounded-xl border p-6">
                <h2 className="text-2xl font-bold">Nuestra historia</h2>
                <p className="mt-3">
                    Tienda Tech nace con la idea de acercar la tecnología
                    a las personas mediante productos de calidad y una
                    experiencia de compra sencilla.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-xl border bg-gray-50 p-6">
                    <h2 className="text-xl font-bold">Nuestra misión</h2>
                    <p className="mt-2">
                        Ofrecer productos tecnológicos de calidad
                        y facilitar su adquisición.
                    </p>
                </div>

                <div className="rounded-xl border bg-gray-50 p-6">
                    <h2 className="text-xl font-bold">Nuestra visión</h2>
                    <p className="mt-2">
                        Ser una tienda reconocida por su innovación,
                        confianza y atención al cliente.
                    </p>
                </div>
            </div>
        </section>
    );
}
