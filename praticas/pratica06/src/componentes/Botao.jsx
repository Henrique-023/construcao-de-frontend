function Botao(props){
    return(
        <button onClick={(e) => navegaPara("/home")}>{props.texto}</button>
    );
}

export default Botao;