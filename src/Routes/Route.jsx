//**Router imports */
import { BrowserRouter, Routes, Route } from "react-router-dom"
//**Components import */
import FormData from "../components/Form/Form"
import Table from "../components/Table/Table"

function AppRoutes() {
  return (

    <BrowserRouter>
      <Routes>
        <Route element={<FormData />} path='/' />
        <Route element={<Table />} path='/list' />
      </Routes>
    </BrowserRouter>

  )
}

export default AppRoutes