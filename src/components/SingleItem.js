import React, { Component } from "react"
import { connect } from "react-redux"
import { Item } from "../styles"

class SingleItem extends Component {
  render() {
    const { items } = this.props

    return (
      <div>
        <ul>{items.map((item, index) => <Item key={index}>{item}</Item>)}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({ items: state.items })

export default connect(mapStateToProps)(SingleItem)
