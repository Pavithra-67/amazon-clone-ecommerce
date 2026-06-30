import { Fragment ,useEffect,useState } from 'react';
import ProductCard from "../components/ProductCard.js";
import {useSearchParams} from 'react-router-dom';

export default function Home() {
    const [products,setProducts] = useState([]);  //STORES and SHOWS the data
    const [searchParams,setSearchParams] = useSearchParams()

    

    useEffect(() => {   //FETCHES the data
        fetch(process.env.REACT_APP_API_URL +'/products?'+searchParams)
        .then(res => res.json())        //converting the urlfectched using API into JSON
        .then(res => setProducts(res.products))                 //then assigning the response JSON products into products using setProducts
    },[searchParams])
    
    return <Fragment>
        
        <h1 id="products_heading">Latest Products</h1>

        <section id="products" className="container mt-5">
            <div className="row">
                {products.map(product =><ProductCard product={product}/> )}
            </div>
        </section>
    </Fragment>
}