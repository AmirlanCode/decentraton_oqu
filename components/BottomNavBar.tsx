import Link from "next/link";
// import { useRouter } from "next/router";
import { FC } from "react";
import { HomeIcon, ShareIcon,  } from "@heroicons/react/16/solid";
import { UserCircleIcon } from "@heroicons/react/16/solid";
import { MdLeaderboard } from "react-icons/md";


const BottomNavBar: FC = () => {
    // const router = useRouter();

    return (
        <nav className="fixed left-1/2 transform -translate-x-1/2 w-full bg-light_gray flex justify-around items-center h-16 bottom-0">
            
            <Link href="/"  passHref className="flex flex-col items-center justify-center text-black">
            <HomeIcon  className="w-full h-6" color="black" />
                Home   
            </Link>
            <Link href="/leaderboard" passHref className="flex flex-col items-center justify-center text-black">
            <MdLeaderboard  className="w-full h-6" color="black"/>
                Leaders
            </Link>
            <Link href="/invite" passHref className="flex flex-col items-center justify-center text-black">
            <ShareIcon className="w-full h-6" color="black"/>
                Invite 
            </Link>
            <Link href="/profile" passHref className="flex flex-col items-center justify-center text-black">
            <UserCircleIcon  className="w-full h-6" color="black"/>
               Profile 
            </Link>
        </nav>
        
    );
}

export default BottomNavBar;