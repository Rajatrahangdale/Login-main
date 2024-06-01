/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import ForgotPass from "../assets/auth-v2-forgot-password.png";
import { GrSun } from "react-icons/gr";
const ForgotPassword = ({dark, setDark}) => {
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
        className={`${
          dark ? "bg-zinc-700" : "bg-zinc-200"
        } h-screen w-full flex items-center justify-around gap-10`}
      >
        <div
          className={` ${
            dark ? "bg-zinc-800" : "bg-zinc-400"
          } w-[600px] h-[600px] rounded-lg`}
        >
          <img
            src={ForgotPass}
            className="w-full h-full object-scale-down"
            alt=""
          />
        </div>
        <div
          className={`w-[400px] h-[400px] ${
            dark ? "text-white" : "text-black"
          } `}
        >
          <h1 className="text-5xl font-bold my-6">Keek</h1>
          <p className="opacity-75 text-3xl font-bold my-2">Forgot Password?</p>
          <p
            className={` py-2 ${
              dark ? "opacity-75" : "text-zinc-700 font-semibold"
            }`}
          >
            Enter your email and we′ll send you instructions to reset your
            password
          </p>
          <div>
            <h4 className="opacity-75">Email</h4>
            <input
              type="email"
              className={`w-full bg-transparent rounded-md border ${
                dark ? "" : "border-black"
              } px-2 py-1 focus:bg-transparent focus:ring-1 focus:outline-none focus:border-sky-500 focus:invalid:border-red-500`}
              placeholder="Email"
            />
          </div>

          <div
            className={`${
              dark ? "bg-zinc-600 " : "bg-zinc-400"
            } text-center my-2 rounded-md active:text-zinc-50 active:bg-red-500 active:translate-x-1`}
          >
            <button className="opacity-50 w-full py-2 rounded-md font-semibold active:opacity-100">
              Send reset link
            </button>
          </div>
          <div className="bg-transparent text-center py-2">
            <button className="text-red-500 active:text-red-700 font-semibold ">
              <Link to="/">&lt; Back to Login </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
