import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  background-color: #F94343;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 5px;
`;

const SingleItem = (props) => {
    // any non jsx code
    return (
      <div>
        <Item>Test</Item>
        <Item>Test</Item>
        <Item>Test</Item>
      </div>
      // an unordered list of items with the header giving a count of items in the list
    )
}

export default SingleItem;
