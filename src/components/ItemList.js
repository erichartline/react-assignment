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
        <SingleItem />
      </List>
    )
  }
}

const mapStateToProps = state => ({ counter: state.counter })

export default connect(mapStateToProps)(ItemList)
