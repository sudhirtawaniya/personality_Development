import React, { useState }  from "react";
import Modal from "./Modal";

const Button = () => {
    const [showModal, setShowModal] = useState(false)
   const handleOnClose = () => setShowModal(false)
    return (
         <div>
            {/* <div>
               <button onClick={()=> setShowModal(true)} className="bg-pink-700 text-white font-[Poppins] py-2 px-6 rounded-2xl  md:ml-8 hover:bg-pink-800 duration-500">
                {props.children}     
               </button>
            </div> */}
           <div>
            <Modal onClose={handleOnClose} visible={true} />
           </div>
         </div>
    )
}
export default Button