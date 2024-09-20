import Conteudo from "../componentes/Conteudo";
import Menu from "../componentes/Menu";
import Titulo from "../componentes/Titulo";

function Perfil(){
    return(
        <Conteudo>
            <Titulo texto="Perfil de Usuário" />
            <Menu navegaPara={props.navegaPara}/>
        </Conteudo>
    )
}

export default Perfil;