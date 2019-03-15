import { Component } from "react";

export default class Toggle extends Component {
  state = {
    toggled: false
  };

  toggle = () => {
    this.setState({
      toggled: !this.state.toggled
    });
  };

  render() {
    return this.props.render({
      toggled: this.state.toggled,
      onToggle: this.toggle
    });
  }
}
