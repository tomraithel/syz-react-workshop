import React, { Component } from "react";
import List from "./List";
import ListItem from "./ListItem";

export default class Accordion extends Component {
  state = {
    openIndex: -1
  };

  toggleElement = index => {
    if (index === this.state.openIndex) {
      this.setState({
        openIndex: -1
      });
    } else {
      this.setState({
        openIndex: index
      });
    }
  };

  render() {
    const mappedChildren = React.Children.map(
      this.props.children,
      (child, index) => {
        return (
          <ListItem>
            {React.cloneElement(child, {
              toggled: this.state.openIndex === index,
              onToggle: () => {
                this.toggleElement(index);
              }
            })}
          </ListItem>
        );
      }
    );
    return <List>{mappedChildren}</List>;
  }
}
