import Botao from "../componentes/Botao";
import InputEmail from "../componentes/InputEmail";
import InputSenha from "../componentes/InputSenha";
import { useState } from "react";

function FormLogin(props){
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    return(
        <form>
            <InputEmail valor={email} mudarValor={(e) => setEmail(e.target.value)} />
            <InputSenha valor={senha} mudarValor={(e) => setSenha(e.target.value)}/>
            <Botao texto="Entrar" navegaPara={props.navegaPara}/>
        </form>
    );
}

export default FormLogin;