import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import './Contact.css';

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you. I will be in touch shortly.');
    };

    return (
        <div className="contact-page">
            <Navbar />

            <section className="contact-hero section pt-200">
                <div className="container">
                    <div className="contact-layout">
                        {/* Left Side: Intro */}
                        <div className="contact-intro">
                            <h1 className="contact-title">Connect</h1>
                            <p className="contact-desc">
                                Open to meaningful conversations. <br />
                                I value collaboration over noise.
                            </p>

                            <div className="trust-notes">
                                <div className="trust-item">
                                    <h4>Inquiries</h4>
                                    <p>Available for consulting and speaking.</p>
                                </div>
                                <div className="trust-item">
                                    <h4>Builders</h4>
                                    <p>Always happy to chat with fellow engineers.</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="contact-form-wrapper">
                            <Card className="contact-form-card">
                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="you@email.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            placeholder="What's on your mind?"
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>

                                    <div className="form-actions">
                                        <Button type="submit" size="lg" className="full-width">
                                            Send Message
                                        </Button>
                                        <p className="form-footer">
                                            Part of the Parth product ecosystem.
                                        </p>
                                    </div>
                                </form>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};
