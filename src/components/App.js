import React from 'react'
import Addmovie from '../pages/Addmovie'
import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import { render } from '@testing-library/react'
import axios from 'axios'

const App = () => {

    
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Addmovie" element={<Addmovie />} />
            

        </Routes>
    )
    
}

export default App

