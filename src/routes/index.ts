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
interface IRoute {
    path: string;
    element: React.FC;
}

const path = {
    home: "/",
    login: "/login",
    register: "/register",
    searchResult: "/search",
    productDetail: "/product/:id",
    cart: "/cart",
    payment: "/payment",
    orderCompleted: "/order-completed",
    aboutUs: "/about-us",
    notFound: "*",
};

const routes: IRoute[] = [
    {
        path: path.home,
        element: Home,
    },
    {
        path: path.login,
        element: Login,
    },
    {
        path: path.register,
        element: Register,
    },
    {
        path: path.cart,
        element: Cart,
    },
    {
        path: path.productDetail,
        element: ProductDetail,
    },
    {
        path: path.searchResult,
        element: SearchResult,
    },
    {
        path: path.orderCompleted,
        element: OrderCompleted,
    },
    {
        path: path.aboutUs,
        element: AboutUs,
    },
    {
        path: path.payment,
        element: Payment,
    },
    {
        path: "*",
        element: NotFound,
    },
];
export default routes;
