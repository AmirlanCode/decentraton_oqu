

const Services = () => {
    return (
        <div className="min-h-screen bg-blue-500 flex flex-col items-center justify-center text-white p-8">
        
        <h1 className="text-4xl font-bold mb-4">Invite to Earn</h1>
        <p className="text-lg mb-10">Invite friends and get rewarded together. The more friends referred, the bigger the earnings!</p>
  
        
        <div className="bg-blue-600 rounded-lg p-6 shadow-lg max-w-4xl w-full flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 mb-52">
        
        
   
      <div className="bg-white rounded-lg shadow-lg p-6  w-full">
        <h2 className="text-xl font-bold mb-4 text-black">Referral rules</h2>

      
        <div className="mb-4">
          <div className="flex items-start space-x-2">
           
            <p className="font-semibold text-black">🚀 Invite a friend</p>
          </div>
          <p className="ml-4 text-gray-600">
            You will both get <span className="font-bold">10000XP
                </span> 
        
          </p>
        </div>
        <div className="mb-4">
          <div className="flex items-start space-x-2">
            
            <p className="font-semibold text-black">🚀 Invite a friend with a Telegram Premium account</p>
          </div>
          <p className="ml-4 text-gray-600">
            You will both get <span className="font-bold">20000 XP</span>
          </p>
        </div>
      </div>

        
          <div className="flex flex-col items-center space-y-4 w-full md:w-auto ">
            <div className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 w-full md:w-auto">
              <span className="truncate">https/:bigoquwinhackaton.com</span>
             
            </div>
            <button className="bg-green-500 px-6 py-2  rounded-lg font-bold hover:bg-green-600 transition">
              SHARE IT
            </button>
          </div>
        </div>
      </div>
    );
}


export default Services;

