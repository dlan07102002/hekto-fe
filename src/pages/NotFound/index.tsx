import styled from "styled-components";
import Subnav from "../../component/Header/Subnav";
import path from "../../routes/path";
import BranchImage from "../../component/BranchIcon";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();
    const handleClickBtn = () => {
        navigate(path.home);
    };
    return (
        <Wrapper>
            <Subnav path={path.notFound} name="404 Not Found"></Subnav>
            <NotFoundImages>
                <img src="/src/component/assets/images/notFound.png" />
                <div>
                    <button onClick={handleClickBtn} className="back-home-btn">
                        Back to Home
                    </button>
                </div>
            </NotFoundImages>

            <BranchImage />
        </Wrapper>
    );
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    .back-home-btn {
        margin: auto;
        background-color: #fb2e86;
        height: 44px;
        width: 165px;
        border: none;
        border-radius: 3px;
        font-size: 1.6rem;
        color: #fff;
        &:hover {
            cursor: pointer;
            opacity: 0.8;
        }
    }
`;
const NotFoundImages = styled.div`
    margin: auto;
    height: 526.6px;
    width: 913px;
    text-align: center;
    img {
        object-fit: cover;
        max-width: 100%;
        max-height: 100%;
    }
`;
export default NotFound;
//coding conventions
