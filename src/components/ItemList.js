import React, { Component } from "react"
import SingleItem from "./SingleItem"
import { List } from "../styles"

class ItemList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
    }
  }

  render() {
    return (
      <List>
        <h2>My Items ({this.state.counter})</h2>
        <SingleItem />
      </List>
    )
  }
}

export default ItemList
