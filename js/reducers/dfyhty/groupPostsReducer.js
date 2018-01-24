import * as TYPES from '../actions/actionTypes'
import initialState from './initialState'

export default function groupPostsReducer(state=initialState.groupPosts,action){
	switch (action.type) {
		case TYPES.GROUP_POSTS_FETCH_SUCCESS:{
			// let newData = state.data;
			// action.data.map(d=>{
			// 	newData.push(d)
			// });
			return {
				busy:false,
				data:action.data
			}
		}
		case TYPES.GROUP_POSTS_PULL_SUCCESS:{
			return {
				busy:false,
				data:action.data
			}
		}
		case TYPES.GROUP_POSTS_FETCH_BUSY:{
			return {
				busy:true,
				data:state.data
			}
		}
		case TYPES.GROUP_POSTS_FETCH_FAILED:{
			return {
				busy:false,
				data:state.data
			}
		}
		case TYPES.GROUP_POST_ADD_SUCCESS:{
			return {
				busy:false,
				data:state.data
			}
		}
		case TYPES.GROUP_POST_ADD_BUSY:{
			return {
				busy:true,
				data:state.data
			}
		}
		case TYPES.GROUP_POST_ADD_FAILED:{
			return {
				busy:false,
				data:state.data
			}
		}
		case TYPES.GROUP_POST_LIKE_SUCCESS:{
			return {
				busy:false,
				data:action.data
			}
		}
		case TYPES.GROUP_COMMENTS_FETCH_SUCCESS:{
			return {
				busy:false,
				data:action.data
			}
		}
		case TYPES.GROUP_COMMENT_ADD_BUSY:{
			return {
				busy:true,
				data:state.data
			}
		}
		case TYPES.GROUP_COMMENT_ADD_SUCCESS:{
			return {
				busy:false,
				data:state.data
			}
		}
		case TYPES.GROUP_COMMENT_ADD_FAILED:{
			return {
				busy:false,
				data:state.data
			}
		}
		default:
			return state
	}
}
