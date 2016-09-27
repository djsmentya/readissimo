import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import ProjectPage from './components/ProjectPage'
import Projects from './components/Projects'

export default <Route path="/" component={App}>
  <IndexRoute component={Projects} />
  <Route path="projects/:id"
         component={ProjectPage} />

</Route>
