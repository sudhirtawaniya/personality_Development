import React, { useState } from "react";

import { useLoaderData, useNavigate } from "react-router-dom";

import { useEffect } from "react";
import axios from "axios";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
// import './style/sft.css'
import { AiFillDelete } from "react-icons/ai";

import { BiEditAlt } from "react-icons/bi";
const columns = [
  { id: "id", label: "S.no", minWidth: 100 },

  {
    id: "question",
    label: "Question",
    minWidth: 100,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  // {
  //   id: 'night',
  //   label: 'night',
  //   minWidth: 100,
  //   align: 'center',
  //   format: (value) => value.toLocaleString('en-US'),
  // },
  // {
  //   id: 'startingp',
  //   label: 'Starting Price',
  //   minWidth: 100,
  //   align: 'center',
  //   format: (value) => value.toLocaleString('en-US'),
  // },
];

export default function ShowFreeTest() {
  const navigate = useNavigate();

  const [view, setview] = useState(
    " h-8 w-8 animate-spin rounded-full  border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] "
  );
  const [api_row, setapi] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [rowcount, setrowcount] = useState(10);
  const [row, setrow] = useState([]);
  const [curid, setcurid] = useState();

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage)
  // }
  const a = JSON.parse(localStorage.getItem("login"));

  const config = { headers: { Authorization: "Bearer " + a.token } };
  const loaddata = () => {
    axios
      .get(
        "https://yrpitsolutions.com/Personality-Development-API/api/questions",
        config
      )
      .then((res) => {
        const d1 = res.data.data;
        console.log(res.data);
        if (d1 != "")
          d1.sort(function (a, b) {
            return a.id - b.id;
          });
        setapi(d1);
        setrow(d1);
        setview(
          " h-8 w-8 animate-spin rounded-full  border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] hidden"
        );
      });
  };

  useEffect(() => {
    loaddata();
  }, []);

  const deletedata = (id) => {
    console.log(id);
    axios
      .delete(
        `https://yrpitsolutions.com/Personality-Development-API/api/questions/${id}`,
        config
      )
      .then((res) => {
        loaddata();
      });
  };

  function searchfun(e) {
    const result = api_row.filter((row) => {
      return row.question.toLowerCase().match(e.target.value.toLowerCase());
    });

    setrow(result);
  }
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Header
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            current={"/FreeAssessmentTest"}
          />
          <main>
            <div className="flex justify-center">
              <div class="container max-w-[90%] cente shadow-lg shadow-gray-500/50 m-4">
                <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                  <div className="flex justify-between">
                    <div className="flex">
                      <select
                        class="form-select appearance-none 
      block
      float-right
      px-3
      w-[80px]
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mr-2 sm:mr-20"
                        aria-label="Default select example"
                        onChange={(e) => setrowcount(e.target.value)}
                      >
                        <option selected>10</option>
                        <option>15</option>
                        <option>20</option>
                        <option>25</option>
                      </select>
                      {/* <p
                          className=" block
      float-right
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
     
      rounded
      transition
      ease-in-out
      m-0"
                        >
                          row per page:
                        </p> */}
                      <input
                        type="search"
                        placeholder="Search "
                        onChange={(e) => {
                          searchfun(e);
                        }}
                        className="searchbox rounded-lg shadow-sm shadow-blue-600/50 w-24 sm:w-full"
                      />
                    </div>
                    <div class="flex space-x-2 justify-end">
                      <button
                        type="button"
                        class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        onClick={() => navigate("/test/Addfreetest")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  {/* <Paper style={{ width: '100%' ,minHeight:'560px'}}> */}
                  <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="flex items-center justify-center">
                          <div class={view} role="status">
                            <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                              Loading...
                            </span>
                          </div>
                        </div>
                        <div class="overflow-hidden"></div>

                        <table class="min-w-full">
                          <thead class="border-b">
                            <tr></tr>

                            <tr>
                              {columns.map((column) => (
                                <td
                                  key={column.id}
                                  align={"center"}
                                  // style={{ top: 57, minWidth: column.minWidth }}
                                  style={{
                                    top: 57,
                                    minWidth: 100,
                                    maxWidth: "100px",
                                  }}
                                  onClick={() => {}}
                                  scope="col"
                                  class="text-sm max-w-4xl font-medium text-gray-900 px-1 py-1 text-center"
                                >
                                  <h6> {column.label}</h6>
                                </td>
                              ))}
                              <td
                                scope="col"
                                class="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                                key={"Action"}
                                align={"center"}
                                style={{
                                  top: 57,
                                  minWidth: 100,
                                  maxWidth: 100,
                                }}
                              >
                                <h6>{"Action"}</h6>
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            {row.slice().map((rowd, i) => {
                              if (i >= rowcount) return;
                              return (
                                <>
                                  <tr class="border-b">
                                    {columns.map((column) => {
                                      const value = rowd[column.id];
                                      return (
                                        <>
                                          <td
                                            class="text-sm text-gray-900 font-light px-1 py-1 max-w-sm overflow-hidden  whitespace-nowrap"
                                            align={"center"}
                                          >
                                            {column && typeof value === "number"
                                              ? i + 1
                                              : value}
                                          </td>
                                        </>
                                      );
                                    })}{" "}
                                    <td
                                      class="text-sm flex justify-center text-gray-900 font-light px-1 py-1 max-w-sm overflow-hidden  whitespace-nowrap"
                                      align={"center"}
                                    >
                                      <div class="flex space-x-2 mr-3 justify-center">
                                        <button
                                          type="button"
                                          class="inline-block rounded-full px-3 py-3 shadow-lg shadow-blue-600/50 bg-blue-500 text-white font-medium text-xs leading-tight uppercase   hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                          onClick={() =>
                                            navigate(
                                              "/test/freetest/editfreetest/" +
                                                rowd.id
                                            )
                                          }
                                        >
                                          <BiEditAlt />
                                        </button>
                                      </div>

                                      <div class="flex space-x-2 justify-center">
                                        <button
                                          type="button"
                                          class="inline-block rounded-full px-3 py-3 bg-red-600 shadow-lg shadow-red-600/50 text-white font-medium text-xs leading-tight uppercase  hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                                          onClick={() => {
                                            setcurid(rowd.id);
                                            setShowModal(true);
                                          }}
                                        >
                                          <AiFillDelete />
                                        </button>
                                      </div>
                                    </td>
                                  </tr>
                                </>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>{" "}
            </div>
          </main>
        </div>

        {showModal ? (
          <>
            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setShowModal(false)}
              ></div>
              <div className="flex items-center min-h-screen px-4 py-8">
                <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                  <div className="mt-3">
                    <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-red-100 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-red-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="mt-2 text-center  ">
                      <h4 className="text-lg font-medium text-gray-800">
                        Delete question ?
                      </h4>
                      <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                        Is you want to delete
                      </p>
                      <div className="items-center gap-2 mt-3 sm:flex">
                        <button
                          className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                          onClick={() => {
                            deletedata(curid);

                            setShowModal(false);
                          }}
                        >
                          Delete
                        </button>
                        <button
                          className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                          onClick={() => setShowModal(false)}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
