import React, { useEffect, useState } from "react";
import "./tarefa.scss";

export default function Tarefa(props) {
  const [visible, setVisible] = useState(true);

  return (
    <>
      {visible && (
        <section id="tarefa">
          <h1>Nome</h1>
          <p>{props.nome}</p>
          <h1>Prazo</h1>
          <p>{props.prazo}</p>
          <button onClick={() => setVisible(false)} id="apagar">
            Apagar
          </button>
        </section>
      )}
    </>
  );
}
