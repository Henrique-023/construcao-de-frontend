import Link from "./Link";
import "./Menu.css";

function Menu() {
    const opcoes = ["Home", "Perfil", "Sair"];
    return (
        <nav>
            <ul>
                {opcoes.map((opcoe) =><li><Link texto = {opcoe} /></li> )}
            </ul>
        </nav>
    );
}

export default Menu;