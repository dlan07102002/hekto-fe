import Header from "../../component/Header";
import Footer from "../../component/Footer";
import styled from "styled-components";
interface IProps extends React.PropsWithChildren {}

const DefaultLayout: React.FC<IProps> = ({ children }) => {
    return (
        <Wrapper>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </Wrapper>
    );
};
const Main = styled.div`
    flex: 1;
`;
const Wrapper = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&family=Josefin+Sans:wght@700&display=swap");
    font-family: "IBM Plex Sans", sans-serif;
    font-family: "Josefin Sans", sans-serif;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
`;
export default DefaultLayout;
