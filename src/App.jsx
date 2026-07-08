import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import CreateOrder from "./features/order/CreateOrder";
import Cart from "./features/cart/Cart";
import OrderItem from "./features/order/OrderItem";
import AppLayout from "./ui/AppLayout";

export default function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/menu",
          element: <Menu />,
          loader: menuLoader,
        },

        {
          path: "/cart",
          element: <Cart />,
        },

        {
          path: "/order/new",
          element: <CreateOrder />,
        },

        {
          path: "/order/:id",
          element: <OrderItem />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} className="app"></RouterProvider>;
}
