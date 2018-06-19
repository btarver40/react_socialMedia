import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Image } from 'semantic-ui-react'
import error from '../images/error.jpg'

const NoMatch = () => (
  <Header as="h1" textAlign="center">
    <Image style = {styles.logo} src ={error} />
    Page Not Found Return <Link to="/">Home</Link>
  </Header>
) 
const styles = {
  logo: {
    width: '300px',
  }
}

export default NoMatch