import authApi from '../api/authApi'
import * as TYPES from './actionTypes'
import {AsyncStorage} from 'react-native'
export function sendotp(mobile){ 
  return function(dispatch){
    dispatch(authStateBusy())
    return authApi.sendotp(mobile).then(res=>{ 
      //alert('here');
      //alert(JSON.stringify(res))
      // if(res.ack!==1){
      //   dispatch(authStateFailed())
      // }else{  
      //   AsyncStorage.setItem('userData',JSON.stringify(res.data),(err,result)=>{
      //     AsyncStorage.getItem('userData',(err,result)=>{

      //     })
      //   })
      //   dispatch(authStateSuccess(res.data))
      // }
      return res
    }).catch(err=>err)
  }
}


export function verifyotp(mobile,otp){ 
  return function(dispatch){
    dispatch(authStateBusy())
    return authApi.verifyotp(mobile,otp).then(res=>{ 
      // if(res.ack!==1){
      //   dispatch(authStateFailed())
      // }else{  
      //   AsyncStorage.setItem('userData',JSON.stringify(res.data),(err,result)=>{
      //     AsyncStorage.getItem('userData',(err,result)=>{

      //     })
      //   })
      //   dispatch(authStateSuccess(res.data))
      // }
      return res
    }).catch(err=>err)
  }
}

export function signup(id,name,email,password,type){ 
  return function(dispatch){
    dispatch(authStateBusy())
    return authApi.signup(id,name,email,password,type).then(res=>{
      if(res.status!=='success'){
        dispatch(authStateFailed())
      }else{
        AsyncStorage.setItem('userData',JSON.stringify(res.data),(err,result)=>{

        })
        dispatch(authStateSuccess(res.data))
      }
      return res
    }).catch(err=>err)
  }
}
export function login(email,password){ 
  return function(dispatch){
    dispatch(authStateBusy())
    return authApi.login(email,password).then(res=>{
      //alert(JSON.stringify(res.data));
      if(res.status != 'success'){
        dispatch(authStateFailed())
      }else{ 
        AsyncStorage.setItem('userData',JSON.stringify(res.data),(err,result)=>{

        })
        //return res;
        dispatch(authStateSuccess(res.data))
      }
      JSON.stringify(res.data)
      return res
    }).catch(err=>err)
  }
}
export function checkAuth(cb){
  return function(dispatch){
    dispatch(authStateBusy())
    AsyncStorage.getItem('userData',(err,result)=>{
      if(result){
        const data = JSON.parse(result)
        dispatch(authStateSuccess(data))
        cb(true)
      }else{
        dispatch(authStateFailed())
        cb(false)
      }
    })
  }
}


export function editProfile(userData){
  return function(dispatch){
    dispatch(authStateEditBusy())
    return authApi.editProfile(userData).then(res=>{
      if(res.status!=='success'){
        dispatch(authStateEditFailed())
      }else{
        AsyncStorage.setItem('userData',JSON.stringify(res.data),(err,result)=>{

        })
        dispatch(authStateEditSuccess(res.data))
      }
      return res
    }).catch(err=>err)
  }
}

export function logout(cb){
  return function(dispatch){
    dispatch(authStateBusy())
    AsyncStorage.removeItem('userData',(err,res)=>{
      dispatch(authStateFailed())
      cb(true)
    })
  }
}


export function authStateBusy(){
	return {
		type : TYPES.AUTH_STATE_BUSY
	}
}

export function authStateFailed(){
  return {
    type : TYPES.AUTH_STATE_FAILED
  }
}

export function authStateSuccess(data){
  return {
    type : TYPES.AUTH_STATE_SUCCESS,
    data
  }
}

export function authStateEditBusy(){
	return {
		type : TYPES.AUTH_STATE_EDIT_BUSY
	}
}

export function authStateEditFailed(){
  return {
    type : TYPES.AUTH_STATE_EDIT_FAILED
  }
}

export function authStateEditSuccess(data){
  return {
    type : TYPES.AUTH_STATE_EDIT_SUCCESS,
    data
  }
}
