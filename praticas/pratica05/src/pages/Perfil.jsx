import Botao from "../componentes/Botao";
import Cabecalho from "../componentes/Cabecalho";
import Conteudo from "../componentes/Conteudo";
import InputEmail from "../componentes/InputEmail";
import InputSenha from "../componentes/InputSenha";
import Secao from "../componentes/Secao";
import Menu from "../componentes/Menu";

function Perfil() {
    return(
        <>
            <Cabecalho></Cabecalho>
            <Conteudo>
                <Menu />
                <Secao texto="Perfil de Usuário">
                    <InputEmail />
                    <InputSenha />
                    <Botao texto="Salvar" />
                </Secao>
            </Conteudo>
        </>
    );
}

export default Perfil;