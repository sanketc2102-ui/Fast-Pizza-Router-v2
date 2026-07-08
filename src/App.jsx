import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Cart from "./features/cart/Cart";
import OrderItem from "./features/order/OrderItem";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Order, { loader as orderLoader } from "./features/order/Order";

export default function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
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
          action: createOrderAction,
        },

        {
          path: "/order/:id",
          element: <Order />,
          loader: orderLoader,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} className="app"></RouterProvider>;
}
