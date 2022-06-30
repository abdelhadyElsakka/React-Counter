import {createStore} from 'redux'

const ADD_TASK="ADD_TASK"
const DELETE_TASK="DELETE_TASK"

//Action

export const addTask = (payload) => { 
    return{
        type:ADD_TASK,
        payload
    }
 }

 export const deleteTask = (payload) => { 
    return{
        type:DELETE_TASK,
        payload
    }
 }



//Initial State
const InitialState = {
    tasks:[
        {
          title: "learn node js",
          content: "Lorem ipsum dolor sit amet.",
        },
        {
          title: "go to the sea",
          content: "Lorem ipsum dolor sit amet.",
        },
        {
          title: "walk the dog",
          content: "Lorem ipsum dolor sit amet.",
        },
      ]
}

//Reducer

const TasksReducer = (state=InitialState,action) => { 
    switch(action.type) {
        case ADD_TASK:
          return{...state,tasks:[...state.tasks, action.payload]}
        case DELETE_TASK:
          return {...state, tasks:[...state.tasks.filter((task,index)=>{return index !== action.payload})]}
        default:
          return state;
      }
 }



//Store

export const store = createStore(

    TasksReducer


);