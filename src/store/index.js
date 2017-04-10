// import reducers from '../reducers'
// import { createStore } from 'redux'

// export default createStore(reducers);

// async
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from '../reducers'

export default createStore(reducers, applyMiddleware(thunkMiddleware));