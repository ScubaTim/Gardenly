import axios from 'axios'
import { url } from '../../api'
import { toast } from 'react-toastify'

export const signUp = (user) => {
    return (dispatch) => {
        axios
            .post(`${url}/signup`, user)
            .then((token) => {

                console.log('token in authAction', token)

                localStorage.setItem("token", token.data)

                dispatch({
                    type: "SIGN_UP",
                    token: token.data
                })
            })
            .catch((error) => {
                console.log('Error in authActions signing up', error.response)
                toast.error(error.response?.data, {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
            })
    }
}

export const signIn = (credentials) => {
    return (dispatch) => {
        axios
            .post(`${url}/signin`, credentials)
            .then((token) => {

                console.log('token in signIn', token)

                localStorage.setItem("token", token.data)

                dispatch({
                    type: "SIGN_IN",
                    token: token.data
                })
            })
            .catch((error) => {
                console.log('Error in authActions signing in', error.response)
                toast.error(error.response?.data, {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
            })
    }
}

export const loadUser = () => {
    return (dispatch, getState) => {
        const state = getState()
        const token = getState().auth.token
        console.log('state in loadUser', state)
        console.log('token in loadUser authAction', token)
        if (token) {
            dispatch({
                type: "USER_LOADED",
                token
            })
        } else {
            console.log('no token in loadUser auth action, returning null')
            return null
        }
    }
}

export const signOut = () => {
    return (dispatch) => {
        dispatch({
            type: "SIGN_OUT"
        })
    }
}