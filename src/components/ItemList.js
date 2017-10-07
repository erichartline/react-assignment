import React from "react"
import SingleItem from "./SingleItem"
import { List } from "../styles"

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
