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
  { id: "Sno", label: "S.no", minWidth: 100 },

  {
    id: "Question",
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

export default function ShowindividualPaidTest() {
  function getCookie(name) {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");

    // Loop through the array elements
    for (var i = 0; i < cookieArr.length; i++) {
      var cookiePair = cookieArr[i].split("=");

      /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
      if (name == cookiePair[0].trim()) {
        // Decode the cookie value and return
        return decodeURIComponent(cookiePair[1]);
      }
    }

    // Return null if not found
    return null;
  }
  const navigate = useNavigate();

  const [search, setsearch] = useState("");
  const [api_row, setapi] = useState([
    {
      Sno: "1",
      Question: "What is Sun",
    },
    {
      Sno: "1",
      Question: "What is Sun",
    },
    {
      Sno: "1",
      Question: "What is Sun",
    },
    {
      Sno: "1",
      Question: "What is Sun",
    },
    {
      Sno: "1",
      Question:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam placeat, aliquid possimus iusto recusandae cupiditate. Labore soluta hic non modi?",
    },
    {
      Sno: "1",
      Question: "What is Sun",
    },
    {
      Sno: "1",
      Question: "What is Sun",
    },
    {
      Sno: "1",
      Question: "What is Sun",
    },
    {
      Sno: "1",
      Question: "What is Sun",
    },
    {
      Sno: "1",
      Question: "What is Sun",
    },
  ]);
  const [rowcount, setrowcount] = useState(10);
  const [row, setrow] = useState([
    {
      id: 1,
      Sno: "1",
      Question: "What is Sun",
    },
    {
      id: 2,
      Sno: "2",
      Question: "What is Sun",
    },
    {
      id: 3,
      Sno: "3",
      Question: "What is Sun",
    },
    {
      id: 4,
      Sno: "4",
      Question: "What is Sun",
    },
    {
      id: 5,
      Sno: "5",
      Question:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam placeat, aliquid possimus iusto recusandae cupiditate. Labore soluta hic non modi?",
    },
    {
      id: 6,
      Sno: "6",
      Question: "What is Sun",
    },
  ]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage)
  // }
  // const loaddata=()=>{
  //   axios.get('https://amhtrip.in/api/TourPackage.php').then((res) => {
  //     const d1 = eval(res.data)
  //     if(d1!='')
  //     d1.sort(function(a,b){
  //       return b.id-a.id;
  //     })
  //     setapi(d1);
  //     setrow(d1)

  //     })
  // }

  useEffect(() => {
    //  loaddata();
  }, []);

  const deletedata = (id) => {
    // axios.post('https://amhtrip.in/api/deletetour.php',id).then((res) => {
    //  loaddata();
    //   })
  };

  function searchfun(e) {
    const result = api_row.filter((row) => {
      return row.Question.toLowerCase().match(e.target.value.toLowerCase());
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
            current={"/test/individualpaidtest"}
          />
          <main>
            <div className="flex justify-center">
              <div class="container max-w-[90%] cente shadow-lg shadow-gray-500/50 m-4">
                <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                  <div class="flex space-x-2 justify-end">
                    <button
                      type="button"
                      class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      onClick={() => navigate("/test/AddindividualpaidTest")}
                    >
                     +
                    </button>
                  </div>
                  {/* <Paper style={{ width: '100%' ,minHeight:'560px'}}> */}
                  <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden"></div>
                        <table class="min-w-full">
                          <thead class="border-b">
                            <tr>
                              <input
                                type="search"
                                placeholder="Search"
                                onChange={(e) => {
                                  searchfun(e);
                                }}
                                className="searchbox rounded-lg shadow-sm shadow-blue-600/50"
                              />
                            </tr>
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
                                  class="text-sm max-w-4xl font-medium text-gray-900 px-6 py-4 text-center"
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
                            {row.map((rowd, i) => {
                              if(i>=rowcount)return null;
                              return (
                                
                                <>
                                  <tr class="border-b">
                                    {columns.map((column) => {
                                      const value = rowd[column.id];
                                      return (
                                        <>
                                          <td
                                            class="text-sm text-gray-900 font-light px-6 py-4 max-w-sm overflow-hidden  whitespace-nowrap"
                                            align={"center"}
                                          >
                                            {column.format &&
                                            typeof value === "number"
                                              ? column.format(value)
                                              : value}
                                          </td>
                                        </>
                                      );
                                    })}{" "}
                                    <td
                                      style={{
                                        display: "flex",
                                        justifyContent: "space-around",
                                      }}
                                    >
                                      <div class="flex space-x-2 justify-center">
                                        <button
                                          type="button"
                                          class="inline-block rounded-full px-3 py-3 shadow-lg shadow-blue-600/50 bg-blue-500 text-white font-medium text-xs leading-tight uppercase   hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                          onClick={() =>
                                            navigate(
                                              "/test/individualPaidTest/EditindividualPaidTest/" +
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
                                            deletedata(rowd.id);
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
                        <select
                          class="form-select appearance-none
      block
      float-right
      px-3
      w-[60px]
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
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          aria-label="Default select example"
                          onChange={(e) => setrowcount(e.target.value)}
                        >
                          <option selected>10</option>
                          <option >15</option>
                          <option >20</option>
                          <option >25</option>
                        </select>
                        <p
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
                        </p>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
