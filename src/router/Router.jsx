import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/shop/Menu";
import Signup from "../components/Signup";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import UpdateProfile from "../pages/dashboard/UpdateProfile";
import CartPage from "../pages/shop/CartPage";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/dashboard/admin/Dashboard";
import Users from "../pages/dashboard/admin/Users";
import Login from "../components/Login";
import AddProduct from "../pages/dashboard/admin/AddProduct";
import ManageItems from "../pages/dashboard/admin/ManageItems";
import UpdateItem from "../pages/dashboard/admin/UpdateItem";
import Payment from "../pages/shop/Payment";
import Contact from "../contact_us/Contact";
import Slider from "../offer/Slider";
import Order from "../pages/dashboard/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: (
          <PrivateRouter>
            <Menu />
          </PrivateRouter>
        ),
      },
      {
        path: "/update-profile",
        element: <UpdateProfile />,
      },
      {
        path: "/cart-page",
        element: <CartPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/offer",
        element: <Slider />,
      },
      {
        path: "/process-checkout",
        element: <Payment />,
      },
      {
        path: "/order",
        element: <Order />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  //admin routes***
  {
    path: "dashboard",
    element: (
      <PrivateRouter>
        <DashboardLayout />
      </PrivateRouter>
    ),
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "manage-items",
        element: <ManageItems />,
      },
      {
        path: "update-menu/:id",
        element: <UpdateItem />,
        loader: ({ params }) =>
          fetch(`https://ecommerce-marble-server-1.onrender.com/menu/${params.id}`),
      },
    ],
  },
]);

export default router;
