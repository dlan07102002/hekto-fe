import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Input from "../../Input";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../Button";
import path from "../../../routes/path";
import { IProduct } from "../../../interfaces";
import productApi from "../../../api/product";
import useDebouncedEffect from "../../../hooks/useDebounceEffect";

const Navbar:React.FC = () => {
    const [isShowSearchResults, setIsShowSearchResults] =
        useState<boolean>(true);
    const [keyword, setKeyword] = useState<string>("");
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [products, setProducts] = useState<IProduct[]>([]);
    const [isSearching, setIsSearching] = useState<boolean>(false);
    // Hiện search result khi:
    // - focus && có keyword
    // Ẩn search result khi:
    // - blur
    const navigate = useNavigate();
    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setKeyword(event.target.value.trim());
    };
    const handleFocus = () => {
        setIsFocus(true);
    };
    const handleBlur = () => {
        setIsFocus(false);
    };

    const handleClickItem = (id: number) => {
        console.log(id);
        navigate(`/product/${id}`);
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (keyword) {
            navigate(path.searchResult + `?q=${keyword}`);
            setKeyword("");
        }
    };

    useEffect(() => {
        if (isFocus && keyword) {
            setIsShowSearchResults(true);
        } else if (!isFocus) {
            setIsShowSearchResults(false);
        }
    }, [isFocus, keyword]);
    useEffect(() => {
        if (keyword) {
            setIsSearching(true);
        } else {
            setProducts([]);
            setIsShowSearchResults(false);
            setIsSearching(false);
        }
        setIsSearching(!!keyword);
    }, [keyword]);
    useDebouncedEffect(
        () => {
            if (keyword) {
                setIsSearching(true);
                productApi
                    .search({
                        limit: 3,
                        page: 1,
                        order: "createdAt:desc,id:desc",
                        search: keyword,
                    })
                    .then((res) => {
                        setProducts(res.data);
                    })
                    .finally(() => {
                        setIsSearching(false);
                    });
            }
        },
        [keyword],
        800
    );
    return (
        <Wrapper>
            <Container>
                <div className="logo">
                    <h2>Hekto</h2>
                </div>
                <div>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to={path.home}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pages">Pages</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="">Shop</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="">Contact</Link>
                        </li>
                    </ul>
                </div>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Input
                            value={keyword}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onChange={handleChangeInput}
                            className="input-search"
                            label="Search..."
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button type="submit" className="nav-search-btn">
                            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                        </Button>
                    </FormGroup>

                    {isShowSearchResults && (
                        <SearchResultContainer>
                            <SearchResult>
                                {isSearching ? (
                                    <p
                                        style={{
                                            color: "rgb(144, 150, 178)",
                                            fontFamily: "Roboto",
                                            marginTop: "16px",
                                            marginLeft: "10px",
                                        }}
                                    >
                                        Searching...
                                    </p>
                                ) : (
                                    <>
                                        {products.length ? (
                                            products.map((product) => (
                                                <ResultItem
                                                    key={product.id}
                                                    onMouseDown={() =>
                                                        handleClickItem(
                                                            product.id
                                                        )
                                                    }
                                                >
                                                    <img
                                                        alt={product.name}
                                                        src={
                                                            product.images[0]
                                                                .url
                                                        }
                                                        className="product-img"
                                                    />
                                                    <div className="product-info">
                                                        <h3 className="product-name">
                                                            {product.name}
                                                        </h3>
                                                        <p className="product-price">
                                                            $ {product.price}
                                                        </p>
                                                    </div>
                                                </ResultItem>
                                            ))
                                        ) : (
                                            <p
                                                style={{
                                                    color: "rgb(144, 150, 178)",
                                                    fontFamily: "Roboto",
                                                    marginTop: "16px",
                                                    marginLeft: "10px",
                                                }}
                                            >
                                                Không có kết quả nào cho
                                                <strong> keyword</strong>
                                            </p>
                                        )}
                                    </>
                                )}
                            </SearchResult>
                        </SearchResultContainer>
                    )}
                </Form>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    background-color: #fff;
`;
const Container = styled.div`
    margin: auto;
    width: 1135px;
    display: flex;
    height: 81px;
    -webkit-box-align: center;
    align-items: center;
    justify-content: space-between;

    .logo {
        color: #0d0e43;
        font-size: 3.4rem;
    }

    .nav-list {
        display: flex;
        width: 100%;
        align-items: center;
    }

    .nav-list li {
        text-align: center;
        margin-left: 35px;
        font-size: 1.6rem;
        color: #0d0e43;
        display: block;
    }

    .nav-item a {
        text-decoration: none;
        &:hover {
            color: #fb2e86;
        }
    }
`;

const Form = styled.form`
    display: inline-flex;
    height: 40px;
`;
const FormGroup = styled.div`
    height: 40px;
    .nav-search-btn {
        height: 40px;
        width: 45px;
        font-size: 2rem;
    }
    Input {
        height: 40px !important;
        width: 266px;
        border: 2px solid #e7e6ef;
        padding: none;
    }
`;
const SearchResultContainer = styled.div`
    background-color: #fff;
    position: absolute;
    max-width: 311px;
    width: 311px;
    top: 106px;
    min-height: 52px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
        rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;
const SearchResult = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
const ResultItem = styled.li`
    cursor: pointer;
    display: flex;
    gap: 10px;

    .product-img {
        width: 60px;
        height: 60ox;
        object-fit: cover;
    }
    .product-info {
        flex: 1;
    }
    .product-name {
        margin-top: 6px;
        color: black;
        margin-bottom: 8px;
    }
    .product-price {
        color: black;
        font-weight: 100;
    }
    transition: 300ms;
    &:hover {
        background-color: #eee;
    }
`;
export default Navbar;
/**
 * debounce
 * - Gọi tác vụ cuối cùng
 * throttle
 * - Gọi tác vụ đầu tiên
 */
