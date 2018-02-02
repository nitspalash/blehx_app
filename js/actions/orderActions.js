import orderApi from '../api/orderApi'
import * as TYPES from './actionTypes'
import {AsyncStorage} from 'react-native'

export function orderhistory(id){ //alert(id)
 
  return function(dispatch){
    dispatch(orderFetchBusy())
    
      return orderApi.orderlist(id).then(res=>{
        //alert(JSON.stringify(res))
         if(typeof res === 'object'){ //alert(JSON.stringify(res));
          // console.log(res)
           if(res && res.status == 'success'){
             //alert(res.ack)
             dispatch(orderFetchSuccess(res))
           }else{
             dispatch(orderFetchFailed())
           }
         }
       }).catch(err=>{
         dispatch(orderFetchFailed())
       })
    
    

  }
}


export function orderFetchSuccess(data){ //alert(JSON.stringify(data))
	return {
		type : TYPES.ORDER_FETCH_SUCCESS,
    data
	}
}

export function orderFetchBusy(){
  return {
    type : TYPES.ORDER_FETCH_BUSY
  }
}

export function orderFetchFailed(){
  return {
    type : TYPES.ORDER_FETCH_FAILED
  }
}



