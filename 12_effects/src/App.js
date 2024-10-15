import { useState, useEffect } from 'react';

function Hello() {

	useEffect(() => {
		console.log("hi :)");
		return () => console.log("bye :(");
	}, []);

	useEffect(function () {
		console.log("hi :)");
		return function() {
			console.log("bye :(");
		}
	}, []);
	return <h1>Hello</h1>;
}
//같은 코드이지만 화살표함수를 이용하면 더 간단해 보인다.

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