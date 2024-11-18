// "use client"

// import { useState } from 'react';

// export default function () {
//   const [count, setCount] = useState(0);
//   const [showPlusOne, setShowPlusOne] = useState(false);
//   const [position, setPosition] = useState({ top: '50%', left: '50%' });

  
//   const handleClick = () => {
//     setCount(count + 1);
//     setShowPlusOne(true);

  
//     const randomTop = `${Math.random() * 80 + 10}%`; 
//     const randomLeft = `${Math.random() * 80 + 10}%`;
//     setPosition({ top: randomTop, left: randomLeft });

//     setTimeout(() => {
//       setShowPlusOne(false);
//     }, 500);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-blue-500 relative">
//       <h1 className="text-4xl text-white font-bold mb-6">OQU Clicker</h1>
//       <div className="text-6xl text-white font-bold mb-4">
//         {count} OQUXP
//       </div>
//       <button
//         onClick={handleClick}
//         className=" bg-blue-300 text-black p-28 rounded-full shadow-lg text-xl focus:outline-none relative z-10"
//       >
//         <span className='text-7xl'>📖</span>
//       </button>
//       {showPlusOne && (
//         <div
//           className="text-white text-4xl font-bold absolute animate-bounce transition-opacity duration-500"
//           style={{ top: position.top, left: position.left }}
//         >
//           +1
//         </div>
//       )}
//     </div>
//   );
// }
