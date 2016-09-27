export function getProjects(dispatch) {
  
  let projects = [{name: 'Likes', id: 1}, {name: 'Breacks', id: 2 }]
  
  return (dispatch) => {
      dispatch({
        type: "GET_PROJECTS",
        payload: projects
      })
  }
}
