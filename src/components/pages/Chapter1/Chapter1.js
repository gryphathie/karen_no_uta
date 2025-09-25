import React from 'react';
import { Container } from 'react-bootstrap';
import '../Chapter.css';
import AudioPlayer from '../../AudioPlayer';

function Chapter1() {
    return (
        <div className="romantic-chapter-container">
            <AudioPlayer 
                src="/music/chapter1/The Driver Era - A Kiss.mp3"
                title="The Driver Era - A Kiss"
                autoPlay={false}
                loop={true}
                volume={0.3}
            />
            <Container>
                <h1 className="romantic-chapter-title">Chapter 1</h1>
                
                {/* Chapter header image */}
                <div className="romantic-chapter-header-image">
                    <img 
                        src="/images/cards/virtuous_heart.jpg" 
                        alt="Chapter 1 - The Beginning" 
                        className="romantic-chapter-image"
                    />
                </div>
                
                <div className="romantic-cards-container">
                    {/* Example card with text content */}
                    <div className="romantic-card">
                        <div className="romantic-card-content">
                            <h3 className="romantic-card-title">The Beginning</h3>
                            <p className="romantic-card-text">
                                Ufff empezamos de la manera más loca, por medio de un mensaje de una desconocida por Messenger.
                                Una desconocida a la que se me recomendo no contestarle, sin embargo, algo me dijo que esta pequeña personita era especial y vaya que tenía razón.
                                <br/>
                                <br/>
                                Pasaron un par de días mientras nos escribiamos hasta que finalmente llego el día de salir a nuestra cita, los nervios me poseían y al verte bajar de tu coche
                                solo podía pensar en lo linda que te veías, pero mejor aun cuando escuche tu voz me pareció el sonido más dulce que había escuchado. Pasamos un tiempo platicando hasta que decidimos
                                ir por un tiramisu que no estuviera podrido. Recuerdo que hablamos por horas hasta que se hizo de noche. Fue una gran primera cita.
                                <br/>
                                <br/>
                                Una cita más en Dominica jugando preguntas para conocernos mejor y llegamos a un, ¿Quiere ir a ver las luciernagas conmigo? Por supuesto que quería, por Dios no perdería una oportunidad así.
                                Un gran viaje los dos juntos, viendo un paisaje hermoso cubirtos por la oscuridad de la noche en el bosque, viendo los pequeños destellos de las luciernagas y aun así en lo único que podía pensar era en besarte en ese momento.
                                Pensaba en el calor de tus manos con las mías, lo mucho que me gustaba ver tu sonrisa y la emoción de compartir un momento tan mágico juntos, parecía surreal que solo tres citas y estabamos en un lugar recondito pasando uno de los mejores días de mi vida.
                                <br/>
                                <br/>
                                Salimos al centro a platicar a buscar un "perfume" especial que buscabas, recuerdo qu dimos vueltas y vueltas por todo el centro y yo estaba euforico por que ibamos a todas partes agarrados de la mano.
                                Nada podía hacerme más feliz o al menos eso pense hasta que llegamos a platicar por horas en tu coche y mientras intentabas cobrarme una apuesta en las luciernagas decidí la grandiosa forma de pagarlo, un beso...
                                Un beso tan magico, parecía que todo iba maravilloso hasta que escuche "ya llegue a mi limite" jajajaja nunca en mi vida había escuchado eso, recuerdo pensar "woow será que beso tan mal?", hasta que me dijiste que querías otro.
                                Debo admitir que fue raro pero emocionante al mismo tiempo. Con el tiempo y más citas esto se volvió algo normal, algo de que reirnos y algo a que regresar emocionados.
                                <br/>
                                <br/>
                                Dos meses de citas increibles y finalmente llegamos al momento de pedir ser algo más, recuerdo que ese día me entregaste una carta al subirme a tu auto y no sabía si pedirtelo en ese momento, me asustaba que tu te me adelantaras.
                                Al final fuimos al autocinema a ver nuestra super romantica pelicula "Guerra Mundial Z" jajajajaja debo admitir que no era la clase de pelicula que quería para eso, pero no quería esperar más y en mi mente había todo un plan de como hacerlo y podría decir que casí se cumplio.
                                A mitad de la pelicula (en el break) decidiste ir al baño lo que me permitió arreglar el coche con unas rosas que había armado y una carta sellada esperando por tu respuesta.
                                Al regresar me diste tu respuesta a la pregunta que faltaba en la carta y así comenzamos nuestra aventura de la mano como novios.                    
                            </p>
                        </div>
                    </div>

                    {/* Example card with image */}
                    <div className="romantic-card">
                        <div className="romantic-card-content">
                            <h3 className="romantic-card-title">Art</h3>
                            <div className="romantic-image-container">
                                <img 
                                    src="/images/cards/medusa.jpg" 
                                    alt="Description" 
                                    className="romantic-card-image-big"
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
                                Sin duda nuestra hermosa cita en el bosque cubierto por las luces que las luciernagas nos proporcionaban mientras veía tu sonrisa resplandecer con ellas.
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

export default Chapter1;