import React from 'react'
import { connect } from 'react-redux'
import {
  Divider,
  Header,
  Container,
  Table,
  Button,
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import UserForm from './UserForm'

class UserView extends React.Component {
  state = { showForm: false }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  render () {
    const { user = {} } = this.props
    const { showForm } = this.state
    return (
      <Container>
        <Link to="/users">View all Posts</Link>
        <Button onClick={this.toggleForm}>
          { showForm ? 'Cancel' : 'Edit' }
        </Button>
      { showForm ? 
          <PostForm closeForm={this.toggleForm} {...user} />
          :
          <div>
            <Header as="h3" textAlign="center">{user.author}</Header>
            <Table definition>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Post</Table.Cell>
                  <Table.Cell>{user.post}</Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>Author</Table.Cell>
                  <Table.Cell>{user.author}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        }
      </Container>
    ) 
  }
}

const mapStatetoProps = (state, props) => {
  const { id } = props.match.params
  const user = state.users.find( u => u.id === parseInt(id, 10) )
  return { user }
}

export default connect(mapStatetoProps)(UserView)