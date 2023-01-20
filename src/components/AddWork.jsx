import React from "react";

const AddWork = ({ handleSubmitAdd }) => {

	const today = new Date()
	return (
		<div className="border-2 border-lime-400">
			<p>Agregar dia</p>
			<form onSubmit={handleSubmitAdd}
					className='flex flex-col h-52'>
				<label>
					<p>Fecha:</p>
					<input
						className="rounded-2xl h-8 w-36 "
						type="date"
						name="date"
						value={today}
					/>
				</label>
				<label>
					<p>Valor:</p>
					<input
						className="rounded-2xl h-8 w-28"
						type="number"
						name="rate"
					/>
				</label>
				<label>
					<p>Horas:</p>
					<input
						className="rounded-2xl h-8 w-28"
						type="number"
						name="hours"
					/>
				</label>
				<button
					type="submit"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-auto"
				>
					Agregar
				</button>
			</form>
		</div>
	);
};

export default AddWork;
