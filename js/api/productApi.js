import api from './index'
class productApi {

	//login API call
	static productlist(id){  
    return api.post('products/listproducts.json',{category_id:id}).then(responseJson=>responseJson).catch(err=>err)
	}
	
	// static productlist_bycate(id){  
	// 	return api.post('products/listproducts.json',{category_id,id}).then(responseJson=>responseJson).catch(err=>err)
	// 	}
	
	

}

export default productApi
