import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Catogories from "./pages/Catogories";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/categories", element: <Catogories /> },
]);
