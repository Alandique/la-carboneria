import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from "../../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const {id} = useParams();
    
    const fetchProduct =() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((Response) => Response.json())
        .then ((data) =>setProduct(data))
        .catch ((error) => console.log(error));
        
    };

useEffect (() => {
    fetchProduct();
}, []);

  return (
    <div>
       <ItemDetail  itemSelected={product}/>
    </div>
  );
};

export default ItemDetailContainer