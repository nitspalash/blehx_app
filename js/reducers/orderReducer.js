import * as TYPES from '../actions/actionTypes'
import initialState from './initialState'

export default function orderReducer(state=initialState.auth,action){ //alert(JSON.stringify(state));
	switch (action.type) {

		case TYPES.ORDER_FETCH_SUCCESS:{ 
			//alert(JSON.stringify(action.data));
			return { 
				busy:false,
				data:action.data
			}
		}
		case TYPES.ORDER_FETCH_BUSY:{
			return {
				busy:true,
				data:state.data
			}
		}
		case TYPES.ORDER_FETCH_FAILED:{
			return {
				busy:false,
				data:state.data
			}
		}
	



		default:
			return state
	
	}
}
