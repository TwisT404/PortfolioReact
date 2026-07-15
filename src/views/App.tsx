import { Outlet } from "react-router-dom";
import NavBar from "../componants/NavBar";
import "../style/global.css";

function Home() {

  return (
    <>
    <main>
        <NavBar />
        <Outlet />

    </main>    
    </>
  );
}

export default Home