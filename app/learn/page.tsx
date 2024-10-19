export default function Learn() {

  const cards = [
    {
      id: 1,
      title: 'Learn SUI memecoin trading',
      logo: '/mexc-logo.png', // add your logo images here
      image: 'assets/sui.jpg',
      rewards: { coins: 1400, reward: 1 },
      status: 'Now learning',
    },
    {
      id: 2,
      title: 'Open the WORLD with $WLD',
      logo: '/youhodler-logo.png',
      image: '/assets/sui.jpg',
      rewards: { coins: 600, reward: 1 },
      status: '580 finished this cource',
    },
    {
      id: 3,
      title: 'Mastering Polymarket',
      logo: '/binance-logo.png',
      image: '/assets/sui.jpg',
      rewards: { coins: 1500, reward: 100 },
      status: '948 finished this cource',
    },
    {
      id: 4,
      title: 'Earning Crypto Made Easy With Coinbase Earn',
      logo: '/coinbase-logo.png',
      image: '/assets/sui.jpg',
      rewards: { coins: 1200, reward: 100 },
      status: '1.18K finished this cource',
    },
  ]

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-5 pb-20">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-blue-500 rounded-lg p-6 shadow-lg flex flex-col justify-between"
        >
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-white">{card.status}</span>
          </div>

          <h3 className="text-xl font-bold mb-4 text-white">{card.title}</h3>
          <div className="flex justify-between items-center">
            <div>
              <span className="flex items-center text-yellow-400">
                <span className="text-lg font-bold">{card.rewards.coins}</span>{' '}
                XP
              </span>
              {/* <span className="text-sm text-gray-400">
                +{card.rewards.reward} reward
              </span> */}
            </div>
            <button className="bg-yellow-500 text-white font-bold rounded-full px-4 py-2 text-sm">
              Claim
            </button>
          </div>
        </div>
      ))}
    </div>

    )
  }
  