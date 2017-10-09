import React, { Component } from "react"
import AddItem from "./components/AddItem"
import Header from "./components/Header"
import ItemList from "./components/ItemList"
import { Container } from "./styles"

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <AddItem />
        <ItemList />
      </Container>
    )
  }
}

export default App
