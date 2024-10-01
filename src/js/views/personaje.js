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
                                    src="data:image/jpeg;base64,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"
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
