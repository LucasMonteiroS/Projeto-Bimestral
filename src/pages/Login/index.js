import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
export default function Login() {
  return (
    <Container>
      <header className="cabeçalho">
        <h1>Efetuar Autenticação</h1>
      </header>
      <div>
        <form>
          <label>E-mail:</label>
          <input type="text" placeholder="Ex. Lucas.Silva@novaandradina.org" />
          <label>Senha:</label>
          <input type="password" placeholder="Ex. 123456789" />
          <button type="submit">Entrar</button>
          <button><Link className="link" to="/cadastro">Cadastrar Usuário</Link></button>
          <button><Link className="link" to="/esquece">Esqueceu sua Senha?</Link></button>
        </form>
      </div>
    </Container>
  );
}
