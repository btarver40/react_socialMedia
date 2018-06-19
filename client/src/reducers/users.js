import axios from 'axios'


const SOCIAL = 'SOCIAL'
const ADD_SOCIAL = 'ADD_SOCIAL'
const UPDATE_SOCIAL = 'UPDATE_SOCIAL'
const DELETE_SOCIAL = 'DELETE_SOCIAL'

// THEN STUB OUT MY CRUD ACTIONS 3RD AND FILL THEM OUT
export const getSocial = () => {
  return (dispatch) => {
    axios.get('/api/users')
      .then(res => {
        dispatch({type: SOCIAL, users: res.data})
      })
  }
}

export const addSocial = (user) => {
  return (dispatch) => {
    axios.post('/api/users', {user})
      .then(res => {
        dispatch({type: ADD_SOCIAL, user: res.data})
      })
  }
}

export const updateSocial = (user) => {
  return (dispatch) => {
    axios.put(`/api/users/${user.id}`, {user})
      .then(res => {
        dispatch({type: UPDATE_SOCIAL, user: res.data})
      })
  }
}

export const deleteSocial = (id) => {
  return (dispatch) => {
    axios.delete(`/api/users/${id}`)
      .then(res => dispatch({type: DELETE_SOCIAL, id}) )
  }
}

// DO THIS PART 2ND AND MAKE THE CASES THEN BUILD THEM OUT
export default (state = [], action) => {
  switch(action.type) {
    case SOCIAL:
      return action.users
    case ADD_SOCIAL:
      return [action.user, ...state]
    case UPDATE_SOCIAL:
      return state.map(u => {
        if (u.id === action.user.id)
          return action.user
        return u
      })
    case DELETE_SOCIAL:
      return state.filter(u => u.id !== action.id)
    default:
      return state
  }
}