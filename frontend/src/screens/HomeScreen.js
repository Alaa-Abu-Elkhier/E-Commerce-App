import { useEffect, useState } from "react";
import axios from'axios';
import Products from "../components/Products";
import  LoadingBox  from "../components/LoadingBox";
import  MessageBox  from "../components/MessageBox";




const HomeScreen = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)
    useEffect(()=>{
        const fetchData= async()=>{
            
            
            try{
                setLoading(true);
                const{data}=await axios.get('http://localhost:4000/api/products');
                setLoading(false);
                setProducts(data);

            }catch(err){
                setError(err.message)
                setLoading(false);

            }
            
        };
        fetchData();
    },[])
    
    return ( 
        <div>
        {loading? <LoadingBox></LoadingBox>
        :
        error? <MessageBox variant="danger">{error}</MessageBox>
        :
        <div className="row center">
        { 
            products.map((product)=>
            <Products key={product._id} product={product}></Products>
            )
        }
        
        
      </div>
        }
        
      </div>
     );
}
 
export default HomeScreen;