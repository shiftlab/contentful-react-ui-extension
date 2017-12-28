import React, { Component } from "react";
import "./App.css";
import { initApi } from "./api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api: {},
      value: ""
    };
  }

  componentWillMount() {
    initApi(api => {
      api.window.startAutoResizer();
      this.setState({
        value: api.field.getValue(),
        api: api
      });
    });
  }

  handleClickUpdate = e => {
    const { api, value } = this.state;
    api.field.setValue(value);
  };

  handleChangeValue = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const { value } = this.state;

    return (
      <div className="App">
        <input
          className="cf-form-input"
          type="text"
          value={value}
          onChange={this.handleChangeValue}
        />
        <button
          className="update-button cf-btn-primary"
          onClick={this.handleClickUpdate}
        >
          Update
        </button>
      </div>
    );
  }
}

export default App;
