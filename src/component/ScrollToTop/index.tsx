import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// any ???
interface Props {
    children?: any;
}

function ScrollToTop({ children }: Props) {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return <>{children}</>;
}

export default ScrollToTop;
