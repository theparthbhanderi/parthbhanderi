import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Card } from '../components/ui/Card';
import './About.css';

export const About: React.FC = () => {
    return (
        <div className="about-page">
            <Navbar />

            <section className="section pt-200">
                <div className="container">
                    <div className="process-header">
                        <h1 className="section-title">About Me</h1>
                        <p className="section-desc">
                            Builder. Engineer. Founder.
                        </p>
                    </div>

                    <div className="process-steps-vertical">
                        {/* 1. Intro */}
                        <div className="process-card-row">
                            <div className="step-indicator">
                                <span className="step-num">01</span>
                                <div className="step-line"></div>
                            </div>
                            <Card className="process-card-content">
                                <h2>The Origin</h2>
                                <div className="process-outcome">
                                    <strong>Identity:</strong> Student engineer turning ideas into products.
                                </div>
                                <p>
                                    I’ve always been obsessed with how things work. That curiosity evolved
                                    into a drive to build. I started as a student hacking together scripts,
                                    and now I architect serious digital products. I view code not just as
                                    syntax, but as a tool for leverage and creation.
                                </p>
                            </Card>
                        </div>

                        {/* 2. Why I Build */}
                        <div className="process-card-row">
                            <div className="step-indicator">
                                <span className="step-num">02</span>
                                <div className="step-line"></div>
                            </div>
                            <Card className="process-card-content">
                                <h2>Why I Build</h2>
                                <div className="process-outcome">
                                    <strong>Drive:</strong> Curiosity, problem-solving, and craftsmanship.
                                </div>
                                <p>
                                    There is a distinct joy in bringing something new into the world.
                                    I build because I want to solve real problems, not just hypothetical ones.
                                    I care deeply about the craft—the feel of an interaction, the cleanliness
                                    of the architecture, and the sustainability of the system.
                                </p>
                            </Card>
                        </div>

                        {/* 3. Values */}
                        <div className="process-card-row">
                            <div className="step-indicator">
                                <span className="step-num">03</span>
                                <div className="step-line"></div>
                            </div>
                            <Card className="process-card-content">
                                <h2>Core Values</h2>
                                <div className="process-outcome">
                                    <strong>Principles:</strong> Quality, Clarity, Scalability.
                                </div>
                                <p>
                                    I believe in long-term thinking. I don't chase trends for the sake of it.
                                    I value clarity over cleverness, and I build systems designed to last.
                                    Whether it's a small utility or a large platform, the standard of quality
                                    remains negotiable? No. Non-negotiable.
                                </p>
                            </Card>
                        </div>

                        {/* 4. Today */}
                        <div className="process-card-row">
                            <div className="step-indicator">
                                <span className="step-num">04</span>
                                <div className="step-line"></div>
                            </div>
                            <Card className="process-card-content">
                                <h2>Today</h2>
                                <div className="process-outcome">
                                    <strong>Focus:</strong> FixPix, Public Building, and Team Growth.
                                </div>
                                <p>
                                    Right now, I’m focused on scaling <strong>FixPix.in</strong>,
                                    continuing to document my engineering journey on <strong>Parth Builds</strong>,
                                    and helping other founders/teams build better software through <strong>Parth Studio</strong>.
                                    I am building in public, sharing both the wins and the lessons.
                                </p>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};
