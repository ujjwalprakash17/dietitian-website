import { Fragment } from 'react';
import { Menu, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/outline";
import "./Dashboard.css";
import { UserCircleIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast , Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const notify = () =>
    toast.success("User loggedOut!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  const navigate = useNavigate();
  const handleClick = () => {
    window.localStorage.removeItem("authToken");
    notify();
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="min-h-screen relative bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      {/* Background Overlay */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      {/* Navbar */}
      <nav className="bg-transparent absolute top-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            {/* Left side of Navbar */}
            <div className="flex items-center">
              <span className="text-white text-xl font-bold">Dashboard</span>
              {/* Search box */}
              <div className="ml-6 flex sm:ml-6 sm:flex sm:space-x-4">
                <div className="relative nav-search-box">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon
                      className="h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type="text"
                    className="block nav-search-box w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-transparent text-white"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
            {/* Right side of Navbar */}
            <div className="flex items-center">
              {/* Profile dropdown */}
              <Menu as="div" className="ml-3 relative">
                {({ open }) => (
                  <>
                    <div>
                      <Menu.Button className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none text-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <UserCircleIcon
                          className="h-8 w-8 text-gray-500"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none text-gray-800">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                                } block w-full text-left px-4 py-2 text-sm`}
                              >
                                Your Profile
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={handleClick}
                                className={`${
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                                } block w-full text-left px-4 py-2 text-sm`}
                              >
                                Logout
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="py-6">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          {/* Replace with your content */}
          <div className="px-4 py-4 sm:px-0">
            <div className="sm:hidden">
              {/* Mobile view of search box */}
              <label htmlFor="mobile-search" className="sr-only">
                Search
              </label>
              <div className="mt-9 relative">
                {" "}
                {/* Adjusted margin */}
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="text"
                  id="mobile-search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-transparent text-white"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="mt-10">
              {/* Food and Recipe sections */}
              <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                  Select a tab
                </label>
                <select
                  id="tabs"
                  name="tabs"
                  className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md sm:text-sm bg-white text-gray-800 mt-3"
                >
                  <option>Food</option>
                  <option>Recipes</option>
                  <option>Disease Prediction</option>
                </select>
              </div>
              <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                  <nav className="-mb-px flex" aria-label="Tabs">
                    <Link to = "/food"
                      className="whitespace-nowrap py-4 px-1 border-b-2 border-transparent font-medium text-sm text-white hover:text-gray-300 hover:border-gray-300 transition duration-150 ease-in-out"
                      aria-current="page"
                    >
                      Food
                    </Link >
                    <Link to={'/recipe'} className="whitespace-nowrap ml-8 py-4 px-1 border-b-2 border-transparent font-medium text-sm text-white hover:text-gray-300 hover:border-gray-300 transition duration-150 ease-in-out">
                      Recipes
                    </Link>
                    <Link to={"https://publicmlwebapp-tsxyatfxcmdncsaonr9vxs.streamlit.app/"} className="whitespace-nowrap ml-8 py-4 px-1 border-b-2 border-transparent font-medium text-sm text-white hover:text-gray-300 hover:border-gray-300 transition duration-150 ease-in-out">
                      Disease Prediction
                    </Link>
                  </nav>
                </div>
              </div>
              {/* Main content */}
              <div className="mt-8">
                {/* Your content here */}
                <p className="text-lg font-semibold text-white">
                  Welcome to your Dashboard!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
