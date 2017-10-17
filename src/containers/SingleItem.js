import React from "react"
import { DeleteItem, PlainButton, ItemText } from "../styles"

// functional component to display each item
// each item has a delete button that calls back to the removeItem action
const SingleItem = ({ item, actions }) => {
  return (
    <div>
      <ItemText>{item.text}</ItemText>
      <DeleteItem>
        <PlainButton
          onClick={() => {
            actions.removeItem(item)
          }}>
          X
        </PlainButton>
      </DeleteItem>
    </div>
  )
}

export default SingleItem
