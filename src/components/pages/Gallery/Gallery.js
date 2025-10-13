import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import '../Chapter.css';
import AudioPlayer from '../../AudioPlayer';

function Gallery() {
    const [expandedCard, setExpandedCard] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Sample gallery data - you can replace this with your actual image data
    const galleryData = [
        {
            id: 1,
            title: "Travels",
            description: "Our travels together",
            images: [
                `${process.env.PUBLIC_URL}/images/gallery/rita1.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/rita2.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/rita3.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/rita4.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/rita5.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/campo1.JPG`,
                `${process.env.PUBLIC_URL}/images/gallery/campo2.JPG`,
                `${process.env.PUBLIC_URL}/images/gallery/campo3.JPG`,
                `${process.env.PUBLIC_URL}/images/gallery/campo5.JPG`,
                `${process.env.PUBLIC_URL}/images/gallery/bosque1.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/bosque2.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/mexico1.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/mexico2.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/mexico3.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/mexico4.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/mexico5.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/mexico6.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/mexico7.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/mexico8.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/mexico9.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/cancun1.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/cancun2.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/cancun3.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/cancun4.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/cancun5.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/cancun6.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/cancun7.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/cancun8.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/cancun9.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/cancun10.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/cancun11.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/italy1.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/italy2.jpg`,
            ]
        },
        {
            id: 2,
            title: "Adventures",
            description: "Our adventures together",
            images: [
                `${process.env.PUBLIC_URL}/images/gallery/acuario.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/acuario1.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/africam1.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/africam2.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/africam3.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/boda1.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/boda2.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/boda3.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/boda4.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/boda5.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/cumple.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/libro1.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/new_year.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/new_year2.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/New_year3.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/new_year4.jpg`,                
            ]
        },
        {
            id: 3,
            title: "Romantic",
            description: "Sweet moments together",
            images: [
                `${process.env.PUBLIC_URL}/images/gallery/satoua1.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/satoua2.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/grilia1.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/grilia2.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/grilia3.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/globo1.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/coco1.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/coco2.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/coco3.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/coco4.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/ceramica.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/bistro1.jpg`,
            ]
        },
        {
            id: 4,
            title: "Special",
            description: "Limited edition moments",
            images: [
                `${process.env.PUBLIC_URL}/images/gallery/karen1.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/karen2.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/karen4.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/pucca.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/tenis1.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/tenis2.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/video1.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/video2.jpg`,
                `${process.env.PUBLIC_URL}/images/gallery/video3.jpg`,
            ]
        }
    ];

    const handleCardClick = (cardId) => {
        setExpandedCard(expandedCard === cardId ? null : cardId);
    };

    const handleImageClick = (image, index) => {
        setSelectedImage(image);
        setCurrentImageIndex(index);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
        setCurrentImageIndex(0);
    };

    const handlePreviousImage = () => {
        if (expandedCard) {
            const currentCard = galleryData.find(card => card.id === expandedCard);
            const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : currentCard.images.length - 1;
            setCurrentImageIndex(newIndex);
            setSelectedImage(currentCard.images[newIndex]);
        }
    };

    const handleNextImage = () => {
        if (expandedCard) {
            const currentCard = galleryData.find(card => card.id === expandedCard);
            const newIndex = currentImageIndex < currentCard.images.length - 1 ? currentImageIndex + 1 : 0;
            setCurrentImageIndex(newIndex);
            setSelectedImage(currentCard.images[newIndex]);
        }
    };

    const handleKeyDown = (e) => {
        if (selectedImage) {
            if (e.key === 'Escape') {
                handleCloseModal();
            } else if (e.key === 'ArrowLeft') {
                handlePreviousImage();
            } else if (e.key === 'ArrowRight') {
                handleNextImage();
            }
        }
    };

    useEffect(() => {
        if (selectedImage) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage, currentImageIndex]);

    return (
        <div className="romantic-chapter-container">
            <AudioPlayer 
                src={`${process.env.PUBLIC_URL}/music/shared/Dreams of absolution.mp3`}
                title="Dreams of absolution"
                autoPlay={false}
                loop={true}
                volume={0.3}
            />
            <Container>
                <h1 className="romantic-chapter-title">Gallery</h1>
                <p className="romantic-card-text-home">
                    Click on any card below to reveal the precious memories we've captured together. 
                    Each collection tells a unique part of our story.
                </p>
                
                <div className="gallery-cards-container">
                    {galleryData.map((card) => (
                        <div 
                            key={card.id} 
                            className={`gallery-card ${expandedCard === card.id ? 'expanded' : ''}`}
                            onClick={() => handleCardClick(card.id)}
                        >
                            <div className="gallery-card-header">
                                <h3 className="gallery-card-title">{card.title}</h3>
                                <p className="gallery-card-description">{card.description}</p>
                                <div className="gallery-card-arrow">
                                    {expandedCard === card.id ? '▼' : '▶'}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {expandedCard && (
                    <div className="gallery-fullpage-content">
                        <div className="gallery-fullpage-header">
                            <h2 className="gallery-fullpage-title">
                                {galleryData.find(card => card.id === expandedCard)?.title}
                            </h2>
                            <p className="gallery-fullpage-description">
                                {galleryData.find(card => card.id === expandedCard)?.description}
                            </p>
                            <button 
                                className="gallery-close-btn"
                                onClick={() => setExpandedCard(null)}
                            >
                                ✕ Close Gallery
                            </button>
                        </div>
                        <div className="gallery-fullpage-images">
                            {galleryData.find(card => card.id === expandedCard)?.images.map((image, index) => (
                                <div 
                                    key={index} 
                                    className="gallery-fullpage-image-container"
                                    onClick={() => handleImageClick(image, index)}
                                >
                                    <img 
                                        src={image} 
                                        alt={`${galleryData.find(card => card.id === expandedCard)?.title} - Image ${index + 1}`}
                                        className="gallery-fullpage-image"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Image Modal */}
                {selectedImage && (
                    <div className="gallery-modal-overlay" onClick={handleCloseModal}>
                        <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="gallery-modal-close" onClick={handleCloseModal}>
                                ✕
                            </button>
                            <button className="gallery-modal-nav gallery-modal-prev" onClick={handlePreviousImage}>
                                ‹
                            </button>
                            <button className="gallery-modal-nav gallery-modal-next" onClick={handleNextImage}>
                                ›
                            </button>
                            <img 
                                src={selectedImage} 
                                alt={`Gallery Image ${currentImageIndex + 1}`}
                                className="gallery-modal-image"
                            />
                            <div className="gallery-modal-info">
                                <span className="gallery-modal-counter">
                                    {currentImageIndex + 1} / {galleryData.find(card => card.id === expandedCard)?.images.length}
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </Container>
        </div>
    );
}

export default Gallery;