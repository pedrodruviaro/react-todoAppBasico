import { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import ListaTarefas from "./components/ListaTarefas";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tarefas: [
        { titulo: "Titulo 1", texto: "Tarefa 1"},
        { titulo: "Titulo 2", texto: "Tarefa 2" },
      ],
    };

    this.novaTarefa = this.novaTarefa.bind(this)
  }

  novaTarefa(novoTitulo, novoTexto){
    const novaTarefa = {titulo: novoTitulo, texto: novoTexto}
    const novoArray = [...this.state.tarefas, novaTarefa]

    this.setState({tarefas: novoArray})
  }

  render() {
    return (
      <div className="App">
        <Form onSubmit={this.novaTarefa} />
        <ListaTarefas tarefas={this.state.tarefas} />
      </div>
    );
  }
}

export default App;
