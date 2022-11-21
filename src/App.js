import "./App.css";
import React from "react";
import Home from "./pages/Home.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/search"
            element={<SearchPage></SearchPage>}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
