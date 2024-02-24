import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Order = () => {
  const { user } = useAuth();
  console.log(user?.email);
  const token = localStorage.getItem("access-token");

  const { refetch, data: orders = [] } = useQuery({
    queryKey: ["orders", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://ecommerce-marble-server-1.onrender.com/payments?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${token}`,
          },
        }
      );

      return res.json();
    },
  });

  //   console.log(orders)
  const formatDate = (createdAt) => {
    const createAtDate = new Date(createdAt);
    return createAtDate.toLocaleDateString();
  };

  return (
    <div className="max-w-screen-2xl container  mx-auto xl:px-24 px-4">
      {/* banner */}
      <div className="bg-gradient-to-r form-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
        <div className="py-28 flex flex-col items-center justify-center">
          {/* content */}
          <div className="text-center px-4 space-y-7">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              Track All Your <span className="text-green">orders!</span>
            </h2>
          </div>
        </div>
      </div>
      {/* table */}
      {orders.length > 0 ? (
        <div>
          <div className="">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead className="bg-green text-white rounded-sm">
                  <tr>
                    <th>SL No.</th>
                    <th>Order Date</th>
                    <th>Transition_Id</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{formatDate(item.createdAt)}</td>
                      <td className="font-medium">{item.transitionId}</td>
                      <td>Rs.{item.price}</td>
                      <td>{item.status}</td>
                      <td>
                        <Link
                          to={"/contact"}
                          className="btn btn-sm border-none text-red bg-transparent"
                        >
                          Contact
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
                {/* foot */}
              </table>
            </div>
          </div>
          <hr />
        </div>
      ) : (
        <div className="text-center font-bold">
          <TypeAnimation
            sequence={["Cart is empty. Please add products."]}
            speed={70}
            loop
          />
          <div className="flex justify-center items-center h-screen font-bold gap-5">
            <Link to="/">
              <button className="btn bg-green text-white mt-3 gap-9 font-bold py-2 px-4 rounded-full">
                Back to Home
              </button>
            </Link>
            <img
              //   src={empty}
              alt=""
              className="h-40 w-40 md:h-60 md:w-60 lg:h-80 lg:w-80 object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
