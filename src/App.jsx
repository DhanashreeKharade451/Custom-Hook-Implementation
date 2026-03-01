import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { PaginationDemo } from './components/PaginationDemo'
import { DebounceSearchDemo } from './components/DebounceSearchDemo'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <PaginationDemo/>
      <DebounceSearchDemo/>
     
    </>
  )
}

export default App
