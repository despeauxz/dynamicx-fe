import React from "react";
import { useNavigate } from "react-router-dom";

const Base = () => {
    const navigate = useNavigate();

    return (
        <div className="mx-auto w-full">
            <img src="/logo.jpeg" alt="Logo" className="mx-auto w-8 mb-12" />
            <div className="flex flex-col">
                <button onClick={() => navigate("/login")} className="border text-gray-600 transition-all duration-500 ease-in-out hover:bg-blue-400 hover:text-white rounded-full w-full mb-8 py-3">
                    Login
                </button>
                <button onClick={() => navigate("/register")} className="border text-gray-600 transition-all duration-500 ease-in-out hover:bg-rose-400 hover:text-white rounded-full w-full mb-4 py-3">
                    Register
                </button>
            </div>
        </div>
    )
}

export default Base;
