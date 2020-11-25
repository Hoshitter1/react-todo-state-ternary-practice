import React, { useState } from "react";

// 01. cross the word with the line
// export default function TodoItem(props) {
//   const [clicked, setClicked] = useState(false);
//   function changeStyle() {
//     setClicked((prev) => !prev);
//   }
//   return (
//     <li
//       style={{ textDecoration: clicked ? "line-through" : "none" }}
//       onClick={changeStyle}
//     >
//       {props.text}
//     </li>
//   );
// }

// 02. Delete the item
export default function TodoItem(props) {
  return <li onClick={() => props.onChecked(props.id)}>{props.text}</li>;
  //   × onClick={props.onClicked(props.id)} this way the func gets called when TodoItems is called
}
