import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "./redux/index";

function App() {
	const counter = useSelector((state) => state.counter);
	const isLogged = useSelector((state) => state.isLogged);
	const dispatch = useDispatch();
	const { increment, decrement } = bindActionCreators(actions, dispatch);

	return (
		<div className='App'>
			{!isLogged ? <h1>Not logged in!</h1> : <h1>Logged in!</h1>}
			<h1>Counter: {counter}</h1>
			<button onClick={() => decrement(5)}>-</button>
			<button onClick={() => increment(5)}>+</button>
		</div>
	);
}

export default App;
