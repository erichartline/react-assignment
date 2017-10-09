import React, { Component } from "react"
import { connect } from "react-redux"
import { addItem } from "../actions"
import { InputBar, InputBox } from "../styles"

class AddItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "",
      items: ["Redux", "Rebass", "Webpack"],
      counter: 3,
    }
  }

  static defaultProps = {
    text: "",
    items: [],
    counter: 0,
  }

  onChange = e => {
    this.setState({ text: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()
    if (!this.state.text.trim()) {
      return
    }
    dispatch(addItem(this.state.text))
  }

  render() {
    return (
      <div>
        <InputBar>
          <form onSubmit={this.onSubmit}>
            <InputBox
              type="text"
              value={this.state.text}
              onChange={this.onChange}
              placeholder="Add an item..."
            />
            <button type="submit">Add item</button>
          </form>
        </InputBar>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: text => {
      dispatch(addItem(text))
    },
  }
}

export default connect(null, mapDispatchToProps)(AddItem)
