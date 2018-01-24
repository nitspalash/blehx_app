import * as TYPES from '../actions/actionTypes'
import initialState from './initialState'

export default function groupReducer(state=initialState.groups,action){
	switch (action.type) {
		case TYPES.GROUP_FETCH_SUCCESS:{
			return {
				busy:false,
				data:action.data
			}
		}
		case TYPES.GROUP_FETCH_BUSY:{
			return {
				busy:true,
				data:state.data
			}
		}
		case TYPES.GROUP_FETCH_FAILED:{
			return {
				busy:false,
				data:state.data
			}
		}
		case TYPES.GROUP_ADD_SUCCESS:{
			return {
				busy:true,
				data:state.data
			}
		}
		case TYPES.GROUP_ADD_BUSY:{
			return {
				busy:true,
				data:state.data
			}
		}
		case TYPES.GROUP_ADD_FAILED:{
			return {
				busy:false,
				data:state.data
			}
		}

		default:
			return state
	}
}
