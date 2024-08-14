import React from 'react'
import { Button, Card, Flex, Typography } from 'antd';
import Bulb from '../../pics/1.jpeg';
import Epay from '../../pics/2.jpeg';
import Moneytrans from '../../pics/3.jpg';
import Rec1 from '../../pics/1.jpeg';
import Transaction from '../../pics/4.jpeg';
import { Route, Routes, Link } from 'react-router-dom';


const Home = () => {
  const cardStyle = {
    width: 620,
  };
  const imgStyle = {
    display: 'block',
    width: 273,
  };
  return (
    <div className='cardmain'>
      <div className='card'>
    <Card
    hoverable
    style={cardStyle}
    styles={{
      body: {
        padding: 0,
        overflow: 'hidden',
      },
    }}
  >
    <Flex justify="space-between">
      <img
        alt="avatar"
        src={Rec1}
        style={imgStyle}
      />
      <Flex
        vertical
        align="flex-end"
        justify="space-between"
        style={{
          padding: 32,
        }}
      >
        <Typography.Title level={4}>
          "Revenue collection made easy, working for clean service"
        </Typography.Title>
        <Button type="primary">
        <Link to="/transactions">Get started</Link>
        </Button>
      </Flex>
    </Flex>
  </Card>
  <Card
    hoverable
    style={cardStyle}
    styles={{
      body: {
        padding: 0,
        overflow: 'hidden',
      },
    }}
  >
    <Flex justify="space-between">
      <img
        alt="avatar"
        src={Moneytrans}
        style={imgStyle}
      />
      <Flex
        vertical
        align="flex-end"
        justify="space-between"
        style={{
          padding: 32,
        }}
      >
        <Typography.Title level={4}>
         "phasing out the idea of hand to hand trnasfer of revenue, here to make a difference"
        </Typography.Title>
        <Button type="primary">
        <Link to="/transactions">Get started</Link>
        </Button>
      </Flex>
    </Flex>
  </Card>
  </div>
  <div className='card'>
  <Card
    hoverable
    style={cardStyle}
    styles={{
      body: {
        padding: 0,
        overflow: 'hidden',
      },
    }}
  >
    <Flex justify="space-between">
      <img
        alt="avatar"
        src={Epay}
        style={imgStyle}
      />
      <Flex
        vertical
        align="flex-end"
        justify="space-between"
        style={{
          padding: 32,
        }}
      >
        <Typography.Title level={4}>
          "Paying in the comfort of your zone, relax and enjoy"
        </Typography.Title>
        <Button type="primary">
        <Link to="/transactions">Get started</Link>
        </Button>
      </Flex>
    </Flex>
  </Card>
  <Card
    hoverable
    style={cardStyle}
    styles={{
      body: {
        padding: 0,
        overflow: 'hidden',
      },
    }}
  >
    <Flex justify="space-between">
      <img
        alt="avatar"
        src={Bulb}
        style={imgStyle}
      />
      <Flex
        vertical
        align="flex-end"
        justify="space-between"
        style={{
          padding: 32,
        }}
      >
        <Typography.Title level={4}>
          "THE FUTER IS HERE!!!"
        </Typography.Title>
        <Button type="primary">
        <Link to="/transactions">Get started</Link>
        </Button>
      </Flex>
    </Flex>
  </Card>
  </div>
  <Routes>
            <Route path='/transactions' element={<Transaction />} />
   </Routes>
  </div>
  
  
  )
}
 
export default Home