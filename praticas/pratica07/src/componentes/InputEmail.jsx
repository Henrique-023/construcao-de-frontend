function InputEmail(props){
    return(
        <>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" value={props.valor}
            onChange={props.mudarValor} required/>
        </>
    );
}

export default InputEmail;