import './App.css'
import LoginPage from './pages/LoginPage'
import { Link, useRoutes } from "react-router-dom";
import Routes from './routes';

function App() {

  return (
    <>
      {Routes()}
    </>
  )
}

export default App
