import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import { AiTwotoneFileAdd } from 'react-icons/ai';

// const navigate = useNavigate() //redirect the manageitem page

const UpdateItem = () => {
    const item = useLoaderData();
    console.log(item);
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
  
    // Image hosting key
    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    // console.log(image_hosting_key)
    const image_hosting_api = `https://api.imgbb.com/1/upload?expiration=600&key=${image_hosting_key}`;
    const onSubmit = async (data) => {
      // console.log(data)
      const imageFile = { image: data.image[0] };
      const hostingImg = await axiosPublic.post(image_hosting_api, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      // console.log(hostingImg.data)
      if (hostingImg.data.success) {
        const menuItem = {
          name: data.name,
          category: data.category,
          price: parseFloat(data.price),
          product: data.product,
          optional:data.optional,
          image: hostingImg.data.data.display_url,
        };
  
        // console.log(menuItem);
        const postMenuItem = axiosSecure.patch(`/menu/${item._id} `, menuItem);
        if (postMenuItem) {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Item Updated Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        //   navigate("/dashboard/manage-items")
        }
      }
    };
  return (
    <div className="w-full md:w-[900px] px-4 mx-auto">
    <h2 className="text-2xl font-semibold my-4">
      Update This<span className="text-green">Product</span>
    </h2>

    {/* form here */}

    <div className="form-control w-full my-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Product Name*</span>
          </label>
          <input
            type="text"
            defaultValue={item.name}
            {...register("name", { required: true })}
            placeholder="Enter Product Details"
            className="input input-bordered w-full"
          />
        </div>

        {/* 2nd row */}
        <div className="flex items-center gap-4">
          {/* catagory */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Catagory Name*</span>
            </label>
            <select
              {...register("category", { required: true })}
              className="select select-bordered"
              defaultValue={item.category}
            >
              <option disabled value="default">
                Select a Catagory
              </option>
              <option value="marble">Marble</option>
              <option value="wall">Wall Tiles</option>
              <option value="floor">Floor Tiles</option>
              <option value="plumbing">Plumbing</option>
              <option value="sanitary">Sanitary</option>
              <option value="popular">Popular</option>
              <option value="offered">Offered</option>
            </select>
          </div>
          {/* price */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              type="number"
              defaultValue={item.price}
              {...register("price", { required: true })}
              placeholder="Price"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* optional */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Only for Special</span>
          </label>
          <input
            type="text"
            defaultValue={item.optional}
            {...register("optional", { required: true })}
            placeholder="2 Special word"
            className="input input-bordered w-full"
          />
        </div>
        {/* 3rd row */}
        <div className="form-control">
          <div className="label">
            <span className="label-text">Product Details</span>
          </div>
          <textarea
            defaultValue={item.product}
            {...register("product", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Type some word about your product up to 20 words."
          ></textarea>
        </div>
        {/* 4th row */}
        <div className="form-control w-full max-w-xs">
          <input
            type="file"
            //  defaultValue={item.image}
            {...register("image", { required: true })}
            className="file-input w-full my-6"
          />
        </div>
        <button className="btn bg-green text-white px-6">
          Update Item <AiTwotoneFileAdd/>
        </button>
      </form>
    </div>
  </div>
  )
}

export default UpdateItem