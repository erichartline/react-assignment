import React, { Component } from "react"
import { DeleteItem, PlainButton, ItemText } from "../styles"

class SingleItem extends Component {
  // set default prop for this component
  static defaultProps = {
    item: "",
  }

  // access removeItem action when user clicks delete
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
