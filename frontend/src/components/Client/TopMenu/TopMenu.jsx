import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import './TopMenu.scss'

export function TopMenu() {
  // const logout = () => console.log('logout OK')
  return (
    <Menu fixed="top" className="top-menu-client">
      <Menu.Item className="top-menu-client__logo">
        <p>Reporteador Chingon</p>
      </Menu.Item>

      {/* <Menu.Menu position="right">
        <Menu.Item>Hello, {'{username}'}</Menu.Item>
        <Menu.Item onClick={logout}>
          <Icon name="sign-out" />
        </Menu.Item>
      </Menu.Menu> */}
    </Menu>
  )
}
