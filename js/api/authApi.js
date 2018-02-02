import api from './index'
class authApi {

	//login API call
	static sendotp(mobile){ 
    return api.post('signupotp',{phone_no:mobile}).then(responseJson=>responseJson).catch(err=>err)
	}
	static verifyotp(mobile,otp){ 
		return api.post('veriefyotp',{phone_no:mobile,otp:otp}).then(responseJson=>responseJson).catch(err=>err)
		}
	static signup(id,name,email,password,type){
    return api.post('signup',{full_name:name,email:email,password:password,id:id,type:type}).then(responseJson=>responseJson).catch(err=>err)
	}
	static login(email,password){
		return api.post('login',{email:email,password:password}).then(responseJson=>responseJson).catch(err=>err)
		}
	static editProfile(userData){
    return api.post('editUser',userData).then(responseJson=>responseJson).catch(err=>err)
	}

}

export default authApi
