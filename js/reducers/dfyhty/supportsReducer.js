import * as TYPES from '../actions/actionTypes'
import initialState from './initialState'

export default function supportsReducer(state=initialState.supports,action){
	switch (action.type) {
		case TYPES.SUPPORT_FETCH_SUCCESS:{
			return {
				busy:false,
				data:action.data
			}
		}
		case TYPES.SUPPORT_FETCH_BUSY:{
			return {
				busy:true,
				data:state.data
			}
		}
		case TYPES.SUPPORT_FETCH_FAILED:{
			return {
				busy:false,
				data:state.data
			}
		}
		case TYPES.SUPPORT_ADD_SUCCESS:{
			return {
				busy:false,
				data:state.data
			}
		}
		case TYPES.SUPPORT_ADD_BUSY:{
			return {
				busy:true,
				data:state.data
			}
		}
		case TYPES.SUPPORT_ADD_FAILED:{
			return {
				busy:false,
				data:state.data
			}
		}
		case TYPES.SUPPORT_COMMENTS_FETCH_SUCCESS:{
			return {
				busy:false,
				data:action.data
			}
		}
		case TYPES.SUPPORT_COMMENT_ADD_BUSY:{
			return {
				busy:true,
				data:state.data
			}
		}
		case TYPES.SUPPORT_COMMENT_ADD_SUCCESS:{
			return {
				busy:false,
				data:state.data
			}
		}
		case TYPES.SUPPORT_COMMENT_ADD_FAILED:{
			return {
				busy:false,
				data:state.data
			}
		}
		default:
			return state
	}
}
