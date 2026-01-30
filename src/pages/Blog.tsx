import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import './Blog.css';

export const Blog: React.FC = () => {
    return (
        <div className="casestudies-page">
            <Navbar />

            <section className="section bg-surface pt-200">
                <div className="container">
                    <h1 className="section-title text-center">Writings</h1>
                    <p className="section-desc text-center mb-16">
                        Case studies in progress. Honest notes on engineering, design, and execution.
                    </p>

                    {/* Featured Log: FixPix */}
                    <div className="case-header">
                        <span className="case-badge">Engineering & Product</span>
                        <h2 className="case-title">Building FixPix</h2>
                        <p className="case-subtitle">
                            How I built a privacy-first, zero-cost image tool using WebAssembly.
                        </p>
                    </div>

                    <div className="case-showcase-large">
                        <div className="case-placeholder"></div>
                    </div>

                    <div className="case-details-grid">
                        <Card className="case-card">
                            <h3>The Spark</h3>
                            <p>
                                I noticed a gap between heavyweight tools like Photoshop and simple, fast tools that respect privacy.
                                Everything else was either too complex or data-hungry.
                            </p>
                        </Card>
                        <Card className="case-card">
                            <h3>The Architecture</h3>
                            <p>
                                By shifting compute to the client with WASM, I eliminated server costs entirely.
                                The browser is more powerful than we think.
                            </p>
                        </Card>
                        <Card className="case-card">
                            <h3>The Lesson</h3>
                            <p>
                                Constraints breed creativity. Removing the backend forced me to deeply understand
                                binary data handling in the browser.
                            </p>
                        </Card>
                        <Card className="case-card">
                            <h3>Impact</h3>
                            <p>
                                A tool I use daily, and one that proves sustainable software doesn't need a subscription model.
                            </p>
                        </Card>
                    </div>

                    <div className="text-center mt-12">
                        <Button size="lg" onClick={() => window.open('https://fixpix.in', '_blank')}>
                            Visit FixPix
                        </Button>
                    </div>
                </div>
            </section>

            {/* Recent Thoughts */}
            <section className="section">
                <div className="container">
                    <h2 className="section-header-flat text-center">Recent Thoughts</h2>
                    <div className="grid-2">
                        <Card className="concept-card">
                            <div className="concept-placeholder"></div>
                            <h3>The Student Builder</h3>
                            <p>Balancing academic theory with the messy reality of shipping production code.</p>
                        </Card>
                        <Card className="concept-card">
                            <div className="concept-placeholder"></div>
                            <h3>Product Clarity</h3>
                            <p>Why most products fail not because of code, but because of a lack of definition.</p>
                        </Card>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};
