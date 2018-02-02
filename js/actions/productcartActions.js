import productcartApi from '../api/productcartApi'
import * as TYPES from './actionTypes'
import {AsyncStorage} from 'react-native'




export function productaddcart(product_id,user_id,quantity){ //alert(user_id)
 
  return function(dispatch){
    dispatch(productCartaddBusy())
    
      return productcartApi.productaddcart(product_id,user_id,quantity).then(res=>{
        //alert(JSON.stringify(res))
         if(typeof res === 'object'){ //alert(JSON.stringify(res));
          // console.log(res)
           if(res && res.status == 'success'){
             //alert(res.ack)
             dispatch(productCartaddSuccess(res))
           }else{
             dispatch(productCartaddFailed())
           }
         }
       }).catch(err=>{
         dispatch(productCartaddFailed())
       })
    
    

  }
}



export function productcartdelete(id){ 
 
  return function(dispatch){
    dispatch(productCartdeleteBusy())
    
      return productcartApi.productremovecart(id).then(res=>{
       // alert(JSON.stringify(res))
         if(typeof res === 'object'){ //alert(JSON.stringify(res));
          // console.log(res)
           if(res && res.status == 'success'){
             //alert(res.ack)
             dispatch(productCartdeleteSuccess(res))
           }else{
             dispatch(productCartdeleteFailed())
           }
         }
       }).catch(err=>{
         dispatch(productCartdeleteFailed())
       })
   }
}

export function order(id){ 
 
  return function(dispatch){
    dispatch(productOrderBusy())
    //alert(id)
      return productcartApi.productOrder(id).then(res=>{
        //alert(JSON.stringify(res))
         if(typeof res === 'object'){ //alert(JSON.stringify(res));
          // console.log(res)
           if(res && res.status == 'success'){
             //alert(res.ack)
             dispatch(productOrderSuccess(res))
           }else{
             dispatch(productOrderFailed())
           }
         }
       }).catch(err=>{
         dispatch(productOrderFailed())
       })
   }
}


export function update(id,street_address,zip,city,state){ 
 
  return function(dispatch){
    dispatch(productCartAddressupdateBusy())
    
      return productcartApi.addressupdate(id,street_address,zip,city,state).then(res=>{
        //alert(JSON.stringify(res))
         if(typeof res === 'object'){ //alert(JSON.stringify(res));
          // console.log(res)
           if(res && res.status == 'success'){
             //alert(res.ack)
             dispatch(productCartAddressupdateSuccess(res))
           }else{
             dispatch(productCartAddressupdateFailed())
           }
         }
       }).catch(err=>{
         dispatch(productCartAddressupdateFailed())
       })
    
    

   }
}

export function productcart(user_id){ //alert(user_id)
 
  return function(dispatch){
    dispatch(producCartFetchBusy())
    
      return productcartApi.productcart(user_id).then(res=>{
       // alert(JSON.stringify(res))
         if(typeof res === 'object'){ //alert(JSON.stringify(res));
          // console.log(res)
           if(res && res.status == 'success'){
             //alert(res.ack)
             dispatch(productCartFetchSuccess(res))
           }else{
             dispatch(productCartFetchFailed())
           }
         }
       }).catch(err=>{
         dispatch(productCartFetchFailed())
       })
    
    

  }
}

export function productCartaddSuccess(data){ //alert(JSON.stringify(data))
	return {
		type : TYPES.PRODUCT_CART_ADD_SUCCESS,
    data
	}
}
export function productCartaddBusy(){
  return {
    type : TYPES.PRODUCT_CART_ADD_BUSY
  }
}

export function productCartaddFailed(){
  return {
    type : TYPES.PRODUCT_CART_ADD_FAILED
  }
}

export function productCartFetchSuccess(data){ //alert(JSON.stringify(data))
	return {
		type : TYPES.PRODUCT_CART_FETCH_SUCCESS,
    data
	}
}

export function producCartFetchBusy(){
  return {
    type : TYPES.PRODUCT_CART_FETCH_BUSY
  }
}

export function productCartFetchFailed(){
  return {
    type : TYPES.PRODUCT_CART_FETCH_FAILED
  }
}

export function productCartdeleteSuccess(data){ //alert(JSON.stringify(data))
	return {
		type : TYPES.PRODUCT_CART_DELETE_SUCCESS,
    data
	}
}
export function productCartdeleteBusy(){
  return {
    type : TYPES.PRODUCT_CART_DELETE_BUSY
  }
}

export function productCartdeleteFailed(){
  return {
    type : TYPES.PRODUCT_CART_DELETE_FAILED
  }
}

export function productCartAddressupdateSuccess(data){ //alert(JSON.stringify(data))
	return {
		type : TYPES.PRODUCT_CART_ADDRESSUPDATE_SUCCESS,
    data
	}
}
export function productCartAddressupdateBusy(){
  return {
    type : TYPES.PRODUCT_CART_ADDRESSUPDATE_BUSY
  }
}

export function producttCartAddressupdateFailed(){
  return {
    type : TYPES.PRODUCT_CART_ADDRESSUPDATE_FAILED
  }
}

export function productCartOrderSuccess(data){ //alert(JSON.stringify(data))
	return {
		type : TYPES.PRODUCT_ORDER_SUCCESS,
    data
	}
}
export function productOrderBusy(){
  return {
    type : TYPES.PRODUCT_ORDER_BUSY
  }
}

export function productOrderFailed(){
  return {
    type : TYPES.PRODUCT_ORDER_FAILED
  }
}

