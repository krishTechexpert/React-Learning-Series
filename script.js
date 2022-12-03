const root = document.getElementById('root');

let state = { count: 0, username: '' };

function handleClick() {
  state = {  ...state,count: state.count + 1 };
  render();
}

function handleChange(event){
  state={...state,username:event.target.value}
  render()
}

function App() {
  console.log(state)
  return (
    <>
      <h1>Basic event handler without using hooks</h1>
      <p>you have clicked {state.count} times</p>
      <button onClick={handleClick}>Click me!</button>
      <p>hello {state.username}</p>
      <input type="text" onChange={(e) =>handleChange(e)} />
    </>
  );
}

function render() {
  ReactDOM.render(<App />, root);
}

render();
