import Conteudo from "../componentes/Conteudo";
import Titulo from "../componentes/Titulo";
import FormLogin from "./FormLogin";

function Login(props){
    return (
        <Conteudo>
            <Titulo texto="Aluno Online" />
            <FormLogin navegaPara={props.navegaPara} />
        </Conteudo>
    );
}

export default Login;