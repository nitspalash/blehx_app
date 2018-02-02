import api from './index'
class productcartApi {

	
	static productaddcart(id,user_id,quantity){  
		return api.post('productAddCart',{product_id:id,user_id:user_id,quantity:quantity}).then(responseJson=>responseJson).catch(err=>err)
		}
	static productcart(user_id){  
			return api.post('productCart',{user_id:user_id}).then(responseJson=>responseJson).catch(err=>err)
			}
	static productremovecart(id){  
				return api.post('productCartRemove',{id:id}).then(responseJson=>responseJson).catch(err=>err)
				}
	static addressupdate(id,street_address,zip,city,state){  
					return api.post('addressupdate',{id:id,street_address:street_address,zip:zip,city:city,state:state}).then(responseJson=>responseJson).catch(err=>err)
					}
	static productOrder(id){  
						return api.post('order',{user_id:id}).then(responseJson=>responseJson).catch(err=>err)
						}					
								
			
	// static productlist_bycate(id){  
	// 	return api.post('products/listproducts.json',{category_id,id}).then(responseJson=>responseJson).catch(err=>err)
	// 	}
	
	

}

export default productcartApi
