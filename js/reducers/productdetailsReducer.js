import * as TYPES from '../actions/actionTypes'
import initialState from './initialState'

export default function productdetailsReducer(state=initialState.auth,action){ //alert(JSON.stringify(state));
	switch (action.type) {

		case TYPES.PRODUCT_DETAILS_FETCH_SUCCESS:{ 
			//alert('hello'+JSON.stringify(action.data));
			return { 
				busy:false,
				data:action.data
			}
		}
		case TYPES.PRODUCT_DETAILS_FETCH_BUSY:{
			return {
				busy:true,
				data:state.data
			}
		}
		case TYPES.PRODUCT_DETAILS_FETCH_FAILED:{
			return {
				busy:false,
				data:state.data
			}
		}
	



		default:
			return state
	
	}
}
