function Menu(props) {
    const opcoes = [
        {texto: "Home", rota:"/home"},
        {texto: "Perfil", rota:"/perfil"},
        {texto: "Sair", rota:"/login"},

    ]
    return (
        <nav>
            <ul>
                {opcoes.map((opcoa, index) => (
                    <li key={index}>
                        <Link navegaPara = {props.navegaPara} rota = {opcoa.rota} texto={opcoa.texto} />
                    </li>
                ))}
            </ul>
        </nav>
    )
}