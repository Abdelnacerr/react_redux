//Reducer How your actions transform your state
//into the next state. Modifies store/state

const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case "INCREMENT":
			return state + action.payload;
		case "DECREMENT":
			return state - action.payload;
		default:
			return state;
	}
};

export default counterReducer;
