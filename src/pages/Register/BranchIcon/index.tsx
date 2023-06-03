import styled from "styled-components";
import link from "./branchIcon.png";
const BranchImage = () => (
    <Image>
        <h2 color="black">Image</h2>
        <img src={link} />
    </Image>
);

const Image = styled.div`
    widtg: 100%;
    text-align: center;
    margin-top: 35px;
    img {
        height: 93px;
        width: 904px;
        object-fit: cover;
    }
`;
export default BranchImage;
