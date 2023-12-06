import { useState, useEffect } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import './styles.css';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const { id: Category } = useParams();
    const [productList, setProductsList] = useState([]);

    const fetchProducts = async () => {
        const db = getFirestore();
        const productCollection = collection(db,'Items');
        let productQuery = productCollection;

        if (Category) {
            // Si hay una categoría, agregamos el filtro a la consulta
            productQuery = query(productCollection, where('category', '==', Category));
        }

        try {
            const querySnapshot = await getDocs(productQuery);
            const list = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setProductsList(list);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [Category]);

    return (
        <div>
            <h1 className='h1'>Productos</h1>
            <ItemList productList={productList} />
        </div>
    );
};

export default ItemListContainer;
