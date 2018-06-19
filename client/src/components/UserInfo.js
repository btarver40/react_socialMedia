import React from 'react'
// import { connect } from 'react-redux'
import {
  List,
} from 'semantic-ui-react'

const UserInfo = ({ users }) => (
  <List divided relaxed>
    { users.map( user =>
        <List.Item key={user.id}>
          <List.Content>
            <List.Header>{user.name}</List.Header>
            <List.Description>
              Views: {user.views}
            </List.Description>
          </List.Content>
        </List.Item>
      )
    }
  </List>
)


// const mapStateToProps = (state) => {
//   const { users, appClick } = state
//   const ids = Object.keys(appClick)
//   const appData = ids.map( id => {
//     const { name, id } = users.find( u => u.id === parseInt(id, 10) )
//     return { id, name, views: appClick[id] }
//   })
//   return {
//     users: userData,
//   }
}

export default UserInfo