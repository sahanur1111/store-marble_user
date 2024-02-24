import React, { useContext } from 'react'
import { useForm } from "react-hook-form"
import { AuthContext } from '../../contexts/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom'

const UpdateProfile = () => {
    const {updateUserProfile} = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      

      const location = useLocation();
      const navigate = useNavigate();
      const from = location.state?.from?.pathname || "/";

      
      const onSubmit = (data) => {
        const name = data.name;
        const phone = data.phone;
        const address = data.address;
        const photoURL = data.photoURL;
        updateUserProfile(name,phone, address, photoURL).then(() => {
            // Profile updated!
            navigate(from, {replace: true})
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
      }


  return (
    <div className='flex items-center justify-center h-screen'>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <h3 className='font-bold'>Update Your Profile</h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input {...register("name")} type="text" placeholder="your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Mobile No.</span>
          </label>
          <input {...register("phone")} type="number" placeholder="Enter your Mobile no" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input {...register("address")} type="text" placeholder="Enter delivery Address" className="input input-bordered" required />
        </div>
         
        <div className="form-control">
          <label className="label">
            <span className="label-text">Upload Photo</span>
          </label>

          <input type="text" {...register("photoURL")} placeholder="photoURL" className="input input-bordered" required />
          
          {/* TODO: Uplodaing image will be later */}
          {/* <input type="file" className="file-input w-full max-w-xs" /> */}
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-green text-white">Update</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default UpdateProfile