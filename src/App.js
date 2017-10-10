import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as actions from "./actions"
import AddItem from "./containers/AddItem"
import Header from "./components/Header"
import ItemList from "./components/ItemList"
import { Container } from "./styles"

class App extends Component {
  render() {
    const { actions, counter, items } = this.props
    return (
      <Container>
        <Header />
        <AddItem addItem={actions.addItem} />
        <ItemList actions={actions} counter={counter} items={items} />
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
