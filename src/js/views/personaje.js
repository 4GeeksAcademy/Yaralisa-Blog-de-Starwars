import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Table from 'react-bootstrap/Table';
import { Container, Row, Col, Card } from 'react-bootstrap';

export const Personaje = () => {
    const { store } = useContext(Context);
    const [personaje, setPersonaje] = useState({});
    const params = useParams();

    const headers = ["Nombre", "Altura", "Masa", "Color de Ojos", "Color de Cabello", "Género"];
    const keys = ["name", "height", "mass", "eye_color", "hair_color", "gender"];

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${params.uid}/`)
            .then(response => response.json())
            .then(data => setPersonaje(data))
            .catch(error => console.error("Error al obtener los datos del personaje:", error));
    }, [params.uid]);

    return (
        <Container fluid>
            <Row className="justify-content-center mb-4">
                <Col xs={12} md={10} lg={8}>
                    <Card className="mb-4 bg-dark text-light">
                        <Row className="g-0">
                            <Col md={6}>
                                <Card.Img
                                    variant="top"
                                    src="https://via.placeholder.com/800x400"
                                    alt="personaje"
                                />
                            </Col>
                            <Col md={6}>
                                <Card.Body>
                                    <Card.Title className="display-4 text-light">{personaje.name}</Card.Title>
                                    <Card.Text>
                                        {personaje.description || "Descripción no disponible."}
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>

                    <hr className="my-4" />
                    
                    <h1 className="display-4 text-center mb-5">Detalles: {personaje.name}</h1>

                    <div className="table-responsive">
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    {headers.map((header, index) => (
                                        <th key={index}>{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {keys.map((key, index) => (
                                        <td key={index}>{personaje[key] || "N/A"}</td>
                                    ))}
                                </tr>
                            </tbody>
                        </Table>
                    </div>

                    <div className="text-center mt-4">
                        <Link to="/">
                            <span className="btn btn-primary btn-lg" role="button">
                                Back home
                            </span>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};
