import React, { Component } from 'react';

class AddTodo extends Component {
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
      <div>
        <form>
          <input type="text" placeholder="What do you want to add?" />
          <button>Add item</button>
        </form>
      </div>
    )
  }
}

export default AddTodo;
