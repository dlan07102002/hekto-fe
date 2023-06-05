import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";
function App() {
    return (
        <Wrapper>
            <Routes>
                {routes.map(
                    ({ path, element: Element, layout: Layout }, index) => (
                        <Route
                            key={index}
                            path={path}
                            element={
                                <Layout>
                                    <Element />
                                </Layout>
                            }
                        />
                    )
                )}
            </Routes>
        </Wrapper>
    );
}
const Wrapper = styled.div`
    font-size: 1.8rem;
    color: #fff;
    height: calc(100vh - 160px);
    display: flex;
    background-color: #fff;
`;

export default App;
