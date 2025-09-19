import React from 'react';
import { Container } from 'react-bootstrap';
import '../Chapter.css';
import AudioPlayer from '../../AudioPlayer';

function Chapter3() {
    return (
        <div className="romantic-chapter-container">
        <AudioPlayer 
            src="/music/chapter3/Taylor Swift - Lover.mp3"
            title="Taylor Swift - Lover"
            autoPlay={false}
            loop={true}
            volume={0.3}
        />
        <Container>
            <h1 className="romantic-chapter-title">Chapter 3</h1>
            
            {/* Chapter header image */}
            <div className="romantic-chapter-header-image">
                <img 
                    src="/images/chapter3/header-image.jpg" 
                    alt="Chapter 3 - The Lovers" 
                    className="romantic-chapter-image"
                />
            </div>
            
            <div className="romantic-cards-container">
                {/* Example card with text content */}
                <div className="romantic-card">
                    <div className="romantic-card-content">
                        <h3 className="romantic-card-title">The Lovers</h3>
                        <p className="romantic-card-text">
                            Citas juntos, ir a comer con mis tios, salidas a jugar juegos con mis amigos
                            Cocinar juntos, Casarnos en el autocinema, torneos de pingpong, Karaoke con sus amigos.
                            Ceramica juntos, buscar petshops, buscar cosas de Sonic, Cumpleaños, Año nuevo.
                        </p>
                    </div>
                </div>

                {/* Example card with image */}
                <div className="romantic-card">
                    <div className="romantic-card-content">
                        <h3 className="romantic-card-title">A Memory</h3>
                        <div className="romantic-image-container">
                            <img 
                                src="/path/to/your/image.jpg" 
                                alt="Description" 
                                className="romantic-card-image"
                            />
                        </div>
                        <p className="romantic-card-text">
                            Fotos de momentos lindos de esos días
                        </p>
                    </div>
                </div>

                {/* Example special card with heart decoration */}
                <div className="romantic-card romantic-special-card">
                    <div className="romantic-card-content">
                        <h3 className="romantic-card-title">Special Moment</h3>
                        <p className="romantic-card-text">
                            Momento más iconicos de esas citas
                        </p>
                    </div>
                </div>

                {/* Example quote card */}
                <div className="romantic-card">
                    <div className="romantic-card-content">
                        <h3 className="romantic-card-title">A Quote</h3>
                        <blockquote className="romantic-quote">
                            Referencia bonita escrita por mi, un poema o lineas lindas.
                        </blockquote>
                    </div>
                </div>
            </div>

            {/* Section divider */}
            <div className="romantic-section-divider"></div>

            {/* Additional content section */}
            <div className="romantic-cards-container">
                <div className="romantic-card romantic-footer-card">
                    <div className="romantic-card-content">
                        <h3 className="romantic-card-title">*Footer*</h3>
                        <p className="romantic-card-text">
                            Agregar footer de rosa
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    </div>
    );
}

export default Chapter3;