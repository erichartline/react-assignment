import React, { Component } from 'react';
import SingleItem from './SingleItem';

class ItemList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }
  
  render() {
    return (
      <div>
        <h2>My Items ({this.state.counter})</h2>
        <SingleItem />
      </div>
    )
  }
}

export default ItemList;
