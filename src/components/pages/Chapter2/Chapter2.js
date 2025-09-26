import React from 'react';
import { Container } from 'react-bootstrap';
import '../Chapter.css';
import AudioPlayer from '../../AudioPlayer';

function Chapter2() {
    return (
        <div className="romantic-chapter-container">
            <AudioPlayer 
                src="/music/chapter2/BORNS - Electric Love.mp3"
                title="BORNS - Electric Love"
                autoPlay={false}
                loop={true}
                volume={0.3}
            />
            <Container>
                <h1 className="romantic-chapter-title">Chapter 2</h1>
                
                {/* Chapter header image */}
                <div className="romantic-chapter-header-image">
                    <img 
                        src="/images/cards/travel.jpg" 
                        alt="Chapter 2 - The Travel" 
                        className="romantic-chapter-image"
                    />
                </div>
                
                <div className="romantic-cards-container">
                    {/* Example card with text content */}
                    <div className="romantic-card">
                        <div className="romantic-card-content">
                            <h3 className="romantic-card-title">The Travel</h3>
                            <p className="romantic-card-text">
                                En nuestra etapa de noviazgo sin duda destacaría que fuimos en muchas aventuras increíbles, algunas lejos otras cerca pero todas muy significativas, explorábamos el mundo de la mano.
                                Comenzamos regresando a Santa Rita, para "acampar" jajajaja pobres morros mecos que quisieron la dichosa experiencia de ir a un lugar tan bonito para acampar en un jardín. Sin embargo, ese no fue nuestro caso,
                                Rentamos la cabaña más linda que encontramos, con una hermosa vista al río que jugaba hermosamente con sus desniveles, sillones y balcones.
                                Recuerdo que pasamos los primeros momentos explorando el lugar, subiendo a puentes colgantes, acercándonos al río y tomándonos fotos en todo momento.
                                Pasamos nuestro grandioso viaje escuchando historias de terror y haciendo senderismo extremo, sin duda de mis mejores aventuras a tu lado.
                                <br/>
                                <br/>
                                En nuestro viajes también fuimos a Cancún, un día que de la nada me dijiste "deberíamos ir de vacaciones a Cancún" y por algún motivo me aventé a ello (a pesar de que no escogiste el hotel que yo dije :'v). Pasamos unas hermosas vacaciones
                                Mi trabajo no era tan demandante en esos días así que podíamos estar todo el día en la playa disfrutando del paisaje, la playa, la comida y nuestra hermosa compañía. Creo que de este viaje lo que más recuerdo fue tu forma de llevarme a hacer cosas nuevas
                                , pedimos prestado un kayak y nos adentramos en el mar a dar la vuelta. Fuimos a hacer esnórquel que a pesar de mis dudas y miedos fue una experiencia hermosa, vimos una tortuga (al parecer una barracuda también jajaja), mantarrayas, peces y estrellas de mar.
                                Pasamos una noche enfiestados en el hotel en su gran Neon Party, bailando y riendo.
                                O y como olvidar nuestras ricas comidas en el restaurante italiano, un desperdicio haber tomado tanto tiempo en darnos cuenta que era el único que valia la pena.
                                <br/>
                                <br/>
                                También fuimos a Six flags, debo admitir que cuando compramos los boletos meses antes estaba muy animado a ir pero al llegar recordé que mi miedo a las atracciones es mayor a mi valentía, aun así nos subimos a varias atracciones juntos y la pasé fantástico, sintiendo la adrenalina a tope.
                                En esos días conociste a mi Tía Maru y mi Tío Jorge jajaja grandes personas en mi vida, pero me emocionaba la idea de presentarte con ellos, para mí era un paso de que esto iba en serio, era algo más formal vaya.
                                <br/>
                                <br/>
                                Otro día en CDMX nos aventuramos a ir al acuario, debo decir que me estaba matando el dolor de estómago pero moría por ir juntos y ver todos los tipos de peces que había. No cambiaría ese día por nada.
                                <br/>
                                <br/>
                                Uhh y hablando de animales, como olvidar aquella ocasión que fuimos a Africam, vimos y olimos cosas horribles como a los pobres hipopótamos, pero también encontramos un montón de cosas divertidas, vimos Leones, Osos y por supuesto unas hermosas ardillas que iban y venían por doquier (más adelante se cumplió mi sueño de que las alimentáramos en CDMX).
                                Pasamos por el mariposario, recuerdo que una pequeña mariposa se posó en ti, también alimentamos a los periquitos!! sin duda te amaban.
                                <br/>
                                <br/>
                                Nuestro último viaje, Cabañas en el bosque, sin duda la mejor parte de todo fue poder desconectarnos juntos del mundo, nada de señal, solo árboles y las estrellas de noche.
                                Teníamos una encantadora chimenea en nuestro cuarto, adoraba el momento en que teníamos que cenar y calentar nuestra comida cerca del fuego, mientras nos turnábamos de lugar para cocinar.
                                Subimos a la cascada (nos encontramos a Caro lol) y descubrimos a unos pequeños pecesitos que vivian en la parte alta del río, encantadores y solitarios, los observamos por un buen rato en lo que cada quien armaba un ramo de flores con lo que encontramos para ver quien hacía el mejor ramo (spoiler, me ganaste por poco).
                                Y no olvidemos a los pequeños conejitos que nos encontramos en nuestro camino, encantadores y escurridizos, pero hermosos y tiernos como tu.
                            </p>
                        </div>
                    </div>

                    {/* Example card with image */}
                    <div className="romantic-card">
                        <div className="romantic-card-content">
                            <h3 className="romantic-card-title">Art</h3>
                            <div className="romantic-image-container">
                                <img 
                                    src="/images/cards/zelda.png" 
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
                            <img src="/images/cards/cuarto.jpg" alt="Special Moment" className="romantic-card-image" />
                            </p>
                        </div>
                    </div>

                    {/* Example quote card */}
                    <div className="romantic-card">
                        <div className="romantic-card-content">
                            <h3 className="romantic-card-title">The Card</h3>
                            <blockquote className="romantic-quote">
                                The Travel - Una carta que representa a los espíritus libres que buscan explorar el mundo con emoción. Una carta que siento representó una gran parte de nuestro capítulo.
                                Viajamos y exploramos mientras nos divertíamos en el proceso creando recuerdos maravillosos.
                                <br/>
                                <br/>
                                "It's a new adventure with endless possibilities."
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

export default Chapter2;