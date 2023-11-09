import { useState, useEffect } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import './styles.css';


const ItemListContainer = () => {
    const [ productList, setProductList ] = useState ([]);

    const fetchProducts =() => {
        fetch(`https://fakestoreapi.com/products`)
        .then((Response) => Response.json())
        .then ((data) =>setProductList(data))
        .then ((error) => console.log(error));
        
    };

    useEffect (() => {
        fetchProducts ();
    }, [])

    return (
        <div>
           <h1 className='h1'>Productos</h1>
           <ItemList productList={productList} />
        </div>



    );
};

export default ItemListContainer