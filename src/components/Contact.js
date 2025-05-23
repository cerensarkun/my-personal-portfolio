import React from 'react';
import { FaGithub, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-section" id="iletisim">
            <h2>İletişim</h2>
            <p>Aşağıdaki formu doldurarak ya da sosyal medya hesaplarımdan bana ulaşabilirsiniz.</p>

            <form className="contact-form">
                <input type="text" placeholder="Adınız Soyadınız" required />
                <input type="email" placeholder="E-posta Adresiniz" required />
                <textarea placeholder="Mesajınız" rows="5" required></textarea>
                <button type="submit">Gönder</button>
            </form>

            <div className="contact-icons">
                <a href="https://github.com/cerensarkun" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://instagram.com/cerensarkun" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://twitter.com/cerensarkun" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>
                <a href="mailto:csarkun@hotmail.com">
                    <FaEnvelope />
                </a>
            </div>
        </div>
    );
};

export default Contact;
