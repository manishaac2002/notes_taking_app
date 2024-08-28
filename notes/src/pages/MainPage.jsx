import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import CalendarEvent from '../components/CalendarEvent';

const MainPage = () => {

    const navigate = useNavigate()

    return (
        <>
            <header className="rounded-2xl m-2 p-5 mb-10 bg-gray-100 shadow-md">
                <div className="container mx-auto">
                    <div className="flex">
                        <Link className="text-3xl font-semibold pr-5 mr-5" to="/">
                            Notes App
                        </Link>

                        <div className="flex ml-auto">
                            <button
                                className="flex ml-8 text-medium font-bold bg-white shadow-md px-3 py-2 rounded hover:bg-black hover:text-white"
                                onClick={() => navigate('/WritePage')}
                            >
                                <span className="pr-1 hidden lg:block">Write</span>
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
                                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <section>
                <CalendarEvent />
            </section>
        </>
    )
}

export default MainPage