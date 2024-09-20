function InputSenha(props){
    return(
        <>
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" name="senha" value={props.senha} onChange={props.mudarValor} required />
        </>
    );
}

export default InputSenha;