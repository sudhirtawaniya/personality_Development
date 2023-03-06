// import { CCard } from '@coreui/react'
// import { Alert, Button, TextField, Typography } from '@mui/material'
// import TextField2 from '@mui/joy/TextField'
// import Select from '@mui/joy/Select'
// import Option from '@mui/joy/Option'
import React, { useEffect } from 'react'
import './style/tourpackage.css'
import { useState } from 'react'
import Editor from './Editor'
// import { Add } from '@mui/icons-material'
// import { Modal, ModalDialog, Stack } from '@mui/joy'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Sidebar from '../partials/Sidebar'
import Header from '../partials/Header'
// import FileUploader from './upload'
// import Footer from './footer'

export default function EditindividualTest() {

  const navigate=useNavigate();
//   useEffect(()=>{
//     var cookie=getCookie("JWT");
//     axios('https://amhtrip.in/api/vaildauth.php', {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
//        'Authorization': `Bearer ${cookie}`,
//       },
     
//     }).then((res)=>{
//       try{
//         var data=eval(res.data)
//         console.log(data);
//       }
//       catch(e){
//         navigate(-1)
//       }
      
//     }).catch((e)=>{
//       navigate(-1)
//     })
//     },[])
const {id}=useParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [main_data, setoptionanight] = useState({
    no_of_options:0, 
    question:null,
    is_reverse:0,
    question_category:4,
    options_label:[{
     
    }],
   
  })
  const a=JSON.parse(localStorage.getItem("login"))  
useEffect(()=>{

  axios.get(`https://yrpitsolutions.com/Personality-Development-API/api/questions/${id}`, {
  headers: {
    // 'application/json' is the modern content-type for JSON, but some
    // older servers may use 'text/json'.
    // See: http://bit.ly/text-json
    'content-type': 'text/json',
    'Authorization':'Bearer '+a.token
  }
}).then((res)=>{
  setoptionanight(res.data.data);
})
},[])
  
  const senddata=()=>{
   
    setoptionanight({...main_data,is_reverse:document.getElementById("checkboxChecked").checked?1:0})
      
 axios.put(`https://yrpitsolutions.com/Personality-Development-API/api/questions/${id}`, main_data, {
  headers: {
    // 'application/json' is the modern content-type for JSON, but some
    // older servers may use 'text/json'.
    // See: http://bit.ly/text-json
    'content-type': 'text/json',
    'Authorization':'Bearer '+a.token
  }
}).then((res)=>{
 if(res.data.success==true){
  navigate("/test/freetest")
 }
}) 
  }
  const optiondata=(data,day,key)=>{
    if(main_data.options_label[day-1])
   main_data.options_label[day-1]=data;
   else{
    main_data.options_label.push(data)
   
   }
   console.log(main_data);
  }

  return (
    <>
     <div className="flex h-screen overflow-hidden">

{/* Sidebar */}
<Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      

      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} current={"Free Assessment Test"} subparrent={"/test/freetest"}/>
        <main>
          <div className="flex justify-center">
        <div class="container max-w-[90%] cente shadow-lg shadow-gray-500/50 m-4">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
        <div className="container_tour">
        {/* <div id="message" style={{display:'none'}}><Alert onClose={() => { document.getElementById("message").style.display="none";}} severity="error">Error Please Check the Details and Resend it! </Alert></div> */}
          <div className="des_tour">
            <p className="tour_text">Edit Free Assessment Test</p>
            <hr />
          </div>
          <div className="menu_tour">
          <div className="input_tour_sel" style={{width:'100%'}}>
          <div class="flex justify-center">
  <div class="mb-3 xl:w-full">
    <label for="exampleFormControlInput1" class="form-label inline-block mb-2 text-gray-700"
      >Question</label >
    <input
      type="text"
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlInput1"
      placeholder="Write Question Here"
      value={main_data.question}
      onChange={(e)=>setoptionanight({ ...main_data, question: e.target.value })}
    />
  </div>
</div>
             
            </div>
          </div>
          <div className="menu_tour">
            <div className="input_url">
             
            </div>
            <div className="input_tour_sel">
            <div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    
    <select class="form-select appearance-none
      block
      w-full
      px-3
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
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
      value={main_data.no_of_options}
      onChange={(e)=>setoptionanight({ ...main_data, no_of_options: e.target.value })}
      >
        <option selected>Options</option>
        {[1, 2, 3, 4, 5, 6, 7].map((ele, i) => {
                  return (
                    <option 
                   >{ele}</option>
                  
                  )
                })}
    </select>
  </div>
</div>

           </div></div>
          <div className="editor" >
            {main_data.no_of_options > 0 &&
              [...Array(Number(main_data.no_of_options))].map((val, i) => {
               
                return <div >
                
          
                <Editor key={i} data={(i + 1)} ind={i} isoption="Option" value={main_data.options_label[i]} optiondata={optiondata} /> 
             
                </div>
              })}
         </div>
         {main_data.no_of_options > 0 &&<div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
      <input
        class="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-[rgba(0,0,0,0.25)] bg-white outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:bg-white focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
        type="checkbox"
    value={main_data.is_reverse==1?true:false}
        id="checkboxChecked"
         />
      <label
        class="inline-block pl-[0.15rem] hover:cursor-pointer"
        for="checkboxChecked">
      is_reverse
      </label>
    </div>}
          {main_data.no_of_options > 0 && (
            <div
              className="act_btn w-full"
              style={{ display: 'flex', justifyContent: 'space-around'}}
            >
              
              <div class="flex  space-x-5 justify-center w-full">
  <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={()=>senddata()}>Submit</button>
  <button type="button" class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"  onClick={() => {
                  window.location.reload()
                }}>Cancel</button>
</div>
<div class="flex space-x-2 justify-center">
 
</div>
            
            </div>
          )}
        </div>
      {/* </CCard> */}
      {/* <Footer/> */}
      </div>
      </div>
      </div>
      </main>
     
      
      </div>
      </div>
      
    </>
  )
}
