import React from "react";
import { Link } from "react-router-dom";
import '../../styles/footer.css'; // Asegúrate de tener este archivo CSS para los estilos del pie de página

export const Footer = () => {
    return (
        <footer className="footer text-center py-3 mt-5 mb-5">
            <Link to="/" className="back-to-top shadow">Back to top</Link>
            <p className="footer-text">© 2024 Star Wars Blog</p>
        </footer>
    );
};
