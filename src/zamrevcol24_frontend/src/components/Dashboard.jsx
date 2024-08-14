
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import '../App.css';
import Logo from '../pics/logo.png';
import { CustomerServiceOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  HomeOutlined,
  EuroCircleOutlined,

} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Route, Routes, Link } from 'react-router-dom';
import Accounts from './Pages/Accounts';
import Home from './Pages/Home';
import Transaction from './Pages/Payments';
import Market_allocation from './Pages/Market-allocation';
import Reports from './Pages/Reports';
import Payments from './Pages/Payments';

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className='main'>
      <Sider trigger={null} collapsible collapsed={collapsed} >
        <div className="demo-logo-vertical" />
        <div className='profile'>
          <img src={Logo} alt="" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
        >
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<EuroCircleOutlined />}>
            <Link to="/transactions">Payments</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            <Link to="/reports">Reports</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<UploadOutlined />}>
            <Link to="/market-allocation">Market Allocation</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<UploadOutlined />}>
            <Link to="/accounts">Accounts</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
      {/* <FloatButton
      shape="circle"
      type="primary"
      style={{
        right: 94,
      }}
      icon={<CustomerServiceOutlined />}
    /> */}
    
        <Header
          style={{
            padding: 0,
          }} className='header bg-white'
        > 
          <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static"  >
        <Toolbar>
         <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Toolbar>
      </AppBar>
    </Box>
          <div>
          </div>
         
          
        </Header>
        
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <br /><br /><br /><br />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/transactions' element={<Payments/>} />
            <Route path='/reports' element={<Reports/>} />
            <Route path='/market-allocation' element={<Market_allocation/>} />
            <Route path='/accounts' element={<Accounts />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
