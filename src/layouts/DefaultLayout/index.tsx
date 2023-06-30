import styled from "styled-components";

import ScrollToTop from "../../component/ScrollToTop";

import Header from "../../component/Header";

import Footer from "../../component/Footer";

interface IProps extends React.PropsWithChildren {}

const DefaultLayout: React.FC<IProps> = ({ children }) => {
    return (
        <ScrollToTop>
            <Wrapper>
                <Header />
                <Main>{children}</Main>
                <Footer />
            </Wrapper>
        </ScrollToTop>
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
