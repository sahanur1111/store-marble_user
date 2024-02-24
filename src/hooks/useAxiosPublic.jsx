import axios from 'axios'
import React from 'react'


const axiosPublic =  axios.create({
    baseURL: 'https://ecommerce-marble-server-1.onrender.com',
  })

const useAxiosPublic = () => {
  return axiosPublic
}

export default useAxiosPublic;

  