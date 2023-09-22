import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../../src/App.css"
const Navbar = () => {
  const [profile, setProfile] = useState(false);
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({});
  const id = sessionStorage.getItem('currentUserId');
  const nav = useNavigate();

  const fetchData = async () => {
    try {
      const res = await axios.get(`http://127.0.0.1:2000/api/v1/admin/${id}`);
      console.log(res.data.admin);
      setUser(res.data.admin);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [id]);
 // <- Added id to the dependency array
  
  if (!id) {
    return (
      <nav className="h-16 flex items-center justify-end bg-white shadow relative z-10">
        <Link to="/login" className="btn">
          Login
        </Link>{' '}
        {/* Replace with your login link */}
      </nav>
    );
  }

  return (
    <>
      {/* Navigation starts */}
      <nav className="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white shadow relative z-10">
        <div className="hidden lg:flex w-full pr-6">
          <div className="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24">
            <div className="relative w-50">
              <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-search"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx={10} cy={10} r={7} />
                  <line x1={21} y1={21} x2={15} y2={15} />
                </svg>
              </div>
              <input
                className="border border-gray-100 focus:outline-none focus:border-indigo-700 rounded w-full text-sm text-gray-500 bg-gray-100 pl-12 py-2"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="w-1/2 hidden lg:flex">
            <div className="w-full flex items-center pl-8 justify-end">
              <div className="h-full w-20 flex items-center justify-center border-r border-l">
                <div className="relative cursor-pointer text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-bell"
                    width={28}
                    height={28}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                    <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                  </svg>
                  <div className="w-2 h-2 rounded-full bg-red-400 border border-white absolute inset-0 mt-1 mr-1 m-auto" />
                </div>
              </div>

              <div
                className="flex items-center relative cursor-pointer"
                onClick={() => setProfile(!profile)}
              >
                <div className="rounded-full">
                  {profile ? (
                    <ul className="p-2 w-full border-r bg-white absolute rounded left-0 shadow mt-5 sm:mt-16 ">
                      <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-user"
                            width={18}
                            height={18}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={12} cy={7} r={4} />
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                          </svg>
                          <span className="text-sm ml-2">My Profile</span>
                        </div>
                      </li>
                      <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mt-2">
                        <div
                          className="flex items-center"
                          onClick={() => {
                            console.log('faten');
                            sessionStorage.clear();
                            nav('/login');
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-logout"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                            <path d="M7 12h14l-3 -3m0 6l3 -3" />
                          </svg>
                          <span className="text-sm ml-2">Sign out</span>
                        </div>
                      </li>
                    </ul>
                  ) : (
                    ''
                  )}
                  <div className="relative mx-2">
              
                    <i class="fa-solid fa-user"></i>
                  
                  </div>
                </div>
                <p className="text-gray-800 text-sm mx-3">{user.name}</p>
                <div className="cursor-pointer text-gray-600">
                  <svg
                    aria-haspopup="true"
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-chevron-down"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="text-gray-600 mr-8 visible lg:hidden relative"
          onClick={() => setShow(!show)}
        >
          {show ? (
            ' '
          ) : (
            <svg
              aria-label="Main Menu"
              aria-haspopup="true"
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-menu cursor-pointer"
              width={30}
              height={30}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1={4} y1={8} x2={20} y2={8} />
              <line x1={4} y1={16} x2={20} y2={16} />
            </svg>
          )}
        </div>
      </nav>
      {/* Navigation ends */}
    </>
  );
};

export default Navbar;
