import * as TYPES from '../actions/actionTypes'
import initialState from './initialState'

export default function authReducer(state=initialState.auth,action){
	switch (action.type) {
		case TYPES.AUTH_STATE_BUSY:{
			return {
				loggedIn:false,
				busy:true,
				data:[]
			}
		}
		case TYPES.AUTH_STATE_FAILED:{
			return {
				loggedIn:false,
				busy:false,
				data:[]
			}
		}
		case TYPES.AUTH_STATE_SUCCESS:{
			return {
				loggedIn:true,
				busy:false,
				data:action.data
			}
		}
		case TYPES.AUTH_STATE_EDIT_BUSY:{
			return {
				loggedIn:true,
				busy:true,
				data:state.data
			}
		}
		case TYPES.AUTH_STATE_EDIT_SUCCESS:{
			return {
				loggedIn:true,
				busy:false,
				data:action.data
			}
		}
		case TYPES.AUTH_STATE_EDIT_FAILED:{
			return {
				loggedIn:true,
				busy:false,
				data:state.data
			}
		}
		default:
			return state
	}
}
