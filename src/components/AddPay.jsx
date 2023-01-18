import React from 'react'

const AddPay = ({handleSubmitPay}) => {
  return (
    <div>
        <p>Agregar pago</p>
        <form onSubmit={handleSubmitPay}>
				<label>
					Fecha:
					<input type="date" name="date" />
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

export default AddPay