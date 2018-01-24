import * as TYPES from '../actions/actionTypes'
import initialState from './initialState'

export default function matingReducer(state=initialState.mating,action){
	switch (action.type) {
		case TYPES.MATING_FETCH_SUCCESS:{
			return {
				busy:false,
				data:action.data
			}
		}
		case TYPES.MATING_FETCH_BUSY:{
			return {
				busy:true,
				data:state.data
			}
		}
		case TYPES.MATING_FETCH_FAILED:{
			return {
				busy:false,
				data:state.data
			}
		}
		case TYPES.MATING_ADD_SUCCESS:{
			return {
				busy:true,
				data:state.data
			}
		}
		case TYPES.MATING_ADD_BUSY:{
			return {
				busy:true,
				data:state.data
			}
		}
		case TYPES.MATING_ADD_FAILED:{
			return {
				busy:false,
				data:state.data
			}
		}
		case TYPES.MATING_PARTNER_FETCH_SUCCESS:{
			return {
				busy:false,
				data:action.data
			}
		}
		case TYPES.MATING_PARTNER_FETCH_BUSY:{
			return {
				busy:true,
				data:state.data
			}
		}
		case TYPES.MATING_PARTNER_FETCH_FAILED:{
			return {
				busy:true,
				data:state.data
			}
		}
		case TYPES.MATING_PROPOSE_REQUEST_BUSY:{
			return {
				busy:true,
				data:state.data
			}
		}
		case TYPES.MATING_PROPOSE_REQUEST_SUCCESS:{
			return {
				busy:false,
				data:state.data
			}
		}
		case TYPES.MATING_PROPOSE_REQUEST_FAILED:{
			return {
				busy:false,
				data:state.data
			}
		}
		case TYPES.MATING_RESOLVE_SUCCESS:{
			return {
				busy:false,
				data:state.data
			}
		}
		case TYPES.MATING_RESOLVE_BUSY:{
			return {
				busy:true,
				data:state.data
			}
		}
		case TYPES.MATING_RESOLVE_FAILED:{
			return {
				busy:false,
				data:state.data
			}
		}
		default:
			return state
	}
}
