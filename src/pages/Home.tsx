import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import './Home.css';

export const Home: React.FC = () => {
    return (
        <div className="home-page">
            <Navbar />

            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title animate-enter delay-1">
                            Hi, I’m Parth. <br />
                            I build software simply because <br /> I’m tired of bad tools.
                        </h1>
                        <p className="hero-subtitle animate-enter delay-2">
                            I build serious digital products that respect the user. <br /> Private, fast, and crafted with intent.
                        </p>
                        <div className="hero-actions animate-enter delay-3">
                            <Button size="lg" onClick={() => window.location.href = '#work'}>
                                View My Work
                            </Button>
                            <Button size="lg" variant="secondary" onClick={() => window.open('https://fixpix.in', '_blank')}>
                                Explore FixPix
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 1. What I Do */}
            <section className="section bg-surface">
                <div className="container">
                    <h2 className="section-title text-center mb-16">What I Do</h2>
                    <div className="grid-3">
                        <Card className="p-8 card-info-hover">
                            <h3>Builder</h3>
                            <p>I ship complete products. From idea to deployment, I handle the full lifecycle.</p>
                        </Card>
                        <Card className="p-8 card-info-hover">
                            <h3>Engineer</h3>
                            <p>Full-stack architectural rigor. TypeScript, Rust, and scalable cloud systems.</p>
                        </Card>
                        <Card className="p-8 card-info-hover">
                            <h3>Founder</h3>
                            <p>Building sustainable business models around useful software.</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* 2. Featured Work */}
            <section className="section" id="work">
                <div className="container">
                    <h2 className="section-title mb-12">Featured Work</h2>

                    {/* FixPix Highlight */}
                    <div className="mb-12">
                        <Card className="p-0 overflow-hidden" hover onClick={() => window.open('https://fixpix.in', '_blank')}>
                            <div className="work-placeholder"></div>
                            <div className="p-8">
                                <h3>FixPix.in</h3>
                                <p>Privacy-first image processing. No servers, just WASM.</p>
                            </div>
                        </Card>
                    </div>

                    <div className="grid-2">
                        <Card hover onClick={() => window.open('https://parthbuilds.dev', '_blank')}>
                            <div className="p-8">
                                <h3>Parth Builds</h3>
                                <p>My open engineering workshop.</p>
                            </div>
                        </Card>
                        <Card hover onClick={() => window.open('https://parthstudio.in', '_blank')}>
                            <div className="p-8">
                                <h3>Parth Studio</h3>
                                <p>Premium digital agency.</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* 3. Why I Build (The Manifesto) */}
            <section className="section bg-surface">
                <div className="container">
                    <div className="content-narrow text-center">
                        <h2 className="section-title">Why I Build</h2>
                        <p className="section-desc mt-8" style={{ fontSize: '20px', lineHeight: '1.6' }}>
                            I started building <strong>FixPix</strong> not because the world needed another image editor,
                            but because I was annoyed. Simple tasks shouldn't require uploading personal files to a server
                            or dodging ads.
                        </p>
                        <p className="section-desc mt-4" style={{ fontSize: '20px', lineHeight: '1.6' }}>
                            I believe software should be <strong>polite</strong>. It should do its job, stay private,
                            and feel like a quiet, well-made object. That's the standard I hold for everything I make.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. Ecosystem & CTA */}
            <section className="section text-center pt-100 pb-100">
                <div className="container">
                    <h2 className="section-title">Let’s build something meaningful.</h2>
                    <Button size="lg" className="mt-8" onClick={() => window.open('https://parthstudio.in/contact', '_blank')}>
                        Get in Touch
                    </Button>

                    <div className="ecosystem-links mt-16">
                        <a href="https://fixpix.in" target="_blank" className="ecosystem-link">FixPix</a>
                        <span className="dot">•</span>
                        <a href="https://parthstudio.in" target="_blank" className="ecosystem-link">Parth Studio</a>
                        <span className="dot">•</span>
                        <a href="https://parthbuilds.dev" target="_blank" className="ecosystem-link">Parth Builds</a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};
