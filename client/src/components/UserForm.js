import React from 'react'
import { connect } from 'react-redux'
import { Form } from 'semantic-ui-react'
import { updateSocial, addSocial } from '../reducers/users'

class UserForm extends React.Component {
  initialState = {
    author: '', 
    post: '', 
    body: ''
  }

  state = {...this.initialState}

  componentDidMount() {
    if (this.props.id)
      this.setState({ ...this.props })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const user = this.state
    const { closeForm, dispatch } = this.props
    const myFunc = this.props.id ? updateSocial : addSocial
    dispatch(myFunc(user))
    this.setState({...this.initialState})
    closeForm()
  }

  render() {
    const { author, post, body} = this.props
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="author"
          required
          defaultValue={author}
          onChange={this.handleChange}
          label="Author"
        />
        <Form.Input
          name="post"
          defaultValue={post}
          onChange={this.handleChange}
          label="Post"
        />
        <Form.Input
          name="body"
          defaultValue={body}
          onChange={this.handleChange}
          label="Body"
        />
        <Form.Button>Save</Form.Button>
      </Form>
    )
  }
}

export default connect()(UserForm)