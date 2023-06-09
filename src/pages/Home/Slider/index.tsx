import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Slider1 from "./Slider1";
const Slider = () => {
    return (
        <Wrapper>
            <Carousel
                additionalTransfrom={0}
                arrows={false}
                autoPlaySpeed={3000}
                centerMode={false}
                className="customize-carousel"
                containerClass="container-padding-bottom"
                dotListClass=""
                draggable
                focusOnSelect
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024,
                        },
                        items: 1,
                        partialVisibilityGutter: 40,
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0,
                        },
                        items: 1,
                        partialVisibilityGutter: 30,
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464,
                        },
                        items: 2,
                        partialVisibilityGutter: 30,
                    },
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                <Slider1
                    src="/src/component/assets/images/slider_img1.png"
                    firstSlide="false"
                />
                <Slider1 src="/src/component/assets/images/slider_img2.png" />
                <Slider1 src="/src/component/assets/images/slider_img3.png" />
            </Carousel>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    .react-multi-carousel-dot button {
        border: 1px solid #fb2e86;
        background-color: transparent;
        border-radius: 0;
        width: 8px;
        height: 8px;
        box-sizing: border-box;
        transform: rotate(-45deg);
        margin: 0 6px 30px 6px;
    }
    .react-multi-carousel-dot--active button {
        background-color: #fb2e86;
    }
`;
export default Slider;
