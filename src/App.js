import React, { Component } from "react";
import axios from "axios";
import { Header, GlobalStyle, Repositories, Offline } from "./styles";

class App extends Component {
  state = {
    online: navigator.onLine,
    newRepoInput: "angular/angular",
    repositories:
      JSON.parse(localStorage.getItem("@Rocketseat:repositories")) || []
  };

  componentDidMount() {
    window.addEventListener("online", this.handleNetworkChange);
    window.addEventListener("offline", this.handleNetworkChange);
  }

  componentWillUnmount() {
    window.removeEventListener("online", this.handleNetworkChange);
    window.removeEventListener("offline", this.handleNetworkChange);
  }

  handleNetworkChange = () => {
    this.setState({ online: navigator.onLine });
  };

  addRepository = async () => {
    const { newRepoInput, repositories, online } = this.state;
    if (!newRepoInput) return;

    if (!online) {
      alert("Você está offline, conecte-se para fazer essa ação!");
    }

    const { data } = await axios.get(
      `https://api.github.com/repos/${newRepoInput}`
    );

    this.setState({
      newRepoInput: "",
      repositories: [...repositories, data]
    });

    localStorage.setItem(
      "@Rocketseat:repositories",
      JSON.stringify([...repositories, data])
    );
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <Header>
          <input
            placeholder="Adicionar repositório"
            onChange={e => this.setState({ newRepoInput: e.target.value })}
            value={this.state.newRepoInput}
          />

          <button onClick={this.addRepository}>Adicionar</button>
        </Header>

        <Repositories>
          {this.state.repositories.map(repository => (
            <li key={repository.id}>
              <img
                src={repository.owner.avatar_url}
                alt={repository.full_name}
              />
              <div>
                <strong>{repository.name}</strong>
                <p>{repository.description}</p>
                <a href={repository.html_url}>Acessar</a>
              </div>
            </li>
          ))}
        </Repositories>
        {!this.state.online && <Offline>Você está offline</Offline>}
      </>
    );
  }
}

export default App;
