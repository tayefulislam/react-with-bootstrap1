import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Card2 from '../Card2/Card2';

const CardGroup2 = () => {

    const products = [
        { id: 1, name: 'Laptops Vivo', price: 18000 },
        { id: 2, name: 'Laptops Oppo', price: 12000 },
        { id: 3, name: 'Laptops OnePuls', price: 128600 },
    ]

    return (

        <CardGroup>
            {
                products.map(product => <Card2 key={product.id} product={product}></Card2>)
            }


        </CardGroup>


    );
};

export default CardGroup2;