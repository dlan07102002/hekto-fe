import styled from "styled-components";
import Button from "../../../component/Button";
const Slider1 = ({ ...props }) => {
    const lampDisplay = props.firstSlide ? "block" : "none";
    return (
        <Wrapper>
            <Decoration>
                <img
                    className="lamp"
                    src="/src/component/assets/images/lamp.png"
                    style={{ display: lampDisplay }}
                />
                <div className="description">
                    <p>Best Furniture For Your Castle...</p>
                    <h1>New Furniture Collection Trends in 2020</h1>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Magna in est adipiscing in phasellus non in justo.
                    </span>
                    <Button>Shop Now</Button>
                </div>

                <img className="product" src={props.src} />
            </Decoration>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    width: 100%;
    height: 500px;
    background-color: #f2f0ff;
    position: relative;
`;
const Decoration = styled.div`
    width: 100%;

    .description {
        position: absolute;
        left: 19%;
        top: 27%;
        width: 33%;
        h1 {
            font-size: 4.24rem;
            color: black;
            margin-top: 12px;
            margin-bottom: 24px;
            line-height: 1.5;
        }
        p {
            font-size: 1.6rem;
            font-weight: 700;
            color: #fb2e86;
            font-family: "Lato";
        }
        span {
            font-size: 1.6rem;
            font-weight: 400;
            color: #8a8fb9;
            font-family: "Lato";
        }
        Button {
            margin-top: 24px;
            width: 145px;
            height: 45px;
            font-size: 1.7rem;
        }
    }
    .product {
        width: 30%;
        object-fit: cover;
        position: absolute;
        top: 8%;
        right: 10%;
    }
    .lamp {
        position: absolute;
        width: 20%;
        object-fit: cover;
    }
`;
export default Slider1;
