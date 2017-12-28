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

  render() {
    const { value } = this.state;

    return <div className="App">Value: {value}</div>;
  }
}

export default App;
