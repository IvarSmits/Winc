import React, { Component } from "react";
import ListItem from "./ListItem";

class List extends Component {
  constructor() {
    super();
    this.state = {
      groceryItems: [
        { id: 1, title: "Appels" },
        { id: 2, title: "Pak melk" },
        { id: 3, title: "Boter" },
      ],
    };

    <ListItem />;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <main>
        <ul>
          <li>Boter</li>
          <li>Kaas</li>
          <li>Eieren</li>
        </ul>
      </main>
    );
  }
}

export default List;
