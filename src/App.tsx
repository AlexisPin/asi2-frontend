import "./App.css";
import { Navigate, Routes } from "react-router";
import { Route } from "react-router-dom";
import { Login } from "./pages/login";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Navigate to={"/login"} replace />} />

      <Route path="/login" element={<Login  />} />
    </Routes>

  );
}

export default App;
