import React from "react";
import Header from "./components/Header";
import Todo from "./components/Todo";
import "./App.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Todo />
      <ToastContainer />
    </div>
  );
}

export default App;
