import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputEmail from "../componentes/InputEmail";
import InputSenha from "../componentes/InputSenha";
import Botao from "../componentes/Botao";

function FormLogin(props){
    const [email, setEmail]= useState();
    const [senha, setSenha]= useState();
    const navigate= useNavigate();
    return(
        <form>
            <InputEmail valor={email} mudarValor={(e) => setEmail(e.target.value)}/>
            <InputSenha valor={senha} mudaValor={(e) => setSenha(e.target.value)}/>
            <Botao texto="Entrar" aoClicar={(e) => navigate("/hme")}/>
        </form>
    );
}

export default FormLogin