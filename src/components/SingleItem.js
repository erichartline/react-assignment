import React from "react"
import { Item } from "../styles"

const SingleItem = props => {
  return (
    <div>
      <Item>
        <ul>{props.items.map((item, index) => <li key={index}>{item}</li>)}</ul>
      </Item>
    </div>
  )
}

export default SingleItem
