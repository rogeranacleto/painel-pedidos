import { createBrowserRouter } from "react-router-dom"
import { OrderDetailsPage } from "./pages/OrderDetailsPage"
import { OrdersListPage } from "./pages/OrdersListPage"
import { NotFoundPage } from "./pages/NotFoundPage"

export const router = createBrowserRouter([
  {
    element: <OrdersListPage />,
    path: "/",
  },
  {
    element: <OrderDetailsPage />,
    path: "/order/:orderId",
  },
  {
    element: <NotFoundPage />,
    path: "*",
  },
]);