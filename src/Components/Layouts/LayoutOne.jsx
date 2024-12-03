import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Foote from '../Footer/Foote'

const LayoutOne = () => {
  return (
    <>
      <Nav/>
      <Outlet/>
      <Foote/>
    </>
  )
}

export default LayoutOne