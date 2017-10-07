import React from "react"
import { Item } from "../styles"

const SingleItem = props => {
  return (
    <div>
      <ul>
        {props.items.map((item, index) => <Item key={index}>{item}</Item>)}
      </ul>
    </div>
  )
}

export default SingleItem
