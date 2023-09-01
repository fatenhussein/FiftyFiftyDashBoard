import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Aside from '../components/Aside';
export default function OrdersList() {
 
  // const id = sessionStorage.getItem("vendorId");
  // const nav = useNavigate();

  // if (!id) {
  //   nav("/");
  // }
  // this for save product from Api
  const [orders, setOrders] = useState([]);

  //   here i will fetch data from Api and store them in state
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:2000/api/v1/orders`
      );
      console.log(response.data.data.orders);
      setOrders(response.data.data.orders);
    } catch (err) {
      console.log(err);
    }
  };
  //   this for send request one time when open page
  useEffect(() => {
    fetchData();
  }, []);

  // here  handel if vendor want to remove product
  const removeOrder = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:2000/api/v1/orders/${id}`);

      setOrders(orders.filter((el) => el._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  // here i want extract all data from array
  const  order = orders.map((el) => {
    return (
      <tr
        key={el._id}
        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
      >
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {el.customerID.name}
        </th>
        <td className="px-6 py-4">{el.orderStatus}</td>
        <td className="px-6 py-4">{el._id}</td>
        <td className="px-6 py-4">{el.orderTime}</td>
        <td className="px-6 py-4">{el.totalPrice}</td>
        
        <td className="px-6 py-4 flex gap-2">
          <Link
            to={`${el._id}`}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Edit
          </Link>
          <p
            onClick={() => removeOrder(el._id)}
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
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                  Customer Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">Order Status</div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">Order Number </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">Order Time</div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">Total Price</div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="flex items-center">Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>{order}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
