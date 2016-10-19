import axios from 'axios'

function fetchProjects(data) {
  return {
    type: "GET_PROJECTS",
    payload: data
  }
}

function fetchTasks(data) {
  return {
    type: "GET_TASKS",
    payload: data
  }
}

function updateTask(data, id) {
  return {
    type: "UPDATE_TASKS",
    payload: data,
    id: id
  }
}

export function getProjects() {
  return (dispatch)=>{
    axios.get(`/api/projects.json`)
    .then(response => dispatch(fetchProjects(response.data)))
  }
}

export function getTasks(projectId) {
  return (dispatch)=>{
    axios.get(`/api/projects/${projectId}/tasks.json`)
    .then(response => dispatch(fetchTasks(response.data)))
  }
}

export function dragTask(taskId, val) {
  return updateTask(val, taskId)
}
