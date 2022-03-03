import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";

const LogRouter = () => {
  return (
    <Routes>
      {/* <Route path="/register" element={<Register />} /> */}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default LogRouter;
