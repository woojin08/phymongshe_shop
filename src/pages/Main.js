import React from 'react'
import MainSlider from '../component/MainSlider'
import Itm from '../shop/Itm'
import MainTab from '../component/MainTab'
import '../css/Main.scss';
import MainCategory from '../component/MainCategory';
import MainProuctSlide from '../component/MainProductSlide';


const Main = ({ shopList }) => {
    return (
        <>
            <MainSlider />
            <MainProuctSlide shopList={shopList} category={'pencil'} />
            <MainTab shopList={shopList} />
            <MainCategory shopList={shopList} category={'pencil'} />
            <MainCategory shopList={shopList} category={'liquid'} />
            <MainCategory shopList={shopList} category={'powder'} />
        </>
    )
}

export default Main