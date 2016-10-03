import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import Dashboard from './containers/projects/show'
import Projects from './components/Projects'

export default <Route path="/" component={App}>
  <IndexRoute component={Projects} />
  <Route path="projects/:id"
         component={Dashboard} />

</Route>
