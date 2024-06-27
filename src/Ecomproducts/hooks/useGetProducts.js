import { useEffect,useState } from "react";
import { UsegetProduct } from "../utils";


export const GetProducts=()=>{
    const [products,setProducts]=useState([]);
    const [error,setError] =useState('');
   

    useEffect(()=>{
        const fetchProduct = async()=>{
            try{
               
                const result= await UsegetProduct();
                
                setProducts(result);
             
            }
            catch(error){
                setError(`Error:${error.message}`)
             
            }
        };
        fetchProduct();
    },[]);

    return{products,error}

}
