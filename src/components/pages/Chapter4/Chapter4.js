import React from 'react';
import { Container } from 'react-bootstrap';
import '../Chapter.css';
import AudioPlayer from '../../AudioPlayer';

function Chapter4() {
    return (
        <div className="romantic-chapter-container">
        <AudioPlayer 
            src="/music/chapter4/Dido - White flag.mp3"
            title="Dido - White flag"
            autoPlay={false}
            loop={true}
            volume={0.3}
        />
        <Container>
            <h1 className="romantic-chapter-title">Chapter 4</h1>
            
            {/* Chapter header image */}
            <div className="romantic-chapter-header-image">
                <img 
                    src="/images/cards/unbound_future.jpg" 
                    alt="Chapter 4 - Unbound Future" 
                    className="romantic-chapter-image"
                />
            </div>
            
            <div className="romantic-cards-container">
                {/* Example card with text content */}
                <div className="romantic-card">
                    <div className="romantic-card-content">
                        <h3 className="romantic-card-title">The Farewell</h3>
                        <p className="romantic-card-text">
                            No quería llegar a este capítulo, siento que lo que estoy por contar sucedió en una época donde todos los anteriores capítulos nunca pasaron.
                            <br/>
                            Te fuiste, como ya sabíamos que iba a pasar, ese momento estuvo presente desde el día en que empezamos a salir y aunque uno pensaría que nos preparamos para ello,
                            no creo que nada nos hubiera preparado lo suficiente.
                            <br/>
                            Te marchaste a trabajar a Disney, tu sueño, siempre pensé que iba a ser una verdadera chinga ya que no tengo a Disney en el mejor concepto como empresa y a pesar de ello 
                            ni siquiera logré atinarle, porque aunque estoy seguro de que para ti fue una verdadera chinga, superó por mucho lo que yo pensé.
                            <br/>
                            En este tiempo, tu la pasabas mal con tener que trabajar, estar lejos de casa, tener una roomie de la mierda, no sabes cuanto odié a esa morra, estar alejados y no coincidir tanto en tiempos.
                            <br/>
                            En este tiempo, perdimos de vista lo que necesitábamos del otro, dejamos de escucharnos. Yo no me sentía escuchado y sentía que cualquier cosa que yo quisiera o pidiera no era tomada en cuenta.
                            Y ahora sé que tú te sentías de una forma muy parecida, dejé de decir cosas lindas para reafirmar que te amaba. Me gustaría decirte que para mí, poco a poco esa llama sentía que se apagaba, que esa falta de comunicación que teníamos me estaba asfixiando.
                            Que había momentos donde escuchar que me escribías me hacía feliz y otros en los que sentía que era tan constante que me volvía loco.
                            <br/>
                            <br/>
                            Finalmente, después de un par de discusiones que tú y yo conocemos decidí que lo mejor era terminar, desde mi perspectiva era lo más sano, cada que platicábamos era una discusión que aparte nunca se resolvía, 
                            solo dábamos vueltas al asunto sin realmente resolver nada.
                            Lamento que haya sido así, la pasé mal, quería saber de ti, quería que me siguieras escribiendo, quería que contaras conmigo como amigo, no simplemente dejarte a tu suerte.
                            Pero al parecer todo lo que hacía por querer quedar bien contigo solo te enojó, darte mi boleto del concierto, escribirte para saber cómo estabas y yo notaba este enojo (que no digo que estuvieras mal) así que preferí darte tu espacio para sanar, al menos así lo veía yo.
                            Tu espacio para mentar madres de mí, para pensar si querías que fuéramos amigos o nada.
                            Los meses pasaron y solo podía saber de ti a través de lo poco que compartías, imaginándome por lo que pasabas, viendo historias de amigos tuyos esperando ilusamente verte, saber algo de ti porque ese silencio me estaba matando.
                            <br/>
                            <br/>
                            Después de mucho tiempo regresaste y una parte de mí pensó que querrías recuperar tus cosas y cerrar el tema, sin embargo, ese mensaje nunca llegó. Dejé pasar un tiempo y te escribí para regresarte tus cosas, lo cual sí me importaba hacer, no porque quisiera mis cosas de vuelta, sino porque sentía que no podría continuar
                            de otra forma, una parte de mí quería verte y hablar contigo, saber si me odiabas, si seguías enojada conmigo, si querías ser mi amiga o no. Pero nuevamente mi mensaje solo sonó mal para ti, como una forma insensible de pedir las cosas. Me había resignado, nunca más volveríamos a hablar, no sabría nada más de ti, me rompía la idea de ello pero
                            quería aceptarlo lo mejor posible, fingir que en todo este tiempo nunca pensé en ti, en escribirte y ver cómo estás, en compartir contigo algún meme que veía que sabía te gustaría, buscar petshops y pensar si comprártelos o ya los tendrías.
                            <br/>
                            <br/>
                            En fin, así imaginé que todo resultaría. El tiempo pasó y un día me encontraba jugando tenis de mesa y recibí un mensaje tuyo. Me sorprendió mucho, empecé a buscar para intentar localizarte pero no fue hasta que salí del salón que te vi. No sabía cómo actuar así que intenté comportarme normal para no incomodarte, con miedo a que estuvieras enojada conmigo.
                            Para mi sorpresa fuiste tan cálida como siempre, platicamos un buen rato, me contaste más cosas de tu viaje, algunas no las sabía algunas simplemente las adiviné. Pero verte me llenó de felicidad. Lamento mucho el cómo las cosas se dieron durante ese tiempo y a la vez siento que sin ello seríamos los mismos, los mismos problemas, las mismas personas cometiendo nuevos errores.
                            No sé qué nos depare en el futuro, no sé si estaremos juntos o no pero te puedo decir que nada es igual, siento que no he cambiado y sin embargo no soy el mismo de antes. En estos días hemos podido hablar de tantas cosas que nos gustaban y de otras que sabemos que nos equivocamos, hemos platicado de qué podemos hacer para solucionarlo, hemos expresado cómo nos sentimos y qué nos hace sentir ciertas situaciones que antes simplemente dábamos por hecho lo que el otro creía o sentía erróneamente.
                            No sé si algún día me perdones por haberte hecho pasar por esa cruel etapa. Sé que yo siempre te amaré y querré estar para ti, sabiendo las cosas que ahora sé de ti, teniendo nuevas herramientas y conocimientos para estar bien juntos.
                        </p>
                    </div>
                </div>

                {/* Example card with image */}
                <div className="romantic-card">
                    <div className="romantic-card-content">
                        <h3 className="romantic-card-title">Art</h3>
                        <div className="romantic-image-container">
                            <img 
                                src="/images/cards/flower.png" 
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
                            <img src="/images/cards/sky.jpg" alt="Special Moment" className="romantic-card-image" />
                            Pensé mucho en qué agregar aquí, "un momento especial" como en cada capítulo, pero esta página en particular es más una historia que narra una reflexión personal y creo que esta imagen describe muy bien eso.
                            Una imagen borrosa pero hermosa, de la misma manera que fue ese período, una vista borrosa de algo que amaba y dejé ir, pero que nunca dejó de ser algo lindo, nunca dejó de ser algo que anhelara.
                        </p>
                    </div>
                </div>

                {/* Example quote card */}
                <div className="romantic-card">
                    <div className="romantic-card-content">
                        <h3 className="romantic-card-title">The Card</h3>
                        <blockquote className="romantic-quote">
                            Unbound Future - A veces el tiempo de hacer las cosas no es el indicado, a veces nos sentimos perdidos y el destino se vuelve incierto.
                            <br/>
                            <br/>
                            "If the old ways of doing things are not working out, learning a new method or approach may get results."
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

export default Chapter4;