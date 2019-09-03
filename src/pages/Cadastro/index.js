import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
export default function Cadastro() {
  return (
    <Container>
      <header className="cabeçalho">
        <h1>Cadastrar um novo Usuário</h1>
      </header>
      <div>
        <form>
          <label>Nome de Usuário:</label>
          <input type="text" placeholder="LucasMs" />
          <label>E-mail:</label>
          <input type="text" placeholder="Ex. Lucas.Silva@novaandradina.org" />
          <label>Senha:</label>
          <input type="password" placeholder="Ex. 123456789" />
          <button type="submit">Cadastrar</button>
          <button><Link className="link" to="/">Voltar para a Autenticação</Link></button>
        </form>
      </div>
    </Container>
  );
}