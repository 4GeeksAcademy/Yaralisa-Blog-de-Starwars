import React, { useContext, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { Context } from "../store/appContext";
import { HeartIcon, HeartIcon as HeartOutlineIcon } from '@heroicons/react/24/outline';
// import ImageCard from '../../img/jedi.png';
import '../../styles/personajes.css';

export const Personajes = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.personajes();
    }, [actions]);

    const toggleFavorite = (personaje) => {
        actions.toggleFavorite(personaje);
    };

    return (
        <Container fluid>
            <div className="tarjetas-scroll d-flex flex-nowrap overflow-auto">
                {store.personajes.map(personaje => (
                    <Card className="h-100 me-3" key={personaje.uid} style={{ minWidth: "250px", position: "relative" }}>
                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoUk8SPxVSbaqKk3SSqv6ZwFuy70kYai1pHg&s" className="responsive-img" />
                        <Card.Body>
                            <Card.Title>{personaje.name}</Card.Title>
                            <Card.Text>
                                <strong>Género:</strong> {personaje.gender || "N/A"}<br />
                                <strong>Color de pelo:</strong> {personaje.hair_color || "N/A"}<br />
                                <strong>Color de ojos:</strong> {personaje.eye_color || "N/A"}
                            </Card.Text>
                            <div className="d-flex justify-content-between align-items-center">
                                <Link to={`/personaje/${personaje.uid}`}>
                                    <Button className="btn btn-primary">Read more!</Button>
                                </Link>
                                <button 
                                    className="like-button"
                                    onClick={() => toggleFavorite(personaje)}
                                >
                                    {store.favorites.some(fav => fav.uid === personaje.uid) ? (
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
