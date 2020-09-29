import { logIn } from './actionType'
const defaultState = {
    token: '',
    isLoginSuccess:false
}
export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case logIn:
            newState.token = action.value
            newState.isLoginSuccess = true
            localStorage.setItem('yhReact', action.value)
            return newState
        default: 
            return state
    }

}