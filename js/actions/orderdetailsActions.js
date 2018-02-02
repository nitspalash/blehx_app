import orderdetailsApi from '../api/orderdetailsApi'
import * as TYPES from './actionTypes'
import {AsyncStorage} from 'react-native'



export function orderdetails_f(id){
 
  return function(dispatch){
    dispatch(orderdetailsFetchBusy())
    
      return orderdetailsApi.orderdetails(id).then(res=>{
        //alert(JSON.stringify(res))
         if(typeof res === 'object'){ //alert(JSON.stringify(res));
          // console.log(res)
           if(res && res.status == 'success'){
             //alert(res.ack)
             return res;
             dispatch(orderdetailsFetchSuccess(res))
           }else{
             dispatch(orderdetailsFetchFailed())
           }
         }
       }).catch(err=>{
         dispatch(orderdetailsFetchFailed())
       })
    
    

  }
}



export function orderdetailsFetchSuccess(data){ //alert(JSON.stringify(data))
	return {
		type : TYPES.ORDERDETAILS_FETCH_SUCCESS,
    data
	}
}

export function orderdetailsFetchBusy(){
  return {
    type : TYPES.ORDERDETAILS_FETCH_BUSY
  }
}

export function orderdetailsFetchFailed(){
  return {
    type : TYPES.ORDERDETAILS_FETCH_FAILED
  }
}



