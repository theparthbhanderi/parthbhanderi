import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';
import './Navbar.css';

export const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Brand Label for this site
    const brandName = "Parth Bhanderi";

    // Navigation Links Config
    const navItems = [
        { name: 'FixPix', url: 'https://fixpix.in', external: true },
        { name: 'Studio', url: 'https://parthstudio.in', external: true },
        { name: 'Builds', url: 'https://parthbuilds.dev', external: true },
        { name: 'About', url: '/about', external: false }, // Internal for this site
    ];

    const isActive = (path: string) => location.pathname === path;
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <Link to="/" className="logo">
                    {brandName}
                </Link>

                {/* Desktop Nav */}
                <div className="nav-links">
                    {navItems.map((item) => (
                        item.external ? (
                            <a
                                key={item.name}
                                href={item.url}
                                target="_blank"
                                rel="noreferrer"
                                className="nav-item"
                            >
                                {item.name}
                            </a>
                        ) : (
                            <Link
                                key={item.name}
                                to={item.url}
                                className={`nav-item ${isActive(item.url) ? 'active' : ''}`}
                            >
                                {item.name}
                            </Link>
                        )
                    ))}
                </div>

                <div className="nav-right-group">
                    <div className="nav-cta">
                        <Button
                            size="sm"
                            onClick={() => window.location.href = 'https://parthstudio.in/contact'}
                        >
                            Work with Studio
                        </Button>
                    </div>

                    {/* Mobile Hamburger */}
                    <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                        <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                    <div className="mobile-nav-links">
                        {navItems.map((item) => (
                            item.external ? (
                                <a
                                    key={item.name}
                                    href={item.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mobile-nav-item"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ) : (
                                <Link
                                    key={item.name}
                                    to={item.url}
                                    className={`mobile-nav-item ${isActive(item.url) ? 'active' : ''}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};
