import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {

    const products = [
        { id: 1, name: 'Laptops Vivo', price: 18000 },
        { id: 2, name: 'Laptops Oppo', price: 12000 },
        { id: 3, name: 'Laptops OnePuls', price: 128600 },
    ]


    return (
        <div>
            <h1>This IS My Cards Group</h1>

            <div className="card-group">
                {
                    products.map(product => <Card key={product.id} product={product}></Card>)
                }

            </div>

        </div>
    );
};

export default CardGroup;