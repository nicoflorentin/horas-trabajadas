import React from 'react'

import TimeTracker from './components/TimeTracker'

function App() {

  return (
    <div className="App flex flex-col items-center justify-center">
			<h1>Registro de horas</h1>
      <TimeTracker />
    </div>
  )
}

export default App
