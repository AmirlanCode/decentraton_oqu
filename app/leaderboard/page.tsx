

const Leaderboard = () => {
    const leaderboard = [
        { id: 1, name: 'Bankman-Fried', points: '585,157', rank: 1, color: 'bg-purple-500' },
        { id: 2, name: 'Mavrodi', points: '546,429', rank: 2, color: 'bg-yellow-500' },
      ];
       
        
          return (
            <div className="min-h-screen bg-blue-600 flex flex-col items-center p-6 text-white">
              <div className="text-center mb-8">
                <div className="text-6xl">🏆</div>
                <h1 className="text-3xl font-bold mt-4">Leaderboard</h1>
                <p className="text-white mt-2">Live as if you were to die tomorrow. Learn as if you were to live forever.<br />That's great!</p>
              </div>
              <button className="bg-white text-black w-full max-w-md py-3 rounded-lg font-bold mb-8">
                Your turn to become smartest ONE 🧠
              </button>
              <div className="w-full max-w-md space-y-4">
                {leaderboard.map((user) => (
                  <div key={user.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`${user.color} text-black rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold`}>
                        {user.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-bold">{user.name}</p>
                        <p className="text-white text-sm">{user.points} OQUXP</p>
                      </div>
                    </div>
                    
                    <div>
                      {user.rank === 1 && <span className="text-yellow-400">🥇</span>}
                      {user.rank === 2 && <span className="text-gray-300">🥈</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
 
}

export default Leaderboard;