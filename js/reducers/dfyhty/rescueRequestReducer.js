import * as TYPES from '../actions/actionTypes'
import initialState from './initialState'

export default function rescueRequestReducer(state=initialState.rescueRequest,action){
	switch (action.type) {
		case TYPES.RESCUEREQUEST_FETCH_SUCCESS:{
			return {
				busy:false,
				data:action.data
			}
		}
		case TYPES.RESCUEREQUEST_FETCH_BUSY:{
			return {
				busy:true,
				data:state.data
			}
		}
		case TYPES.RESCUEREQUEST_FETCH_FAILED:{
			return {
				busy:false,
				data:state.data
			}
		}
		case TYPES.RESCUEREQUEST_ADD_SUCCESS:{
			return {
				busy:false,
				data:state.data
			}
		}
		case TYPES.RESCUEREQUEST_ADD_BUSY:{
			return {
				busy:true,
				data:state.data
			}
		}
		case TYPES.RESCUEREQUEST_ADD_FAILED:{
			return {
				busy:false,
				data:state.data
			}
		}
		case TYPES.RESCUEREQUEST_COMMENTS_FETCH_SUCCESS:{
			return {
				busy:false,
				data:action.data
			}
		}
		case TYPES.RESCUEREQUEST_COMMENT_ADD_BUSY:{
			return {
				busy:true,
				data:state.data
			}
		}
		case TYPES.RESCUEREQUEST_COMMENT_ADD_SUCCESS:{
			return {
				busy:false,
				data:state.data
			}
		}
		case TYPES.RESCUEREQUEST_COMMENT_ADD_FAILED:{
			return {
				busy:false,
				data:state.data
			}
		}
		default:
			return state
	}
}
