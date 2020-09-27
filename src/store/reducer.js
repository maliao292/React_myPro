import { logIn } from './actionType'
const defaultState = {
    token: '',
    isLoginSuccess:false
}
export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case logIn:
            newState.token = action.token
            newState.isLoginSuccess = true
            sessionStorage.setItem('yhReact', action.token)
            return newState
        default: 
            return state
    }

}