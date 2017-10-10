import React, { Component } from "react"
import { DeleteItem, PlainButton, ItemText } from "../styles"

class SingleItem extends Component {
  static defaultProps = {
    item: "",
  }

  handleDelete = () => {
    this.props.actions.removeItem(this.props.item)
  }

  render() {
    const { item } = this.props
    return (
      <div>
        <ItemText>{item.text}</ItemText>
        <DeleteItem>
          <PlainButton onClick={this.handleDelete.bind(this)}>X</PlainButton>
        </DeleteItem>
      </div>
    )
  }
}

export default SingleItem
