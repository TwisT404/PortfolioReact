import { Outlet } from "react-router-dom";
import NavBar from "../componants/NavBar";
import "../styles/global.css";

function App() {

  return (
    <>
        <NavBar />
        <Outlet />   
    </>
  );
}

export default App