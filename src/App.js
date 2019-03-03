import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import BirdStore from "./stores/BirdStore";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bird: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onBirdChange = this.onBirdChange.bind(this);
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.BirdStore.addBird(this.state.bird);
    this.setState({ bird: "" });
  };
  onBirdChange({ target }) {
    this.setState({ bird: target.value });
  }

  render() {
    const { BirdStore } = this.props;
    return (
      <div className="App">
        you have {BirdStore.birdCount} birds.
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter bird"
            value={this.state.bird}
            onChange={this.onBirdChange}
          />
          <button>Add bird</button>
        </form>
        <ul>
          {BirdStore.birds.map((bird, idx) => (
            <li key={idx}>{bird}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default inject("BirdStore")(observer(App));
