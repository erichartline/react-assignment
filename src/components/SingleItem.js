import React from "react"
import { Item, DeleteItem, PlainButton } from "../styles"

const SingleItem = props => {
  return (
    <div>
      <ul>
        {props.items.map((item, index) => (
          <Item key={index}>
            {item}
            <DeleteItem>
              <PlainButton onClick={props.deleteItem.bind(null, item)}>
                X
              </PlainButton>
            </DeleteItem>
          </Item>
        ))}
      </ul>
    </div>
  )
}

export default SingleItem
