import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import {
  Loader,
  Segment,
  Dimmer,
} from 'semantic-ui-react'
import Users from './Users'
import UserInfo from './UserInfo'
import UserView from './UserView'
import { getSocial } from '../reducers/users'


class FetchUsers extends React.Component {
  state = { loaded: false }

  componentDidMount() {
    this.props.dispatch(getSocial(this.setLoaded))
  }

  setLoaded = () => {
    this.setState({ loaded: true })
  }

  render() {
    const { loaded } = this.state
    if (loaded) {
      return (
        <Switch>
          <Route exact path="/users" component={Users} />
          <Route exact path="/users/info" component={UserInfo} />
          <Route exact path="/users/:id" component={UserView} />
        </Switch>
      )
    } else {
      return (
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      )
    }
  }
}

export default connect()(FetchUsers)






