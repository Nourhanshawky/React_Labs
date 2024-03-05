import React from 'react';
import useFetch from './customHock';

const Product = () => {
    const { data: prds } = useFetch("http://localhost:2000/products");

    return (
        <div>
            <h1>Products Component</h1>
            <div className="row">
                {prds.map(p => (
                    <div className="col-12 col-md-4" key={p.id}>
                        <div className="card" style={{ minHeight: '330px' }}>
                            <img src={p.imgUrl} className="card-img-top" alt="..." style={{ height: '200px' }} />
                            <div className="card-body">
                                <h5 className="card-title">{p.name}</h5>
                                <p className="card-text">{p.price}</p>
                                <p className="card-text">{p.quantity === 0 ? <span className='bg-danger p-2 text-light'>outOfStock</span> : <span>{p.quantity}</span>}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
