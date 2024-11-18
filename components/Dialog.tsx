import { useState } from 'react';


export default function DialogWithButtons() {

  
    const [isOpen, setIsOpen] = useState(false);


    const openDialog = () => {
        setIsOpen(true);
    };

    const closeDialog = () => {
        setIsOpen(false);
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <button onClick={openDialog} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                Open Dialog
            </button>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-80">
                        <h3 className="text-lg font-semibold mb-4">Choose an Option</h3>
                        <div className="flex justify-between space-x-2">
                            <button
                                onClick={() => alert('Option 1 Selected')}
                                className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg"
                            >
                                Option 1
                            </button>
                            <button
                                onClick={() => alert('Option 2 Selected')}
                                className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg"
                            >
                                Option 2
                            </button>
                            <button
                                onClick={closeDialog}
                                className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
