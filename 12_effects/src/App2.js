import { useState, useEffect } from 'react';

function Hello() {
	function destroyedFn() {
		console.log("destroyed :(");
	}

	function effectFn() {
		console.log("created :)");
		return destroyedFn;
	}
	useEffect(effectFn, []);
	return <h1>Hello</h1>;
}
//component가 파괴될 때 return에 있는 function이 실행된다.
//이를 cleanup function이라고 한다.

function App() {
	const [showing, setShowing] = useState(false);
	const onClick = () => setShowing((prev) => !(prev));
	return ( 
		<div>
			{showing ? <Hello /> : null}
			<button  onClick={onClick}>{showing ? "Hide" : "Show"}</button>
		</div>
	)
}

export default App;