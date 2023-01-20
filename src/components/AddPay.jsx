import React from "react";

const AddPay = ({ handleSubmitPay }) => {
	return (
		<div className="border-2 border-pink-500">
			<p>Agregar pago</p>
			<form onSubmit={handleSubmitPay} className="flex flex-col bg-orange-800 h-52">
				<label>
					<p>Fecha:</p>
					<input
						className="rounded-2xl h-8 w-36"
						type="date"
						name="date"
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

export default AddPay;
