import React from "react"
import ReactDOM from "react-dom"
import Header from "../components/Header"
import { mount, shallow } from "enzyme"

it("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(<Header />, div)
})

test("renders h1 element correctly", () => {
  const wrapper = mount(<Header />)
  const h1 = wrapper.find("h1")
  expect(h1.text()).toBe("Manage My Items")
})
