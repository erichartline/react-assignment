import React, { Component } from "react"
import { connect } from "react-redux"
import SingleItem from "./SingleItem"
import { addItem, removeItem } from "../actions"
import { InputBar, InputBox, List } from "../styles"

// should be functional component since display doesn't change based on data
// add onSubmit function outside component?
class AddItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "",
    }
  }

  handleChange = e => {
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

  onDelete = item => {
    let newItem = this.state.items.filter(_item => {
      return _item !== item
    })
    this.setState({ items: newItem, counter: this.state.counter + 1 })
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
        <List>
          <h2>My Items ({this.state.counter})</h2>
          <SingleItem items={this.state.items} deleteItem={this.deleteItem} />
        </List>
      </div>
    )
  }
}

// let AddItem = ({ onSubmit }) => {
//   let input
//
//   return (
//     <div>
//       <InputBar>
//         <form
//           onSubmit={e => {
//             e.preventDefault()
//             if (!input.value.trim()) {
//               return
//             }
//             onSubmit(input.value)
//             input.value = ""
//           }}>
//           <input
//             ref={node => {
//               input = node
//             }}
//             placeholder="Add an item"
//           />
//           <button type="submit">Add item</button>
//         </form>
//       </InputBar>
//     </div>
//   )
// }

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: text => {
      dispatch(addItem(text))
    },
    onDelete: text => {
      dispatch(removeItem(text))
    },
  }
}

export default connect(mapDispatchToProps)(AddItem)
