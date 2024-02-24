import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaTrash, FaUsers } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Users = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    },
  });
  // const isAdmin = false;
  // console.log(users);
  const handleMakeAdmin = user => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      alert(` o ${user.name} is now admin`);
      refetch();
    });
  };

  const handleDeleteUser = user => {
    axiosSecure.delete(`/users/${user._id}`).then(res => {
      alert(`${user.name} is removed from database`);
      refetch();
    })
  }
  return (
    <div>
      <div className="flex items-center font-bold justify-between m-4">
        <h5>All Users</h5>
        <h5>
          Total Users: <span className="text-red">{users.length}</span>
        </h5>
      </div>
      {/* table */}
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra md:w-[900px]">
            {/* head */}
            <thead className=" bg-green text-white rounded-lg">
              <tr>
                <th>SL NO.</th>
                <th>Name</th>
                <th>Address</th>
                <th>Mobile</th>
                <th>Role</th>
                <th>Email</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.address}</td>
                  <td>{user.phone}</td>
                  <td>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button  onClick={() => handleMakeAdmin(user)} className="btn btn-xs btn-circle bg-purple-600 text-white">
                        <FaUsers />{" "}
                      </button>
                    )}
                  </td>
                  <td>{user.email}</td>
                  <td>
                    <button onClick={() => handleDeleteUser(user)} className="btn btn-xs bg-red text-white">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
