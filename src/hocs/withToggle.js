import React, { Component } from "react";

export default function withToggle(WrappedComponent) {
  return class extends Component {
    state = {
      toggled: false
    };

    toggle = () => {
      this.setState({
        toggled: !this.state.toggled
      });
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          toggled={this.state.toggled}
          onToggle={this.toggle}
        />
      );
    }
  };
}
