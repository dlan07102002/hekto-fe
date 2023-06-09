import styled from "styled-components";
import { Link } from "react-router-dom";
import Input from "../../Input";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../Button";

const Navbar = () => {
    return (
        <Wrapper>
            <Container>
                <div className="logo">
                    <h2>Hekto</h2>
                </div>
                <div>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/home">Home</Link>
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
                <Form>
                    <FormGroup>
                        <Input
                            className="input-search"
                            label=""
                            placeholder="Search..."
                        />
                    </FormGroup>
                    <FormGroup>
                        <Button className="nav-search-btn">
                            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                        </Button>
                    </FormGroup>
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
    justify-content: space-evenly;

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
export default Navbar;
