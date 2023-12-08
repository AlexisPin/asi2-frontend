import "./App.css";
import { Navigate, Routes } from "react-router";
import { Route } from "react-router-dom";
import { Login } from "./pages/login";
import { Menu } from "./pages/menu/Menu";
import { Sell } from "@mui/icons-material";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Navigate to={"/login"} replace />} />

      <Route path="/login" element={<Login  />} />

      <Route path="/menu" element={<Menu />} />
      <Route path="/sell" element={<Login />} />
      <Route path="/buy" element={<Login />} />
      <Route path="/play" element={<Login />} />
    </Routes>

  );
}

export default App;
