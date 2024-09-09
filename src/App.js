// // src/App.js
// import React from "react";
// import Header from "../src/componets/header";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <p>This is a simple React application.</p>
//     </div>
//   );
// }

// export default App;
// src/App.js
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../src/componets/header";
import About from "../src/componets/about";
import Home from "../src/componets/home";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
