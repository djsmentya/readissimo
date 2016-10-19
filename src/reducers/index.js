//import merge from 'lodash/merge'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

const initialState = {
  projects:[]
}
export function readissimo(state = initialState , action) {
  switch (action.type) {
    case 'GET_PROJECTS':
      return { ...state, projects: action.payload }
    case 'GET_TASKS':
      return { ...state, tasks: action.payload }
    case 'UPDATE_TASKS':
      return Object.assign({}, state, {
          tasks: state.tasks.map((task, index) => {
            if (task.id === action.id) {
              return Object.assign({}, task, action.payload)
            } else {
              return task
            }
          })
        }
      )
    default:
      return state;
  }
}

// Updates the pagination data for different actions.
const rootReducer = combineReducers({
  readissimo,
  routing
})

export default rootReducer
