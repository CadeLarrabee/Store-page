import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./pages/HomePage.jsx";
import StorePage from "./pages/StorePage.jsx";
import ErrorPage from "./pages/error-page";
import ProductPage from "./pages/ProductPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { CartProvider } from "./context/CartProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/store",
    element: <StorePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/product/:productId", // Add dynamic route for individual products
    element: <ProductPage />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
