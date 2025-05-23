// src/components/Portfolio.js
import React from "react";
import './Portfolio.css';
import "../App.css";

const Portfolio = () => {
    const projects = [
        {
            title: "Randevu Takip Uygulaması",

            description:
                "Kullanıcıların randevularını kolayca oluşturup yönetebileceği modern bir takip uygulaması.",
            github: "https://github.com/cerensarkun/randevuuygulama.git",
        },
        {
            title: "Soru Bankası Uygulaması",
            description:
                "Öğrenciler ve öğretmenler için özelleştirilebilir testler oluşturulabilen interaktif bir platform.",
            github: "https://github.com/cerensarkun/sorubankas-.git",

        },
        {
            title: "Word Benzeri Metin Düzenleyici",
            description:
                "Gerçek zamanlı biçimlendirme seçenekleri sunan metin düzenleme ve belge oluşturma uygulaması.",
            github: "https://github.com/cerensarkun/word.git",

        },
        {
            title: "Kişisel Portfolyo Web Sitesi",
            description:
                "Bu gezdiğiniz siteyi kendim React ile oluşturdum. Tasarımı, animasyonları ve responsive yapıyı ben kodladım.",
            github: "https://github.com/cerensarkun/my-personal-portfolio",

        },
    ];

    return (
        <section id="portfolio" className="section portfolio-section">
            <div className="content-box">
                <h2 className="section-title">Projelerim</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                GitHub’a Git
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
