const root = document.getElementById('root');

const useCounter = (defaultValue = 10) => {
  const [count, setCount] = React.useState(0);

  const incrementHandler = () => {
    console.log('Inc render...');
    setCount((prevCount) => prevCount + defaultValue);
  };

  const decrementHandler = () => {
    console.log('Dec render...');
    if (count > 0) {
      setCount((prevCount) => prevCount - defaultValue);
    } else {
      setCount(count);
    }
  };

  return [count, incrementHandler, decrementHandler];
};

function App() {
  const [count, incrementHandler, decrementHandler] = useCounter(5);

  return (
    <>
      <button onClick={decrementHandler}>-</button>
      <span>Counter - {count}</span>
      <button onClick={incrementHandler}>+ </button>
    </>
  );
}

ReactDOM.render(<App />, root);
