import { Link, NavLink } from "react-router-dom";
import formatearPrecio from "../formato";
import { useCart } from "../../aplicacion/useCart";
import { useSesion } from "../../aplicacion/useSesion";
interface Props {
    nombre : string;
    eslogan?: string;
}
export default function Header ( {nombre , eslogan = "Tecnologia para todos"} : Props) {
    const {unidades, total} = useCart();
    const  {usuario, salir} = useSesion();
    return(
        <header className="mb-6 flex items-center justify-between">
            <div>
                <div className="flex items-center gap-3">
                    <img src="/logo.png" alt="Logo de Tienda Tech" className="h-10 w-10 object-contain" />
                    <h1 className="text-3xl font-bold">{nombre}</h1>
                </div>
                <p className="text-sm text-gray-500">{eslogan}</p>
                <nav className="mt-2 flex gap-4">
                    <NavLink to="/" className={({isActive}) => (isActive ? 'font-bold underline' : 'hover:underline')}>Catalogo</NavLink>
                    <NavLink to="/checkout" className={({isActive}) => (isActive ? 'font-bold underline' : 'hover:underline')}>Checkout</NavLink>
                    <NavLink to="/QuienesSomos" className={({isActive}) => (isActive ? 'font-bold underline' : 'hover:underline')}>¿Quienes somos?</NavLink>
                    <NavLink to="/Contactanos" className={({isActive}) => (isActive ? 'font-bold underline' : 'hover:underline')}>Contactanos</NavLink>
                </nav>
            </div>
            <p>{unidades} productos - {formatearPrecio(total)}</p>
            {
                usuario ? (
                    <p className="text-sm">Hola, {usuario.nombre}
                        <button className="ml-2 underline" onClick={salir}>Salir</button>
                    </p>
                ) : (
                    <Link to="/login" className="text-sm underline">Inicie Sesion</Link>
                )
            }
        </header>
    )
}