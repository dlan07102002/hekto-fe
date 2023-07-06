import styled from "styled-components";

interface IProps {
    path: string;
    name: string;
    position?: string;
    feedback: string;
}
const FeedBackSlider: React.FC<IProps> = ({
    path,
    name,
    position,
    feedback,
}) => (
    <Wrapper>
        <img src={path} alt="" />
        <h3 className="client-name">{name}</h3>
        {position && <p className="position">{position}</p>}
        <p className="feed-back">{feedback}</p>
    </Wrapper>
);
const Wrapper = styled.div`
    width: 100%;
    max-height: 503px;

    img {
        width: 55px;
        height: 59px;
        object-fit: cover;
        max-width: 100%;
        max-height: 100%;
    }
    .client-name {
        color: #151875;
        font-family: "Lato";
        font-size: 2.2rem;
        margin-top: 25px;
        line-height: 25.6px;
    }
    .position {
        color: #8a8fb9;
        font-size: 1rem;
        line-height: 25.6px;
        margin-bottom: 14px;
    }
    .feed-back {
        width: 689px;
        height: 97px;
        margin: auto;
        color: #8a8fb9;
        font-family: "Lato";
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 25.6px;
        padding-bottom: 80px;
    }
`;
export default FeedBackSlider;
