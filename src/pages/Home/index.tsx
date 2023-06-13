import { useEffect, useState } from "react";

import authApi from "../../api/auth";
import Slider from "./Slider";
import FeaturedProduct from "./FeaturedProducts";
import styled from "styled-components";
import LatestProducts from "./LatestProducts";
import Shopex from "./ShopexOffer";
import TrendingProduct from "./TrendingProducts";
import { IProduct } from "../../interfaces";
import productApi from "../../api/product";
const Home: React.FC = () => {
    const [featureProducts, setFeatureProducts] = useState<IProduct[]>([]);
    // console.log(featureProducts);
    const [latestProducts, setLatestProducts] = useState<IProduct[]>([]);
    // console.log(latestProducts);
    const [trendingProducts, setTrendingProducts] = useState<IProduct[]>([]);
    // console.log(trendingProducts);

    useEffect(() => {
        authApi.getCurrentUser().then(console.log);
        productApi.getCombineProduct().then((res) => {
            setFeatureProducts(res.data.featureProducts);
            setLatestProducts(res.data.latestProducts);
            setTrendingProducts(res.data.trendingProducts);
        });
    }, []);
    return (
        <Wrapper>
            <Slider />
            <FeaturedProduct data={featureProducts} />
            <LatestProducts data={latestProducts} />
            <Shopex />
            <TrendingProduct data={trendingProducts} />
        </Wrapper>
    );
};
const Wrapper = styled.div``;
export default Home;
//coding conventions
