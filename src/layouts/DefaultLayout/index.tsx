import styled from "styled-components";

import Header from "../../component/Header";

import Footer from "../../component/Footer";

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
    padding-top: 120px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
`;

export default DefaultLayout;
