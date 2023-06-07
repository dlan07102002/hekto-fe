import { useEffect } from "react";

import authApi from "../../api/auth";
import Slider from "./Slider";
import FeaturedProduct from "./FeaturedProducts";
import styled from "styled-components";
function Home() {
    useEffect(() => {
        authApi.getCurrentUser().then(console.log);
    }, []);
    return (
        <Wrapper>
            <Slider />
            <FeaturedProduct />
        </Wrapper>
    );
}
const Wrapper = styled.div``;
export default Home;
//coding conventions
