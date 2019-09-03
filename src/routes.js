import React from "react";
import { BrowserRouter, Route } from "react-router-dom";


import Login from "./pages/Login";
import Esquece from "./pages/Esquece";
import Cadastro from "./pages/Cadastro";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="/esquece" component={Esquece} />
      <Route path="/cadastro" component={Cadastro} />
    </BrowserRouter>
  );
}
