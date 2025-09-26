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
                    src="/images/cards/fruit.jpg" 
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
                            En este capítulo me gustaría recordar nuestras citas convencionales, aquellas salidas pequeñas pero lindas. Porque aunque eran parte de nuestro día a día no me gustaría
                            que pasaran desapercibidas.
                            <br/>
                            <br/>
                            Veamos, empecemos por las veces que nos poníamos a cocinar, recuerdo con mucho cariño verte concentrada cocinando. Siempre he pensado que cocines lo que cocines siempre te queda delicioso,
                            desde juntar para hacer roles de canelas uhhh y aquella vez que preparamos pizza y nos quedó riquísima.
                            <br/>
                            <br/>
                            También aquellas citas en el parque, preparando y llevando un chingo de comida que nunca nos lográbamos terminar. Acostados en el pasto abrazados, disfrutando el día y de nuestro amor.
                            <br/>
                            <br/>
                            O nuestras citas en restaurantes, recuerdo la vez que fuimos a Satoua y dijimos que era nuestro aniversario, nos pusieron un letrerito lindo y tú te arreglaste mucho para nuestra cita, recuerdo que te veías bellísima.
                            Uff la vez que fuimos por una exquisita pizza de pistache o nuestras salidas para ir por un rico Taro, ni siquiera puedo llevar la cuenta de a cuántos lugares hemos ido para probar taros, fríos, calientes, con yogurth, con tapioca, con un tiramisú qlero del Bellecour jajaja.
                            <br/>
                            <br/>
                            Hubo citas pequeñas pero más complejas, como la vez que nos casamos en el autocinema, finalmente viendo una película romántica y no un apocalipsis zombie
                            Hey! y qué tal el semestre que tomamos cerámica juntos, haciendo cositas lindas al lado del otro, creando cosas románticas y creativas.
                            <br/>
                            <br/>
                            Y qué decir de nuestras incontables citas buscando Petshops y cosas de Sonic/Shadow, yendo a cada súper de Puebla o buscando en los sapos o bazares de antigüedades
                            <br/>
                            Creo que hay muchas citas que tal vez estoy omitiendo, pero en esta sección quería plasmar aquellos momentos lindos y expresar que pequeños o no, eran de las mejores partes de mis días.
                        </p>
                    </div>
                </div>

                {/* Example card with image */}
                <div className="romantic-card">
                    <div className="romantic-card-content">
                        <h3 className="romantic-card-title">Art</h3>
                        <div className="romantic-image-container">
                            <img 
                                src="/images/cards/espeon.png" 
                                alt="Description" 
                                className="romantic-card-image"
                            />
                        </div>
                        <p className="romantic-card-text">
                            
                        </p>
                    </div>
                </div>

                {/* Example special card with heart decoration */}
                <div className="romantic-card romantic-special-card">
                    <div className="romantic-card-content">
                        <h3 className="romantic-card-title">Special Moment</h3>
                        <p className="romantic-card-text">
                            <img src="/images/gallery/coco4.jpg" alt="Special Moment" className="romantic-card-image" />
                        </p>
                    </div>
                </div>

                {/* Example quote card */}
                <div className="romantic-card">
                    <div className="romantic-card-content">
                        <h3 className="romantic-card-title">The Card</h3>
                        <blockquote className="romantic-quote">
                        Fruit (The Lovers) - Una carta que representa la unión así como la forma en que una relación se nutre.
                                <br/>
                                <br/>
                                "Just because things are opposites doesn't mean they don't belong together."
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
                        <img src="/images/cards/footer.png" alt="Footer" className="footer-image" />
                    </div>
                </div>
            </div>
        </Container>
    </div>
    );
}

export default Chapter3;