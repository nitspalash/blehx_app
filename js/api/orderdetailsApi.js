import api from './index'
class orderdetailsApi {

	//login API call
	static orderdetails(id){  
    return api.post('orderdetails',{order_id:id}).then(responseJson=>responseJson).catch(err=>err)
	}
	
	
	

}

export default orderdetailsApi
