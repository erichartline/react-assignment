import React, { Component } from "react"
import { connect } from "react-redux"
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

const mapStateToProps = state => ({ items: state.items })

export default connect(mapStateToProps, null)(SingleItem)
