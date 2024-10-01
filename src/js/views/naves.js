import React, { useContext, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { Context } from "../store/appContext";
import { HeartIcon, HeartIcon as HeartOutlineIcon } from '@heroicons/react/24/outline';
import ImageStarship from '../../img/naves.png';
import '../../styles/naves.css';

export const Naves = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.naves(); // Obtener las naves
    }, [actions]);

    const toggleFavorite = (nave) => {
        actions.toggleFavorite(nave);
    };

    return (
        <Container fluid>
            <div className="tarjetas-scroll d-flex flex-nowrap overflow-auto">
                {store.naves.map(nave => (
                    <Card className="h-100 me-3" key={nave.uid} style={{ minWidth: "250px", position: "relative" }}>
                        <Card.Img variant="top" src={ImageStarship} className="responsive-img" />
                        <Card.Body>
                            <Card.Title>{nave.name}</Card.Title>
                            <Card.Text>
                                <strong>Modelo:</strong> {nave.model || "N/A"}<br />
                                <strong>Clase:</strong> {nave.starship_class || "N/A"}<br />
                                <strong>Tripulación:</strong> {nave.crew || "N/A"}
                            </Card.Text>
                            <div className="d-flex justify-content-between align-items-center">
                                <Link to={`/nave/${nave.uid}`}>
                                    <Button className="btn btn-primary">Read more!</Button>
                                </Link>
                                <button 
                                    className="like-button"
                                    onClick={() => toggleFavorite(nave)}
                                >
                                    {store.favorites.some(fav => fav.uid === nave.uid) ? (
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
