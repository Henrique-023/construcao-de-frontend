function Secao(){
    return(
        <sectio>
            <h2>{props.texto}</h2>
            {props.children}
        </sectio>
    );
}

export default Secao;