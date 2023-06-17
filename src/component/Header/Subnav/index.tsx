import styled from "styled-components";
import { Link } from "react-router-dom";
import path from "../../../routes/path";
const Subnav = ({ ...props }) => {
    return (
        <Wrapper>
            <div className="sub-nav">
                <h3 className="title">{props.name}</h3>
                <ul className="subnav-list">
                    <li className="subnav-item">
                        <Link to={path.home}>Home</Link>
                    </li>
                    .
                    <li className="subnav-item">
                        <Link to="/pages">Pages</Link>
                    </li>
                    <li className="subnav-item active">
                        <Link to={props.path}>{props.name}</Link>
                    </li>
                </ul>
            </div>
        </Wrapper>
    );
};
const Wrapper = styled.div`
    height: 286px;
    background-color: #f6f5ff;
    display: flex;
    margin-bottom: 121px;
    .sub-nav {
        width: 1135px;
        margin: auto;
    }
    .title {
        color: #101750;
        font-size: 3.6rem;
    }
    .subnav-list {
        display: flex;
        margin-top: 7px;
    }
    .subnav-item a {
        text-decoration: none;
        font-family: "Lato";
        font-weight: 500;
        font-size: 1.6rem;
        color: #000000;
        margin-right: 13px;
    }
    .active a {
        color: #fb2e86;
    }
`;

export default Subnav;
