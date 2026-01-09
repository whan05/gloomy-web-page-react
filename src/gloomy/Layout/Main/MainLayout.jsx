import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigation } from '../../components'

export const MainLayout = () => {
  return (
    <div>
        <Navigation/>
        <div>
            <Outlet/>
        </div>
        <p>Footer</p>
    </div>
  )
}
