import React from 'react'

const AddWork = ({handleSubmitAdd}) => {
  return (
    <div>
        <p>Agregar dia</p>
        <form onSubmit={handleSubmitAdd}>
				<label>
					Fecha:
					<input type="date" name="date" />
				</label>
				<label>
					Horas:
					<input type="number" name="hours" />
				</label>
				<label>
					Valor:
					<input type="number" name="rate" />
				</label>
				<button type="submit">Agregar</button>
			</form>
    </div>
  )
}

export default AddWork