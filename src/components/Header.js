import React from 'react';

const Header = (props) => {
  // any non jsx code
  return (
    // jsx code here
    <h2>Manage My Items</h2>
  )
}

export default Header;

// If the component has only jsx code, then it can be even
// more simplified
// import React from "react"

// es6 spread operator, look here
// https://davidwalsh.name/spread-operator
// const MyComponent = ({items,data}) =>
    // jsx code here, no return or paranthesis necessary at all
// export default MyComponent
