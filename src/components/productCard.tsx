import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Product } from '../utils/productType';



const ProductCard = (props: Product) => {
    const { category, title, price, thumbnail, rating } = props

    const navigate = useNavigate()
    return (
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <div className="block relative h-48 rounded overflow-hidden">
                <img onClick={() => navigate('product', { state: props })} alt="ecommerce" className="object-cover object-center w-full h-full block" src={thumbnail} />
            </div>
            <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium text-ellipsis whitespace-nowrap overflow-hidden">{title}</h2>
                <p className="mt-1">${price}</p>
                <span className="flex items-center">
                    {[1, 2, 3, 4, 5].map((r) => {
                        if (rating > r) {
                            return (<svg key={r} fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>)
                        } else {
                            return (<svg key={r} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>)
                        }
                    })}
                </span>
            </div>
        </div>
    )
};

export default ProductCard;
