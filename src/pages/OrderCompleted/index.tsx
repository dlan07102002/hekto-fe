import styled from "styled-components";
import BranchImage from "../../component/BranchIcon";
import {
    OrderCompletedIconFrame,
    OrderCompletedIcon,
} from "../../component/icons";
import Subnav from "../../component/Header/Subnav";
import path from "../../routes/path";
import { Link, useNavigate } from "react-router-dom";

function OrderCompleted() {
    return (
        <Wrapper>
            <Subnav path={path.orderCompleted} name="Order Completed"></Subnav>
            <OrderCompletedNotice>
                <OrderCompletedIconFrame className="icon-frame">
                    <OrderCompletedIcon className="icon-main" />
                </OrderCompletedIconFrame>
                <h2 className="title">Your Order Is Completed</h2>
                <p className="notification">
                    Thank you for your order! Your order is being processed and
                    will be completed within 3-6 hours. You will receive an
                    email confirmation when your order is completed.
                </p>

                <Link to={path.home} className="navigate-btn">
                    Continue Shopping
                </Link>

                <Decoration>
                    <img
                        className="clock"
                        src="src/component/assets/images/clock.png"
                        alt="clock"
                    />
                    <img
                        className="checklist"
                        src="src/component/assets/images/checklist.png"
                        alt="checklist"
                    />
                </Decoration>
            </OrderCompletedNotice>
            <BranchImage />
        </Wrapper>
    );
}
const Wrapper = styled.div``;
const OrderCompletedNotice = styled.div`
    margin: auto;
    text-align: center;
    width: 625px;
    height: 244px;
    position: relative;
    margin-bottom: 200px;
    z-index: 999;
    .icon-frame {
        position: relative;
        left: 0;
    }

    .icon-main {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        border-radius: 100%;
        padding: 8px;
    }

    .title {
        margin-top: 23px;
        color: #101750;
        font-size: 3.6rem;
    }
    .notification {
        margin: 28px 0;
        color: #8d92a7;
        text-align: center;
        font-family: Lato;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 600;
        line-height: 30px;
    }
    .navigate-btn {
        position: relative;
        z-index: 1;
        box-sizing: border-box;
        display: block;
        margin: auto;
        width: 208px;
        text-decoration: none;
        height: 59px;
        padding-top: 12px;
        border-radius: 3px;
        background-color: #ff1788;
        color: #fff;
        font-family: Lato;
        font-size: 1.6rem;
        font-weight: 600;
        line-height: 30px;
        cursor: pointer;

        &:hover {
            opacity: 0.8;
        }
    }
`;
const Decoration = styled.div`
    width: 1008px;
    height: 259px;
    background-color: transparent;
    position: absolute;
    margin: auto;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    border: 1px dotted #ccc;
    border-top: none;
    border-right: none;
    z-index: 0;

    img {
        object-fit: cover;
    }

    .clock {
        height: 94px;
        width: 94px;
        position: absolute;
        left: 0;
        transform: translate(-50%, -100%);
    }

    .checklist {
        height: 70px;
        width: 70px;
        position: absolute;
        right: 0;
        bottom: 0;
        transform: translate(50%, 50%);
    }
`;
export default OrderCompleted;
//coding conventions
