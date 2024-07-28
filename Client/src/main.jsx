import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Header from "./Ui/Header.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Cancel from "./Pages/Cancel.jsx";
import Cart from "./Pages/Cart.jsx";
import Category from "./Pages/Category.jsx";
import Favorite from "./Pages/Favorite.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Orders from "./Pages/Orders.jsx";
import Product from "./Pages/Product.jsx";
import Profile from "./Pages/Profile.jsx";
import Success from "./Pages/Success.jsx";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      { path: "/cancel", element: <Cancel /> },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/favorit",
        element: <Favorite />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/success",
        element: <Success />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
