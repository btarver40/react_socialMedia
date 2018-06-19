// THIS IS OUR REDUX STORE WHICH IS WHY IT IS CALLED store.js
import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

// compose to add things on to redux like the devtools
// middleWare to add on to redux
// thunk is middleware for redux


const enhancers = compose (
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(rootReducer, {}, enhancers)

if (module.hot) 
  {module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').defualt
    store.replaceReducer(nextRootReducer)
  })
}

export default store
