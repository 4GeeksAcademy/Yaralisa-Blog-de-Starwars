import React, { useContext } from "react";
import { Naves } from "./naves";
import { Personajes } from "./personajes";
import { Container, Row, Col } from 'react-bootstrap';
import { Planetas } from "./planetas";
import { Context } from "../store/appContext";
import '../../styles/home.css'

export const Home = () => {
    const { store, actions } = useContext(Context);
    return (
        <Container fluid className="home-container">
            <Row className="justify-content-center text-center mb-4">
                <Col xs={12} className="text-center">
                    <h1>Personajes</h1>
                </Col>
            </Row>
            <Row className="justify-content-center mb-4">
                <Col xs={12} md={10} lg={8}>
                    <Personajes />
                </Col>
            </Row>
            <Row className="justify-content-center text-center mb-4">
                <Col xs={12} className="text-center">
                    <h1>Planetas</h1>
                </Col>
            </Row>
            <Row className="justify-content-center mb-4">
                <Col xs={12} md={10} lg={8}>
                    <Planetas />
                </Col>
            </Row>
            <Row className="justify-content-center text-center mb-4">
                <Col xs={12} className="text-center">
                    <h1>Starships</h1>
                </Col>
            </Row>
            <Row className="justify-content-center mb-4">
                <Col xs={12} md={10} lg={8}>
                    <Naves />
                </Col>
            </Row>
        </Container>
    );
};
