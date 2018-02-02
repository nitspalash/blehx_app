import productdetailsApi from '../api/productdetailsApi'
import * as TYPES from './actionTypes'
import {AsyncStorage} from 'react-native'




export function productdetail(id){ //alert(id)
 
  return function(dispatch){
    dispatch(productDetailsFetchBusy())
    
      return productdetailsApi.productdetails(id).then(res=>{
        //alert(JSON.stringify(res))
         if(typeof res === 'object'){ //alert(JSON.stringify(res));
          // console.log(res)
           if(res && res.status == 'success'){
             //alert(res.ack)
             dispatch(productDetailsFetchSuccess(res))
           }else{
             dispatch(productDetailsFetchFailed())
           }
         }
       }).catch(err=>{
         dispatch(productDetailsFetchFailed())
       })
    
    

  }
}


export function productDetailsFetchSuccess(data){ //alert(JSON.stringify(data))
	return {
		type : TYPES.PRODUCT_DETAILS_FETCH_SUCCESS,
    data
	}
}

export function productDetailsFetchBusy(){
  return {
    type : TYPES.PRODUCT_DETAILS_FETCH_BUSY
  }
}

export function productDetailsFetchFailed(){
  return {
    type : TYPES.PRODUCT_DETAILS_FETCH_FAILED
  }
}



