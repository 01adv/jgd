import { useState } from 'react'
import Navbar from '/workspaces/jgd/jgd/src/navbar/Navbar.jsx' 


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
    </>
  )
}

export default App
