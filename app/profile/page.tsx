import { CgProfile } from "react-icons/cg";


const Profile = () => {
    const items = [
        {
          id: 1,
          title: "Watch our add",
          xp: "100",
          new: true,
        },
        {
          id: 2,
          title: "Finish ur first cource ",
          xp: "100",
          new: false,
        },
        {
          id: 3,
          title: "Join our chat",
          xp: "100",
          new: false,
        },
        {
          id: 4,
          title: "Vote for our channel",
          xp: "100",
          new: false,
        },
      ];
    
      return (
        <div className="min-h-screen bg-blue-600 flex flex-col items-center p-6">
          <div className="w-full max-w-lg space-y-4">
          <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-2xl">
          <CgProfile/>
          <div className="flex flex-col">
            <span className="font-semibold truncate">amirlancode</span>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <span className="text-xs">0</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-xs">0</span>
              </div>
            </div>
          </div>
        </div>
        <button className="bg-black text-white font-bold py-3 px-4 rounded-xl hover:bg-gray-800 transition duration-300 focus:outline-none shadow-lg">
        Connect Wallet
      </button>
      </div>
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-blue-500 text-white rounded-lg flex items-center justify-between p-4"
              >
                <div className="flex items-center space-x-4">
                  <p>🚀</p>
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <div className="flex items-center  text-yellow-400">
                      <p>XP</p>
                      <span>{item.xp}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  {item.new && (
                    <span className="bg-purple-600 text-white text-sm px-2 py-1 rounded-full">
                      New
                    </span>
                  )}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Profile;