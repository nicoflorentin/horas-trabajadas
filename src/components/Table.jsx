import React from "react";

const Table = ({handleDelete, days}) => {
	return (
		<table className="table-auto border-separate border-spacing-1 w-[800px]">
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
								<tr key={index} className="bg-orange-300">
									<td>{day.postType}</td>
									<td>{day.date}</td>
									<td>{day.hours}</td>
									<td>{day.rate}</td>
									<td>{day.hours * day.rate}</td>
									<td>{day.total}</td>
									<td className="bg-white">
										<button
											className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
											onClick={() => handleDelete(index)}
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
								<tr key={index} className="bg-orange-400">
									<td>{day.postType}</td>
									<td>{day.date}</td>
									<td></td>
									<td></td>
									<td>{day.rate}</td>
									<td>{day.total}</td>
									<td className="bg-white">
										<button
											className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
											onClick={() => handleDelete(index)}
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
	);
};

export default Table;
