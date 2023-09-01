import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Aside from '../components/Aside';
export default function OffersList() {
  const [offers, setOffers] = useState([]);

  //   here i will fetch data from Api and store them in state
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:2000/api/v1/offers`
      );
      console.log(response.data.data.offers);
      setOffers(response.data.data.offers);
    } catch (err) {
      console.log(err);
    }
  };
  //   this for send request one time when open page
  useEffect(() => {
    fetchData();
  }, []);

  // here  handel if vendor want to remove product
  const removeCutomer = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:2000/api/v1/offers/${id}`);

      setOffers(offers.filter((el) => el._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  // here i want extract all data from array
  const offer = offers.map((el) => {
    return (
      <tr
        key={el._id}
        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
      >
  
        <td className="px-6 py-4">{el._id}</td>
        <td className="px-6 py-4">{el.itemOffered}</td>
        <td className="px-6 py-4">{el.priceValidStart}</td>
        <td className="px-6 py-4">{el.priceValidUntil}</td>
        <td className="px-6 py-4">{el.price}</td>
        <td className="px-6 py-4">{el.imgUrl}</td>
        <td className="px-6 py-4 flex gap-2">
          <Link
            to={`${el._id}`}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Edit
          </Link>
          <p
            onClick={() => removeCutomer(el._id)}
            className="font-medium text-red-600 dark:text-red-500 hover:underline  cursor-pointer"
          >
            Remove
          </p>
        </td>
      </tr>
    );
  });
  return (
    <div className="w-full h-full bg-gray-200">
      <div className="flex flex-no-wrap">
      <Aside/>
        <div className="p-4  w-full">
          <Link to="/addOffer">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Add New Offer
            </button>
          </Link>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Offer Number
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">Service Name</div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">Offer start Date</div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">Offer Due Date</div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">Offer Price</div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">Offer Image</div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="flex items-center">Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>{offer}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
