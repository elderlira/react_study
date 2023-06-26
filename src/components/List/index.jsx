import React from "react";
import tarefas from "./tarefas";

function Lista() {
  return (
    <aside>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <li key={index}>
            <h3>{item.tarefa}</h3>
            <span>{item.tempo}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
