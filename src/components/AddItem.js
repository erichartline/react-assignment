import React, { Component } from 'react';
import styled from 'styled-components';

const InputBar = styled.div`
  background-color: #C3C3BB;
  padding-top: 10px;
  padding-bottom: 10px;
`;

class AddItem extends Component {
  state = { text: '' } // no need for constructor

  static defaultProps = {
    text: ''
  }
  //
  //     method = () => {
  //         // It is a bound method, means `this` is preserved
  //     }
  //
  //     methodWithParams = (params) => {
  //         // Bound method with passed parameters
  //     }
  //
  render() {
    return (
      <InputBar>
        <form>
          <input type="text" placeholder="Add an item" />
          <button type="submit">Add item</button>
        </form>
      </InputBar>
    )
  }
}

export default AddItem;
