import Link from "./Link";

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