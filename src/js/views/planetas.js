import React, { useContext, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { Context } from "../store/appContext";
import { HeartIcon, HeartIcon as HeartOutlineIcon } from '@heroicons/react/24/outline';
import ImagePlanets from '../../img/planetas.png';
import '../../styles/planetas.css';

export const Planetas = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.planetas();
    }, [actions]);

    const toggleFavorite = (planeta) => {
        actions.toggleFavorite(planeta);
    };

    return (
        <Container fluid>
            <div className="tarjetas-scroll d-flex flex-nowrap overflow-auto">
                {store.planetas.map(planeta => (
                    <Card className="h-100 me-3" key={planeta.uid} style={{ minWidth: "250px", position: "relative" }}>
                        <Card.Img variant="top" src={ImagePlanets} className="responsive-img" />
                        <Card.Body>
                            <Card.Title>{planeta.name}</Card.Title>
                            <Card.Text>
                                <strong>Clima:</strong> {planeta.climate || "N/A"}<br />
                                <strong>Terreno:</strong> {planeta.terrain || "N/A"}<br />
                                <strong>Población:</strong> {planeta.population || "N/A"}
                            </Card.Text>
                            <div className="d-flex justify-content-between align-items-center">
                                <Link to={`/planeta/${planeta.uid}`}>
                                    <Button className="btn btn-primary">Read more!</Button>
                                </Link>
                                <button 
                                    className="like-button"
                                    onClick={() => toggleFavorite(planeta)}
                                >
                                    {store.favorites.some(fav => fav.uid === planeta.uid) ? (
                                        <HeartIcon className="like-icon text-red-500" />
                                    ) : (
                                        <HeartOutlineIcon className="like-icon text-gray-400" />
                                    )}
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </Container>
    );
};
