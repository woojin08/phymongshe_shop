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
            <MainProuctSlide shopList={shopList} category={'pencil'} tit={'BEST PRODUCT'} des={'피몽쉐 마인드풀 라운지 BEST PRODUCT'} arrow={true} dots={true} />
            <MainProuctSlide shopList={shopList} category={'liquid'} tit={'NEW PRODUCT'} des={'피몽쉐 마인드풀 라운지 new PRODUCT'} arrow={true} dots={false} bg />
            <MainTab shopList={shopList} />
            <MainCategory shopList={shopList} category={'pencil'} />
            <MainCategory shopList={shopList} category={'liquid'} />
            <MainCategory shopList={shopList} category={'powder'} />
        </>
    )
}

export default Main