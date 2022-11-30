import {  Table} from "./components/Table.jsx";
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="grid place-content-center bg-slate-700 min-h-screen">
     <Table/>
    </div>
  )
}

export default App
