import React from "react";
import { Link } from "react-router-dom";
import '../../styles/footer.css'; // Asegúrate de tener este archivo CSS para los estilos del pie de página
import { FooterYara } from "./footerYara";

export const Footer = () => {
    return (
        <footer className="footer text-center py-3 mt-5 mb-5">
            <p className="footer-text">© 2024 Star Wars Blog</p>
            <FooterYara/>
        </footer>
    );
};
