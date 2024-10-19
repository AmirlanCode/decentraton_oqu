export default function Multiquiz() {
    return (
      <div className="min-h-screen bg-purple-700 flex flex-col items-center justify-center text-white p-4">
        <div className="bg-purple-900 w-full max-w-3xl p-8 rounded-lg shadow-lg text-center mb-8">
          <h1 className="text-4xl font-bold">What is the fastest blockchain from the list?</h1>
        </div>
        <div className="grid grid-cols-2 gap-6 w-full max-w-3xl"> 
          <button className="bg-green-600 hover:bg-red-600 text-white font-bold py-6 rounded-lg shadow-lg text-xl">
            ATOM
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-6 rounded-lg shadow-lg text-xl">
            SUI
          </button>
          <button className="bg-red-500 text-white font-bold py-6 rounded-lg shadow-lg text-xl">
            SEI
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-6 rounded-lg shadow-lg text-xl">
            PEPE
          </button>
        </div>
  
        <div className="bg-purple-900 w-full max-w-3xl p-4 rounded-lg shadow-lg text-center mt-8">
          <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
          <div className="flex justify-between px-6">
            <div>
              <p className="font-semibold">Player 1</p>
              <p>1200 points</p>
            </div>
            <div>
              <p className="font-semibold">Player 2</p>
              <p>950 points</p>
            </div>
            <div>
              <p className="font-semibold">Player 3</p>
              <p>800 points</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  