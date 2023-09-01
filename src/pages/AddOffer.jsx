import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Aside from '../components/Aside';
export default function AddOffer() {
  // const id = sessionStorage.getItem("vendorId");
  // const nav = useNavigate();

  // if (!id) {
  //   nav("/");
  // }
  const [offerData, setOfferData] = useState({
    name: '',
    email: '',
    password: '',
    img: '',
  });
  const handleInputChange = (e) => {
    setOfferData({ ...offerData, [e.target.name]: e.target.value });
  };
  // console.log(productData);
  const handelSubmit = async () => {
    try {
      console.log('as');
      // vendor id by session storage
      const newOffer = await axios.post('http://127.0.0.1:2000/api/v1/offers', {
        ...offerData,
      });
      console.log('Product add successfully', newOffer);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full h-full bg-gray-200">
      <div className="flex  flex-no-wrap">
        <Aside />
        <div className="flex justify-center items-center w-full flex-no-wrap">
          <div className=" mb-2 p-4  grid justify-center items-center bg-[white]  h-[570px] mt-[20px] border border-[black] rounde">
            <div>
              <label
                htmlFor="default-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                  Offer Number: 
              </label>
              <input
                onChange={handleInputChange}
                name="name"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="default-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Service Name :
              </label>
              <input
                onChange={handleInputChange}
                name="itemOffered"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="default-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
              Offer Start Date:
              </label>
              <input
                onChange={handleInputChange}
                name="itemOffered"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="default-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
              Offer Due Date:
              </label>
              <input
                onChange={handleInputChange}
                name="itemOffered"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="default-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
               Offer Price
              </label>
              <input
                onChange={handleInputChange}
                name="price"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="default-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
               Offer Image
              </label>
              <input
                onChange={handleInputChange}
                name="img"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <button
              onClick={handelSubmit}
              type="button"
              className="  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Add Offer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
