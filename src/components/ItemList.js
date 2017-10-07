import React, { Component } from 'react';
import SingleItem from './SingleItem';
import styled from 'styled-components';

const List = styled.div`
  background-color: #c3c3bb;
`;

class ItemList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  render() {
    return (
      <List>
        <h2>My Items ({this.state.counter})</h2>
        <SingleItem />
      </List>
    );
  }
}

export default ItemList;
