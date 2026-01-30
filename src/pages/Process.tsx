import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import './Process.css';

export const Process: React.FC = () => {
    return (
        <div className="process-page">
            <Navbar />

            <section className="section pt-200">
                <div className="container">
                    <div className="process-header">
                        <h1 className="section-title">How We Work</h1>
                        <p className="section-desc">
                            Clarity at every step. We’ve refined our process to eliminate ambiguity
                            and ensure you always know where we stand.
                        </p>
                    </div>

                    <div className="process-steps-vertical">
                        {/* Step 1 */}
                        <div className="process-card-row">
                            <div className="step-indicator">
                                <span className="step-num">01</span>
                                <div className="step-line"></div>
                            </div>
                            <Card className="process-card-content">
                                <h2>Discovery & Strategy</h2>
                                <div className="process-outcome">
                                    <strong>Outcome:</strong> A clear roadmap and technical definition.
                                </div>
                                <p>
                                    We start by listening. We define the user profiles, core problems,
                                    and technical requirements. No code is written until we know
                                    exactly what we are building and why.
                                </p>
                            </Card>
                        </div>

                        {/* Step 2 */}
                        <div className="process-card-row">
                            <div className="step-indicator">
                                <span className="step-num">02</span>
                                <div className="step-line"></div>
                            </div>
                            <Card className="process-card-content">
                                <h2>Design & Prototyping</h2>
                                <div className="process-outcome">
                                    <strong>Outcome:</strong> High-fidelity interactive prototypes.
                                </div>
                                <p>
                                    We design the interface to look and feel like a finished product.
                                    You’ll see exactly how it works before we invest in engineering.
                                    We focus on "Apple-like" clarity and usability.
                                </p>
                            </Card>
                        </div>

                        {/* Step 3 */}
                        <div className="process-card-row">
                            <div className="step-indicator">
                                <span className="step-num">03</span>
                                <div className="step-line"></div>
                            </div>
                            <Card className="process-card-content">
                                <h2>Build & Engineer</h2>
                                <div className="process-outcome">
                                    <strong>Outcome:</strong> Production-ready, scalable code.
                                </div>
                                <p>
                                    We build using modern, robust stacks (React, Node, Python).
                                    Our code is clean, documented, and built to scale from day one.
                                    We don't do "spaghetti availability".
                                </p>
                            </Card>
                        </div>

                        {/* Step 4 */}
                        <div className="process-card-row">
                            <div className="step-indicator">
                                <span className="step-num">04</span>
                                <div className="step-line"></div>
                            </div>
                            <Card className="process-card-content">
                                <h2>Launch & Verify</h2>
                                <div className="process-outcome">
                                    <strong>Outcome:</strong> A live, stable product in users' hands.
                                </div>
                                <p>
                                    We handle the deployment, domain setup, and initial monitoring.
                                    We ensure everything is performant and bug-free before the handoff.
                                </p>
                            </Card>
                        </div>

                        {/* Step 5 */}
                        <div className="process-card-row">
                            <div className="step-indicator">
                                <span className="step-num">05</span>
                                <div className="step-line"></div>
                            </div>
                            <Card className="process-card-content">
                                <h2>Support & Iterate</h2>
                                <div className="process-outcome">
                                    <strong>Outcome:</strong> Long-term partnership and growth.
                                </div>
                                <p>
                                    Software is living. We stay onboard to help you iterate based
                                    on user feedback, add new features, and keep dependencies updated.
                                </p>
                            </Card>
                        </div>
                    </div>

                    <div className="text-center mt-12 mb-16">
                        <h2 className="section-title" style={{ fontSize: '32px' }}>Standard of Care</h2>
                        <p className="section-desc" style={{ maxWidth: '600px', margin: '0 auto 32px' }}>
                            We treat your product as if it were our own. That means no shortcuts,
                            total transparency, and a commitment to quality.
                        </p>
                        <Button size="lg" onClick={() => window.location.href = '/contact'}>
                            Start a Conversation
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};
