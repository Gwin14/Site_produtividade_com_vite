import { useState } from "react";
import "./checklist.scss";
import Tarefa from "./Tarefa";

export default function Checklist() {
  const [headings, setHeadings] = useState([]);

  const [nome, setNome] = useState("");
  const [prazo, setPrazo] = useState("");

  const handleCreateHeading = () => {
    const newHeading = <Tarefa nome={nome} prazo={prazo} />;
    setHeadings([...headings, newHeading]);
  };

  return (
    <>
      <h1 id="checklistTitle">Sua lista de tarefas.</h1>

      <form action="" id="formChecklist">
        <fieldset>
          <legend>Criar nova tarefa</legend>
          <label htmlFor="">Nome da tarefa:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <label htmlFor="">Prazo da tarefa:</label>
          <input
            type="DateTime-Local"
            value={prazo}
            onChange={(e) => setPrazo(e.target.value)}
          />
          <button id="adicionar" type="button" onClick={handleCreateHeading}>
            Adionar
          </button>
          <button
            id="limpar"
            type="button"
            onClick={() => {
              setNome("");
              setPrazo("");
            }}
          >
            Limpar dados
          </button>
        </fieldset>
      </form>

      <section id="tat">
        {headings.map((heading) => (
          <div>{heading}</div>
        ))}
      </section>
    </>
  );
}
