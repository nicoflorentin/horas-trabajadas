import React, { useState } from "react";
import AddPay from "./AddPay";
import AddWork from "./AddWork";

function TimeTracker() {
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
		form.reset();
	};

	function handleDelete(index) {
		const newDays = [...days];
		newDays.splice(index, 1);
		setDays(newDays);
	}

	return (
		<div className="flex flex-col items-center text-xs text-center border border-y-yellow-900">
			<div className="flex">
				<AddWork handleSubmitAdd={handleSubmitAdd} />
				<AddPay handleSubmitPay={handleSubmitPay} />
			</div>
			<table className="table-auto border border-gray-900 border-separate border-spacing-1">
				<thead>
					<tr>
						<th className="bg-blue-300 p-2">Entrada</th>
						<th className="bg-blue-300 p-2">Fecha</th>
						<th className="bg-blue-300 p-2">CantHoras</th>
						<th className="bg-blue-300 p-2">ValorHora</th>
						<th className="bg-blue-300 p-2">TotalDia</th>
						<th className="bg-blue-300 p-2">Debe</th>
					</tr>
				</thead>
				<tbody>
					{days.map((day, index) => {
						if (day.postType === "add") {
							return (
								<>
									<tr key={index} className="bg-orange-200">
										<td>{day.postType}</td>
										<td>{day.date}</td>
										<td>{day.hours}</td>
										<td>{day.rate}</td>
										<td>{day.hours * day.rate}</td>
										<td>{day.total}</td>
										<td className="bg-white">
											<button
												className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
												onClick={() =>
													handleDelete(index)
												}
											>
												BorrarRegistro
											</button>
										</td>
									</tr>
								</>
							);
						} else if (day.postType === "pay") {
							return (
								<>
									<tr
										key={index}
										className="bg-orange-400"
									>
										<td>{day.postType}</td>
										<td>{day.date}</td>
										<td></td>
										<td></td>
										<td>{day.rate}</td>
										<td>{day.total}</td>
										<td className="bg-white">
											<button
												className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
												onClick={() =>
													handleDelete(index)
												}
											>
												BorrarRegistro
											</button>
										</td>
									</tr>
								</>
							);
						}
					})}
				</tbody>
			</table>
		</div>
	);
}

export default TimeTracker;
