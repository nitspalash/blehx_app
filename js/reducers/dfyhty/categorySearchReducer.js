import * as TYPES from '../actions/actionTypes'
import initialState from './initialState'

export default function categorySearchReducer(state=initialState.categorySearch,action){
	switch (action.type) {
		case TYPES.CATEGORY_SEARCH_FETCH_SUCCESS:{
			return {
				busy:false,
				category:action.category,
				query:action.query,
				data:action.data
			}
		}
		case TYPES.CATEGORY_SEARCH_FETCH_BUSY:{
			return {
				busy:true,
				category:action.category,
				query:action.query,
				data:state.data
			}
		}
		case TYPES.CATEGORY_SEARCH_FETCH_FAILED:{
			return {
				busy:false,
				category:action.category,
				query:action.query,
				data:[]
			}
		}
		case TYPES.CATEGORY_SEARCH_CATEGORY_CHANGE:{
			return {
				busy:false,
				category:state.category,
				query:state.query,
				data:[]
			}
		}
		case TYPES.CATEGORY_UPDATE_QUERY_TEXT:{
			return {
				busy:false,
				category:state.category,
				query:action.text,
				data:state.data
			}
		}
		default:
			return state
	}
}
