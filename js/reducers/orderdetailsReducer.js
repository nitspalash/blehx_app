import * as TYPES from '../actions/actionTypes'
import initialState from './initialState'

export default function orderdetailsReducer(state=initialState.auth,action){ //alert(JSON.stringify(state));
	switch (action.type) {

		case TYPES.ORDERDETAILS_FETCH_SUCCESS:{ 
			//alert('fghfgh'+JSON.stringify(action.data));
			return { 
				busy:false,
				data:action.data
			}
		}
		case TYPES.ORDERDETAILS_FETCH_BUSY:{
			return {
				busy:true,
				data:state.data
			}
		}
		case TYPES.ORDERDETAILS_FETCH_FAILED:{
			return {
				busy:false,
				data:state.data
			}
		}
	



		default:
			return state
	
	}
}
