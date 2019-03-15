import React, { Component } from "react";
import Button from "./Button";
import Box from "./Box";

export default class Expander extends Component {
  state = {
    expanded: false
  };

  toggleExpand = () => {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.toggleExpand}>
          {this.state.expanded ? "Zuklappen" : "Aufklappen"}
        </Button>

        {this.state.expanded && <Box>{this.props.children}</Box>}
      </div>
    );
  }
}
