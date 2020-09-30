import { combineReducers } from 'redux'
import { reducer as loginReducer } from '@/components/Login/store'
import { reducer as settingReducer } from '@/components/Home/Setting/store'
export default combineReducers({
    loginReducer,settingReducer
})
