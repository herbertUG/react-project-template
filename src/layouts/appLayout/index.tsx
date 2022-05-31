import React from 'react'
import { Outlet } from 'react-router-dom'

function index() {
  return (
    <>
    {/* <NavBar/> */}
    {/* <SideBar/> */}
    <main>
      <div>
        <Outlet />
      </div>
    </main>
    </>
  )
}

export default index