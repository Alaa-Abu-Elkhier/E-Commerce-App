import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import data from "../data";

const ProductScreen = (props) => {
    const product = data.products.find(x => x._id === props.match.params.id); //take id from link and search about the broduct in data
    if(!product){
      return  <div>PRODUCT NOT FOUND</div>
    }
    return ( 
        
        <div> 
            <Link  to="/" className="back">Back to Result</Link>
            <div className="row top">
                <div className="col-2">
                    <img className="large   " src={product.image} alt={product.name} />
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Rating
                            rating={product.rating}
                            numReviews={product.numReviews}
                            ></Rating>
                        </li>
                        <li>
                            Price : $ {product.price}
                        </li>
                        <li>
                            <p>{product.description}</p>
                        </li>
                    </ul>

                </div>
                <div className="col-1">
                    <div className="card">
                    <div className=" card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price</div>
                                <div className="price">${product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Status</div>
                                {product.countInStock>0? (
                                <span className="success">In Stock</span>
                                ):(
                                    <span className="error">Unavailable</span>
                                )}
                                </div>
                            </li>
                            <li>
                                <button className="primary block" >Add to Cart</button>
                            </li>
                        </ul>
                    </div>
                    </div>

                </div>
            </div>
        </div>
     );
}
 
export default ProductScreen;