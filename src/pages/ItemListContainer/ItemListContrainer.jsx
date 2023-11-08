import { useState, useEffect } from 'react';
import ItemCount from '../../components/ItemCount/ItemCount';
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
           <h1>Lista de Item</h1>
           <ItemCount />
           <ItemList productList={productList}/>
        </div>



    );
};

export default ItemListContainer