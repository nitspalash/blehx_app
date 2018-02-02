import api from './index'
class productdetailsApi {

	
	static productdetails(id){  
		return api.post('productDetails',{product_id:id}).then(responseJson=>responseJson).catch(err=>err)
		}
	// static productlist_bycate(id){  
	// 	return api.post('products/listproducts.json',{category_id,id}).then(responseJson=>responseJson).catch(err=>err)
	// 	}
	
	

}

export default productdetailsApi
