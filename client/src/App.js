import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

const App = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default App;
