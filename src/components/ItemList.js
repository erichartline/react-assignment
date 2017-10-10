import React, { Component } from "react"
import SingleItem from "./SingleItem"
import { List } from "../styles"

class ItemList extends Component {
  render() {
    const { counter, items, actions } = this.props
    return (
      <List>
        <h2>My Items ({counter})</h2>
        <ul>
          {items.map((item, index) => {
            return <SingleItem key={index} item={item} actions={actions} />
          })}
        </ul>
      </List>
    )
  }
}

export default ItemList
