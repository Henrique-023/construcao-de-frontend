import {useParams} from "react-router-dom";
import Secao from "../componentes/Secao";
import InputEmail from "../componentes/InputEmail";
import InputSenha from "../componentes/InputSenha";
import Botao from "../componentes/Botao";

function Perfil(){
    const { id } = useParams();
    return(
        <>
        {id == 1 ? 
        <Secao texto="Perfil do Usuário">
          <InputEmail valor="aluno@email.com" mudaValor={()=>{}} />
          <InputSenha valor="" mudaValor={()=>{}} />
          <Botao texto="Salvar" />
        </Secao>
        : <p>Usuário não encontrado</p> }
       </>
   
    );
}

export default Perfil;