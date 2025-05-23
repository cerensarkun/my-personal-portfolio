import React from 'react';
import './HeroSection.css';
import './HeroSection.css';

import profileImage from '../assets/profile.jpg'; // kendi görselini buraya koy

function HeroSection() {
    return (
        <div className="hero">
            <div className="left">
                <img src={profileImage} alt="Profile" className="profile-image" />
            </div>
            <div className="right">
                <h1>Merhaba!</h1>
                <h2>Ben Kimim?</h2>
                <p>
                    Merhaba! Ben 21 yaşında, Balıkesir Üniversitesi'nde Bilgisayar Mühendisliği 2. sınıf öğrencisiyim.
                    Yazılım geliştirme, web tasarımı ve teknolojiyi yakından takip etmekten keyif alıyorum.
                    Kendimi sürekli geliştirerek gelecekte sektöre katkı sağlayacak projelere imza atmak istiyorum.
                </p>
                <div className="buttons">
                    <div className="hero-buttons">
                        <a href="#skills" className="btn resume">Yeteneklerim</a>
                        <a href="#portfolio" className="btn projects">Projelerim</a>
                        <a href="#contact" className="btn contact">İletişim</a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HeroSection;
