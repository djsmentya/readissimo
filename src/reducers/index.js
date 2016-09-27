import * as ActionTypes from '../actions'
import merge from 'lodash/merge'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

const initialState = {
  projects:[]
}
export function projects(state = initialState , action) {
  switch (action.type) {
    case 'GET_PROJECTS':
      return { ...state, projects: action.payload }
    
    default: 
      return state;
  }

  return state
}

// Updates the pagination data for different actions.
const rootReducer = combineReducers({
  projects,
  routing
})

export default rootReducer
