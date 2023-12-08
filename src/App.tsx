import "./App.css";
import { Input } from "./components/form/input";
import { Navigate, Routes } from "react-router";
import { Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Navigate to={"/login"} replace />} />

      <Route path="/login" element={<Input />} />
    </Routes>
  );
}

export default App;
