import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/login/LoginPage';
import SignupPage from "./pages/signup/SignupPage";
import HomePage from "./pages/home/HomePage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App;