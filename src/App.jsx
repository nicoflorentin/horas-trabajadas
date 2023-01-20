import React from 'react'

import TimeTracker from './components/TimeTracker'

function App() {

  const saveData = () => {
    alert('data saved')
  }

  return (
    <div className="App flex flex-col items-center justify-center w-screen">
      <TimeTracker saveData={saveData} />
    </div>
  )
}

export default App
