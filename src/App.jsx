import { useState } from 'react'
import './App.css'

import Propietario from '../src/Components/Propietario'


import '../src/Css/sb-admin-2.css'
import '../src/vendor/fontawesome-free/css/all.css'
import '../src/vendor/datatables/dataTables.bootstrap4.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Propietario />
    </>
  )
}

export default App
