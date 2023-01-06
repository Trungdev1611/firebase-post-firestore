import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ProtectedRoute from "./routes/ProtectedRoute";
import { listRoute } from "./routes/routeList";
import styled from "styled-components";

const WrapperApp = styled.div`
  .wrapper-second {
    position: relative;
    top: 80px;
  }
`;
function App() {
  return (
    <WrapperApp>
      <Navbar />
      <div className="wrapper-second">
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
      </div>

      <ToastContainer />
    </WrapperApp>
  );
}

export default App;
