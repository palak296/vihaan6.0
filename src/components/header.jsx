import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg"
import { getCookie } from '../cookies'
import logo from '../assets/logo.png'

const Header = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null)

  useEffect(function () {
    if (!token) setToken(getCookie('token'))
  }, [token])

  return (
    <div className="bg-white border-gray-200 dark:bg-gray-900 p-4">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button
          className="self-center whitespace-nowrap dark:text-white"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="" style={{ width: `120px` }} />
        </button>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <button
                className="block py-2 pl-3 pr-4 text-white   "
                onClick={() => navigate("/communities")}
              >
                Communities
              </button>
            </li>
            <li>
              <button
                className="block py-2 pl-3 pr-4 text-white"
                onClick={() => navigate("/events")}
              >
                Events
              </button>
            </li>
            <li>
              <button
                className="block py-2 pl-3 pr-4 text-white "
                onClick={() => navigate("/collaborations")}
              >
                Collaborations
              </button>
            </li>
            <li>
              <button
                className="block py-2 pl-3 pr-4 text-white "
                onClick={() => navigate("/about")}
              >
                About
              </button>
            </li>
            <li>
              <span className="flex items-center">
                <button
                  className="block py-2 pl-3 pr-4 text-white "
                  onClick={() => token ? navigate("/profile") : navigate("/auth/login")}
                >
                  Profile
                </button>
                <CgProfile color="white" size="25px" />
              </span>
            </li>
            {token && (
              <li>
                <span className="flex items-center">
                  <button
                    className="block py-2 pl-3 pr-4 text-white "
                    onClick={() => navigate("/auth/logout")}
                  >
                    Logout
                  </button>
                </span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;