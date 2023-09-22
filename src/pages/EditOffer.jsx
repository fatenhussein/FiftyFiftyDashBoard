import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Aside from '../components/Aside';
import Swal from 'sweetalert2';

export default function EditOffer() {
  // const backNav = useNavigate();
  // const vendorId = sessionStorage.getItem("vendorId");

  // if (!vendorId) {
  //   backNav("/");
  // }
  const { id } = useParams();
  const [offer, setOffer] = useState({});
  //
  console.log(id);

  //   this for send request one time when open page
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:2000/api/v1/offers/${id}`
        );
        console.log(response.data.offer);
        setOffer(response.data.offer);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setOffer({ ...offer, [e.target.name]: e.target.value });
  };
  //
  const handelSubmit = async () => {
    try {
      const updatedOffer = await axios.patch(
        `http://127.0.0.1:2000/api/v1/offers/${id}`,
        offer
      );
      console.log('Product update successfully', updatedOffer);
      // backNav("/home");

      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Offer added successfully!',
      });
    } catch (err) {
      console.log(err);
      // Display an error alert
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'There was an error adding the customer.',
      });
    }
  };

  return (
    <div className="w-full h-full bg-gray-200">
      <div className="flex flex-no-wrap">
        <Aside />

        <div className="flex justify-center items-center w-full flex-no-wrap">
          <div className="   mb-2 p-4  grid justify-center items-center bg-[white]  h-[570px] mt-[20px] border border-[black] rounde">
            <div>
              <label
                htmlFor="default-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Service Name :
              </label>
              <input
                value={offer.itemOffered}
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
                value={offer.priceValidStart}
                onChange={handleInputChange}
                name="priceValidStart"
                type="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                value={offer.priceValidUntil}
                onChange={handleInputChange}
                name="priceValidUntil"
                type="date"
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
                value={offer.price}
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
                value={offer.imgUrl}
                onChange={handleInputChange}
                name="imgUrl"
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <button
              onClick={handelSubmit}
              type="button"
              className="  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
