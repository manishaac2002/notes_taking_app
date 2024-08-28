import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import CalendarEvent from '../components/CalendarEvent';

const WritePage = () => {
    const navigate = useNavigate()

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
        </>
    )
}

export default WritePage