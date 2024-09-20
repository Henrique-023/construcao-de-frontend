function Link(props){
    const trataClique = (e) => {
        e.preventDefault ();
        props.navegaPara(e.target.getAttribute("href"));
    } 
    return(
        <a href={props.rota}>{props.texto} onClick={trataClique}</a>
    );
}

export default Link;