import * as TYPES from '../actions/actionTypes'
import initialState from './initialState'

export default function categoryReducer(state=initialState.auth,action){ 
	switch (action.type) {

		case TYPES.CATEGORY_FETCH_SUCCESS:{
			return {
				busy:false,
				data:action.data
			}
		}
		case TYPES.CATEGORY_FETCH_BUSY:{
			return {
				busy:true,
				data:state.data
			}
		}
		case TYPES.CATEGORY_FETCH_FAILED:{
			return {
				busy:false,
				data:state.data
			}
		}



		default:
			return state
	
	}
}
