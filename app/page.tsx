"use client"

import Link from "next/link";
import { useRouter } from "next/navigation"; 


const Home = () => {

  const router = useRouter()

  const handleNavigateToLearnPage = () => {
    router.push('/learn') 
  }
   
  const handleNavigateToClickerPage = () => {
    router.push('/taptwoearn') 
  }
   
  const handleNavigateToMultiPage = () => {
    router.push('/multiquiz') 
  }
  
      return (
        <div className="min-h-screen  bg-blue-600 text-gray-80  ">
      <div className="min-h-screen flex items-center justify-center bg-blue-600">
      <div className="w-full p-6">
      <Link href="/learn">
      <button onClick = {handleNavigateToLearnPage} className="bg-blue-500  text-white font-bold py-3 px-8 w-full rounded-2xl shadow-lg transform active:translate-y-1 transition-transform duration-200">
      START LEARNING
      </button>
        </Link>
        <Link href="/taptwoearn">
          <button onClick={handleNavigateToClickerPage} className="bg-blue-500  text-white font-bold py-3 px-8 mt-5 w-full rounded-2xl shadow-lg transform active:translate-y-1 transition-transform duration-200">
            TAP2EARN
          </button>
        </Link>
        <Link href="/multiquiz">
          <button onClick={handleNavigateToMultiPage} className="bg-blue-500   text-white font-bold py-3 px-8 mt-5 w-full rounded-2xl shadow-lg transform active:translate-y-1 transition-transform duration-200">
            MULTIQUIZ
          </button>
        </Link>
      </div>
    </div>
  </div>
   
   
    )
}


export default Home;

