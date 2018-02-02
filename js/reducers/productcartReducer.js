import * as TYPES from '../actions/actionTypes'
import initialState from './initialState'

export default function productcartReducer(state=initialState.auth,action){ //alert(JSON.stringify(state));
	switch (action.type) {

		case TYPES.PRODUCT_CART_ADD_SUCCESS:{ 
			//alert('hello'+JSON.stringify(action.data));
			return { 
				busy:false,
				data:action.data
			}
		}
		case TYPES.PRODUCT_CART_ADD_BUSY:{
			return {
				busy:true,
				data:state.data
			}
		}
		case TYPES.PRODUCT_CART_ADD_FAILED:{
			return {
				busy:false,
				data:state.data
			}
		}
	
		case TYPES.PRODUCT_CART_FETCH_SUCCESS:{ 
			//alert('hello'+JSON.stringify(action.data));
			return { 
				busy:false,
				data:action.data
			}
		}
		case TYPES.PRODUCT_CART_FETCH_BUSY:{
			return {
				busy:true,
				data:state.data
			}
		}
		case TYPES.PRODUCT_CART_FETCH_FAILED:{
			return {
				busy:false,
				data:state.data
			}
		}

		case TYPES.PRODUCT_CART_DELETE_SUCCESS:{ 
			//alert('hello'+JSON.stringify(action.data));
			return { 
				busy:false,
				data:action.data
			}
		}
		case TYPES.PRODUCT_CART_DELETE_BUSY:{
			return {
				busy:true,
				data:state.data
			}
		}
		case TYPES.PRODUCT_CART_DELETE_FAILED:{
			return {
				busy:false,
				data:state.data
			}
		}

		default:
			return state
	
	}
}
