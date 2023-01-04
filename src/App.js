import Login from "./Components/Login";
import PostItem from "./Components/PostItem";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ListPost from "./Components/ListPost";
import ProtectedRoute from "./routes/ProtectedRoute";
import { listRoute } from "./routes/routeList";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {listRoute.map((routeItem) => {
          return (
            <Route
              key={routeItem.id}
              path={routeItem.path}
              element={
                routeItem.isProtect ? (
                  <ProtectedRoute>{routeItem.component}</ProtectedRoute>
                ) : (
                  routeItem.component
                )
              }
            />
          );
        })}
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
