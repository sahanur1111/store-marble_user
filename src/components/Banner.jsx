import React from "react";
import Hazi from "/hR.png";
import basin from "/basin.png";
import tails from "/tails.png";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r from-[#FAFAFA] from 0% to-[#FCFCFC] to-100%">
      <div className="py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        {/* images */}
        <div className="md:w-1/2 space-y-7 px-4">
          <img src={Hazi} alt="" />

          <div className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-4">
            <div className="flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64">
              <img className="w-20 h-15 rounded-2xl" src={basin} alt="" />

              <div className="space-y-1 ">
                <h5 className="font-medium mb-1">Wash Basin</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-500"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-500"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                </div>
                <p className="text-red font-bold">₹ 5000</p>
              </div>
            </div>
            <div className="sm:flex hidden bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64">
              <img className="w-20 h-15 rounded-2xl" src={tails} alt="" />

              <div className="space-y-1 ">
                <h5 className="font-medium mb-1">Tiles(1pc)</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-500"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-500"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                </div>
                <p className="text-red font-bold">₹ 500</p>
              </div>
            </div>
          </div>
        </div>

        {/* texts */}
        <div className="md:w-1/2 space-y-7 px-4">
          <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
            Hazi Marble House is an elegant residence known for{' '} {"   "}
            <span className="text-green">
              <TypeAnimation
               sequence ={[
                "Marbel  .",
                "Pipe  .",
                "Tiles  ."
              ]}
              // typeSpeed = {10}
              // backSpeed = {5}
              speed={-120}
              repeat={Infinity}
              
              />
              </span>
          </h2>
          <p className="text-xl text-[#4A4A4A]">
          <TypeAnimation
            sequence={["Discover quality marble, pipes, basins, and tiles for your home at our store. Elevate your space with our diverse, stylish selections."]}
            speed={-120}
            loop
            />
          </p>
          <button className="btn bg-green px-8 py-3 font-semibold text-white rounded-full">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
