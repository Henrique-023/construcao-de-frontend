import Conteudo from "../componentes/Conteudo";
import Menu from "../componentes/Menu";
import Titulo from "../componentes/Titulo";

function Home(props){
    return(
        <Conteudo>
            <Titulo texto="Página Inicial" />
            <Menu navegaPara={props.navegaPara} />
        </Conteudo>
    )
}

export default Home;