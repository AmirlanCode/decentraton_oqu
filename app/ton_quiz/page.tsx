'use client'

import Image from "next/image";
import ton from "/assets/ton.jpg"


import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Section found in the work');

export default  function TonQuiz() {
    

    return (
       <div className="min-h-screen bg-blue-500 p-5">     
        <Image src={ton} alt='TonImage' className="pr-5 pl-5"/>
        <div className="p-5 m-5 bg-blue-400 rounded text-white pb-10 text-sm">
            The The Open Network (TON) is a fast, secure and scalable
             blockchain and network project, capable of handling 
             millions of transactions per second if necessary, and both user-friendly and service provider-friendly. We aim for it to be able to host all reasonable applications currently proposed and
              con- ceived. One might think about TON as 
              a huge distributed supercomputer, or rather
               a huge superserver, intended to host and provide a 
               variety of services.</div>
               <div className="mb-20 p-4 mr-5 ml-5 rounded-lg bg-blue-600">
                <button className="justify-center w-full text-white" onClick={notify}>
                    Next
                </button>
                <Toaster/>
                </div>
               
       </div>
       
    );
}