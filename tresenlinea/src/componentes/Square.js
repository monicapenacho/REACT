// import handleClick from "./HandleClick ";

export default function Square({ value }) {
  function handleClick() {
    console.log('¡hiciste clic!');
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}







// export default function Square({value}) {
//   return <button className="square" >{value}</button>;
// } 

// export default function Square({ value, text}) {
//   function handleClick() {
//     console.log({text});
//   }

//   return (
//     <button
//       className="square"
//       onClick={handleClick}
//     >
//       {value}
//     </button>
//   );
// }