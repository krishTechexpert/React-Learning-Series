const root = document.getElementById('root');

const initialValue = {
  firstName: '',
  lastName: '',
  isChecked: false,
};


const useLocalStorage =(key,defaultValue='') => {
  const [person,setPerson] =React.useState(

    () => {
      return JSON.parse(localStorage.getItem(key)) || defaultValue
    }
  )

  
React.useEffect(() =>{
  console.log('useEffect rendered...')
  localStorage.setItem(key,JSON.stringify(person))
},[key,person]) 


  return [person,setPerson]

}

function App() {
  const [person,setPerson] = useLocalStorage('PERSON')

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

ReactDOM.render(<App />, root);
