/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setAuth] = useState(() => {
        if (localStorage.getItem("accessToken")) {
            return true;
        }

        return false;
    });

    if (isAuthenticated) {
        return navigate("/dashboard");
    }

    return (
        <div className="h-screen w-full flex">
            <div className="lg:w-7/12 lg:block hidden h-full auth-image" />
            <div className="flex jusify-center items-center lg:w-5/12 lg:px-24 px-8">
                <Outlet />
            </div>
        </div>
    );
}

export default AuthLayout;
