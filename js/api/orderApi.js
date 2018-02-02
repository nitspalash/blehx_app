import api from './index'
class orderApi {

	//login API call
	static orderlist(id){  //alert(id)
    return api.post('orderhistory',{user_id:id}).then(responseJson=>responseJson).catch(err=>err)
	}
	
	
	

}

export default orderApi
