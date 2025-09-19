import React from 'react';
import { Container } from 'react-bootstrap';
import '../Chapter.css';

function Home() {
    return (
        <Container>
            <h1 className="romantic-chapter-title">Mi Historia de amor con Karen</h1>
            <div className="romantic-card">
                    <div className="romantic-card-content">
                        <h3 className="romantic-card-title">The Reason</h3>
                        <p className="romantic-card-text-home">
                            Esta es una "carta" que relata mi historia de amor con Karen.
                            Esta carta cuenta desde mi punto de vista como se fue y a sido nuestra histori,
                            Como me sentí a lo largo en nuestra relacion.
                            Se que te gustan mucho las cartas escritas pero creo que tenía que hacerlo a mi manera,
                            para que fuera un esfuerzo sincero. Aun así intenté combinar lo escrito con lo digital.
                            Agregue canciones en cada capitulo, canciones que me hacen recordar momentos lindos de cada una de las historias
                            o que de alguna forma definen el como me sentía.
                        </p>                            
                        <p className="romantic-card-text-home">
                            Tal vez pensaras: Que raro que me hagan una app cuando una carta de 269 paginas era suficiente. 
                            Pero la verdad quise tomar algo que me contaste, dijiste que en Disney no tenías mis cartas para recordar lo que había escrito, 
                            tomando eso en consideración pense en hacer una app que puedas visitar en cualquier momento, en cualquier dispositivo y recordar 
                            los momentos lindos y dificiles que hemos pasados y si tu quieres seguir haciendo crecer esta pagina para tener mas memorias nuestras
                        </p>
                        <p className="romantic-card-text-home">
                            O y algo más, me tome enserio esto así que todo tiene un porque, imagenes, titulos, canciones, etc.
                            Un buen ejemplo es el titulo de la app, se que suena muy extraño pero viene del japones, intenta buscar su significado por "no uta" y despues escribelo con tu nombre.
                            Encontraras que tu nombre tiene un significado precioso.
                        </p>
                    </div>
                </div>
        </Container>
    );
}

export default Home;