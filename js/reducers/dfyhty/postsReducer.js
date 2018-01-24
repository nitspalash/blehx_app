import * as TYPES from '../actions/actionTypes'
import initialState from './initialState'

export default function postsReducer(state=initialState.posts,action){
	switch (action.type) {
		case TYPES.POSTS_FETCH_SUCCESS:{
			let newData = state.data;
			action.data.map(d=>{
				newData.push(d)
			});
			return {
				busy:false,
				data:newData//action.data
			}
		}
		case TYPES.POSTS_PULL_SUCCESS:{					
			return {
				busy:false,
				data:action.data
			}
		}
		case TYPES.POSTS_FETCH_BUSY:{
			return {
				busy:true,
				data:state.data
			}
		}
		case TYPES.POSTS_FETCH_FAILED:{
			return {
				busy:false,
				data:state.data
			}
		}
		case TYPES.POST_ADD_SUCCESS:{
			return {
				busy:false,
				data:state.data
			}
		}
		case TYPES.POST_ADD_BUSY:{
			return {
				busy:true,
				data:state.data
			}
		}
		case TYPES.POST_ADD_FAILED:{
			return {
				busy:false,
				data:state.data
			}
		}
		case TYPES.POST_LIKE_SUCCESS:{
			return {
				busy:false,
				data:action.data
			}
		}
		case TYPES.COMMENTS_FETCH_SUCCESS:{
			return {
				busy:false,
				data:action.data
			}
		}
		case TYPES.COMMENT_ADD_BUSY:{
			return {
				busy:true,
				data:state.data
			}
		}
		case TYPES.COMMENT_ADD_SUCCESS:{
			return {
				busy:false,
				data:state.data
			}
		}
		case TYPES.COMMENT_ADD_FAILED:{
			return {
				busy:false,
				data:state.data
			}
		}
		default:
			return state
	}
}
