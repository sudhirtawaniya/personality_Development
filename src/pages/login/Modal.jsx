import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from './../../images/user-avatar-32.png'
export default function Modal() {
  const navigate = useNavigate();
  const [data, setdata] = useState({ email: "", password: "" });
  const submit = (e) => {
    console.log(data);
    e.preventDefault();

    axios
      .post(
        "https://yrpitsolutions.com/Personality-Development-API/api/login",
        data
      )
      .then((res) => {
        if (res.data.success == true) {
          console.log(res.data.data.token);
          localStorage.setItem(
            "login",
            JSON.stringify({
              login: true,
              token: res.data.data.token,
            })
          );
          navigate("/");
        }
      });
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center backdrop-blur-0">
      <div className=" p-2 m-4 rounded max-w-[400px] w-fit max-h-full mx-auto bg-gradient-to-t from-pink-800 to-pink-200">
        <div className="columns flex space-x-60">
          <div className="bg">
          <img src={img} alt="" />
          </div>
          {/* <button onClick={handleOnClose}>X</button> */}
        </div>
        <div>
          <form className="max-w-[400px] mx-auto p-8 px-8">
            <h2 className="text-white text-3xl font-bold text-center justify-center">
              Login
            </h2>
            <div className="text-white m-3 ">
              <label>UserName</label>
              <br />
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => {
                  setdata({ ...data, email: e.target.value });
                }}
                className="text-pink-600 w-full h-8 rounded pl-5"
              />
            </div>
            <div className="text-white m-3 ">
              <label>Password</label>
              <br />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setdata({ ...data, password: e.target.value });
                }}
                className="text-pink-600 w-full h-8 rounded pl-5"
              />
            </div>

            <div class="mb-[0.125rem] ml-2.5 block min-h-[1.5rem] pl-[1.5rem]">
      <input
        class="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-[rgba(0,0,0,0.25)] bg-white outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:bg-white focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
        type="checkbox"
        value=""
        id="checkboxDefault" />
      <label
        class="inline-block pl-[0.15rem] text-white hover:cursor-pointer"
        for="checkboxDefault">
      Remember me
      </label>
    </div>
            <button
              className="bg-pink-600 w-full h-8 rounded-xl pl-5 text-white justify-center text-center font-bold"
              onClick={(e) => {
                submit(e);
              }}
            >
              Login
            </button>
            <p className="text-center justify-center text-white">
              Terms and conditions
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
