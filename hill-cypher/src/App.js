import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

	const [status, setStatus] = useState('complete');
	const [cypher, setCypher] = useState([]);
	const [message, setMessage] = useState(window.localStorage.getItem('message') || []);
	const [messageKey, setMessageKey] = useState (window.localStorage.getItem('birdSize') || '');

	function createGrid(){
		return(
			<div className="hillInput">
				<label htmlFor="message">
					Which is the message?: 
					<input
						id="message"
						className="birdInfo"
						type="text"
						placeholder="Black, White"
						value={message}
						onChange={onChangeMessage}
					/>
				</label>
				<label htmlFor="hillKey">
					Cual es la llave? (minimo 3, maximo 9):
					<input
						id="hillKey"
						className="birdInfo"
						type="text"
						min="3"
						max="9"
						placeholder="abc"
						value={messageKey}
						onChange={onChangeKey}
					/>
				</label>
				<button onClick={handleSubmit}>
					Cifrar
				</button>
			</div>
		)
	}

	function onChangeMessage(event) {
		setMessage(event.target.value);
	}

	function onChangeKey(event) {
		setMessageKey(event.target.value);
	}

	function handleSubmit(){
		if(!message || !messageKey){
			return(
				setStatus('error')
			)
		}
		let a = message.split();
		setCypher(a);
		setStatus('complete')
		console.log(cypher)
	}

	const hasError = status === 'error';
	const isComplete = status === 'complete';

	return (
		<div className="Content">
			<h1>Cifrado de Hill</h1>
			{hasError && (
				<p>
					Something went very very wrong!!
				</p>
			)}
			{isComplete && (
				createGrid()
			)}
		</div>
	);
}

export default App;
