import React, { useEffect, useState } from 'react'
import ProductCard from '../components/productCard';
import NavBar from '../components/NavBar';
import { Product } from '../utils/productType';



function Home() {
    const [products, setProducts] = useState<Product[]>();
    const [flt, setFlt] = useState<boolean>(false);
    const [fltStatus, setFlyStatus] = useState<string>('All')
    const [search, setSearch] = useState<string>('')



    useEffect(() => {
        (async () => {
            const res = await fetch('https://dummyjson.com/products');
            const data = await res.json();
            setProducts(data.products)
        })()
    }, [])
    return (
        <>
            <NavBar search={search} setSearch={setSearch} />
            <section className="text-gray-600 body-font h-screen">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {products?.map(product => {
                            if ((product.title.toLocaleLowerCase().includes(search) && fltStatus === "All") || (fltStatus === product.category)) {
                                return <ProductCard key={product.id} {...product} />
                            }
                        })}
                    </div>
                </div>
                {flt && <div className='flex flex-col fixed right-12 rounded-t-2xl rounded-l-2xl bottom-16 bg-slate-200'>{
                    ['smartphones', 'laptops', 'fragrances', 'skincare', 'groceries', 'home-decoration', 'All'].map(x => <p onClick={() => setFlyStatus(x)} className='text-red-[#123] px-4 font-bold my-2 cursor-pointer hover:text-white hover:bg-indigo-500'>{x}</p>)
                }</div>}
                <div onClick={() => setFlt(!flt)} className='fixed right-6 bottom-4 bg-[#123] w-10 h-10 flex items-center justify-center rounded-full'>
                    <i className="fa-solid fa-filter text-white"></i>
                </div>
            </section>
        </>
    )
}

export default Home