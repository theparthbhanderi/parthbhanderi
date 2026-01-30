import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import './Projects.css';

export const Projects: React.FC = () => {
    return (
        <div className="casestudies-page">
            <Navbar />

            <section className="section bg-surface pt-200">
                <div className="container">
                    <h1 className="section-title text-center">Selected Work</h1>
                    <p className="section-desc text-center mb-16">
                        I build things to solve problems. Here is a look at my recent work.
                    </p>

                    {/* FixPix Project */}
                    <div className="case-header">
                        <span className="case-badge">Flagship</span>
                        <h2 className="case-title">FixPix.in</h2>
                        <p className="case-subtitle">
                            Privacy-first, client-side image processing tool. Zero server costs.
                        </p>
                    </div>

                    <div className="case-showcase-large">
                        <div className="case-placeholder"></div>
                        {/* Ideally distinct from Home placeholder. Using style for now as I don't have the image yet verified */}
                    </div>

                    <div className="case-details-grid">
                        <Card className="case-card">
                            <h3>The Problem</h3>
                            <p>
                                Most free image tools steal data, track users, or require signups.
                                I wanted a tool that respects the user and works instantly.
                            </p>
                        </Card>
                        <Card className="case-card">
                            <h3>My Role</h3>
                            <p>
                                Solo Developer. I handled the concept, design, WASM implementation,
                                and deployment.
                            </p>
                        </Card>
                        <Card className="case-card">
                            <h3>Key Decisions</h3>
                            <p>
                                Chose WebAssembly (Rust) for performance.
                                Decided on 100% client-side processing to eliminate server costs and ensure privacy.
                            </p>
                        </Card>
                        <Card className="case-card">
                            <h3>Outcome</h3>
                            <p>
                                A zero-latency tool with 0 monthly server costs (hosted on static edge).
                                Featured in my own ecosystem as a core utility.
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

            {/* More Work / Parth Builds */}
            <section className="section">
                <div className="container">
                    <div className="text-center content-narrow">
                        <h2 className="section-title">Behind the Scenes</h2>
                        <p className="section-desc mb-8">
                            I document my entire building process, experiments, and unfinished ideas on Parth Builds.
                        </p>
                        <Button size="lg" variant="secondary" onClick={() => window.open('https://parthbuilds.dev', '_blank')}>
                            Explore Parth Builds
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};
