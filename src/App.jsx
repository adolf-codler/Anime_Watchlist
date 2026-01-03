import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import SignUp from "./pages/signUP.jsx";
import ProtectedRoute from "./ProtectedRoutes.jsx";
const App = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
export default App;
