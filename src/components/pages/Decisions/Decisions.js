import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import '../Chapter.css';
import AudioPlayer from '../../AudioPlayer';

function Decisions() {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const decisionCards = [
        {
            id: 1,
            title: "Choice 1",
            description: "Take a time/ no continue together",
            image: "/images/cards/time.jpg",
            videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_1" // Replace with your YouTube video ID
        },
        {
            id: 2,
            title: "Choice 2", 
            description: "Stay together forever",
            image: "/images/cards/eternal_flame.jpg",
            videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID_2" // Replace with your YouTube video ID
        }
    ];

    const handleCardClick = (card) => {
        setSelectedVideo(card);
    };

    const handleCloseVideo = () => {
        setSelectedVideo(null);
    };

    return (
        <div className="romantic-chapter-container">
            <Container>
                <h1 className="romantic-chapter-title">Decisions</h1>
                <p className="romantic-card-text-home">
                    Choose your path and see where it leads. Each decision contains a different message for you my love.
                </p>
                
                <div className="decisions-cards-container">
                    {decisionCards.map((card) => (
                        <div 
                            key={card.id} 
                            className="decision-card"
                            onClick={() => handleCardClick(card)}
                        >
                            <div className="decision-card-image-container">
                                <img 
                                    src={card.image} 
                                    alt={card.title}
                                    className="romantic-chapter-image"
                                    onError={(e) => {
                                        e.target.src = "https://via.placeholder.com/300x200/f0e6e6/d4a5a5?text=Choice+" + card.id;
                                    }}
                                />
                            </div>
                            <div className="decision-card-content">
                                <h3 className="decision-card-title">{card.title}</h3>
                                <p className="decision-card-description">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Video Modal */}
                {selectedVideo && (
                    <div className="video-modal-overlay" onClick={handleCloseVideo}>
                        <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="video-modal-close" onClick={handleCloseVideo}>
                                ✕
                            </button>
                            <div className="video-modal-header">
                                <h3 className="video-modal-title">{selectedVideo.title}</h3>
                                <p className="video-modal-description">{selectedVideo.description}</p>
                            </div>
                            <div className="video-container">
                                <iframe
                                    src={selectedVideo.videoUrl}
                                    title={selectedVideo.title}
                                    className="video-player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                )}
            </Container>
        </div>
    );
}

export default Decisions;