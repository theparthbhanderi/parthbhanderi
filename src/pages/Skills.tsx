import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Card } from '../components/ui/Card';
import './Skills.css';

export const Skills: React.FC = () => {
    return (
        <div className="services-page">
            <Navbar />

            {/* Header */}
            <section className="services-header section bg-surface">
                <div className="container">
                    <h1 className="services-title">Capabilities</h1>
                    <p className="services-subtitle">
                        I focus on high-leverage skills. I don't just write code; <br />
                        I build systems, products, and value.
                    </p>
                </div>
            </section>

            {/* 1. Engineering */}
            <section className="service-detail-section section">
                <div className="container">
                    <div className="service-detail-grid">
                        <div className="service-info">
                            <h2 className="service-name">Engineering</h2>
                            <p className="service-desc">
                                Full-stack rigor. I build with standard, proven tools but push them to their limits. My focus is on maintainability and performance.
                            </p>
                        </div>
                        <Card className="service-detail-card">
                            <div className="detail-block">
                                <h4>Core Stack</h4>
                                <ul>
                                    <li>TypeScript / React / Node</li>
                                    <li>Rust / WebAssembly</li>
                                    <li>PostgreSQL / Redis</li>
                                    <li>AWS / Vercel</li>
                                </ul>
                            </div>
                            <div className="detail-block">
                                <h4>Approach</h4>
                                <p>Type-safe, tested, and modular.</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* 2. Product */}
            <section className="service-detail-section section bg-surface">
                <div className="container">
                    <div className="service-detail-grid reverse">
                        <div className="service-info">
                            <h2 className="service-name">Product</h2>
                            <p className="service-desc">
                                I build what people actually need. I translate vague problems into concrete features and clear roadmaps.
                            </p>
                        </div>
                        <Card className="service-detail-card">
                            <div className="detail-block">
                                <h4>Focus Areas</h4>
                                <ul>
                                    <li>MVP Scoping</li>
                                    <li>User Flow Design</li>
                                    <li>Feature Prioritization</li>
                                    <li>Analytics & Loops</li>
                                </ul>
                            </div>
                            <div className="detail-block">
                                <h4>Mindset</h4>
                                <p>Outcome over output. Ship to learn.</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* 3. AI & Automation */}
            <section className="service-detail-section section">
                <div className="container">
                    <div className="service-detail-grid">
                        <div className="service-info">
                            <h2 className="service-name">AI & Automation</h2>
                            <p className="service-desc">
                                Beyond the hype. I implement LLMs and agents to handle complex logic and automate repetitive workflows.
                            </p>
                        </div>
                        <Card className="service-detail-card">
                            <div className="detail-block">
                                <h4>Capabilities</h4>
                                <ul>
                                    <li>RAG Pipelines</li>
                                    <li>Agentic Workflows</li>
                                    <li>Structured Output Gen</li>
                                    <li>Local LLMs</li>
                                </ul>
                            </div>
                            <div className="detail-block">
                                <h4>Goal</h4>
                                <p>Augment human capability, don't replace it.</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* 4. Systems & Architecture */}
            <section className="service-detail-section section bg-surface">
                <div className="container">
                    <div className="service-detail-grid reverse">
                        <div className="service-info">
                            <h2 className="service-name">Systems & Architecture</h2>
                            <p className="service-desc">
                                Designing for the long haul. I define data models, API boundaries, and deployment strategies that scale.
                            </p>
                        </div>
                        <Card className="service-detail-card">
                            <div className="detail-block">
                                <h4>Competencies</h4>
                                <ul>
                                    <li>System Design</li>
                                    <li>Database Modeling</li>
                                    <li>CI/CD Pipelines</li>
                                    <li>Security Best Practices</li>
                                </ul>
                            </div>
                            <div className="detail-block">
                                <h4>Philosophy</h4>
                                <p>Simple is reliable. Boring is good.</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};
