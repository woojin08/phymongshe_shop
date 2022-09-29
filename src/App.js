
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './pages/Main';
import List from './shop/List';
import Itm from './shop/Itm';
import Cart from './shop/Cart'
import Category from './Category';
import './css/ShopDetail.scss';
import { Route, Routes } from 'react-router-dom';

//const url = 'https://desipossa.github.io/shop_cra/assets/data.json';
const App = () => {
    const [itm, setItm] = useState();
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const url = 'https://desipossa.github.io/shop_cra/assets/data.json'
        const getProduct = async () => {
            const res = await axios.get(url);

            const shopdata = res.data.slice(50, 140).map(it => {
                return {
                    id: it.id,
                    name: it.name,
                    src: it.image_link,
                    brand: it.brand,
                    cate: it.category,
                    price: it.price * 1450,
                    des: it.description,
                    color: it.product_colors,
                    time: it.created_at,
                    type: it.product_type,
                }
            })
            setItm(shopdata);
            console.log(res.data);
            console.log(shopdata);
        }
        getProduct();
    }, [])
    return (
        <>
            {
                itm ?
                    <div className='wapper'>
                        <Header cart={cart} shopList={itm} />
                        <Routes>
                            <Route path='/' element={<Main shopList={itm} />} />
                            <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
                            <Route path='/shopList' element={<List shopList={itm} />} />
                            <Route path='/shopList/:cate' element={<Category shopList={itm} />} />
                            <Route path='/shopItem/:itm' element={<Itm shopList={itm} cart={cart} setCart={setCart} />} />
                        </Routes>
                        <Footer />
                    </div>
                    : <div>로딩 중 입니다.</div>
            }
        </>
    )
}

export default App