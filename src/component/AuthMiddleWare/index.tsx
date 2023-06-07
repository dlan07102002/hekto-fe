import { useEffect } from "react";
import storage from "../../helpers/storage";
import STORAGE_KEY from "../../constants";
import { useNavigate, useLocation } from "react-router-dom";
import path from "../../routes/path";

const AuthMiddleware: React.FC<React.PropsWithChildren> = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        const accessToken = storage.get(STORAGE_KEY.ACCESS_KEY);
        if (!accessToken) {
            navigate(
                path.login +
                    "?continue_url=" +
                    encodeURIComponent(location.pathname)
            );
        }
    }, [location.pathname, navigate]);
    return <>{children}</>;
};
export default AuthMiddleware;
