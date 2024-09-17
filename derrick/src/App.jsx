import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login/login";
import Login2 from "./login/login2";
import Main from "./main/main";
import ProfilePage  from "./profile/profile"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          
           <Route path="/" element={<Login />} /> 
           <Route path="/log" element={<Login2 />} /> 
           <Route path="/main" element={<Main />} /> 
           <Route path="/profile" element={<ProfilePage />} /> 
        </Routes>
  
      </div>
    </BrowserRouter>
  );
}

export default App;