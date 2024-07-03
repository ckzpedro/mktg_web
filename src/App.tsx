import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";


export default function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  )
}