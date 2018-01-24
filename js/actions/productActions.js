import productApi from '../api/productApi'
import * as TYPES from './actionTypes'
import {AsyncStorage} from 'react-native'
// export function productlist(){  
//   return function(dispatch){ 
//     //dispatch(authStateBusy())
//     return productApi.productlist().then(res=>{ 
//       if(res.ack!==1){
//       //   dispatch(authStateFailed())
//        }else{  
//          //console.log('fdsgdf'+res.productlist);
//         AsyncStorage.setItem('productlistdata',JSON.stringify(res.productlist),(err,result)=>{
//           // AsyncStorage.getItem('userData',(err,result)=>{

//           // })
//         })
//        // dispatch(searchFetchSuccess(category,keyword,res.data,res.search_data))
//          //dispatch(authStateSuccess(res.data))
//        }
//       return res
//     }).catch(err=>err)
//   }
// }


export function productlist(id){ 
 
  return function(dispatch){
    dispatch(productFetchBusy())
    
      return productApi.productlist(id).then(res=>{
        
         if(typeof res === 'object'){ //alert(JSON.stringify(res));
          // console.log(res)
           if(res && res.productlist){
             //alert(res.ack)
             dispatch(productFetchSuccess(res))
           }else{
             dispatch(productFetchFailed())
           }
         }
       }).catch(err=>{
         dispatch(productFetchFailed())
       })
    
    

  }
}


export function productlist_bycategory(id){ 
  return function(dispatch){
    dispatch(productFetchBusy())
    return productApi.prodproductlist_bycateuctlist_bycate(id).then(res=>{
     //alert(JSON.stringify(res.productlist));
      if(typeof res === 'object'){
       // console.log(res)
        if(res && res.productlist){
          //alert(res.ack)
          dispatch(productFetchSuccess(res))
        }else{
          dispatch(productFetchFailed())
        }
      }
    }).catch(err=>{
      dispatch(productFetchFailed())
    })
  }
}








// export function categorylist(){ 
//   return function(dispatch){ 
//     dispatch(categoryFetchBusy())
//     return productApi.categorylist().then(res=>{ alert(res.ack); 
//       console.log('cate'+res);
//       if(res.ack!==1){
//       //   dispatch(authStateFailed())
//        }else{  
         
        
//        // dispatch(searchFetchSuccess(category,keyword,res.data,res.search_data))
//          dispatch(authStateSuccess(res.data))
//        }
//       return res
//     }).catch(err=>err)
//   }
// }










export function productFetchSuccess(data){ //alert(JSON.stringify(data))
	return {
		type : TYPES.PRODUCTS_FETCH_SUCCESS,
    data
	}
}

export function productFetchBusy(){
  return {
    type : TYPES.PRODUCTS_FETCH_BUSY
  }
}

export function productFetchFailed(){
  return {
    type : TYPES.PRODUCTS_FETCH_FAILED
  }
}

