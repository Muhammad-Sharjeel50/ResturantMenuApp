import React from "react";
import "./style.css";

// const UseState = () => {
//   // const initialData = 15;
//   const [myNum, setMyNum] = React.useState(0);

//   return (
//     <>
//       <div className="center_div">
//         <p>{myNum}</p>
//         <div class="button2" onClick={() => setMyNum(myNum + 1)}>
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//           INCR
//         </div>
//         <div
//           class="button2"
//           onClick={() => (myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0))}>
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
//           DECR
//         </div>
//       </div>
//     </>
//   );
// };
const  UseState = ()=>{
  const [cnum , cdtnlnum] = React.useState(0);
  return(
    <>
      <p>{cnum}</p>
    <button className="button2" onMouseOver={
      () =>{
        cdtnlnum(cnum + 1);
      }
    }>Incr</button>
    <button className="button2" onMouseMove={
      () =>{(cnum > 0) ?  cdtnlnum(cnum -1) : cdtnlnum(0);
      }}>Decr</button>
    </>
  )
}
export default UseState;
