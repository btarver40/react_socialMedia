import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { 
  Container, 
  Header, 
  Card,
  Button,
} from 'semantic-ui-react'
// import { getSocial } from '../reducers/users'
import { deleteSocial } from '../reducers/users'

class Users extends React.Component {
   
  
  
  users = () => {
    return this.props.users.map( user => 
      <Card key={user.id}>
        <Card.Content>
          <Card.Description>
            {user.post}
          </Card.Description>
          <Card.Description>
            {user.body}
          </Card.Description>
          <Card.Meta>
            {user.author}
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/users/${user.id}`}>
            View
          </Link>
          <Button onClick={() => this.props.dispatch(deleteSocial(user.id))}>
            Delete
          </Button>
        </Card.Content>
      </Card>
    )
  }

  render() {
    return (
      <Container>
        <Header as="h4" textAlign="center">Posts</Header>
        <Card.Group itemsPerRow={3}>
          { this.users() }
        </Card.Group>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users }
}

export default connect(mapStateToProps)(Users)