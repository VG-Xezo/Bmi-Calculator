import React, { useState, useEffect } from 'react'
import Card from "./components/Card"
import Card2 from "./components/Card2"
import Form from "./components/Form"
import "./css/App.css"

function App() {

	const [bmi, setBmi] = useState(0)
	const [msg, setMsg] = useState(0)
	const [bg, setBg] = useState(0)


	useEffect(() => {
		setBmi(0)
		setMsg("First calculate your BMI!")
		setBg("bg-info")
	}, [])

	function setCards() {
		if (bmi < 18.5) {
			setMsg("Underweight")
		}
		else if (bmi > 18.5 && bmi < 24.9) {
			setMsg("Normal Weight")
		}
		else if (bmi > 25 && bmi < 29.9) {
			setMsg("Overweight")
		}
		else if (bmi > 30) {
			setMsg("Obese")
		}
	}

	function setCardBg() {
		if (bmi < 18.5) {
			setBg("bg-info")
		}
		else if (bmi > 18.5 && bmi < 24.9) {
			setBg("bg-success")
		}
		else if (bmi > 25 && bmi < 29.9) {
			setBg("bg-warning")
		}
		else if (bmi > 30) {
			setBg("bg-danger")
		}
	}

	function getBmi(data) {
		const kg = parseInt(data.weight) / 2.205
		const meters = ((parseInt(data.feet) * 12) + parseInt(data.inch)) / 39.37
		const bmi1 = kg / (meters * meters)
		const finalBmi = Math.round(bmi1 * 10) / 10
		setBmi(finalBmi)
		console.log(bmi)
	}

	function onSubmit(data) {
		getBmi(data)
		setCards()
	}

	useEffect(() => {
		setCards()
		setCardBg()
	}, [bmi])

	return (
		<div>
			<Form onSubmit={onSubmit} />
			<Card bmi={bmi} />
			<Card2 msg={msg} bg={bg} />
		</div>
	)
}

export default App
