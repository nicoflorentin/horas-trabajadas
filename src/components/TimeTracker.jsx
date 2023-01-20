import React, { useState } from "react";
import AddPay from "./AddPay";
import AddWork from "./AddWork";
import Table from "./Table";

function TimeTracker({saveData}) {
	const [days, setDays] = useState([]);

	function handleSubmitAdd(event) {
		event.preventDefault();
		const form = event.target;
		let prevTotal = days.reduce((acc, current) => {
			if (current.postType === "add") {
				return acc + current.hours * current.rate;
			} else if (current.postType === "pay") {
				return acc - current.rate;
			}
		}, 0);
		let total =
			form.elements.hours.value * form.elements.rate.value + prevTotal;
		const day = {
			date: form.elements.date.value,
			hours: form.elements.hours.value,
			rate: form.elements.rate.value,
			total,
			postType: "add",
		};
		setDays([...days, day]);
		form.reset();
		saveData()
	}

	const handleSubmitPay = (event) => {
		event.preventDefault();
		const form = event.target;
		let prevTotal = days.reduce((acc, current) => {
			if (current.postType === "add") {
				return acc + current.hours * current.rate;
			} else if (current.postType === "pay") {
				return acc - current.rate;
			}
		}, 0);
		let total = prevTotal - form.elements.rate.value;
		const payment = {
			date: form.elements.date.value,
			rate: form.elements.rate.value,
			total,
			postType: "pay",
		};
		setDays([...days, payment]);
		saveData()
		form.reset();
	};

	function handleDelete(index) {
		const newDays = [...days];
		newDays.splice(index, 1);
		setDays(newDays);
		saveData()
	}

	return (
		<div className="flex flex-col items-center text-xs text-center shadow-2xl p-2 rounded-3xl">
			<h1 className="text-lg">Registro de horas</h1>
			<div className="flex bg-blue-100 p-4 rounded-2xl mb-5">
				<AddWork handleSubmitAdd={handleSubmitAdd} />
				<AddPay handleSubmitPay={handleSubmitPay} />
			</div>
			<Table handleDelete={handleDelete} days={days} />
		</div>
	);
}

export default TimeTracker;
