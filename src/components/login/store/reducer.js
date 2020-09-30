import { logIn } from './actionType'
import { fromJS } from 'immutable'
const defaultState = fromJS({
    token: '',
    isLoginSuccess: false
})
export default (state = defaultState, action) => {
     switch (action.type) {
        case logIn:
            localStorage.setItem('yhReact', action.value)
            return state.merge({'token':action.value,'isLoginSuccess':true})
        default:
            return state
    }
}