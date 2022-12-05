const root = document.getElementById('root');

const initialValue = {
  firstName: '',
  lastName: '',
  isChecked: false,
};

// way-1: good Approach

function App() {
  const [person,setPerson] =React.useState(
    //JSON.parse(window.localStorage.getItem('PERSON')) || '' // this will rendered each time to check localstorage object when state updated

    // solution is to used lazy initializer ( that is used arrow function) inside useState hooks which runs only first time

    () => {
      console.log('hello')
      return JSON.parse(window.localStorage.getItem('PERSON')) || ''
    }

 //save lots of code like that see way-2 example below
 // // place first to fetch value from local storage
//   React.useEffect(() => {
//     const items = JSON.parse(localStorage.getItem('PERSON'))
//   console.log("final",items)
//   if(items){
//     setPerson(items)
//   }
//   },[])

  )

console.log('rendered')
  const inputHandler = (e) => {
     let myName= e.target.name;
     let val = e.target.value;

      setPerson(prevState => ({
        ...prevState,
        [myName]:val
      }))
  }

const checkInputHandler = (e) => {
  setPerson(prevState => ({
    ...prevState,
    isChecked:e.target.checked
  }))
}



React.useEffect(() =>{
  console.log('useEffect rendered...')
  window.localStorage.setItem('PERSON',JSON.stringify(person))
},[person]) // when any value of person updated this useEffect runs

  const {firstName,lastName,isChecked} = person;

  return (
        <>

      <h1>manage State using useState hooks</h1>
      <p>hello, {firstName || lastName?<strong>{firstName} {lastName}</strong>:'please type here'}</p>
      <form>
       <label>FirstName: <input value={firstName} name="firstName" onChange={(e) =>inputHandler(e)}  type="text" /></label><br/>
       <label>LastName: <input value={lastName} name="lastName" onChange={(e) =>inputHandler(e)} type="text" /></label><br />
       <label><input type="checkbox" checked={isChecked}  onChange={(e) =>checkInputHandler(e)}   /> remember me </label><br />
       </form>
    </>
  );
}

// way-2

// function App() {
//   const [person, setPerson] = React.useState(initialValue);

//   const inputHandler = (e) => {
//     let myName = e.target.name;
//     let val = e.target.value;

//     setPerson((prevState) => ({
//       ...prevState,
//       [myName]: val,
//     }));
//   };

//   const checkInputHandler = (e) => {
//     setPerson((prevState) => ({
//       ...prevState,
//       isChecked: e.target.checked,
//     }));
//   };

// // place first to fetch value from local storage
//   React.useEffect(() => {
//     const items = JSON.parse(localStorage.getItem('PERSON'))
//   console.log("final",items)
//   if(items){
//     setPerson(items)
//   }
//   },[])

//   React.useEffect(() => {
//     console.log('useEffect rendered...');
//     localStorage.setItem('PERSON', JSON.stringify(person));
//   }, [person]);

 

//   const { firstName, lastName, isChecked } = person;

//   return (
//     <>
//       <h1>manage State using useState hooks</h1>
//       <p>
//         hello 
//         {firstName || lastName ? (
//           <strong>
//             {firstName} 
//             {lastName}
//           </strong>
//         ) : (
//           'please type here'
//         )}
//       </p>
//       <form>
//         <label>
//           FirstName:{' '}
//           <input
//             value={firstName}
//             name="firstName"
//             onChange={(e) => inputHandler(e)}
//             type="text"
//           />
//         </label>
//         <br />
//         <label>
//           LastName:{' '}
//           <input
//             value={lastName}
//             name="lastName"
//             onChange={(e) => inputHandler(e)}
//             type="text"
//           />
//         </label>
//         <br />
//         <label>
//           <input
//             type="checkbox"
//             checked={isChecked}
//             onChange={(e) => checkInputHandler(e)}
//           />{' '}
//           remember me{' '}
//         </label>
//         <br />
//       </form>
//     </>
//   );
// }

ReactDOM.render(<App />, root);
