import React from "react"
import { Item, DeleteItem, PlainButton } from "../styles"

const SingleItem = ({ items, deleteItem }) => {
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <Item key={index}>
            {item}
            <DeleteItem>
              <PlainButton onClick={deleteItem.bind(null, item)}>X</PlainButton>
            </DeleteItem>
          </Item>
        ))}
      </ul>
    </div>
  )
}

export default SingleItem
