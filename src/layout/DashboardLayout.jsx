import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { PiUsersFill } from "react-icons/pi";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { BsFillBagCheckFill } from "react-icons/bs";
import { FaEdit, FaHome } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import logo from "/logo_hazif1.png";
import { SiProducthunt } from "react-icons/si";
import { FaMapMarkedAlt } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import Login from "../components/Login";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const sharedLinks = (
  <>
  <li className="mt-3">
              <Link to="/">
              <FaHome/>
                Home
              </Link>
            </li>
            <li className="mt-3">
              <Link to="/menu">
              <SiProducthunt/>
                Product
              </Link>
            </li>
            <li className="mt-3">
              <Link to="/menu">
              <FaMapMarkedAlt />
                Orders Tracking
              </Link>
            </li>
            <li className="mt-3">
              <Link to="/menu">
              <RiCustomerService2Fill />
                Customer Support
              </Link>
            </li>
  </>
)

const DashboardLayout = () => {
  const {loading} = useAuth()
  const [isAdmin, isAdminLoading] = useAdmin()
  return (
   <div>
    {
      isAdmin ?  <div>
      <div className="drawer sm:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col sm:items-start sm:justify-start">
          {/* Page content here */}
          <div className="flex items-center justify-between mx-4">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              <MdDashboardCustomize />
            </label>
            <button className="btn flex items-center gap-2 rounded-full px-6 bg-green text-white sm:hidden">
              <PiUsersFill />
              Logout
            </button>
          </div>

          <div className="mt-5 md:mt-2 mx-4">
          <Outlet />
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content font-bold">
            {/* Sidebar content here */}
            <li>
              <Link to="/dashboard" className="flex justify-start mb-3">
                <img src={logo} alt="" className="w-20" />
                <span className="badge badge-secondary">admin</span>
              </Link>
            </li>
            <hr />
            <li className="mt-3">
              <Link to="/dashboard">
                <MdDashboardCustomize />
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/dashboard/add-product">
                <MdOutlineAddPhotoAlternate />
                Add Product
              </Link>
            </li>
            <li>
              <Link to="/dashboard/manage-items">
                <BsFillBagCheckFill />
                Manage Items
              </Link>
            </li>
            <li>
              <Link to="/dashboard">
                <FaEdit />
                Manage Items
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/dashboard/users" >
                <PiUsersFill />
               All Users
              </Link>
            </li>

            <hr />

            {/* shared nav link */}
            {
              sharedLinks
            }
          </ul>
        </div>
      </div>
    </div> : <Login/>
    }
   </div>
  );
};

export default DashboardLayout;
