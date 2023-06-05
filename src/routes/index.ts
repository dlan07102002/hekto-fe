import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import SearchResult from "../pages/SearchResult";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import Payment from "../pages/Payment";
import OrderCompleted from "../pages/OrderCompleted";
import AboutUs from "../pages/AboutUs";
import NotFound from "../pages/NotFound";
import DefaultLayout from "../layouts/DefaultLayout";
import { PropsWithChildren } from "react";
import path from "./path";
interface IRoute {
    path: string;
    element: React.FC;
    layout: React.FC<PropsWithChildren>;
}

const routes: IRoute[] = [
    {
        path: path.home,
        element: Home,
        layout: DefaultLayout,
    },
    {
        path: path.login,
        element: Login,
        layout: DefaultLayout,
    },
    {
        path: path.register,
        element: Register,
        layout: DefaultLayout,
    },
    {
        path: path.cart,
        element: Cart,
        layout: DefaultLayout,
    },
    {
        path: path.productDetail,
        element: ProductDetail,
        layout: DefaultLayout,
    },
    {
        path: path.searchResult,
        element: SearchResult,
        layout: DefaultLayout,
    },
    {
        path: path.orderCompleted,
        element: OrderCompleted,
        layout: DefaultLayout,
    },
    {
        path: path.aboutUs,
        element: AboutUs,
        layout: DefaultLayout,
    },
    {
        path: path.payment,
        element: Payment,
        layout: DefaultLayout,
    },
    {
        path: "*",
        element: NotFound,
        layout: DefaultLayout,
    },
];
export default routes;
