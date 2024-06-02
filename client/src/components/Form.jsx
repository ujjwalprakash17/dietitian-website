// import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Form = (prop) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const notifySuccess = () =>
    toast.success("You are welcome!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  const notifyError = () => {
    toast.error("Operation failed!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      theme: "light",
      progress: undefined,
      transition: Bounce,
    });
  };

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const myRoute = prop.isTrue
      ? `http://localhost:5500/login`
      : `http://localhost:5500/register`;
    try {
      const response = await axios.post(myRoute, data);
      const tokenVal = response.data.token;
      console.log(response.statusCode);
      localStorage.setItem("authToken", tokenVal);
      if (response.data.success === true) {
        notifySuccess();
        setTimeout(() => {
          navigate("/dashboard");
        }, 1100);
      } else {
        notifyError();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
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
      {/* flowbite code  */}
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 absolute w-full top-0 z-[-2] h-screen  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight  md:text-2xl dark:text-white text-white">
                {prop.value} to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                {!prop.isTrue && (
                  <div>
                    <label className="block mb-2 text-white text-sm font-medium  dark:text-white">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      name="fullname"
                      id="fullname"
                      {...register("fullname", {
                        required: true,
                        message: "This is required",
                      })}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="eg. John Doe"
                    />
                  </div>
                )}
                <div>
                  <label className="block mb-2 text-sm font-medium dark:text-white text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    {...register("email", {
                      required: true,
                      message: "This is required",
                    })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                  />
                  {errors.email && (
                    <p style={{ color: "red" }}>{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium dark:text-white text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    {...register("password", {
                      required: true,
                      message: "This is required",
                    })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className=" dark:text-gray-300 text-white">
                        Remember me
                      </label>
                    </div>
                  </div>
                  {prop.isTrue && (
                    <a
                      href="#"
                      className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Forgot password?
                    </a>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {prop.value}
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  {prop.isTrue
                    ? "Don’t have an account yet? "
                    : "Already have an account ? "}{" "}
                  <Link
                    to={prop.isTrue ? "/register" : "/login"}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    {prop.isTrue ? "Register" : "Login"}
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
