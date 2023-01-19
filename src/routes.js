import React from "react";
import { Routes, Route } from 'react-router-dom'

const RoutesPath = () => {
    <div>
        <Routes>
            <Route path='/login' element={<ReLogin />} />
            <Route path='/home' element={<Home />} />
            <Route path='/calculator' element={<Calculator />} />
            <Route path='/parentChild' element={<ParentChild />} />
        </Routes>
    </div>
}

export default RoutesPath