import api from './index'
class categoryApi {

	//login API call
	// static productlist(){  
    // return api.post('products/listproducts.json').then(responseJson=>responseJson).catch(err=>err)
	// }
	
	static categorylist(){  
		return api.get('category').then(responseJson=>responseJson).catch(err=>err)
		}
	
	

}

export default categoryApi
