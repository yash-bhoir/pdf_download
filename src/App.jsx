import { useState } from 'react'
import DownloadPdf from "./components/DownloadPdf"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <DownloadPdf/>
  )
}

export default App

