import React from "react"
import { connect } from "react-redux"
import { addItem } from "../actions"
import { InputBar, InputBox } from "../styles"

let AddItem = ({ dispatch }) => {
  let input

  return (
    <div>
      <InputBar>
        <form
          onSubmit={e => {
            e.preventDefault()
            if (!input.value.length === 0) {
              return
            }
            dispatch(addItem(input.value))
            input.value = ""
          }}>
          <InputBox
            ref={node => {
              input = node
            }}
            placeholder="Add an item..."
          />
          <button type="submit">Add item</button>
        </form>
      </InputBar>
    </div>
  )
}

AddItem = connect()(AddItem)

export default AddItem
