import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import CalendarEvent from '../components/CalendarEvent';

const WritePage = () => {
    const navigate = useNavigate()
    const [note, setNote] = useState('');
    const [notes, setNotes] = useState([]);

    const handleSaveNote = () => {
        if (note.trim()) {
            setNotes([...notes, note]);
            setNote(''); // Clear the input after saving
        }
    };
    return (
        <><section className="rounded-2xl m-2 p-5 mb-10 bg-gray-100">

            <div className="container mx-auto">
                <div className="flex">
                    <Link className="text-3xl font-semibold pr-5 mr-5" to="/">
                        Notes App
                    </Link>

                    <div className="flex ml-auto">

                        <button
                            className="flex ml-auto text-medium font-bold bg-white shadow-md px-3 py-2 rounded hover:bg-black hover:text-white"
                            onClick={() => navigate('/')}
                        >
                            <span className="pr-1 hidden lg:block">Read</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>
                        </button>

                    </div>
                </div>
            </div>
        </section>
            <section>
                <div className='border border-black m-2 '>

                    <div className="p-4">

                        <div className="mb-4">
                            <input
                                type="text"
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                                placeholder="Enter a note"
                                className="p-2 border border-gray-300 rounded"
                            />
                            <button
                                onClick={handleSaveNote}
                                className="ml-2 p-2 bg-blue-500 text-white rounded"
                            >
                                Save
                            </button>
                        </div>

                        <div>
                            {notes.length > 0 ? (
                                <ul>
                                    {notes.map((note, index) => (
                                        <li key={index} className="mb-2 p-2 border-b border-gray-300">
                                            {note}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No notes available. Start adding some!</p>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WritePage