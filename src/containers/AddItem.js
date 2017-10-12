import React, { Component } from "react"
import { InputBar, InputBox } from "../styles"

class AddItem extends Component {
  // set text state as empty string
  state = { text: "" }

  // set default props
  static defaultProps = {
    text: "",
    items: [],
    counter: 0,
  }

  // keep track of text input value
  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = e => {
    // don't submit form
    e.preventDefault()
    // removes whitespace from both ends of string
    if (!this.state.text.trim()) {
      return
    }
    // add in new item and then reset state
    this.props.addItem(this.state.text)
    this.setState({ text: "" })
  }

  render() {
    return (
      <div>
        <InputBar>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <InputBox
              type="text"
              value={this.state.text}
              onChange={this.handleChange.bind(this)}
              placeholder="Add an item..."
            />
            <button type="submit">Add item</button>
          </form>
        </InputBar>
      </div>
    )
  }
}

export default AddItem
