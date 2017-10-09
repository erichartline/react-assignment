import React from "react"
import SingleItem from "./SingleItem"
import { removeItem } from "../actions"
import { List } from "../styles"

// deleteItem = item => {
//   let newItem = this.state.items.filter(_item => {
//     return _item !== item
//   })
//
//   this.setState({ items: newItem, counter: this.state.counter - 1 })
// }

const ItemList = props => {
  const { counter, items } = this.props
  return (
    <List>
      <h2>My Items ({counter})</h2>
      <SingleItem items={items} />
    </List>
  )
}

export default ItemList
