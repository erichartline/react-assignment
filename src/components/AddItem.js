import React, { Component } from "react"
import { InputBar, InputBox } from "../styles"

class AddItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "",
    }
  }

  // static defaultProps = {
  //   text: "",
  //   items: [],
  //   counter: 0,
  // }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    if (!this.state.text.trim()) {
      return
    }
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
