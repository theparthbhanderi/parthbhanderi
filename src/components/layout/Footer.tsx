import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo logo">
                            Parth Bhanderi
                        </Link>
                        <p className="footer-tagline">
                            Part of the Parth product ecosystem.
                        </p>
                    </div>

                    <div className="footer-menu">
                        <div className="footer-col">
                            <h4>Ecosystem</h4>
                            <a href="https://fixpix.in" target="_blank" rel="noreferrer">FixPix</a>
                            <a href="https://parthstudio.in" target="_blank" rel="noreferrer">Parth Studio</a>
                            <a href="https://parthbuilds.dev" target="_blank" rel="noreferrer">Parth Builds</a>
                            <a href="https://parthbhanderi.in/about" target="_blank" rel="noreferrer">About Parth</a>
                        </div>
                        <div className="footer-col">
                            <h4>Connect</h4>
                            <a href="https://twitter.com/parthbhanderi" target="_blank" rel="noreferrer">X (Twitter)</a>
                            <a href="https://linkedin.com/in/parthbhanderi" target="_blank" rel="noreferrer">LinkedIn</a>
                            <a href="https://github.com/parthbhanderi" target="_blank" rel="noreferrer">GitHub</a>
                            <a href="mailto:hello@parthbhanderi.in">Email</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-copy">
                        &copy; {new Date().getFullYear()} Parth Bhanderi.
                    </div>
                    <div className="footer-legal">
                        All systems normal.
                    </div>
                </div>
            </div>
        </footer>
    );
};
