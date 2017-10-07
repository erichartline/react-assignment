import React from "react"
import { Item, DeleteItem } from "../styles"

const SingleItem = props => {
  return (
    <div>
      <ul>
        {props.items.map((item, index) => (
          <Item key={index}>
            {item}
            <DeleteItem>
              <a href="#" onClick={props.deleteItem.bind(null, item)}>
                X
              </a>
            </DeleteItem>
          </Item>
        ))}
      </ul>
    </div>
  )
}

export default SingleItem
