import categoryApi from '../api/categoryApi'
import * as TYPES from './actionTypes'
import {AsyncStorage} from 'react-native'





export function categorylist(){ 
  return function(dispatch){
    dispatch(categoryFetchBusy())
    return categoryApi.categorylist().then(res=>{
     // alert(JSON.stringify(res));
      if(typeof res === 'object'){
        if(res.status == 'success' && res.data){
          dispatch(categoryFetchSuccess(res.data))
        }else{
          dispatch(categoryFetchFailed())
        }
      }
    }).catch(err=>{
      dispatch(categoryFetchFailed())
    })
  }
}



export function categoryFetchSuccess(data){
	return {
		type : TYPES.CATEGORY_FETCH_SUCCESS,
    data
	}
}

export function categoryFetchBusy(){
  return {
    type : TYPES.CATEGORY_FETCH_BUSY
  }
}

export function categoryFetchFailed(){
  return {
    type : TYPES.CATEGORY_FETCH_FAILED
  }
}
