/* eslint-disable react/prop-types */

import { useForm } from "react-hook-form";
import LoginImg from "../assets/auth-login.png";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { data } from "autoprefixer";
import { GrSun } from "react-icons/gr";

const Login = ({ val, setVal, dark, setDark }) => {
  const { register, handleSubmit, reset } = useForm();

  const onFormSubmit = handleSubmit((data) => {
    // val
    //   ? alert("email is : " + data.email)
    //   : alert("number is: " + data.number);
    reset();
  });

  return (
    <>
      <div className="relative">
        <button
          onClick={() => {
            setDark(!dark);
          }}
          className="absolute top-10 left-[52%] p-1 rounded-full"
        >
          <GrSun
            size="1.9em"
            className={`${dark ? "text-white" : "text-black"}`}
          />
        </button>
      </div>
      <div
        className={` ${
          dark ? "bg-zinc-700" : "bg-zinc-200"
        } h-screen w-full flex items-center justify-around gap-10`}
      >
        <div
          className={` ${
            dark ? "bg-zinc-800" : "bg-zinc-400"
          } w-[600px] h-[600px] rounded-lg`}
        >
          <img
            src={LoginImg}
            className="w-full h-full object-scale-down"
            alt=""
          />
        </div>
        <div
          className={`w-[400px] h-[400px] ${
            dark ? "text-white" : "text-black"
          } `}
        >
          <h1 className="text-5xl font-bold">Keek</h1>
          <p
            className={` py-2 ${
              dark ? "opacity-75" : "text-zinc-700 font-semibold"
            }`}
          >
            Please sign-in to your account and start the adventure
          </p>
          <form action="" method="get" onSubmit={onFormSubmit}>
            <div>
              {val ? (
                <div>
                  <h4
                    className={
                      dark ? "opacity-75" : "text-zinc-700 font-semibold"
                    }
                  >
                    Email
                  </h4>
                  <input
                    type="email"
                    value={data.email}
                    {...register("email")}
                    className={`w-full bg-transparent rounded-md border ${
                      dark ? "" : "border-black"
                    } px-2 py-1 focus:bg-transparent focus:ring-1 focus:outline-none focus:border-sky-500 focus:invalid:border-red-500`}
                    placeholder="admin@vaexy.com"
                  />
                </div>
              ) : (
                <div>
                  <h4
                    className={
                      dark ? "opacity-75" : "text-zinc-700 font-semibold"
                    }
                  >
                    Mobile
                  </h4>
                  <input
                    type="number"
                    max="9999999999"
                    value={data.number}
                    {...register("number")}
                    className={`w-full bg-transparent rounded-md border ${
                      dark ? "" : "border-black"
                    } px-2 py-1 focus:bg-transparent focus:ring-1 focus:outline-none focus:border-sky-500 focus:invalid:border-red-500`}
                    placeholder="mobile number"
                  />
                </div>
              )}
              <div className="my-4">
                <h4
                  className="text-xl text-red-500 font-semibold active:text-red-800 cursor-pointer"
                  onClick={() => setVal(!val)}
                >
                  {val ? "Continue with phone" : "Continue with email"}
                </h4>

                <div className="text-lg text-end text-red-500 font-semibold active:text-red-800">
                  <button>
                    <Link to="/forgot-password">Forgot Password? </Link>
                  </button>
                </div>
              </div>
              <div
                className={`${
                  dark ? "bg-zinc-600 " : "bg-zinc-400"
                } text-center rounded-md active:text-zinc-50 active:bg-red-500 active:translate-x-1`}
              >
                <button
                  type="submit"
                  className="font-semibold w-full opacity-75 py-2"
                >
                  Next &gt;
                </button>
              </div>
            </div>
          </form>
          <div className="text-zinc-400 font-semibold my-4 text-center">
            <h2
              className={`inline ${
                dark ? " opacity-80" : "text-zinc-700 font-semibold"
              }`}
            >
              New on our platform?{" "}
            </h2>
            <button className="text-red-500 active:text-red-800">
              <Link to="/register">Create an account</Link>
            </button>
          </div>
          <div className="text-center text-zinc-400">
            <h2>-------------------- or ---------------------</h2>
          </div>
          <div className="text-center my-2">
            <button
              className={`text-zinc-400 w-full border ${
                dark ? "" : "border-black text-zinc-700 font-bold"
              } bg-transparent py-2  font-semibold rounded-md active:text-zinc-50 active:bg-red-500 active:translate-x-1`}
            >
              <FaGoogle className="inline" /> Continue With Google
            </button>
          </div>
          <div className="bg-transparent text-center">
            <button
              className={`text-zinc-400 w-full py-2 border ${
                dark ? "" : "border-black text-zinc-700 font-bold"
              } rounded-md font-semibold active:bg-red-500 active:text-zinc-50 active:translate-x-1`}
            >
              <FaFacebook className="inline" /> Continue With Facebook
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
