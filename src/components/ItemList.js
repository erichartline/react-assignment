import React, { Component } from "react"
import SingleItem from "./SingleItem"
import { List } from "../styles"

class ItemList extends Component {
  render() {
    const { counter, items } = this.props
    return (
      <List>
        <h2>My Items ({counter})</h2>
        <SingleItem items={items} counter={counter} />
      </List>
    )
  }
}

export default ItemList
