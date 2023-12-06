import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import Item from "../Item/Item";
import "./styles.css";

const ItemList = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            const db = getFirestore();
            const productsQuery = collection(db, 'Items');
            const querySnapshot = await getDocs(productsQuery);
            
            const products = querySnapshot.docs.map((doc) => (
                { id: doc.id, ...doc.data(),}
              ));

            return products;
        };

        const myFunction = async () => {
            const productList = await fetchProducts();

            if (id) {
                const idFormatted = id.includes("-") ? id.replace("-", " ") : id;

                const filterItems = productList.filter((product) => {
                    return product.category === idFormatted;
                });

                setItems(filterItems);
            } else {
                setItems(productList);
            }
        };

        myFunction();
    }, [id]);

    return (
        <div className="item-list-container">
            {items.map((item) => (
                <Link to={"/item/" + item.id} key={item.id}>
                    <Item
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                    />
                </Link>
            ))}
        </div>
    );
};

export default ItemList;
