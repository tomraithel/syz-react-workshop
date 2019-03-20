import React, { Component } from "react";

const ColorContext = React.createContext({
  color: "green",
  toggleColor: () => {}
});

export class ColorProvider extends Component {
  state = {
    color: "green"
  };

  handleToggleColor = () => {
    this.setState({
      color: this.state.color === "green" ? "blue" : "green"
    });
  };

  render() {
    return (
      <ColorContext.Provider
        value={{ color: this.state.color, toggleColor: this.handleToggleColor }}
      >
        {this.props.children}
      </ColorContext.Provider>
    );
  }
}

export const ColorConsumer = ColorContext.Consumer;
