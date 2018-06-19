import React from 'react'
import {Link} from 'react-router-dom'
import {Header} from 'semantic-ui-react'


const Home = () => (
  <Header textAlign="center" as="h1">
  Welcome to the <Link to="/users">Insta Post Social Media</Link>
  </Header>
)

export default Home