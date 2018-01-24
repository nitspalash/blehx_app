import * as TYPES from '../actions/actionTypes'
import initialState from './initialState'

export default function petsReducer(state=initialState.pets,action){
	switch (action.type) {
		case TYPES.PETS_FETCH_SUCCESS:{
			return {
				busy:false,
				data:action.data
			}
		}
		case TYPES.PETS_FETCH_BUSY:{
			return {
				busy:true,
				data:state.data
			}
		}
		case TYPES.PETS_FETCH_FAILED:{
			return {
				busy:false,
				data:[]
			}
		}
		default:
			return state
	}
}
