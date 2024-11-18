"use client"

import toast, { Toaster } from 'react-hot-toast';
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import { useEffect, useState } from "react";


const CLAIM_COOLDOWN_HOURS = 16;
const MILLISECONDS_IN_AN_HOUR = 3600000;

const notify = () => toast('Go to multiquiz to claim to boost mining of OQU');


const Home = () => {

  
  const [timeRemaining, setTimeRemaining] = useState<number>(0);
    const [isClaimed, setIsClaimed] = useState<boolean>(false);

    // Check localStorage for the last claim time on component mount
    useEffect(() => {
        const lastClaimTime = localStorage.getItem('lastClaimTime');
        if (lastClaimTime) {
            const timeElapsed = Date.now() - parseInt(lastClaimTime, 10);
            const cooldownTime = CLAIM_COOLDOWN_HOURS * MILLISECONDS_IN_AN_HOUR;

            if (timeElapsed < cooldownTime) {
                setIsClaimed(false);
                setTimeRemaining(cooldownTime - timeElapsed);
            } else {
                setIsClaimed(true);
                setTimeRemaining(0);
            }
        }
    }, []);

    // Countdown timer
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isClaimed && timeRemaining > 0) {
            timer = setInterval(() => {
                setTimeRemaining((prev) => {
                    if (prev <= 1000) {
                        clearInterval(timer);
                        setIsClaimed(false);
                        return 0;
                    }
                    return prev - 1000;
                });
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [isClaimed, timeRemaining]);

    const handleClaim = () => {
        setPoints(points + 5000)
        setIsClaimed(true);
        setTimeRemaining(CLAIM_COOLDOWN_HOURS * MILLISECONDS_IN_AN_HOUR);
        localStorage.setItem('lastClaimTime', Date.now().toString());
    };



    // Function to format the time remaining
    const formatTime = (milliseconds: number) => {
        const hours = Math.floor(milliseconds / MILLISECONDS_IN_AN_HOUR);
        const minutes = Math.floor((milliseconds % MILLISECONDS_IN_AN_HOUR) / 60000);
        const seconds = Math.floor((milliseconds % 60000) / 1000);
        return `${hours}h ${minutes}m ${seconds}s`;
    };


  const [points, setPoints]= useState(0);

  const router = useRouter()

  
  const handleNavigateToLearnPage = () => {
    router.push('/learn')
  }
   
  // const claimButton = () => 
  //  setPoints(points + 5000)
  
 
   
  const handleNavigateToMultiPage = () => {
    router.push('/quiz_page') 
  }

      return (
      <div className="min-h-screen bg-blue-600 text-gray-80 flex items-center justify-center">
      <div className="bg-blue-600 p-4 w-full max-w-sm">
      <h1 className="w-full flex justify-center text-white text-5xl pb-4 font-bold">BIG(O)QU</h1>
      <div className="text-white text-3xl font-extrabold text-center"> OQU&lsquo;S  {points}XP </div>
      <br/>
      <div className="flex items-center justify-center ">
            {isClaimed ? (
                <button

                className="bg-gray-500  text-white font-bold py-3 px-8 w-full rounded-2xl shadow-lg transform active:translate-y-1 transition-transform duration-200 mb-5"
                onClick={notify}
                >
                    Time remaining: {formatTime(timeRemaining)}
                </button>
                
            ) : (
                <button
                    onClick={handleClaim}
                    className="bg-amber-500  text-white font-bold py-3 px-8 w-full rounded-2xl shadow-lg transform active:translate-y-1 transition-transform duration-200 mb-5"
                >
                    CLAIM
                </button>
            )}
                  <Toaster />

        </div>
      {/* <button  */}
      {/* // onClick={claimButton} */}
      {/* //  className="bg-amber-500  text-white font-bold py-3 px-8 w-full rounded-2xl shadow-lg transform active:translate-y-1 transition-transform duration-200 mb-5">CLAIM</button> */}
      <Link href="/learn">
      <button onClick = {handleNavigateToLearnPage} className="bg-blue-500  text-white font-bold py-3 px-8 w-full rounded-2xl shadow-lg transform active:translate-y-1 transition-transform duration-200">
      START LEARNING
      </button>
        </Link>
        <Link href="/quiz_page">
          <button onClick={handleNavigateToMultiPage} className="bg-blue-500   text-white font-bold py-3 px-8 mt-5 w-full rounded-2xl shadow-lg transform active:translate-y-1 transition-transform duration-200">
            MULTIQUIZ
          </button>
        </Link>
      </div>
    </div>

   
   
    )
}


export default Home;






