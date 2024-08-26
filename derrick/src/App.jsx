import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login/login";
import Login2 from "./login/login2";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          
           <Route path="/" element={<Login />} /> 
           <Route path="/log" element={<Login2 />} /> 
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;