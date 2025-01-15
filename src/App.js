import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Register from "./Register";
import Confirmation from "./Confirmation";
import Diplomas, { Diploma, Module } from "./Diplomas"; // Corrected import

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="diplomas" element={<Diplomas />}>
          <Route path=":dipId" element={<Diploma />}>
            <Route path=":moduleId" element={<Module />} />
          </Route>
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="confirmed" element={<Confirmation />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
