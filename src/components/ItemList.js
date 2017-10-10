import React, { Component } from "react"
import { connect } from "react-redux"
import SingleItem from "./SingleItem"
import { List } from "../styles"

class ItemList extends Component {
  render() {
    const { counter, items } = this.props
    return (
      <List>
        <h2>My Items ({counter})</h2>
        <ul>
          {items.map((item, index) => {
            return (
              <SingleItem
                key={index}
                item={item}
                actions={this.props.actions}
              />
            )
          })}
        </ul>
      </List>
    )
  }
}

export default ItemList
