import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import routes from "./routes";
import AuthMiddleware from "./component/AuthMiddleWare";
function App() {
    return (
        <Wrapper>
            <Routes>
                {routes.map(
                    (
                        { path, element: Element, layout: Layout, isPrivate },
                        index
                    ) => {
                        const Middleware = isPrivate
                            ? AuthMiddleware
                            : Fragment;

                        return (
                            <Route
                                key={index}
                                path={path}
                                element={
                                    <Middleware>
                                        <Layout>
                                            <Element />
                                        </Layout>
                                    </Middleware>
                                }
                            />
                        );
                    }
                )}
            </Routes>
            <ToastContainer />
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
