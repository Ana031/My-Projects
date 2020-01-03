import React, { useState } from 'react';
import { Menu as MenuUikit, Layout, Sider, Header, Content, SiderToggle } from '@hbsis.uikit/react';
import Routes from '../routes';
import { withRouter } from 'react-router-dom'

const Menu = withRouter(({ history }) => {
  const [openSider, setOpenSider] = useState(true);
  const toggleOpenSiderTrue = () => setOpenSider(!openSider);

  const onSelectMenu = ({ path }) => {
    history.push(path);
  }

  const items = [
    {
      key: 'menu-1',
      label: 'Home',
      path: '/'
    },
    {
      key: 'menu-2',
      label: 'Register',
      items: [
        {
          key: 'menu-2-1',
          label: 'Users',
          path: '/users'
        },
        {
          key: 'menu-2-2',
          label: 'Provider',
          path: '/provider'
        }
      ]
    },
  ]

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Layout>
        <Sider visible={openSider}>
          <MenuUikit
            style={{ height: '100%', backgroundColor: '#2c3848' }}
            items={items}
            onChoose={(menuItem) => onSelectMenu(menuItem)}
          />
        </Sider>
        <Layout>
          <Header>
            <div style={{ marginLeft: '10px' }}>
              <SiderToggle
                active={openSider}
                onToggle={() => toggleOpenSiderTrue()}
              />
            </div>
          </Header>
          <Content>
            <Routes />
          </Content>
        </Layout>
      </Layout>
    </div>
  )
})

export default Menu;
