import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApexCharts from 'apexcharts';
import ReactApexChart from 'react-apexcharts';
import AreaChart from '../components/AreaChart';
import CardStatistics from '../components/CardStatistics';
import OrdersChart from '../components/OrdersChart';
import { Link } from 'react-router-dom';

import Aside from '../components/Aside';

export default function IndexPage() {
  const [show, setShow] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [orders, setOrders] = useState([]);

  const [offers, setOffers] = useState([]);

  //   here i will fetch data from Api and store them in state
  const fetchUsersData = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:2000/api/v1/customers`
      );
      console.log(response.data.data.customers);
      setCustomers(response.data.data.customers);
    } catch (err) {
      console.log(err);
    }
  };
  //   this for send request one time when open page
  useEffect(() => {
    fetchUsersData();
  }, []);

  //   here i will fetch data from Api and store them in state
  const fetchOrdersData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:2000/api/v1/orders`);
      console.log(response.data);
      setOrders(response.data.data.orders);
    } catch (err) {
      console.log(err);
    }
  };
  //   this for send request one time when open page
  useEffect(() => {
    fetchOrdersData();
  }, []);

  //   here i will fetch data from Api and store them in state
  const fetchOffersData = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:2000/api/v1/offers`);
      console.log(response.data.data.offers);
      setOffers(response.data.data.offers);
    } catch (err) {
      console.log(err);
    }
  };
  //   this for send request one time when open page
  useEffect(() => {
    fetchOffersData();
  }, []);

  return (
    <>
      <div className="w-full h-full  bg-gray-200 pb-4">
        <div className="flex pb-[15rem] h-full flex-no-wrap  ">
          {/* Sidebar starts */}
          <Aside />
         
          <div className="w-full">
            {/* Remove class [ h-64 ] when adding a card block */}
            <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
              {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
              <div className="w-full h-[200px] rounded border-dashed border-2 border-gray-300">
                {/* Place your content here */}

                <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
                    <CardStatistics
                      data={customers}
                      icon={<i class="fa-solid fa-users"></i>}
                      dataName="Users"
                    />
                    <CardStatistics
                      data={orders}
                      icon={<i class="fa-solid fa-bag-shopping"></i>}
                      dataName="Orders"
                    />
                    <CardStatistics
                      data={offers}
                      icon={<i class="fa-solid fa-percent"></i>}
                      dataName="Offers"
                    />
                  </div>
                </div>

                <div class="mx-auto h-[100vh]  max-w-screen-2xl md:p-6 2xl:p-10">
                  <div class="grid grid-cols-1  items-center  justify-center gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-2  2xl:gap-7.5">
                    <div className=" flex  items-start  justify-center h-[200px]">
                      <AreaChart mt-3 users={[1, 2]} />
                    </div>

                    <div className=" flex  items-start  justify-center h-[200px]">
                      <OrdersChart mt-3 orders={[1, 2]} />
                    </div>

                    {/*    

{/*    
<OrdersChart orders={orders}/> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
