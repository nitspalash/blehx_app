import * as TYPES from '../actions/actionTypes'
import initialState from './initialState'

export default function productReducer(state=initialState.auth,action){ 
	switch (action.type) {

		case TYPES.PRODUCTS_FETCH_SUCCESS:{ 
			//alert(JSON.stringify(action.data));
			return { 
				busy:false,
				data:action.data
			}
		}
		case TYPES.PRODUCTS_FETCH_BUSY:{
			return {
				busy:true,
				data:state.data
			}
		}
		case TYPES.PRODUCTS_FETCH_FAILED:{
			return {
				busy:false,
				data:state.data
			}
		}
	



		default:
			return state
	
	}
}
