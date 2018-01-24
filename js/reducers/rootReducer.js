import {combineReducers} from 'redux'
import auth from './authReducer'
import products from './productReducer'
import category from './categoryReducer'


const rootReducer = combineReducers({
	auth,
	products,
	category
	

})

export default rootReducer
