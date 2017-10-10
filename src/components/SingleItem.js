import React, { Component } from "react"
import { Item, DeleteItem, PlainButton } from "../styles"

class SingleItem extends Component {
  handleDelete() {
    this.props.actions.removeItem(this.props.item)
  }

  render() {
    const { item } = this.props
    return (
      <Item>
        <div>
          {item.text}
          <DeleteItem>
            <PlainButton onClick={this.handleDelete.bind(this)}>X</PlainButton>
          </DeleteItem>
        </div>
      </Item>
      // {/* <div>
      //   <ul>
      //     {items.map((item, index) => (
      //       <Item key={index}>
      //         {item}
      //         <DeleteItem>
      //           <PlainButton onClick={this.handleDelete.bind(this)}>
      //             X
      //           </PlainButton>
      //         </DeleteItem>
      //       </Item>
      //     ))}
      //   </ul>
      // </div> */}
    )
  }
}

// const SingleItem = ({ items = [], deleteItem }) => {
//   return (
//     <div>
//       <ul>
//         {items.map((item, index) => (
//           <Item key={index}>
//             {item}
//             <DeleteItem>
//               <PlainButton onClick={this.deleteItem.bind(null, item)}>
//                 X
//               </PlainButton>
//             </DeleteItem>
//           </Item>
//         ))}
//       </ul>
//     </div>
//   )
// }
//
// const mapStateToProps = state => {
//   return {
//     items: state.items,
//   }
// }
//
// const mapDispatchToProps = dispatch => {
//   return {
//     deleteItem: text => {
//       dispatch(removeItem(text))
//     },
//   }
// }

export default SingleItem
