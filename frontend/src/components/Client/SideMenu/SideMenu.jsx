import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { Link, useLocation, Navigate } from 'react-router-dom'
import './SideMenu.scss'

export function SideMenu(props) {
  const { children } = props
  const { pathname } = useLocation()
  return (
    <div className="side-menu-client">
      <MenuLeft pathname={pathname} />
      <div className="content">{children}</div>
    </div>
  )
}

function MenuLeft(props) {
  const { pathname } = props
  // const { auth } = useAuth()

  return (
    <Menu fixed="left" borderless className="side" vertical>
      <Menu.Item as={Link} to={'/'} active={pathname === '/'}>
        <Icon name="home" />
        Home
      </Menu.Item>

      <Menu.Item
        as={Link}
        to={'/sucursales'}
        active={pathname === '/sucursales'}
      >
        <Icon name="list" />
        Sucursales
      </Menu.Item>
    </Menu>
  )
}
