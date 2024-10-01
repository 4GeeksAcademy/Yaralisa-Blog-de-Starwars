import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
import { FaChevronCircleDown, FaChevronCircleLeft, FaTrash } from 'react-icons/fa';
import { Context } from "../store/appContext";
import '../../styles/navbar.css'; // Asegúrate de tener este archivo CSS para las transiciones

export const Navbar = () => {
    const { store, actions } = useContext(Context);
    const { isDropdownOpen, favorites } = store;
    const favoritesCount = favorites.length; // Contador de favoritos

    return (
        <nav className="navbar navbar-light bg-light mb-3 shadow">
            <Container>
                <Row className="w-100">
                    <Col className="d-flex align-items-center">
                        {/* Imagen de la marca o título */}
                        <Link to="/">
                            <img
                                src="https://imgs.search.brave.com/hJDPYxSz2HJSQSDQhkgBo1ZN1hbJtI-FMptR-fneZxw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vc2d1cnUu/b3JnL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE4LzAyL3N0YXJf/d2Fyc19sb2dvX1BO/RzI3LnBuZz93PTEx/NjYmaD01NDkmc3Ns/PTE"
                                alt="redimensionar-imagenes"
                                className="navbar-brand"
                                style={{ maxWidth: "700px", height: "auto", backgroundAttachment: "cover" }}
                            />
                        </Link>
                    </Col>
                    <Col className="d-flex justify-content-end align-items-center">
                        {/* Menú desplegable Favorito */}
                        <Dropdown show={isDropdownOpen} onClick={() => actions.toggleDropdown()}>
                            <DropdownButton
                                id="dropdown-basic-button"
                                title={
                                    <span>
                                        Favorites {favoritesCount > 0 && `(${favoritesCount})`}
                                        {isDropdownOpen ? (
                                            <FaChevronCircleDown className="ms-2" />
                                        ) : (
                                            <FaChevronCircleLeft className="ms-2" />
                                        )}
                                    </span>
                                }
                                className="dropdown-button"
                            >
                                {favorites.length > 0 ? (
                                    favorites.map(fav => (
                                        <Dropdown.Item key={fav.uid} as="div" className="d-flex justify-content-between align-items-center">
                                            <Link to={`/${fav.type}/${fav.uid}`} className="text-decoration-none text-light">
                                                {fav.name || 'Unnamed'}
                                            </Link>
                                            <FaTrash 
                                                className="text-danger ms-2" 
                                                style={{ cursor: 'pointer' }} 
                                                onClick={() => actions.toggleFavorite(fav)} 
                                            />
                                        </Dropdown.Item>
                                    ))
                                ) : (
                                    <Dropdown.Item disabled>No Favorites</Dropdown.Item>
                                )}
                            </DropdownButton>
                        </Dropdown>
                    </Col>
                </Row>
            </Container>
        </nav>
    );
};
