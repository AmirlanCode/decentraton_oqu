"use client"

import { useRouter } from "next/navigation"; 
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Section found in the work');

export default function Learn() {

  const router = useRouter()
 
  
  const cards = [
    {
      id: 1,
      title: 'Start to learn TON',
      rewards: { coins: 1400, reward: 1 },
      status: 'Become first to learn this cource ',
      onClick: () => {
        router.push('/ton_quiz');
       },
    },
    {
      id: 2,
      title: 'FunC programming cource',
      rewards: { coins: 5000, reward: 2},
      status: 'Become first to learn this cource',
      onClick: notify,
    }
  ]

    return (
      <div className="min-h-screen bg-blue-600">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-5 pb-20 ">
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
            <button 
            onClick= {card.onClick}
            className="bg-yellow-500 text-white font-bold rounded-full px-4 py-2 text-sm">
              Claim
            </button>
            <Toaster />
          </div>
        </div>
      ))}
    </div>
    </div>

    )
  }
  