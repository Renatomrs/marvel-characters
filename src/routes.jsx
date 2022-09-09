import React from "react"

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import CharactersList from "./pages/CharactersList"
import CharacterDetails from "./pages/CharacterDetails"

import './global.css'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/characters/:id" element={<CharacterDetails />} />
      </Routes>
  </BrowserRouter>
  )
}

export default AppRoutes
