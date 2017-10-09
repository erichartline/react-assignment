import React, { Component } from "react"
import { connect } from "react-redux"
import { Item, DeleteItem, PlainButton } from "../styles"
import { removeItem } from "../actions"

const SingleItem = ({ items = [], deleteItem }) => {
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

const mapStateToProps = state => {
  return {
    items: state.items,
  }
}

export default connect(mapStateToProps)(SingleItem)
