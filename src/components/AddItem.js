import React from "react"
import { connect } from "react-redux"
import { addItem } from "../actions"
import { InputBar } from "../styles"

// should be functional component since display doesn't change based on data

let AddItem = ({ onSubmit }) => {
  let input

  return (
    <div>
      <InputBar>
        <form
          onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            onSubmit(input.value)
            input.value = ""
          }}>
          <input
            ref={node => {
              input = node
            }}
            placeholder="Add an item"
          />
          <button type="submit">Add item</button>
        </form>
      </InputBar>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: text => {
      dispatch(addItem(text))
    },
  }
}

export default connect(mapDispatchToProps)(AddItem)
