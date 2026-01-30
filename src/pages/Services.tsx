import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import './Services.css';

export const Services: React.FC = () => {
    return (
        <div className="services-page">
            <Navbar />

            {/* Header */}
            <section className="services-header section bg-surface">
                <div className="container">
                    <h1 className="services-title">Capabilities</h1>
                    <p className="services-subtitle">
                        Maximum clarity, minimum confusion. We build serious tools <br />
                        for founders and teams who care about quality.
                    </p>
                </div>
            </section>

            {/* 1. Web Development */}
            <section className="service-detail-section section">
                <div className="container">
                    <div className="service-detail-grid">
                        <div className="service-info">
                            <h2 className="service-name">Web Development</h2>
                            <p className="service-desc">
                                High-performance frotend and backend engineering. We build scalable systems using modern standards (React, Node, TypeScript) that are designed to last.
                            </p>
                            <div className="service-outcome">
                                <strong>Expected Outcome:</strong>
                                <p>A fast, robust, and maintainable application that can handle scale.</p>
                            </div>
                        </div>
                        <Card className="service-detail-card">
                            <div className="detail-block">
                                <h4>Includes</h4>
                                <ul>
                                    <li>Full-stack architecture</li>
                                    <li>API design & integration</li>
                                    <li>Performance optimization</li>
                                    <li>Database modeling</li>
                                </ul>
                            </div>
                            <div className="detail-block">
                                <h4>Best For</h4>
                                <p>Series A+ startups, Enterprise tools, SaaS products.</p>
                            </div>
                            <div className="detail-block negative">
                                <h4>Not For</h4>
                                <p>Temporary marketing sites, WordPress themes.</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* 2. UI/UX Design */}
            <section className="service-detail-section section bg-surface">
                <div className="container">
                    <div className="service-detail-grid reverse">
                        <div className="service-info">
                            <h2 className="service-name">UI/UX Design</h2>
                            <p className="service-desc">
                                Product thinking meets Apple-like clarity. We design interfaces that are intuitive, confident, and respect the user's intelligence.
                            </p>
                            <div className="service-outcome">
                                <strong>Expected Outcome:</strong>
                                <p>A design system and interface that feels premium and instantly trustworthy.</p>
                            </div>
                        </div>
                        <Card className="service-detail-card">
                            <div className="detail-block">
                                <h4>Includes</h4>
                                <ul>
                                    <li>User research & flows</li>
                                    <li>High-fidelity UI design</li>
                                    <li>Design systems</li>
                                    <li>Interactive prototypes</li>
                                </ul>
                            </div>
                            <div className="detail-block">
                                <h4>Best For</h4>
                                <p>Deep-tech products, Consumer apps, Complex dashboards.</p>
                            </div>
                            <div className="detail-block negative">
                                <h4>Not For</h4>
                                <p>Flashy campaign sites, "Dribbble-only" concepts.</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* 3. AI Integration */}
            <section className="service-detail-section section">
                <div className="container">
                    <div className="service-detail-grid">
                        <div className="service-info">
                            <h2 className="service-name">AI Integration</h2>
                            <p className="service-desc">
                                Practical AI features that solve real problems. We integrate LLMs and intelligent agents to automate complex workflows without the hype.
                            </p>
                            <div className="service-outcome">
                                <strong>Expected Outcome:</strong>
                                <p>Automated workflows and "magic" features that actually save time.</p>
                            </div>
                        </div>
                        <Card className="service-detail-card">
                            <div className="detail-block">
                                <h4>Includes</h4>
                                <ul>
                                    <li>LLM integration (OpenAI/Anthropic)</li>
                                    <li>Agentic workflows</li>
                                    <li>RAG implementation</li>
                                    <li>Prompt engineering</li>
                                </ul>
                            </div>
                            <div className="detail-block">
                                <h4>Best For</h4>
                                <p>Data-heavy platforms, Content tools, Customer support automations.</p>
                            </div>
                            <div className="detail-block negative">
                                <h4>Not For</h4>
                                <p>Generic chatbots, "AI wrapper" gimmicks.</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* 4. Startup MVPs */}
            <section className="service-detail-section section bg-surface">
                <div className="container">
                    <div className="service-detail-grid reverse">
                        <div className="service-info">
                            <h2 className="service-name">Startup MVPs</h2>
                            <p className="service-desc">
                                From idea to launch in weeks, not months. We build rapid iterations without sacrificing code quality or design integrity.
                            </p>
                            <div className="service-outcome">
                                <strong>Expected Outcome:</strong>
                                <p>A market-ready product that investors and users take seriously.</p>
                            </div>
                        </div>
                        <Card className="service-detail-card">
                            <div className="detail-block">
                                <h4>Includes</h4>
                                <ul>
                                    <li>Core feature prioritization</li>
                                    <li>Rapid development</li>
                                    <li>Deployment pipeline</li>
                                    <li>Analytics setup</li>
                                </ul>
                            </div>
                            <div className="detail-block">
                                <h4>Best For</h4>
                                <p>Early-stage founders, Incubator projects.</p>
                            </div>
                            <div className="detail-block negative">
                                <h4>Not For</h4>
                                <p>Unvalidated ideas, "Spaghetti code" proof of concepts.</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="section contact-section">
                <div className="container">
                    <Card className="final-cta-card">
                        <h2 className="cta-title">Not sure what you need?</h2>
                        <p className="cta-text">
                            We define requirements during our discovery phase. <br />
                            Let’s start with a conversation.
                        </p>
                        <Button size="lg" onClick={() => window.location.href = '/contact'}>
                            Let’s Talk
                        </Button>
                    </Card>
                </div>
            </section>

            <Footer />
        </div>
    );
};
