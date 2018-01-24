import * as TYPES from '../actions/actionTypes'
import initialState from './initialState'

export default function medicalHistoryReducer(state=initialState.medicalHistory,action){
	switch (action.type) {
		case TYPES.MEDICALHISTORY_FETCH_SUCCESS:{
			return {
				busy:false,
				data:action.data
			}
		}
		case TYPES.MEDICALHISTORY_FETCH_BUSY:{
			return {
				busy:true,
				data:state.data
			}
		}
		case TYPES.MEDICALHISTORY_FETCH_FAILED:{
			return {
				busy:false,
				data:[]
			}
		}
		case TYPES.MEDICALHISTORY_ADD_SUCCESS:{
			return {
				busy:false,
				data:state.data
			}
		}
		case TYPES.MEDICALHISTORY_ADD_BUSY:{
			return {
				busy:true,
				data:state.data
			}
		}
		case TYPES.MEDICALHISTORY_ADD_FAILED:{
			return {
				busy:false,
				data:state.data
			}
		}
		case TYPES.MEDICALHISTORY_RESOLVE_SUCCESS:{
			return {
				busy:false,
				data:state.data
			}
		}
		case TYPES.MEDICALHISTORY_RESOLVE_FAILED:{
			return {
				busy:false,
				data:state.data
			}
		}
		case TYPES.MEDICALHISTORY_RESOLVE_BUSY:{
			return {
				busy:true,
				data:state.data
			}
		}
		default:
			return state
	}
}
