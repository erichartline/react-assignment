import React, { Component } from "react"
import { Item, DeleteItem, PlainButton } from "../styles"

class SingleItem extends Component {
  deleteItem = item => {
    let newItem = this.props.items.filter(_item => {
      return _item !== item
    })

    this.setState({ items: newItem, counter: this.props.counter - 1 })
  }

  render() {
    const { items } = this.props
    return (
      <div>
        <ul>
          {items.map((item, index) => (
            <Item key={index}>
              {item}
              <DeleteItem>
                <PlainButton onClick={this.deleteItem.bind(null, item)}>
                  X
                </PlainButton>
              </DeleteItem>
            </Item>
          ))}
        </ul>
      </div>
    )
  }
}

export default SingleItem
