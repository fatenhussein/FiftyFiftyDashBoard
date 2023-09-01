import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Aside from '../components/Aside';

export default function EditOrder() {

  const { id } = useParams();
  const [order, setOrder] = useState({});
  //


  //   this for send request one time when open page
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:2000/api/v1/orders/${id}`
        );
        console.log(response.data.order);
        setOrder(response.data.order);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };
  //
  const handelSubmit = async () => {
    
    try {
      const updatedOrder = await axios.patch(
        `http://127.0.0.1:2000/api/v1/orders/${id}`,
       order
      );
      console.log('Product update successfully', updatedOrder);
      // backNav("/home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full h-full bg-gray-200">
    <div className="flex flex-no-wrap">

      <Aside/>
      <div className="flex justify-center items-center w-full flex-no-wrap">
      <div className="  mb-2 p-4  grid justify-center items-center bg-[white]  h-[200px]  border border-[black] rounded">
        <div>
          <label
            htmlFor="orderStatus"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Status:
          </label>
          <input
            onChange={handleInputChange}
            value={order.orderStatus}
            name="orderStatus"
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
