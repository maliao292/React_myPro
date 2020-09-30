import { roleList } from './actionType'
import { fromJS } from 'immutable'
const defaultState = fromJS({
    roleListArr:[]
})
export default (state = defaultState, action) => {
     switch (action.type) {
        case roleList:
            return state.set('roleListArr',action.value)
        default:
            return state
    }
}