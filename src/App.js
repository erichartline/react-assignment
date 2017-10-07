import React, { Component } from 'react';
import AddItem from './components/AddItem';
import Header from './components/Header';
import ItemList from './components/ItemList';

import styled from "styled-components";

const Container = styled.div`
  background-color: #E3ECFF;
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <AddItem />
        {/* <ItemList /> */}
      </Container>
    );
  }
}

export default App;
