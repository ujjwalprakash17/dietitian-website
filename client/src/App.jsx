import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Food from "./pages/Food";
import Recipe from "./pages/Recipe";
import ProtectedRoute from "./components/ProtectedRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Signup />,
  },
  // {
  //   path: "dashboard",
  //   element: <Dashboard/>,
  // },
  {
    path: "dashboard",
    element: <ProtectedRoute Element={<Dashboard />} />,
  },
  {
    path: "food",
    element: <ProtectedRoute Element={<Food />} />,
  },
  {
    path: "recipe",
    element: <ProtectedRoute Element={<Recipe />} />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

const App = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div>
      {/* <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}> */}
        <RouterProvider router={router} />
      {/* </AuthContext.Provider> */}
    </div>
  );
};

export default App;
