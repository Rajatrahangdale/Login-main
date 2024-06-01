/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { GrSun } from "react-icons/gr";
import resigsterImg from "../assets/auth-v2-register.png";
const CreateAccount = ({val, setVal, dark, setDark}) => {
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
            src={resigsterImg}
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
          <h2
            className={` py-2 text-lg ${
              dark ? "opacity-75" : "text-zinc-700 font-semibold"
            }`}
          >
            Adventure starts here 🚀
          </h2>
          <p className="opacity-75 mb-4">
            Make your app management easy and fun!
          </p>
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
                  className={`w-full bg-transparent rounded-md border ${
                    dark ? "" : "border-black"
                  } px-2 py-1 focus:bg-transparent focus:ring-1 focus:outline-none focus:border-sky-500 focus:invalid:border-red-500`}
                  placeholder="mobile number"
                />
              </div>
            )}
          </div>
          <div className="my-4">
            <h2 className="text-md text-red-500 font-semibold">
              <button onClick={() => setVal(!val)}>
                {val ? "Continue with phone" : "Continue with email"}
              </button>
            </h2>
          </div>
          <div
            className={`${
              dark ? "bg-zinc-600 " : "bg-zinc-400"
            } text-center rounded-md active:bg-red-500 active:translate-x-1`}
          >
            <button className="opacity-75 font-semibold w-full py-2 active:text-zinc-50 active:opacity-100">
              Next &gt;{" "}
            </button>
          </div>
          <div className="text-zinc-400 font-semibold my-4 text-center">
            <h2
              className={`inline  ${
                dark ? "opacity-80" : "text-zinc-700 font-bold"
              }`}
            >
              Already have an account?{" "}
            </h2>
            <button className="text-red-500 active:text-red-600">
              <Link to="/">Sign in instead</Link>
            </button>
          </div>
          <div className="text-center text-zinc-400">
            <h2>-------------------- or ---------------------</h2>
          </div>
          <div className="bg-transparent text-center border my-2 rounded-md active:bg-red-600 active:translate-x-1">
            <button
              className={`text-zinc-400 w-full py-2 active:text-zinc-50 rounded-md font-semibold ${
                dark ? "" : "border border-black text-zinc-800 font-bold"
              }`}
            >
              Continue With Google
            </button>
          </div>
          <div className="bg-transparent text-center  border rounded-md  active:bg-red-600 active:translate-x-1">
            <button
              className={`text-zinc-400 w-full py-2 active:text-zinc-50 rounded-md font-semibold ${
                dark ? "" : "border border-black text-zinc-800 font-bold"
              }`}
            >
              Continue With Facebook
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
