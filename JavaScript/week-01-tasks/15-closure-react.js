// Explain a real-world use case of closures in React hooks (like useState).
function useState(initialValue) {
  let state = initialValue;

  function getState() {
    return state;
  }

  function setState(newValue) {
    state = newValue;
  }

  return [getState, setState]; // closure
}

// Counter 1
const [getCount1, setCount1] = useState(0);
setCount1(getCount1() + 1);
console.log("Counter 1:", getCount1()); // 1

// Counter 2
const [getCount2, setCount2] = useState(0);
setCount2(getCount2() + 5);
console.log("Counter 2:", getCount2()); // 5
