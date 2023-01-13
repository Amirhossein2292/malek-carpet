import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Container } from '@mui/material'
import React from 'react'
import AppRoutes from './components/AppRoutes'
import Navbar from './components/Navbar'

export default function App() {

  const [isOpen, setIsOpen] = useState(false)
  

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <>
      <Router>
        <Navbar toggle={toggle} />
        <Container>
          <AppRoutes  />
        </Container>
      </Router>
    </>
  )
}
