import React from "react"
import SingleItem from "./SingleItem"
import { List, Item } from "../styles"

const ItemList = ({ counter, items, actions }) => {
  return (
    <List>
      <h2>My Items ({counter})</h2>
      <ul>
        {items.map((item, index) => (
          <Item key={index}>
            <SingleItem item={item} actions={actions} />
          </Item>
        ))}
      </ul>
    </List>
  )
}

export default ItemList
