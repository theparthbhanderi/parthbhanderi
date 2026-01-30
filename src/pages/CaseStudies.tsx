import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import './CaseStudies.css';

export const CaseStudies: React.FC = () => {
    return (
        <div className="casestudies-page">
            <Navbar />

            <section className="section bg-surface pt-200">
                <div className="container">
                    <h1 className="section-title text-center">Selected Work</h1>
                    <p className="section-desc text-center mb-16">
                        We don't show everything. We show what matters.
                    </p>

                    {/* FixPix Case Study */}
                    <div className="case-header">
                        <span className="case-badge">Internal Product</span>
                        <h2 className="case-title">FixPix.in</h2>
                        <p className="case-subtitle">
                            A premium image processing tool built with precision, restraint, and Apple-like clarity.
                        </p>
                    </div>

                    <div className="case-showcase-large">
                        <img src="/images/fixpix.png" alt="FixPix UI" className="case-hero-img" />
                    </div>

                    <div className="case-details-grid">
                        <Card className="case-card">
                            <h3>The Problem</h3>
                            <p>
                                Online image tools are often cluttered, ad-heavy, and untrustworthy.
                                Users needed a clean, private, and professional utility for basic image tasks.
                            </p>
                        </Card>
                        <Card className="case-card">
                            <h3>The Approach</h3>
                            <p>
                                We stripped away everything non-essential. No ads, no popups, no signups.
                                Just a calm, drag-and-drop interface that respects the user's focus.
                            </p>
                        </Card>
                        <Card className="case-card">
                            <h3>Execution</h3>
                            <p>
                                Built with React and client-side processing for privacy.
                                The UI uses a neutral palette and soft shadows to minimize cognitive load.
                            </p>
                        </Card>
                        <Card className="case-card">
                            <h3>Learnings</h3>
                            <p>
                                Utility doesn't have to be ugly. By prioritizing aesthetics and privacy,
                                we built a tool that users actually enjoy coming back to.
                            </p>
                        </Card>
                    </div>

                    <div className="text-center mt-12">
                        <Button size="lg" onClick={() => window.open('https://fixpix.in', '_blank')}>
                            Visit FixPix.in
                        </Button>
                    </div>
                </div>
            </section>

            {/* Placeholders */}
            <section className="section">
                <div className="container">
                    <h2 className="section-header-flat text-center">More Work</h2>
                    <div className="grid-2">
                        <Card className="concept-card">
                            <div className="concept-placeholder"></div>
                            <h3>Fintech Dashboard</h3>
                            <p>Concept for a high-frequency trading terminal.</p>
                        </Card>
                        <Card className="concept-card">
                            <div className="concept-placeholder"></div>
                            <h3>AI Legal Assistant</h3>
                            <p>RAG-based document analysis for law firms.</p>
                        </Card>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};
