import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login/login";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          
           <Route path="/" element={<Login />} /> 
         
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;