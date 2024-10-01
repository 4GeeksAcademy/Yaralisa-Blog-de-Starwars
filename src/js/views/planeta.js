import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Table from 'react-bootstrap/Table';
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../../styles/planeta.css';

export const Planeta = () => {
    const { store } = useContext(Context);
    const [planeta, setPlaneta] = useState({});
    const params = useParams();

    const headers = ["Nombre", "Clima", "Terreno", "Población", "Diámetro", "Periodo Orbital"];
    const keys = ["name", "climate", "terrain", "population", "diameter", "orbital_period"];

    useEffect(() => {
        fetch(`https://swapi.dev/api/planets/${params.uid}/`)
            .then(response => response.json())
            .then(data => setPlaneta(data))
            .catch(error => console.error("Error al obtener los datos del planeta:", error));
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
                                    alt="planeta"
                                />
                            </Col>
                            <Col md={6}>
                                <Card.Body>
                                    <Card.Title className="card-title">{planeta.name}</Card.Title>
                                    <Card.Text>
                                        {planeta.description || "Descripción no disponible."}
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                    <hr className="my-4" />
                    <h1 className="display-4 text-center mb-5">Detalles: {planeta.name}</h1>
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
                                        <td key={index}>{planeta[key] || "N/A"}</td>
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
