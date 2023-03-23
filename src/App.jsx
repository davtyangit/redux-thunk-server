import { Route, Routes } from "react-router-dom";
import { AddEdit } from "./pages/add-edit/AddEdit";
import { Home } from "./pages/home/Home";

import { Navbar } from "./components/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <ToastContainer autoClose={500} />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<AddEdit />} path="/add" />
          <Route element={<AddEdit />} path="/edit/:id" />
        </Routes>
      </div>
    </div>
  );
}

export default App;
