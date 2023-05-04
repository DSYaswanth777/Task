import { useState } from 'react'

import FormData from "./components/Form/Form"
import 'bootstrap/dist/css/bootstrap.min.css';
import Table  from './components/Table/Table';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
{/* <FormData/>
 */}
 <Table/>
    </>
  )
}

export default App
