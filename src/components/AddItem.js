import React, { Component } from "react"
import SingleItem from "./SingleItem"
import styled from "styled-components"

const InputBar = styled.div`
  background-color: #c3c3bb;
  padding-top: 10px;
  padding-bottom: 10px;
`

const List = styled.div`
  background-color: #c3c3bb;
`

class AddItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "",
      items: [],
      counter: 0,
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
            <input
              type="text"
              value={this.state.text}
              onChange={this.onChange}
              placeholder="Add an item"
            />
            <button type="submit">Add item</button>
          </form>
        </InputBar>
        <List>
          <h2>My Items ({this.state.counter})</h2>
          <SingleItem items={this.state.items} />
        </List>
      </div>
    )
  }
}

export default AddItem
