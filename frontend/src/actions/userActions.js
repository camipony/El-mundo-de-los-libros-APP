import{
    GET_USER,
    DELETE_USER,
    UPDATE_USER,
    USER_LOADING
} from '../types/userTypes'

import axios from "axios";


export const getUser = (id)=> async (dispatch)=>{
    dispatch({
        type: USER_LOADING
    })
    const config ={
        Headers:{
            'Content-Type' : 'application/json'
        }
    }
    
    await axios.get(`${process.env.REACT_APP_API_URL}api/user/${id}/`,config).then((res)=>{
        dispatch({
            type: GET_USER,
            payload: res.data
        })
    })
}


export const delete_user = (id)=> async (dispatch)=>{
    dispatch({
        type: USER_LOADING
    })
    const config ={
        Headers:{
            'Content-Type' : 'application/json'
        }
    }
    
    await axios.delete(`${process.env.REACT_APP_API_URL}api/user/${id}/`,config).then((res)=>{
        dispatch({
            type: DELETE_USER,
            payload: res.data
        })
    })
}


export const update_user = (id)=> async (dispatch)=>{
    dispatch({
        type: USER_LOADING
    })
    const config ={
        Headers:{
            'Content-Type' : 'application/json'
        }
    }
    
    await axios.put(`${process.env.REACT_APP_API_URL}api/user/${id}/`,config).then((res)=>{
        dispatch({
            type: UPDATE_USER,
            payload: res.data
        })
    })
}
