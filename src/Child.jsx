// import React from "react";
// class Child extends React.Component {
//   render() {
//     //  console.log(this.props); //return object of {count:0}
//     let { count } = this.props;
//     return (
//       <>
//         <h1>Count::{this.count}</h1>
//         {console.log(count)}
//       </>
//     );
//   }
// }
// export default Child;

// import React from "react";

// let Child = ({ Count }) => {
//   return <h1>Count::{Count}</h1>;
// };
// export default Child;

//*App jsx Data:
//*ref in class based component
// import React from "react";
// class App extends React.Component {
//   constructor() {
//     super();
//     this.divref = React.createRef(); //return {current:null}
//   }
//   render() {
//     setTimeout(() => {
//       //   let div = document.querySelector(".container");
//       //   div.style.background = "pink";
//       this.divref.current.style.background = "hotpink";
//     }, 5000);
//     console.log(this.divref);
//     return (
//       <>
//         <div className="container" ref={this.divref}>
//           {" "}
//           hello world
//         </div>
//       </>
//     );
//   }
// }
// export default App;

//*ref in FBC:
// import React from "react";
// let App = () => {
//   let divRef = React.useRef(null);
//   setTimeout(() => {
//     divRef.current.style.background = "yellow";
//   }, 5000);
//   return <div ref={divRef}>Adnan khan</div>;
// };
// export default App;
//*how to tranfer the state from parent to child:
// import React from "react";
// import Child from "./Child.jsx";
// let App = () => {
//   let [count, setCount] = React.useState(0);
//   //   let countRef = React.useRef(null);
//   return (
//     <>
//       <h1>ADNAN KHAN</h1>
//       <Child Count={count} />
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Increment
//       </button>
//       <button
//         onClick={() => {
//           setCount(count - 1);
//         }}
//       >
//         decrement
//       </button>
//       <button
//         onClick={() => {
//           setCount(0);
//         }}
//       >
//         Reset
//       </button>
//     </>
//   );
// };
// export default App;

//*uncontrol componennt:
// import React from "react";
// class App extends React.Component {
//   constructor() {
//     super();
//     this.form = React.createRef();
//     this.user = React.createRef();
//     this.pass = React.createRef();
//     this.dob = React.createRef();
//     this.skills = React.createRef();
//   }

//   render() {
//     let handleSubmit = (e) => {
//       e.preventDefault();
//       let user1 = this.user.current.value;
//       let pass1 = this.pass.current.value;
//       let dob1 = this.dob.current.value;
//       let skills1 = this.skills.current.value;

//       console.log(user1, pass1, dob1, skills1);
//     };
//     return (
//       <div>
//         <h1>Student Form </h1>
//         <br />
//         <form ref={this.form} onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="user"
//             id="user"
//             ref={this.user}
//             placeholder="Enter UserName"
//           />
//           <br />
//           <br />
//           <input
//             type="password"
//             name="pass"
//             id="pass"
//             ref={this.pass}
//             placeholder="Enter Password"
//           />
//           <br />
//           <br />
//           <span>Select Your DOB</span>
//           <input type="date" name="dob" id="dob" ref={this.dob} />
//           <br />
//           <br />
//           <aside ref={this.skills}>
//             <input type="checkbox" name="skills" id="Java" value={"Java"} />{" "}
//             <span>Java</span>
//             <input
//               type="checkbox"
//               name="skills"
//               value={"javascript"}
//               id="javascript"
//             />{" "}
//             <span>javascript</span>
//             <input
//               type="checkbox"
//               name="skills"
//               id="react"
//               value={"react"}
//             />{" "}
//             <span>react</span>
//             <input
//               type="checkbox"
//               name="skills"
//               id="webtechnology"
//               value={"webtechnology"}
//             />{" "}
//             <span>webtechnology</span>
//           </aside>

//           <br />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }
// export default App;

//*Control component:

// import React from "react";
// let App = () => {
//   let [state, setState] = React.useState({
//     user: "",
//     pass: "",
//     dob: "",
//     gender: "",
//     skills: [],
//     // country: "",
//   });
//   let handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(state);
//   };
//   let handleChange = (e) => {
//     setState(e.target.value);
//   };
//   let handleSkills = (e) => {
//     console.log("handleskills");
//   };
//   return (
//     <div>
//       <h1>Student form</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="user"
//           id="user"
//           value={state.user}
//           onChange={handleChange}
//           placeholder="Enter Your Username"
//         />
//         <br />
//         <br />
//         <input
//           type="password"
//           name="pass"
//           id="pass"
//           value={state.pass}
//           onChange={handleChange}
//           placeholder="Enter Your Password"
//         />
//         <br />
//         <br />
//         <span>Select Your Age</span>{" "}
//         <input
//           type="date"
//           name="dob"
//           id="dob"
//           value={state.dob}
//           onChange={handleChange}
//         />
//         <br />
//         <br />
//         <aside onChange={handleChange} value={state.gender}>
//           <span>Select your gender</span>
//           <input type="radio" name="gender" id="male" value={"Male"} />{" "}
//           <span>Male</span>
//           <input type="radio" name="gender" id="female" value={"Female"} />{" "}
//           <span>Female</span>
//           <input type="radio" name="gender" id="other" value={"other"} />{" "}
//           <span>other</span>
//         </aside>
//         <br />
//         <br />
//         <section onChange={handleSkills} value={state.skills}>
//           <span>select your skills</span>
//           <input type="checkbox" name="skills" id="java" value={"java"} />{" "}
//           <span>java</span>
//           <input
//             type="checkbox"
//             name="skills"
//             id="javascript"
//             value={"javascript"}
//           />{" "}
//           <span>javascript</span>
//           <input
//             type="checkbox"
//             name="skills"
//             id="react"
//             value={"react"}
//           />{" "}
//           <span>react</span>
//           <input type="checkbox" name="skills" id="html" value={"html"} />{" "}
//           <span>html</span>
//         </section>
//         <br />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// };
// export default App;
