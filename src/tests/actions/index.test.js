import { addItem, removeItem } from "../../actions"

test("should setup addItem action object", () => {
  const action = addItem("test")
  expect(action).toEqual({
    type: "ADD_ITEM",
    text: "test",
  })
})

test("should setup removeItem action object", () => {
  const action = removeItem("test")
  expect(action).toEqual({
    type: "REMOVE_ITEM",
    text: "test",
  })
})
