import * as TYPES from '../actions/actionTypes'
import initialState from './initialState'

export default function eventsReducer(state=initialState.events,action){
	switch (action.type) {
		case TYPES.EVENTS_FETCH_SUCCESS:{
			return {
				busy:false,
				data:action.data
			}
		}
		case TYPES.EVENTS_FETCH_BUSY:{
			return {
				busy:true,
				data:state.data
			}
		}
		case TYPES.EVENTS_FETCH_FAILED:{
			return {
				busy:false,
				data:state.data
			}
		}
		case TYPES.EVENT_ADD_SUCCESS:{
			return {
				busy:false,
				data:state.data
			}
		}
		case TYPES.EVENT_ADD_BUSY:{
			return {
				busy:true,
				data:state.data
			}
		}
		case TYPES.EVENT_ADD_FAILED:{
			return {
				busy:false,
				data:state.data
			}
		}
		case TYPES.EVENT_LIKE_SUCCESS:{
			return {
				busy:false,
				data:action.data
			}
		}
		case TYPES.EVENTS_COMMENTS_FETCH_SUCCESS:{
			return {
				busy:false,
				data:action.data
			}
		}
		case TYPES.EVENT_COMMENT_ADD_BUSY:{
			return {
				busy:true,
				data:state.data
			}
		}
		case TYPES.EVENT_COMMENT_ADD_SUCCESS:{
			return {
				busy:false,
				data:state.data
			}
		}
		case TYPES.EVENT_COMMENT_ADD_FAILED:{
			return {
				busy:false,
				data:state.data
			}
		}
		default:
			return state
	}
}
