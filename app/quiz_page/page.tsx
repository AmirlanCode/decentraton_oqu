'use client'



import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';


type Question = {
    text: string;
    options: string[];
    correctAnswer: string;
};

const questions: Question[] = [
    {
        text: "What is the main purpose of blockchain technology?",
        options: ["Secure transactions", "Store data in centralized systems", "Increase transaction costs", "Decrease data security"],
        correctAnswer: "Secure transactions",
    },
    {
        text: "Which is the first cryptocurrency built on blockchain?",
        options: ["Ethereum", "Bitcoin", "Ripple", "Litecoin"],
        correctAnswer: "Bitcoin",
    },
    {
        text: "What does a 'block' in a blockchain contain?",
        options: ["Only transaction data", "Data and a timestamp", "Data, timestamp, and hash", "Only a hash"],
        correctAnswer: "Data, timestamp, and hash",
    },
    {
        text: "What consensus mechanism does Bitcoin use?",
        options: ["Proof of Stake", "Proof of Work", "Delegated Proof of Stake", "Proof of Authority"],
        correctAnswer: "Proof of Work",
    },
    {
        text: "What is a smart contract?",
        options: [
            "A traditional paper contract",
            "A self-executing contract with the terms directly written in code",
            "A digital signature",
            "An encrypted message on the blockchain",
        ],
        correctAnswer: "A self-executing contract with the terms directly written in code",
    },
];

 
 

const QuizPage: React.FC = () => {




    const router = useRouter()

  
    const handleRoute = () => {
        router.push('/')
      }

  // const handleClaimButton = () => {
  //   router.push('/ton_quiz') 
  // }
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [score, setScore] = useState<number>(0);
    const [timeLeft, setTimeLeft] = useState<number>(15); // 15 seconds per question
    const [isQuizFinished, setIsQuizFinished] = useState<boolean>(false);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

    const currentQuestion = questions[currentQuestionIndex];

    // Timer logic
    useEffect(() => {
        
        if (timeLeft > 0) {
            const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timerId); // Clear timeout on component unmount
        } else {
            handleNextQuestion();
        }
    }, [timeLeft]);

    // Handle answer selection
    const handleAnswerClick = (answer: string) => {
        setSelectedAnswer(answer);
        console.log(selectedAnswer)
        if (answer === currentQuestion.correctAnswer) {
            setScore(score + 1);
        }
        handleNextQuestion();
    };

    // Proceed to the next question or finish the quiz
    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setTimeLeft(15); // Reset timer for the next question
            setSelectedAnswer(null);
        } else {
            setIsQuizFinished(true); // End the quiz if there are no more questions
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
                <h1 className="text-2xl font-bold mb-4">Blockchain Quiz</h1>

                {isQuizFinished ? (
                    <div className="text-center">
                          
                        <h2 className="text-xl font-semibold">Quiz Finished!</h2>
                        <p className="mt-4">Your score: {score} / {questions.length}</p>
                      <br />
                      <button onClick={handleRoute} className="bg-blue-500  text-white font-bold py-3 px-8 w-full rounded-2xl shadow-lg transform active:translate-y-1 transition-transform duration-200">Go to home page</button>
                    </div>
                ) : (
                    <>
                        <h2 className="text-lg font-medium mb-4">{currentQuestion.text}</h2>
                        <div className="space-y-2">
                            {currentQuestion.options.map((option) => (
                                <button
                                    key={option}
                                    onClick={() => handleAnswerClick(option)}
                                    className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                        <p className="text-gray-600 mt-4">Time left: {timeLeft} seconds</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default QuizPage;
