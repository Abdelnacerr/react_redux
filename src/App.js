import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
	const counter = useSelector((state) => state.counter);
	const isLogged = useSelector((state) => state.isLogged);
	const dispatch = useDispatch();
	return (
		<div className='App'>
			{!isLogged ? <h1>Not logged in!</h1> : <h1>Logged in!</h1>}
			<h1>Counter: {counter}</h1>
			<button onClick={() => dispatch(decrement(5))}>-</button>
			<button onClick={() => dispatch(increment(5))}>+</button>
		</div>
	);
}

export default App;
