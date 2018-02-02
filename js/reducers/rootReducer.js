import {combineReducers} from 'redux'
import auth from './authReducer'
import product from './productReducer'
import category from './categoryReducer'
import productdetails from './productdetailsReducer'
import productcart from './productcartReducer'
import order from './orderReducer'
import orderdetails from './orderdetailsReducer'

const rootReducer = combineReducers({
	auth,
	product,
	category,
	productdetails,
	productcart,
	order,
	orderdetails
	

})

export default rootReducer
