import React, { Component } from "react"
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
    this.setState({
      text: "",
      items: [...this.state.items, this.state.text],
      counter: this.state.counter + 1,
    })
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

export default AddItem
