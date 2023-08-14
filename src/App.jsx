import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/login/LoginPage';
import SignupPage from "./pages/signup/SignupPage";
import HomePage from "./pages/home/HomePage";
import MyCatsPage from "./pages/mycats/MyCatsPage";
import AddCatPage from "./pages/addcat/AddCatPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/mycats" element={<MyCatsPage />} />
        <Route path="/mycats/add" element={<AddCatPage />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;