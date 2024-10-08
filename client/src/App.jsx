import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route index element={<LoginForm />} />
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
