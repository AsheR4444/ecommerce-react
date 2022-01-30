import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'

import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'

export const App = () => {
    const [pizzas, setPizzas] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:3000/db.json')
            .then(({ data }) => setPizzas(data.pizzas))

        // fetch('http://localhost:3000/db.json')
        //     .then(response => response.json())
        //     .then(json => setPizzas(json.pizzas))
    }, [])

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Routes>
                    <Route index element={<Home items={pizzas} />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </div>
    )
}
