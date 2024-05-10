import React from 'react'
import { SideMenu, TopMenu } from '../../components/main'
import './ClientLayout.scss'

export function ClientLayout(props) {
  const { children } = props

  return (
    <div className="client-layout">
      <div className="client-layout__main-content">
        <SideMenu>{children}</SideMenu>
      </div>
    </div>
  )
}
