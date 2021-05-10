import Products from "./components/Products";
import data from "./data";
const Home = () => {
    return ( 
     <div className="grid-container">
     <header className="row">
       <div>
         <a className="brand" href="/">amazona</a>
       </div>
       <div>
         <a href="/cart">Cart</a>
         <a href="/signin">Sign In</a>
       </div>
     </header>
     <main>
       <div>
         <div className="row center">
           { 
               data.products.map((product)=>
               <Products key={product._id} product={product}></Products>
               )
           }
           
           
         </div>
       </div>
     </main>
     <footer className="row center">All right reserved</footer>
   </div>
     );
}
 
export default Home;