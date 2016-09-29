import axios from 'axios'

function fetchProjects(data) {
  return {
    type: "GET_PROJECTS",
    payload: data 
  }
}
export default function getProjects() {
  return (dispatch)=>{
    axios.get(`/api/projects.json`)
    .then(response => dispatch(fetchProjects(response.data)))
  }
}
