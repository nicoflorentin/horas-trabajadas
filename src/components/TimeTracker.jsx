import React, { useState } from "react";
import AddPay from "./AddPay";
import AddWork from "./AddWork";

function TimeTracker() {
	const [days, setDays] = useState([]);

	function handleSubmitAdd(event) {
		event.preventDefault();
		const form = event.target;
		let prevTotal = days.reduce((acc, current) => {
			if (current.type === 'add') {
				return acc + (current.hours * current.rate);
			} else if (current.type === 'pay') {
				return acc - current.rate
			}
		}, 0);
		let total = form.elements.hours.value * form.elements.rate.value + prevTotal;
		const day = {
			date: form.elements.date.value,
			hours: form.elements.hours.value,
			rate: form.elements.rate.value,
			total,
			type: "add",
		};

		setDays([...days, day]);
		form.reset();
	}

	const handleSubmitPay = (event) => {
		event.preventDefault();
		const form = event.target;
		let prevTotal = days.reduce((acc, current) => {
			if (current.type === 'add') {
				return acc + (current.hours * current.rate);
			} else if (current.type === 'pay') {
				return acc - current.rate
			}
		}, 0);
		let total = prevTotal - form.elements.rate.value;
		const payment = {
			date: form.elements.date.value,
			rate: form.elements.rate.value,
			total,
			type: "pay",
		};

		setDays([...days, payment]);
		form.reset();
	};

	function handleDelete(index) {
		const newDays = [...days];
		newDays.splice(index, 1);
		setDays(newDays);
	}

	return (
		<div className="time-tracker">
			<h1>Registro de horas</h1>
			<AddWork handleSubmitAdd={handleSubmitAdd} />
			<AddPay handleSubmitPay={handleSubmitPay} />
			<table>
				<thead>
					<tr>
						<th>Fecha</th>
						<th>Horas</th>
						<th>Valor</th>
						<th>Total dia</th>
						<th>Total Debe</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{days.map((day, index) => {
						if (day.type === "add") {
							return (
								<tr key={index}>
									<td>{day.date}</td>
									<td>{day.hours}</td>
									<td>{day.rate}</td>
									<td>{day.hours * day.rate}</td>
									<td>{day.total}</td>
									<td>
										<button
											onClick={() => handleDelete(index)}
										>
											Delete
										</button>
									</td>
								</tr>
							);
						} else if (day.type === "pay") {
							return (
								<tr
									key={index}
									style={{ backgroundColor: "red" }}
								>
									<td>{day.date}</td>
									<td></td>
									<td></td>
									<td>{day.rate}</td>
									<td>{day.total}</td>
									<td>
										<button
											onClick={() => handleDelete(index)}
										>
											Delete
										</button>
									</td>
								</tr>
							);
						}
					})}
				</tbody>
			</table>
		</div>
	);
}

export default TimeTracker;
