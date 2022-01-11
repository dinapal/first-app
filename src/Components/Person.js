import React from "react";



// function Person(){
//     return (
//       <div>
//         <h1>Hello Person Components</h1>
//       </div>
//     );
//   }

const Person = (props) =>{
    return (
        <div>
            <h1>Hello From Person Component</h1>
            <h1>Random Number is {Math.random()}</h1>
            {console.log(props)}
        </div>
    )
}

export default Person;