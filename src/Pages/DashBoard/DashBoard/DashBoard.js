import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddAdmin from './../AddAdmin/AddAdmin';
import DashBoardNav from './../DashBoardNav/DashBoardNav';
import UserProfile from './../UserProfile/UserProfile';

const DashBoard = () => {
    return (
        <div>
            <DashBoardNav />
            <Routes>
                <Route path="/" element={<UserProfile />} />
                <Route path="add_admin" element={<AddAdmin />} />
            </Routes>
        </div>
    );
};

export default DashBoard;