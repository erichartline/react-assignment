import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  background-color: #F94343;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 10px auto 10px auto;
  width: 35%;
`;

const SingleItem = (props) => {
    return (
      <div>
        <ul>{
          props.items.map((item, index) => <li key={index}>{item}</li>)
        }</ul>
      </div>
    )
}

export default SingleItem;
