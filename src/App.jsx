
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppRoutes from "./Routes/Route";
function App() {
  return (
    <>
      <ToastContainer />
      <AppRoutes />
    </>
  )
}

export default App

