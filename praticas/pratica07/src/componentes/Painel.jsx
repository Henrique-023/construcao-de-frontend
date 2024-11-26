function Painel(props){
    return(
        <article>
            <h3>{props.texto}</h3>
            <ul>
                {props.itens.map((item, index) => <li Key={index}>{item}</li>)}
            </ul>
        </article>
    );
}

export default Painel;