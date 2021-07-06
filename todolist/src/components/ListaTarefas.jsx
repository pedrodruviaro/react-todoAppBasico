import React from "react";
import Card from "./Card";

export default function ListaTarefas(props) {
  return (
    <div className="Lista">
      <ul>
        {props.tarefas.map((tarefa, i) => {
          return (
            <Card>
              <li key={i}>
                <h2 className="tarefa-titulo">{tarefa.titulo}</h2>
                <p>{tarefa.texto}</p>
              </li>
            </Card>
          );
        })}
      </ul>
    </div>
  );
}
