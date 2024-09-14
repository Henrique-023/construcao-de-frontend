import Rodape from "../componentes/Rodape";
import Titulo from "../componentes/Titulo";
import InputSenha from "../componentes/InputSenha";
import InputEmail from "../componentes/InputEmail";
import Conteudo from "../componentes/Conteudo";
import Botao from "../componentes/Botao"
import Icone from "../componentes/Icone";
import Link from "../componentes/Link";
import "./Login.css"

function Login(){
    return(
        <>
            <Conteudo estilo="login-container">
                <Icone imagem="" texto="Logo da Aplicação"/>
                <Titulo texto="Aluno Online"/>
                <InputEmail />
                <InputSenha />
                <Botao texto="Entrar"/>
                <Link  texto="Esqueceu a Senha?"/>
            </Conteudo>
            <Rodape texto="Copyright (C) 2024" />
        </>
    );
}

export default Login;