import * as TYPES from '../actions/actionTypes'
import initialState from './initialState'

export default function searchReducer(state=initialState.search,action){
	switch (action.type) {
		case TYPES.SEARCH_FETCH_SUCCESS:{
			return {
				busy:false,
				category:action.category,
				query:action.query,
				data:action.data,
				search_data:action.search_data,
				search_history:false
			}
		}
		case TYPES.SEARCH_FETCH_BUSY:{
			return {
				busy:true,
				category:action.category,
				query:action.query,
				data:state.data,
				search_data:[],
				search_history:false
			}
		}
		case TYPES.SEARCH_FETCH_FAILED:{
			return {
				busy:false,
				category:action.category,
				query:action.query,
				data:[],
				search_data:state.search_data,
				search_history:false
			}
		}
		case TYPES.SEARCH_CATEGORY_CHANGE:{
			return {
				busy:false,
				category:state.category,
				query:state.query,
				data:[],
				search_data:[],
				search_history:false
			}
		}
		case TYPES.SEARCH_HISTORY:{
			return {
				busy:false,
				category:state.category,
				query:state.query,
				data:state.data,
				search_data:state.search_data,
				search_history:true
			}
		}
		case TYPES.UPDATE_QUERY_TEXT:{
			return {
				busy:false,
				category:state.category,
				query:action.text,
				data:state.data,
				search_data:state.search_data,
				search_history:true
			}
		}
		default:
			return state
	}
}
