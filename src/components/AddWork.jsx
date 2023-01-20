import React from "react";

const AddWork = ({ handleSubmitAdd }) => {

	return (
		<div className="p-2">
			<p className="p-1">Agregar dia</p>
			<form onSubmit={handleSubmitAdd}
					className='flex flex-col h-52'>
				<label>
					<p className="pt-1">Fecha:</p>
					<input
						className="rounded-2xl h-8 w-36 mt-1"
						type="date"
						name="date"
					/>
				</label>
				<label>
					<p className="pt-1">Valor:</p>
					<input
						className="rounded-2xl h-8 w-28 mt-1"
						type="number"
						name="rate"
					/>
				</label>
				<label>
					<p className="pt-1">Horas:</p>
					<input
						className="rounded-2xl h-8 w-28 mt-1"
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
